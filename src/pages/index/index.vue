<template>
  <Header/>
  <div class="px-[60px] pb-[60px] relative">
    <div class="grid gird-content gap-5">
      <Swiper class="col-span-2 row-span-2"/>
      <VideoCard ref="videoCards" v-for="i in recmdList" :key="i.id" :video="i"/>
    </div>
    <div
        @click="swap"
        class="absolute top-0 p-[9px] right-2 button">
      <flushed-svg
          :style="{transform: `rotate(${rate}deg)`}"
          class="mb-1.5 transition-transform duration-500"/>
      <span>换一换</span>
    </div>
    <div class="fixed bottom-[30px] right-2">
      <div class="button h-10 flex justify-center bg-white">
        <svg class="w-[22px] h-[22px]" aria-hidden="true">
          <use xlink:href="#widget-watch-later"></use>
        </svg>
      </div>
      <div
          :style="{opacity}"
          class="transition-opacity duration-300">
        <div
            @click="flushed"
            class="rounded-lg py-2.5 cursor-pointer mt-1.5 text-white flex justify-center bg-[#00aeec]">
          <svg class="w-[19px] h-[19px]" aria-hidden="true">
            <use xlink:href="#palette-refresh"></use>
          </svg>
        </div>
        <div
            @click="goTop"
            class="button pt-2 pb-1.5 mt-3 flex justify-center bg-white">
          <svg class="w-4 h-4" aria-hidden="true">
            <use xlink:href="#palette-top"></use>
          </svg>
          <span>顶部</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "@/pages/index/cmp/Header.vue";
import Swiper from "@/pages/index/cmp/Swiper.vue";
import {getRecommendVideos, RecommendVideo} from "@/api/videoItem.ts";
import {nextTick, Ref, ref, watch} from "vue";
import VideoCard from "@/components/VideoCard.vue";
import FlushedSvg from "@/assets/icon/flushed.svg"
import {useIntersectionObserver} from "@vueuse/core";
import {useWindowScroll} from '@vueuse/core'


const recmdList = ref<RecommendVideo[]>([])
const videoCards = ref<Ref<HTMLElement>[]>()
const entityVideoItems = ref<VideoItem[]>([])
const rate = ref(0)
const opacity = ref(0)
const {y} = useWindowScroll()

const flushed = () => {
  goTop()
  init()
}
const swap = () => {
  rate.value += 360
  getRecommendVideo(11).then(data => {
    recmdList.value.splice(0, 11, ...data)
  })
}
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
        if (isIntersecting) {
          stop()
          setTimeout(_ =>
              getRecommendVideos(15).then(data => {
                entityVideoItems.value.forEach((i, index) =>
                    Object.assign(i, data[index]))
                setTimeout(_ => addSkeleton(), 300)
              }), 700)
        }
      },
  )
}
const init = () => {
  entityVideoItems.value = []
  getRecommendVideos(11).then(data => {
    recmdList.value = data
    addSkeleton()
  })
}
const goTop = () => {
  y.value = 0
}
watch(y, newY => {
  if (newY > 700) opacity.value = 1
  else opacity.value = 0
})
init()
</script>

<style scoped>
.button {
  @apply text-[#18191c] border border-[#e3e5e7]
  rounded-lg w-10 leading-[13.8px] text-[12px] flex flex-col items-center text-center cursor-pointer
  transition duration-200 hover:bg-[#e3e5e7] active:scale-95 select-none z-10
}


@media (min-width: 1400px) {
  .grid > :nth-child(n+8):nth-child(-n+12) {
    @apply mt-10
  }

  .grid > :nth-child(n+12) {
    @apply mt-6
  }

  .gird-content {
    @apply grid-cols-5 mx-auto
  }
}

@media (max-width: 1400px) {
  .grid > :nth-child(n+6):nth-child(-n+9) {
    @apply mt-10
  }

  .grid > :nth-child(n+10) {
    @apply mt-[22px]
  }

  .gird-content {
    @apply grid-cols-4
  }
}


</style>
