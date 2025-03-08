<template>
  <div v-if="!videoView" class="h-[104px] w-full pt[22px]"></div>
  <div v-else class="flex flex-col pt-[22px] h-[104px] text-[13px]">

    <span class="inline-block overflow-hidden whitespace-nowrap text-ellipsis max-w-[63ch] text-xl"
          :title="videoView.title">{{ videoView.title }}</span>

    <div class="flex items-center text-[var(--text)] mt-[6px] overflow-x-hidden text-nowrap">

      <a
          v-if="videoView.honor_reply.honor && videoView.honor_reply.honor[0].type <= 3"
          href="https://www.bilibili.com/v/popular/rank/all/"
          target="_blank"
          class=" px-[6px] h-[24px] items-center rounded-sm text-[#ff6699] flex mr-3 bg-[rgba(255,102,153,0.1)]">
        <honor-svg class="mr-1"/>
        {{ videoView.honor_reply.honor[0].desc }}
        <honor-arrow-svg class="w-[10px]"/>
      </a>

      <div class="flex mr-[12px]">
        <play-count-svg class="icon mr-[4px]"/>
        <span>{{ formatMillion(videoView.stat.view) }}</span>
      </div>

      <div class="flex mr-[12px]">
        <danmaku-svg class="icon mr-[4px]"/>
        <span>{{ formatMillion(videoView.stat.danmaku) }}</span>
      </div>

      <span>{{ getPubdate(videoView.pubdate) }}</span>

      <div v-if="videoView.argue_info.argue_msg" class="flex items-center ml-3">
        <warn-svg class="icon mr-[4px]"/>
        <span>{{ videoView.argue_info.argue_msg }}</span>
      </div>

      <template v-if="videoView?.rights.no_reprint === 1">
        <forbid-svg class="w-4 h-4 mr-0.5 ml-3 text-[#fd676f]"/>
        <span>未经作者授权，禁止转载</span>
      </template>

    </div>
  </div>
</template>

<script setup lang="ts">
import {getPubdate, formatMillion} from "@/utils/format";
import DanmakuSvg from "@/assets/icon/danmaku.svg";
import PlayCountSvg from "@/assets/icon/play-count.svg";
import WarnSvg from "@/assets/icon/warn.svg";
import ForbidSvg from "@/assets/icon/forbid.svg";
import HonorSvg from "@/assets/icon/honor.svg";
import HonorArrowSvg from "@/assets/icon/honor-arrow.svg";
import type {VideoView} from "@/api/types/video";

defineProps<{ videoView: VideoView | null }>()

</script>

<style scoped>
.icon {
  @apply w-[20px] h-[20px] text-[var(--text)]
}
</style>
