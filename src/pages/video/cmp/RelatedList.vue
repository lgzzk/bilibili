<template>
  <div class="flex justify-between mt-[18px] mb-3">
    <span class="text-[15px] font-medium text-[#18191c]">接下来播放</span>
    <div class="flex">
      <span class="text-sm text-[#9499a0] mr-1">自动联播</span>
      <switch-button v-model="isEnable"/>
    </div>
  </div>
  <video-related-card
      v-if="relatedList"
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
        v-if="relatedList"
        @click="setOpen"
        class="leading-[42px] text-center rounded-md text-[#18191c] bg-[#f1f2f3] mt-[10px] text-[12px]
               mb-6 cursor-pointer select-none transition-all duration-300 hover:bg-[#e3e5e7]">
      {{ isOpen ? '收起' : '展开' }}
    </div>
  </div>
</template>

<script setup lang="ts">

import {getVideoRelated, VideoRelated} from "@/api/video.ts";
import {ref, watch} from "vue";
import SwitchButton from "@/components/SwitchButton.vue";
import VideoRelatedCard from "@/components/VideoRelatedCard.vue";

const isEnable = ref(true)
const isOpen = ref(false)
const relatedList = ref<VideoRelated[]>()
const props = defineProps<{ bvid: string | null }>()

const setOpen = () => {
  isOpen.value = !isOpen.value
}

watch(() => props.bvid, async (newBvid) => {
  if (!newBvid) return
  relatedList.value = await getVideoRelated(newBvid)
}, {immediate: true})


</script>

<style scoped>

</style>
