<template>
  <div v-if="!videoView" class="h-[72.4px] w-full"></div>
  <div v-else class="flex flex-col pt-[22px] text-[13px]">
    <span class="inline-block overflow-hidden whitespace-nowrap text-ellipsis max-w-[63ch] text-xl"
          :title="videoView.title">{{ videoView.title }}</span>
    <div class="flex items-center text-[var(--text)]">
      <play-count-svg class="icon"/>
      <span class="mr-3">{{ getVideoPlayCount(videoView.stat.view) }}</span>
      <danmaku-svg class="icon"/>
      <span class="mr-2.5">{{ getVideoPlayCount(videoView.stat.danmaku) }}</span>
      <span class="mr-2.5">{{ getPubdate(videoView.pubdate) }}</span>
      <div v-if="videoView.argue_info.argue_msg" class="flex items-center">
        <warn-svg class="icon"/>
        <span>{{ videoView.argue_info.argue_msg }}</span>
      </div>
      <forbid-svg class="w-4 h-4 ml-2.5 text-[#fd676f]"/>
      <span>未经作者授权，禁止转载</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import {VideoView} from "@/api/video.ts";
import {getVideoPlayCount} from "@/utils/video";
import DanmakuSvg from "@/assets/icon/danmaku.svg";
import PlayCountSvg from "@/assets/icon/play-count.svg";
import WarnSvg from "@/assets/icon/warn.svg";
import ForbidSvg from "@/assets/icon/forbid.svg";

defineProps<{ videoView: VideoView | null }>()

const getPubdate = (pubdate: number) => {
  let date = new Date(pubdate * 1000)
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
}
</script>

<style scoped>
.icon {
  @apply w-[20px] h-[20px] text-[var(--text)]
}
</style>
