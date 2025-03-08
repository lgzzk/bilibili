<template>
  <div
      v-if="column.id"
      @mouseenter="isDanmaku = true"
      @mouseleave="isDanmaku = false"
      ref="videoCard"
      class="flex flex-col">
    <a
        @mouseenter="isMask = false"
        @mouseleave="isMask = true"
        :href="column.uri"
        class="relative bg-[#f1f2f3]"
        target="_blank">
      <div class="pt-[56.25%]"></div>
      <div
          :style="{opacity: isMask ? 0 : 1}"
          class="absolute z-30 top-2 right-2 px-[3px] cursor-autoh-7 h-7 min-w-7 rounded-md bg-[#212121CC] flex items-center mask-transition">
        <watch-later-svg class="w-[22px] h-[22px] text-white"/>
      </div>
      <Image class="absolute top-0 w-full h-full rounded-md"
             :src="`${column.pic}@672w_378h_1c_!web-home-common-cover.avif`"/>
      <div
          :style="{opacity: isMask ? 1 : 0}"
          class="mask mask-transition justify-between">
        <div class="flex">
          <play-count-svg class="icon"/>
          <span class="mr-3">{{ getVideoData(column.stat.view) }}</span>
          <danmaku-svg class="icon"/>
          <span>{{ getVideoData(column.stat.danmaku) }}</span>
        </div>
      </div>
    </a>
    <div class="flex flex-col mt-2.5 relative">
      <h3
          class="text-[15px] font-medium pr-[30px] clamp-2">
        <a :href="column.uri"
           :title="column.title"
           class="title-transition"
           target="_blank">
          {{ column.title }}
        </a>
      </h3>
      <a :href="`https://space.bilibili.com/${column.owner.mid}`"
         class="flex items-center mt-1 text-[#9499A0] title-transition text-[13px] leading-[17px]"
         target="_blank">
        <div class="px-1 mr-1 rounded text-[12px] text-[#ff7f24] bg-[#fff0e3]"
             v-if="column.rcmd_reason&&column.rcmd_reason.reason_type!=0">
          {{ column.rcmd_reason.content }}
        </div>
        <up-svg v-else class="w-[17px] h-[17px] mr-0.5 "/>
        <span class="mr-1">{{ column.owner.name }}</span>
        <span>dsf</span>
      </a>
    </div>
  </div>

  <div v-else>
    <div class="loading_animation pt-[56.25%] rounded-md"></div>
    <div class="mt-2.5 *:rounded *:h-[18px]">
      <p class="loading_animation w-[94%] mb-1"></p>
      <p class="loading_animation w-[72%] mb-3"></p>
      <p class="loading_animation w-[50%] mb-3"></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Image from "@/components/Image.vue";
import UpSvg from "@/assets/icon/up.svg"
import PlayCountSvg from "@/assets/icon/play-count.svg"
import DanmakuSvg from "@/assets/icon/danmaku.svg"
import WatchLaterSvg from "@/assets/icon/watch-later.svg"
import {ref} from "vue";
import type {RecommendVideo} from "@/api/types/video";

// TODO 待完成ColumnCard列表

const {column} = defineProps<{ column: RecommendVideo }>()
const isDanmaku = ref(false)
const isMask = ref(true)

const getVideoData = (data: number) => {
  if (data < 10000) return data
  else return (data / 10000).toFixed(1) + '万'
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

.loading_animation {
  background: linear-gradient(-45deg, #f1f2f3 25%, #ffffff 45%, #f1f2f3 65%);
  background-size: 400% 100%;
  animation: skeleton-loading 1.2s ease-in-out infinite;
}

@keyframes skeleton-loading {
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
</style>
