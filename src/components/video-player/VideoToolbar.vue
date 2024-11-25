<template>
  <div class="flex items-center pt-[16px] pb-[12px] text-[#61666d] border-b border-[#e3e5e7]">
    <toolbar-icon :icon="AgreeSvg" :value="stat.like"/>
    <toolbar-icon :icon="CoinSvg" :value="stat.coin"/>
    <toolbar-icon :icon="FavoriteFillSvg" :value="stat.favorite"/>
    <toolbar-icon :icon="ShareSvg" :value="stat.share"/>
    <div class="flex-grow"/>
    <div class="flex items-center cursor-pointer transition-all duration-300 hover:text-[#00aeec] select-none mr-3">
      <note-svg class="w-[20px] h-[20px] cursor-pointer mr-[6px]"/>
      <span class="text-[13px]">记笔记</span>
    </div>
    <ellipsis-bold-svg class="w-6 h-6 cursor-pointer"/>
  </div>
</template>

<script setup lang="ts">
import {Stat} from "@/api/types/video.ts";
import AgreeSvg from "@/assets/icon/agree.svg"
import CoinSvg from "@/assets/icon/coin.svg"
import ShareSvg from "@/assets/icon/share.svg"
import FavoriteFillSvg from "@/assets/icon/favorite-fill.svg"
import ToolbarIcon from "@/components/video-player/ToolbarIcon.vue";
import EllipsisBoldSvg from "@/assets/icon/ellipsis.svg";
import NoteSvg from "@/assets/icon/note.svg";

defineProps<{ stat: Stat }>()
</script>

<style scoped>

</style>
