<template>
  <header-bar class="relative" style="color: #18191c"/>
  <div
      class="flex justify-center max-w-[2540px] min-w-[1080px] px-[10px] mx-auto whitespace-pre-line">
    <div class="w-[770px] h-[430px]">
      <video-info :video-view/>
      <video-player :video-view/>
      <div class="text-wrap  text-[15px] text-[#18191c] py-3">{{ videoView?.desc }}</div>
    </div>
    <div class="w-[350px] content-right h-full ml-[30px]">
      <up-info :video-view :live-room-info :up-card/>
      <danmaku-list :danmaku-list/>
      <related-list :related-list/>
    </div>
  </div>
</template>


<script setup lang="ts">
import {getVideoRelated, getVideoView} from "@/api/video.ts";
import {provide, ref, watch} from "vue";
import HeaderBar from "@/pages/index/cmp/HeaderBar.vue";
import VideoInfo from "@/pages/video/cmp/VideoInfo.vue";
import UpInfo from "@/pages/video/cmp/UpInfo.vue";
import DanmakuList from "@/pages/video/cmp/DanmakuList.vue";
import RelatedList from "@/pages/video/cmp/RelatedList.vue";
import {VideoRelated, VideoView} from "@/api/types/video.ts";
import {useWindowScroll} from "@vueuse/core";
import VideoPlayer from "@/components/video-player/VideoPlayer.vue";
import {parseDanmaku} from "@/api/danmaku.ts";
import {SimpleDanmaku} from "@/api/types/danmaku.ts";
import {UpCard} from "@/api/types/card.ts";
import {LiveRoomInfo} from "@/api/types/live.ts";
import {getUpCard} from "@/api/card.ts";
import {getLiveRoomInfo} from "@/api/live.ts";

const danmakuList = ref<SimpleDanmaku[] | null>(null)
const relatedList = ref<VideoRelated[] | null>(null)
const videoView = ref<VideoView | null>(null)
const upCard = ref<UpCard | null>(null)
const liveRoomInfo = ref<LiveRoomInfo | null>(null)
const props = defineProps({bvid: String})
const {y} = useWindowScroll({behavior: 'smooth'})

provide('danmakuList', danmakuList)

watch(() => props.bvid, async (newBvid) => {
  if (!newBvid) return
  y.value = 0
  await initVideoView()
  if (y.value !== 0) y.value = 0
}, {immediate: true})


async function initVideoView() {
  videoView.value = await getVideoView(props.bvid!)

  document.title = videoView.value.title + '_哔哩哔哩_bilibili';

  [
    upCard.value,
    liveRoomInfo.value,
    relatedList.value,
    danmakuList.value
  ] = await Promise.all([
    getUpCard(videoView.value.owner.mid),
    getLiveRoomInfo(videoView.value.owner.mid),
    getVideoRelated(videoView.value.bvid),
    videoView.value.is_upower_exclusive
        ? Promise.resolve(null)
        : parseDanmaku(videoView.value)
  ])

}

</script>

<style scoped>

@media (min-width: 1681px) {
  .content-right {
    @apply w-[411px]
  }
}

</style>
