<template>
  <div
      v-if="video.id"
      @mouseenter="isDanmaku = true"
      @mouseleave="isDanmaku = false"
      ref="videoCard"
      class="flex flex-col">
    <router-link
        @mouseenter="handlerMouseenter(video)"
        @mouseleave="handlerMouseleave"
        :to="`/video/${video.bvid}`"
        class="relative bg-[#f1f2f3]"
        target="_blank">
      <div class="pt-[56.25%]"></div>
      <div
          :style="{opacity: isMask ? 0 : 1}"
          class="absolute z-30 top-2 right-2 px-[3px] cursor-autoh-7 h-7 min-w-7 rounded-md bg-[#212121CC] flex items-center mask-transition">
        <watch-later-svg class="w-[22px] h-[22px] text-white"/>
      </div>
      <Image
          :style="{opacity: !isMask ? 0 : 1}"
          class="card-content z-10"
          :alt="video.title"
          :src="`${video.pic}@672w_378h_1c_!web-home-common-cover.avif`"/>
      <video
          :style="{opacity: isMask ? 0 : 1}"
          ref="videoRef"
          class="card-content bg-black"
          loop muted autoplay preload="auto"></video>
      <div
          :style="{opacity: isMask ? 1 : 0}"
          class="mask mask-transition justify-between z-10">
        <div class="flex">
          <play-count-svg class="icon"/>
          <span class="mr-3">{{ formatMillion(video.stat.view) }}</span>
          <danmaku-svg class="icon"/>
          <span>{{ formatMillion(video.stat.danmaku) }}</span>
        </div>
        <span>{{ getDuration(video.duration) }}</span>
      </div>
    </router-link>
    <div class="flex flex-col mt-2.5 relative">
      <h3
          class="text-[15px] font-medium pr-[30px] clamp-2">
        <a :href="video.uri"
           :title="video.title"
           class="title-transition"
           target="_blank">
          {{ video.title }}
        </a>
      </h3>
      <a :href="`https://space.bilibili.com/${video.owner.mid}`"
         class="flex items-center mt-1 text-[#9499A0] title-transition text-[13px] leading-[17px]"
         target="_blank">
        <div class="px-1 mr-1 rounded text-[12px] text-[#ff7f24] bg-[#fff0e3]"
             v-if="video.rcmd_reason&&video.rcmd_reason.reason_type!=0">
          {{ video.rcmd_reason.content }}
        </div>
        <up-svg v-else class="w-[17px] h-[17px] mr-0.5 "/>
        <span class="mr-1">{{ video.owner.name }}</span>
        <span>{{ getPubdate }}</span>
      </a>
      <ellipsis-svg
          :class="isDanmaku ? 'block' : 'hidden'"
          class="absolute right-0 top-[2px] rounded icon text-[#61666d] hover:bg-[#f1f2f3]"/>
    </div>
  </div>
  <skeleton v-else/>
</template>

<script setup lang="ts">
import {getVideoPlayer} from "@/api/video.ts";
import Image from "@/components/Image.vue";
import UpSvg from "@/assets/icon/up.svg"
import EllipsisSvg from "@/assets/icon/ellipsis.svg"
import PlayCountSvg from "@/assets/icon/play-count.svg"
import DanmakuSvg from "@/assets/icon/danmaku.svg"
import WatchLaterSvg from "@/assets/icon/watch-later.svg"
import {computed, ref} from "vue";
import Skeleton from "@/components/Skeleton.vue";
import {getRange, setSourceBuffer} from "@/api/play.ts";
import {getDuration, formatMillion} from "@/utils/format";
import {RecommendVideo, Video, VideoPlayer, VideoView} from "@/api/types/video.ts";

const {video} = defineProps<{ video: RecommendVideo }>()
const isDanmaku = ref(false)
const isMask = ref(true)
const videoRef = ref<HTMLVideoElement | null>(null)
const mediaSource = new MediaSource()
let isLoadSegment = true
let videoPlayer: VideoPlayer
let videoDash: Video
let initSize = 300 * 1024
let videoMaxRange = 0
let videoRange = 0
let videoSourceBuffer: SourceBuffer

