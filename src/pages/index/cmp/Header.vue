<template>
  <div @mouseenter="onMouseEnter"
       @mousemove="onMouseMove"
       @mouseleave="onMouseleave">
    <header-bar/>
    <Banner :layer-items="layerItems" :litpic="litpic" ref="bannerRes"/>
  </div>
  <header-channel/>
</template>

<script setup lang="ts">

import Banner from "@/pages/index/cmp/Banner.vue";
import HeaderBar from "@/pages/index/cmp/HeaderBar.vue";
import HeaderChannel from "@/pages/index/cmp/HeaderChannel.vue";
import {ref} from "vue";
import {getBannerLayer, LayerItem} from "@/api/header.ts";

const bannerRes = ref()
const layerItems = ref<LayerItem[]>([])
const litpic = ref('')

let offsetX = 0
let enterX = 0
let imageDoms: HTMLImageElement[] = []

getBannerLayer().then(res => {
  layerItems.value = res.layers
  litpic.value = res.litpic
})

const setTranslateStyle = () => {
  if (imageDoms.length === 0) imageDoms = bannerRes.value.$el.querySelectorAll('.banner-img')
  imageDoms.forEach((i, index) => {
    let offset = layerItems.value[index].translate.offset || [0, 0]
    let scale = .0004
    let scaledOffsetX = offsetX * scale * (offset[0] - offset[1])
    i.style.transform = `translateX(${scaledOffsetX}px) scale(1.05)`
  })
}

const onMouseMove = (e: MouseEvent) => {
  offsetX = e.clientX - enterX
  setTranslateStyle()
}

const onMouseEnter = (e: MouseEvent) => {
  enterX = e.clientX
}

const onMouseleave = () => {
  enterX = 0
  offsetX = 0
  setTranslateStyle()
}
</script>

<style scoped>

</style>
