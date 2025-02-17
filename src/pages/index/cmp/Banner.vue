<template>
  <div
      class="relative flex justify-center items-center overflow-hidden h-[9.375vw] max-h-[240px] min-h-[155px] ">
    <template
        v-if="header.is_split_layer"
        v-for="i in header.split_layer">
      <Image
          v-if="i.resources[0].src.includes('.png')"
          :key="'image-'+i.id"
          :src="i.resources[0].src"
          class="banner-img"
      />
      <video
          v-else
          :key="'format-'+i.id"
          :ref="el => setBlob(el as HTMLVideoElement,i.resources[0].src)"
          :style="{transform: `translate(${i.translate.initial[0]}px,${i.translate.initial[1]}px)`}"
          class="object-cover top-0 absolute"
          loop playsinline muted autoplay>
      </video>
    </template>
    <a :href="header.url" target="_blank">
      <Image
          v-if="!header.is_split_layer && header.pic"
          :src="header.pic"
          class="banner-img"
      />
    </a>
    <a v-if="header.litpic" href="/bilibili">
      <Image
          :src="header.litpic"
          class="absolute left-[var(--litpic-left)] bottom-[10px] h-[78px] w-[162px]"/>
    </a>
    <div class="mask"></div>
  </div>
</template>

<script setup lang="ts">

import Image from "@/components/Image.vue";
import httpApi from "@/utils/request";
import {Header} from "@/api/types/header.ts";

defineProps<{
  header: Header
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
