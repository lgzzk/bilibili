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
          class="object-cover w-[200px] h-[500px] top-0 absolute"
          loop playsinline muted autoplay width="200" height="500"></video>
    </template>
    <div class="mask"></div>
  </div>
</template>

<script setup lang="ts">

import Image from "@/components/Image.vue";
import {LayerItem} from "@/api/header.ts";
import httpApi from "@/utils/request";

defineProps<{ layerItems: LayerItem[] }>()


const setBlob = async (el: HTMLVideoElement, url: string) => {
  console.log(el)
  const blob = await httpApi(url, {options: {referrerPolicy: 'no-referrer'}})
  el.src = URL.createObjectURL(blob)
}
</script>

<style scoped>
.banner-img {
  @apply h-full absolute left-0 right-0 scale-105 bottom-0 top-0 transition-all ease-out object-cover;
}

.mask {
  @apply absolute left-0 right-0 bottom-0 top-0 w-full h-[100px];
  background: linear-gradient(rgba(0, 0, 0, .4), transparent)
}
</style>
