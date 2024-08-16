<template>
  <Header/>
  <div class="px-[60px] pb-[60px] relative">
    <div class="grid gird-content gap-5">
      <Swiper class="col-span-2 row-span-2"/>
      <VideoCard ref="videoCards" v-for="i in recmdList" :key="i.id" :video="i"/>
    </div>
    <div
        @click="flushed"
        class="flushed-but">
      <flushed-svg
          :style="{transform: `rotate(${rate}deg)`}"
          class="mb-1.5 transition-transform duration-500"/>
      <span>换一换</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "@/pages/index/cmp/Header.vue";
import Swiper from "@/pages/index/cmp/Swiper.vue";
import {getRecommendVideo, VideoItem} from "@/api/video.ts";
import {nextTick, Ref, ref} from "vue";
import VideoCard from "@/components/VideoCard.vue";
import FlushedSvg from "@/assets/icon/flushed.svg"
import {useIntersectionObserver} from "@vueuse/core";

const recmdList = ref<VideoItem[]>([])
const videoCards = ref<Ref<HTMLElement>[]>()
const entityVideoItems = ref<VideoItem[]>([])
const rate = ref(0)

const flushed = () => {
  rate.value += 360
  // TODO: 换一换
}
getRecommendVideo(11).then(data => {
  recmdList.value = data
  addSkeleton()
})
const addSkeleton = async () => {
  entityVideoItems.value = Array.from({length: 15}, _ => ({} as VideoItem))
  recmdList.value.push(...entityVideoItems.value)
  await nextTick()
  if (videoCards.value) {
    setObserver(videoCards.value[recmdList.value.length - 15])
  }
}

const setObserver = (el: Ref<HTMLElement>) => {
  const {stop} = useIntersectionObserver(
      el,
      ([{isIntersecting}]) => {
        console.log(isIntersecting)
        if (isIntersecting) {
          console.log(el.value)
          stop()
          setTimeout(_ =>
              getRecommendVideo(15).then(data => {
                console.log(data)
                entityVideoItems.value.forEach((i, index) => {
                  Object.assign(i, data[index])
                })
                setTimeout(_ => addSkeleton(), 200)
              }), 900)
        }
      },
  )
}
</script>

<style scoped>
.flushed-but {
  @apply absolute top-0 right-2 text-[#18191c] p-[9px] border border-[#e3e5e7]
  rounded-lg w-10 leading-[13.8px] text-[12px] flex flex-col items-center text-center cursor-pointer
  transition duration-200 hover:bg-[#e3e5e7] active:scale-95 select-none z-10
}

.grid > :nth-child(n+8):nth-child(-n+12) {
  @apply mt-10
}

.grid > :nth-child(n+12) {
  @apply mt-6
}

.gird-content {
  @apply grid-cols-5 mx-auto
}

@media (max-width: 1400px) {
  .grid > :nth-child(n+6):nth-child(-n+10) {
    @apply mt-10
  }

  .grid > :nth-child(n+10) {
    @apply mt-6
  }

  .gird-content {
    @apply grid-cols-4
  }
}


</style>