const getPubdate = computed(() => {
  let now = new Date();
  let pubdate = new Date(video.pubdate * 1000)
  if (now.getFullYear() != pubdate.getFullYear()) {
    return `· ${pubdate.getFullYear()}-${pubdate.getMonth() + 1}-${pubdate.getDate()}`
  } else if (now.getMonth() != pubdate.getMonth()) {
    return `· ${pubdate.getMonth() + 1}-${pubdate.getMonth()}`
  } else if (now.getDate() - pubdate.getDate() > 1) {
    return `· ${pubdate.getMonth() + 1}-${pubdate.getDate()}`
  } else if (now.getDate() - pubdate.getDate() == 1) {
    return `· 昨天`
  } else if (now.getHours() != pubdate.getHours()) {
    return `· ${now.getHours() - pubdate.getHours()}小时前`
  } else return `· ${now.getMinutes() - pubdate.getMinutes()}分钟前`
})

const handlerMouseenter = (video: RecommendVideo) => {
  if (videoRef.value?.src) {
    isMask.value = false
    videoRef.value?.play()
    isLoadSegment = true
    // TODO 待完成 分段续传
    // handleSourceOpen()
  } else firstPlay(video)
}

async function handlerMouseleave() {
  isMask.value = true
  isLoadSegment = false
  setTimeout(_ => videoRef.value?.pause(), 180)
}

const firstPlay = async (video: RecommendVideo) => {
  videoPlayer = await getVideoPlayer({bvid: video.bvid, cid: video.cid} as VideoView)
  let videoList = videoPlayer.dash.video.filter(item => {
    let url = new URL(item.baseUrl)
    return item.id === 32 && !item.codecs.includes('hev') && url.pathname.startsWith('/v1')
  })
  if (videoList.length === 0) videoList = videoPlayer.dash.video.filter(item => {
    return item.id === 32 && !item.codecs.includes('hev')
  })
  videoDash = videoList[0];

  [videoMaxRange] = await Promise.all([
    getRange(videoDash.baseUrl),
  ])
  videoRef.value!.src = URL.createObjectURL(mediaSource)
  mediaSource.addEventListener('sourceopen', handleSourceOpen)

}

async function handleSourceOpen() {
  console.log(mediaSource.readyState, 'mediaSource')
  if (!videoSourceBuffer)
    videoSourceBuffer = mediaSource.addSourceBuffer(`${videoDash.mimeType};codecs=${videoDash.codecs}`)
  setSourceBuffer(videoDash.baseUrl, videoSourceBuffer, videoRange, initSize + videoRange).then(
      data => {
        videoRange += data
        if (isLoadSegment) isMask.value = false
      })

  videoSourceBuffer.addEventListener('updateend', async () => {
    if (isLoadSegment && videoRange < videoMaxRange) {
      let content_length = await setSourceBuffer(videoDash.baseUrl, videoSourceBuffer, videoRange, initSize + videoRange);
      // console.log(content_length,videoRange, videoMaxRange)
      videoRange += content_length
    }
  })
}
</script>

<style scoped>
.clamp-2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2; /* 显示两行 */
  line-height: 22px; /* 设置行高 */
  height: calc(22px * 2); /* 高度设置为两行的高度 */
}

.title-transition {
  @apply transition-colors duration-200 ease-linear hover:text-[#00aeec]
}

.mask-transition {
  transition: all .2s linear .2s;
}

.icon {
  @apply w-[18px] h-[18px] mr-[2px]
}

.card-content {
  @apply absolute top-0 left-0 w-full h-full rounded-md;
  transition: all .2s linear .2s;
}

.mask {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 38px;
  width: 100%;
  display: flex;
  color: white;
  font-size: 13px;
  line-height: 18px;
  align-items: center;
  padding: 16px 8px 6px 8px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .8) 100%);
}

</style>
