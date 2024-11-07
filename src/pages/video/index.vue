<template>
  <header-bar class="relative" style="color: #18191c"/>
  <div
      class="flex justify-center  max-w-[2540px] min-w-[1080px] px-[10px] mx-auto whitespace-pre-line">
    <div class="w-[771px] ">
      <video-info :video-view></video-info>
      <video
          ref="video"
          :src="videoSrc"
          class="w-full h-[480px]  bg-black"
          loop controls autoplay preload="auto"></video>
      <div class="text-wrap">{{ videoView?.desc }}</div>
    </div>
    <div class="w-[350px] content-right h-full ml-[30px]">
      <template v-if="videoView">
        <up-info :video-view/>
        <danmaku-list :video-view/>
        <related-list :bvid="videoView.bvid"/>
      </template>
    </div>
  </div>
</template>


<script setup lang="ts">
import {getVideoPlayer, getVideoView, VideoView} from "@/api/video.ts";
import {ref, watch} from "vue";
import {getRange, setSourceBuffer} from "@/api/play.ts";
import HeaderBar from "@/pages/index/cmp/HeaderBar.vue";
import VideoInfo from "@/pages/video/cmp/VideoInfo.vue";
import UpInfo from "@/pages/video/cmp/UpInfo.vue";
import DanmakuList from "@/pages/video/cmp/DanmakuList.vue";
import RelatedList from "@/pages/video/cmp/RelatedList.vue";

const videoView = ref<VideoView | null>(null)
const props = defineProps({bvid: String})
const video = ref<HTMLVideoElement | null>(null)
const videoSrc = ref()

watch(() => props.bvid, (newBvid) => {
  if (!newBvid) return
  initVideoView()
}, {immediate: true})


async function initVideoView() {
  const data = await getVideoView(props.bvid!)
  videoView.value = data
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

  const mediaSource = new MediaSource()

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
      // console.log(mediaSource.readyState, 'videoSourceBuffer')
      // console.log(videoRange, videoMaxRange)
      if (videoRange < videoMaxRange && video.value) {
        videoRange += await setSourceBuffer(videoDash.baseUrl, videoSourceBuffer, videoRange, initSize + videoRange)
      }
    })

    audioSourceBuffer.addEventListener('updateend', async () => {
      // console.log(mediaSource.readyState, 'audioSourceBuffer')
      console.log(audioRange, audioMaxRange)
      if (audioRange < audioMaxRange && video.value) {
        audioRange += await setSourceBuffer(audioDash.baseUrl, audioSourceBuffer, audioRange, initSize + audioRange)
      }
    })
  }
}

</script>

<style scoped>

@media (min-width: 1681px) {
  .content-right {
    @apply w-[411px]
  }
}

</style>
