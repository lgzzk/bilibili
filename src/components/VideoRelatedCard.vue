<template>
  <div class="flex mt-3">
    <div
        @click="goVideo"
        class="w-[141px] h-[80px] pic-box shrink-0 relative cursor-pointer">
      <Image :src="`${videoRelated.pic}@336w_190h_1c_!web-video-rcmd-cover.avif`"
             class="w-full h-full rounded-md"/>
      <span class="absolute bottom-[6px] right-[6px] rounded-sm text-[13px] text-white bg-[#00000066] px-1">
        {{ getDuration(videoRelated.duration) }}
      </span>
    </div>
    <div class="ml-[10px] flex flex-col text-[#9499a0] text-[13px]">
      <span
          @click="goVideo"
          :title="videoRelated.title"
          class="text-[15px] text-[#18191c] overflow-hidden line-clamp-2 break-all leading-[19px]
                 cursor-pointer transition-all duration-300 hover:text-[#00aeec] video-title">
        {{ videoRelated.title }}
      </span>
      <a
          :href="`https://space.bilibili.com/${videoRelated.owner.mid}`"
          target="_blank"
          class="flex items-center cursor-pointer transition-all duration-300 hover:text-[#00aeec]">
        <up-svg class="w-[18px] h-[18px] mr-1"/>
        <span>{{ videoRelated.owner.name }}</span>
      </a>
      <div class="flex items-center">
        <play-count-svg class="w-[18px] h-[18px] mr-1"/>
        <span class="mr-3">{{ getVideoPlayCount(videoRelated?.stat.view) }}</span>
        <danmaku-svg class="w-[18px] h-[18px] mr-1"/>
        <span>{{ getVideoPlayCount(videoRelated.stat.danmaku) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Image from "@/components/Image.vue";
import UpSvg from "@/assets/icon/up.svg"
import PlayCountSvg from "@/assets/icon/play-count.svg"
import {getDuration, getVideoPlayCount} from "@/utils/format";
import DanmakuSvg from "@/assets/icon/danmaku.svg";
import router from "@/router";
import {VideoRelated} from "@/api/types/video.ts";

const {videoRelated} = defineProps<{ videoRelated: VideoRelated }>()


const goVideo = () => {
  router.push(`/video/${videoRelated.bvid}`)
}
</script>

<style scoped>
@media (min-width: 1681px) {
  .pic-box {
    width: 189px;
    height: 107px;
  }
}

@media (min-width: 1681px) {
  .video-title {
    font-size: 16px;
    line-height: 20px;
  }
}
</style>
