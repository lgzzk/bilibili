<template>
  <header-bar class="relative" style="color: #18191c"/>
  <div class="flex justify-center items-center whitespace-pre-line">
    <div class="w-fit min-w-[1080px]">
      <video-info :video-view="videoView"></video-info>
      <video
          ref="video"
          :src="videoSrc"
          class="w-[784px] h-[441px] bg-black"
          loop controls muted autoplay preload="auto"></video>
      <span class="h-[300px]">{{ videoView?.desc }}</span>
    </div>
    <div>
      <up-info v-if="videoView" :owner="videoView?.owner"/>
    </div>
  </div>
</template>


<script setup lang="ts">
import {getVideoPlayer, getVideoView, VideoView} from "@/api/video.ts";
import {ref} from "vue";
import {getRange, setSourceBuffer} from "@/api/play.ts";
import HeaderBar from "@/pages/index/cmp/HeaderBar.vue";
import VideoInfo from "@/pages/video/cmp/VideoInfo.vue";
import UpInfo from "@/pages/video/cmp/UpInfo.vue";

const videoView = ref<VideoView | null>(null)
const props = defineProps({bvid: String})
const video = ref<HTMLVideoElement | null>(null)
const videoSrc = ref()
const mediaSource = new MediaSource()


getVideoView(props.bvid!).then(async data => {
  videoView.value = data
  console.log(data)
  document.title = data.title + '_哔哩哔哩_bilibili'

  let videoPlayer = await getVideoPlayer(data);
  let videoList = videoPlayer.dash.video.filter(item => {
    let url = new URL(item.baseUrl)
    return !item.codecs.includes('hev') && url.pathname.startsWith('/v1')
  })
  if (videoList.length === 0) videoList = videoPlayer.dash.video.filter(item => {
    return !item.codecs.includes('hev')
  })

  let videoDash = videoList[0]
  let audioDash = videoPlayer.dash.audio[2] || videoPlayer.dash.audio[1]

  videoSrc.value = URL.createObjectURL(mediaSource)
  mediaSource.addEventListener('sourceopen', handleSourceOpen)

  video.value?.addEventListener('error', (event) => {
    console.error('Video error occurred:', event)
  });

  async function handleSourceOpen() {
    let initSize = 300 * 1024
    let videoMaxRange = 0
    let audioMaxRange = 0
    let videoRange = 0
    let audioRange = 0

    const videoSourceBuffer = mediaSource.addSourceBuffer(`${videoDash.mimeType};codecs=${videoDash.codecs}`);
    const audioSourceBuffer = mediaSource.addSourceBuffer(`${audioDash.mimeType};codecs=${audioDash.codecs}`);

    [videoMaxRange, audioMaxRange] = await Promise.all([
      getRange(videoDash.baseUrl),
      getRange(audioDash.baseUrl)
    ])

    setSourceBuffer(videoDash.baseUrl, videoSourceBuffer, 0, initSize).then(
        data => videoRange = data)
    setSourceBuffer(audioDash.baseUrl, audioSourceBuffer, 0, initSize).then(
        data => audioRange = data)

    videoSourceBuffer.addEventListener('updateend', async () => {
      console.log(mediaSource.readyState, 'videoSourceBuffer')
      console.log(videoRange, videoMaxRange)
      if (videoRange < videoMaxRange) {
        videoRange += await setSourceBuffer(videoDash.baseUrl, videoSourceBuffer, videoRange, initSize + videoRange)
      }
    })

    audioSourceBuffer.addEventListener('updateend', async () => {
      console.log(mediaSource.readyState, 'audioSourceBuffer')
      console.log(audioRange, audioMaxRange)
      if (audioRange < audioMaxRange) {
        audioRange += await setSourceBuffer(audioDash.baseUrl, audioSourceBuffer, audioRange, initSize + audioRange)
      }
    })
  }
})

</script>

<style scoped>
</style>
