<template>
  <div>
    <div
        @click="isOpen = !isOpen"
        class="flex items-center w-full rounded-md bg-[#f1f2f3] h-[46px] cursor-pointer select-none">
      <span class="font-medium text-[15px] text-[#18191c] ml-4 mr-2.5">弹幕列表</span>
      <ellipsis-bold-svg class="w-[14px] h-[14px] fill-[#61666d]"/>
      <arrow-svg
          :style="{transform: isOpen ? 'rotate(-90deg)' : 'rotate(90deg)'}"
          class="w-[11px] text-[#61666d] ml-auto mr-[19px] transition-all duration-300"/>
    </div>
    <div
        :style="{height: isOpen ? '350px' : '0px'}"
        class="transition-all duration-300 overflow-hidden">
      <div
          :style="{height: isOpen ? '350px' : '0px'}"
          class="text-[#61666d] text-[12px] pl-4 transition-all duration-300 overflow-y-scroll">
        <div class="flex">
          <span class="leading-8 w-[50px]">时间</span>
          <span class="leading-8 flex-auto">弹幕内容</span>
          <span class="leading-8 px-1.5">发送时间</span>
        </div>
        <div
            v-for="i in danmakuList"
            class="flex">
          <span class="leading-8 w-[50px]">{{ formatVideoTime(i.time) }}</span>
          <span class="leading-8 flex-auto overflow-hidden max-w-[26ch] text-ellipsis text-nowrap ">
            {{ formatDanmakuContent(i) }}
          </span>
          <span class="leading-8 px-1.5">{{ createTime(i) }}</span>
        </div>
      </div>
      <div class="w-full h-[31px] mt-2 text-center leading-[31px] text-[12px] cursor-pointer select-none
              bg-[#f1f2f3] text-[#61666d] rounded-md hover:text-[#18191C]">
        查看历史弹幕
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import EllipsisBoldSvg from "@/assets/icon/ellipsis-bold.svg";
import ArrowSvg from "@/assets/icon/arrow.svg";
import {ref} from "vue";
import {formatSendTime, formatVideoTime} from "@/utils/format";
import type {SimpleDanmaku} from "@/api/types/danmaku";

const isOpen = ref(false)
defineProps<{ danmakuList: SimpleDanmaku[] | null }>()

const formatDanmakuContent = (danmaku: SimpleDanmaku) => {
  return danmaku.type === 7 ? JSON.parse(danmaku.content)[4].replace(/\n/g, '') : danmaku.content
}
const createTime = (danmaku: SimpleDanmaku) => {
  if (danmaku.type === 7) return '特殊弹幕'
  else return formatSendTime(parseInt(danmaku.ctime))
}

</script>

<style scoped>

</style>
