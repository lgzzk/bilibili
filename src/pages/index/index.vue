<template>
  <Header/>
  <div class="px-[60px] pb-[60px]">
    <div class="grid grid-cols-5 gap-5 relative">
      <Swiper class="col-span-2 row-span-2"/>
      <VideoCard v-for="i in recmdList" :video="i"/>
      <div
          @click="getrRecmdList"
          class="flushed-but">
        <flushed-svg
            :style="{transform: `rotate(${rate}deg)`}"
            class="mb-1.5 transition-transform duration-500"/>
        <span>换一批</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "@/pages/index/cmp/Header.vue";
import Swiper from "@/pages/index/cmp/Swiper.vue";
import {getRecommendVideo, VideoItem} from "@/api/video.ts";
import {ref} from "vue";
import VideoCard from "@/components/VideoCard.vue";
import FlushedSvg from "@/assets/icon/flushed.svg"

const recmdList = ref<VideoItem[]>([])
const rate = ref(0)

const getrRecmdList = () => {
  rate.value += 360
  getRecommendVideo().then(data => {
    recmdList.value = data
  })
}
getRecommendVideo().then(data => {
  recmdList.value = data
})


</script>

<style scoped>
.flushed-but {
  @apply absolute top-0 left-full text-[#18191c] translate-x-2.5 p-[9px] border border-[#e3e5e7]
  rounded-lg w-10 leading-[13.8px] text-[12px] flex flex-col items-center text-center cursor-pointer
  transition duration-200 hover:bg-[#e3e5e7] active:scale-95 select-none
}
</style>
