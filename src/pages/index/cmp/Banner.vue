<template>
  <div
      class="relative flex justify-center items-center overflow-hidden h-[9.375vw] max-h-[240px] min-h-[155px] ">
    <template v-for="i in layerItems">
      <Image
          v-if="i.resources[0].src.includes('.png')"
          :key="'image-'+i.id"
          :src="i.resources[0].src"
          class="banner-img"/>
      <video
          v-else
          :key="'video-'+i.id"
          :ref="el => setBlob(el as HTMLVideoElement,i.resources[0].src)"
          :style="{transform: `translate(${i.translate.initial[0]}px,${i.translate.initial[1]}px)`}"
          class="object-cover top-0 absolute"
          loop playsinline muted autoplay></video>
    </template>
    <Image v-if="pic" :src="pic" class="banner-img"/>
    <Image v-if="litpic" :src="litpic" class="absolute left-[var(--litpic-left)] bottom-[10px] h-[78px] w-[162px]"/>
    <div class="mask"></div>
  </div>
</template>

<script setup lang="ts">

import Image from "@/components/Image.vue";
import {LayerItem} from "@/api/header.ts";
import httpApi from "@/utils/request";

defineProps<{
  layerItems: LayerItem[]
  litpic: string
  pic: string
}>()

const setBlob = async (el: HTMLVideoElement, url: string) => {
  const blob = await httpApi(url, {options: {referrerPolicy: 'no-referrer'}})
  el.src = URL.createObjectURL(blob)
}

// TODO: banner图片大小问题
// const getImageStyle = (i: LayerItem) => {
//   if (i.translate?.initial)
//     return {transform: `translate(${i.translate.initial[0]}px,${i.translate.initial[1]}px)`}
//   return {}
// }
</script>

<style scoped>
.banner-img {
  @apply h-full absolute left-0 right-0 bottom-0 top-0 transition-all ease-out object-cover;
}

.mask {
  @apply absolute left-0 right-0 bottom-0 top-0 w-full h-[100px];
  background: linear-gradient(rgba(0, 0, 0, .4), transparent)
}
</style>
