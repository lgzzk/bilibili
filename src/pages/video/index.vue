<template>
  <header-bar class="relative" style="color: #18191c"/>
  <div
      class="flex justify-center  max-w-[2540px] min-w-[1080px] px-[10px] mx-auto whitespace-pre-line">
    <div class="w-[771px] ">
      <video-info :video-view/>
      <video-player :video-view/>
      <div class="text-wrap">{{ videoView?.desc }}</div>
    </div>
    <div class="w-[350px] content-right h-full ml-[30px]">
      <up-info :video-view/>
      <danmaku-list :video-view/>
      <related-list :bvid="videoView?.bvid || null"/>
    </div>
  </div>
</template>


<script setup lang="ts">
import {getVideoView} from "@/api/video.ts";
import {ref, watch} from "vue";
import HeaderBar from "@/pages/index/cmp/HeaderBar.vue";
import VideoInfo from "@/pages/video/cmp/VideoInfo.vue";
import UpInfo from "@/pages/video/cmp/UpInfo.vue";
import DanmakuList from "@/pages/video/cmp/DanmakuList.vue";
import VideoPlayer from "@/components/VideoPlayer.vue";
import RelatedList from "@/pages/video/cmp/RelatedList.vue";
import {VideoView} from "@/api/types/video.ts";

const videoView = ref<VideoView | null>(null)
const props = defineProps({bvid: String})


watch(() => props.bvid, (newBvid) => {
  if (!newBvid) return
  initVideoView()
}, {immediate: true})


async function initVideoView() {
  const data = await getVideoView(props.bvid!)
  videoView.value = data
  document.title = data.title + '_哔哩哔哩_bilibili'
}

</script>

<style scoped>

@media (min-width: 1681px) {
  .content-right {
    @apply w-[411px]
  }
}

</style>
