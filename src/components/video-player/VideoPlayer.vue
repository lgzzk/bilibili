<template>
  <div class="w-full h-full bg-black relative">
    <video
        v-if="!videoView?.is_upower_exclusive"
        ref="video"
        :src="videoSrc"
        class="w-full h-full"
        loop controls autoplay muted preload="auto"></video>
    <Image v-else :src="videoView?.pic || ''"
           class="w-full h-full"/>
    <tips-toast
        v-if="videoView?.is_upower_exclusive"
        :video-play-config/>
  </div>
  <player-sending-bar :online-total/>
  <video-toolbar v-if="videoView" :stat="videoView.stat"/>
</template>

<script setup lang="ts">
import {onUnmounted, ref, watch} from "vue";
import {getOnlineTotal, getVideoPlayConfig, getVideoPlayer} from "@/api/video.ts";
import {getRange, setSourceBuffer} from "@/api/play.ts";
import Image from "@/components/Image.vue";
import {Audio, OnlineTotal, Video, VideoPlayConfig, VideoPlayer, VideoView} from "@/api/types/video.ts";
import TipsToast from "@/components/video-player/TipsToast.vue";
import PlayerSendingBar from "@/components/video-player/PlayerSendingBar.vue";
import VideoToolbar from "@/components/video-player/VideoToolbar.vue";

const props = defineProps<{ videoView: VideoView | null }>()
const videoSrc = ref()
const video = ref<HTMLVideoElement | null>(null)
const videoPlayer = ref<VideoPlayer | null>(null)
const videoPlayConfig = ref<VideoPlayConfig | null>(null)
const onlineTotal = ref<OnlineTotal | null>(null)
let mediaSource: MediaSource | null = null
let videoDash: Video
let audioDash: Audio
let currentController: AbortController | null = null
let onlineTotalTimer: NodeJS.Timeout

watch(() => props.videoView, async (newVideoView) => {
  if (!newVideoView) return
  clearMediaSource()
  clearOnlineTotalTimer()
  await loadVideo(newVideoView)
}, {immediate: true})

onUnmounted(() => {
  clearOnlineTotalTimer()
})

async function loadVideo(videoView: VideoView) {

  [
    videoPlayConfig.value,
    onlineTotal.value,
    videoPlayer.value
  ] = await Promise.all([
    !videoView.is_upower_exclusive ? Promise.resolve(null) : getVideoPlayConfig(videoView),
    videoView.is_upower_exclusive ? Promise.resolve(null) : getOnlineTotal(videoView),
    videoView.is_upower_exclusive ? Promise.resolve({} as VideoPlayer) : getVideoPlayer(videoView)
  ])

  if (videoView.is_upower_exclusive) return

  setOnlineTotalTimer(videoView)

  videoDash = getFilteredVideoList(videoPlayer.value.dash.video)[0]
  audioDash =
      videoPlayer.value.dash.audio[2] ||
      videoPlayer.value.dash.audio[1] ||
      videoPlayer.value.dash.audio[0]

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
    mediaSource.endOfStream()
    mediaSource.removeEventListener('sourceopen', handleSourceOpen)
    videoSrc.value = null
    mediaSource = null
  }
}

function getFilteredVideoList(videoDash: Video[]) {
  let videoList = videoDash.filter(item => {
    let url = new URL(item.baseUrl)
    return !item.codecs.includes('hev') && url.pathname.startsWith('/v1')
  })
  if (videoList.length === 0) videoList = videoDash.filter(item => {
    return !item.codecs.includes('hev')
  })

  return videoList
}

function setOnlineTotalTimer(videoView: VideoView) {
  onlineTotalTimer = setInterval(async () => {
    onlineTotal.value = await getOnlineTotal(videoView)
  }, 1000 * 30)
}

function clearOnlineTotalTimer() {
  onlineTotalTimer && clearInterval(onlineTotalTimer)
}
</script>

<style scoped>
</style>
