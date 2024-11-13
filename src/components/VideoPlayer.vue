<template>
  <video
      ref="video"
      :src="videoSrc"
      class="w-full h-[480px]  bg-black"
      loop controls autoplay muted preload="auto"></video>
</template>

<script setup lang="ts">
import {ref, watch} from "vue";
import {Audio, getVideoPlayer, Video, VideoView} from "@/api/video.ts";
import {getRange, setSourceBuffer} from "@/api/play.ts";

const videoSrc = ref()
const video = ref<HTMLVideoElement | null>(null)
const props = defineProps<{ videoView: VideoView | null }>()
let mediaSource: MediaSource | null = null
let videoDash: Video
let audioDash: Audio
let currentController: AbortController | null = null

watch(() => props.videoView, async (newVideoView) => {
  if (!newVideoView) return
  clearMediaSource()
  loadVideo(newVideoView)
}, {immediate: true})

async function loadVideo(videoView: VideoView) {
  let videoPlayer = await getVideoPlayer(videoView);
  let videoList = videoPlayer.dash.video.filter(item => {
    let url = new URL(item.baseUrl)
    return !item.codecs.includes('hev') && url.pathname.startsWith('/v1')
  })
  if (videoList.length === 0) videoList = videoPlayer.dash.video.filter(item => {
    return !item.codecs.includes('hev')
  })

  videoDash = videoList[0]
  audioDash = videoPlayer.dash.audio[2] || videoPlayer.dash.audio[1]

  mediaSource = new MediaSource()
  videoSrc.value = URL.createObjectURL(mediaSource)
  mediaSource.addEventListener('sourceopen', handleSourceOpen)

  video.value?.addEventListener('error', (event) => {
    console.error('Video error occurred:', event)
  });


}

async function handleSourceOpen() {

  if (!mediaSource) return

  let initSize = 300 * 1024
  let videoMaxRange = 0
  let audioMaxRange = 0
  let videoRange = 0
  let audioRange = 0

  currentController = new AbortController()
  const {signal} = currentController

  const videoSourceBuffer = mediaSource.addSourceBuffer(`${videoDash.mimeType};codecs=${videoDash.codecs}`);
  const audioSourceBuffer = mediaSource.addSourceBuffer(`${audioDash.mimeType};codecs=${audioDash.codecs}`);

  [videoMaxRange, audioMaxRange] = await Promise.all([
    getRange(videoDash.baseUrl),
    getRange(audioDash.baseUrl)
  ])

  setSourceBuffer(videoDash.baseUrl, videoSourceBuffer, 0, initSize, signal).then(
      data => videoRange = data)
  setSourceBuffer(audioDash.baseUrl, audioSourceBuffer, 0, initSize, signal).then(
      data => audioRange = data)

  videoSourceBuffer.addEventListener('updateend', async () => {
    // console.log(mediaSource?.readyState, 'videoSourceBuffer')
    console.log(videoRange, videoMaxRange, 'videoSourceBuffer')
    if (videoRange < videoMaxRange && video.value) {
      videoRange += await setSourceBuffer(
          videoDash.baseUrl,
          videoSourceBuffer,
          videoRange,
          initSize + videoRange, signal
      )
    }
  })

  audioSourceBuffer.addEventListener('updateend', async () => {
    // console.log(mediaSource?.readyState, 'audioSourceBuffer')
    console.log(audioRange, audioMaxRange, 'audioSourceBuffer')
    if (audioRange < audioMaxRange && video.value) {
      audioRange += await setSourceBuffer(
          audioDash.baseUrl,
          audioSourceBuffer,
          audioRange,
          initSize + audioRange,
          signal
      )
    }
  })
}

function clearMediaSource() {
  if (currentController) {
    currentController.abort()
    currentController = null
  }
  if (mediaSource) {
    console.log("clearMediaSource")
    mediaSource.endOfStream()
    mediaSource.removeEventListener('sourceopen', handleSourceOpen)
    videoSrc.value = null
    mediaSource = null
  }
}

</script>

<style scoped>

</style>
