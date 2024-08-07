<template>
  <div class="flex flex-col">
    <Image class="w-full h-full rounded-md " :src="video.pic"/>
    <div class="flex flex-col mt-2.5">
      <a :href="video.uri"
         class="text-[15px] inline-block pr-[30px] clamp-2"
         target="_blank">
        <span class="title-transition">{{ video.title }}</span>
      </a>
      <a :href="`https://space.bilibili.com/${video.owner.mid}`"
         class="flex items-center mt-1 text-[#9499A0] title-transition"
         target="_blank">
        <up-svg class="w-[17px] h-[17px] mr-0.5"/>
        <span class="text-[13px] leading-[17px]">{{ video.owner.name }}</span>
        {{getPubdate}}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import {VideoItem} from "@/api/video.ts";
import Image from "@/components/Image.vue";
import UpSvg from "@/assets/icon/up.svg"
import {computed} from "vue";

const {video} = defineProps<{ video: VideoItem }>()

const getPubdate = computed(() => {
  return new Date(video.pubdate * 1000).toLocaleDateString()
})
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
</style>
