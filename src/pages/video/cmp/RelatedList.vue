<template>
  <div
      class="flex justify-between mt-[18px] mb-3">
    <span class="text-[15px] font-medium text-[#18191c]">接下来播放</span>
    <div class="flex">
      <span class="text-sm text-[#9499a0] mr-1">自动联播</span>
      <switch-button v-model="isEnable"/>
    </div>
  </div>
  <video-related-card
      v-if="relatedList && relatedList[0]"
      :video-related="relatedList[0]"
      class="pb-[21px] border-b-2"/>
  <div class="mt-[18px] w-full">
    <video-related-card
        v-for="i in relatedList?.slice(1,20)"
        :key="i.aid"
        :video-related="i"/>
    <video-related-card
        v-if="isOpen"
        v-for="i in relatedList?.slice(20)"
        :key="i.aid"
        :video-related="i"/>
    <div
        v-if="relatedList && relatedList[0]"
        @click="setOpen"
        class="leading-[42px] text-center rounded-md text-[#18191c] bg-[#f1f2f3] mt-[10px] text-[12px]
               mb-6 cursor-pointer select-none transition-all duration-300 hover:bg-[#e3e5e7]">
      {{ isOpen ? '收起' : '展开' }}
    </div>
  </div>
</template>

<script setup lang="ts">

import {ref} from "vue";
import SwitchButton from "@/components/SwitchButton.vue";
import VideoRelatedCard from "@/components/VideoRelatedCard.vue";
import type {VideoRelated} from "@/api/types/video";

const isEnable = ref(true)
const isOpen = ref(false)
defineProps<{ relatedList: VideoRelated[] | null }>()

const setOpen = () => {
  isOpen.value = !isOpen.value
}

</script>

<style scoped>

</style>
