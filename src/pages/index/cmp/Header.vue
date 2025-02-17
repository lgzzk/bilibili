<template>
  <div @mouseenter="onMouseEnter"
       @mousemove="onMouseMove"
       @mouseleave="onMouseleave">
    <header-bar/>
    <Banner :header="header" ref="bannerRes" />
  </div>
  <header-channel/>
</template>

<script setup lang="ts">

import Banner from "@/pages/index/cmp/Banner.vue";
import HeaderBar from "@/pages/index/cmp/HeaderBar.vue";
import HeaderChannel from "@/pages/index/cmp/HeaderChannel.vue";
import {ref} from "vue";
import {getBannerLayer} from "@/api/header.ts";
import {Header} from "@/api/types/header.ts";

const bannerRes = ref()
const header = ref<Header>({} as Header)

let offsetX = 0
let enterX = 0
let imageDoms: HTMLImageElement[] = []

getBannerLayer().then(res => {
  header.value = res
})

const setTranslateStyle = () => {
  if (!bannerRes.value) return
  if (imageDoms.length === 0) imageDoms = bannerRes.value.$el.querySelectorAll('.banner-img')
  imageDoms.forEach((i, index) => {
    let offset = header.value?.split_layer[index].translate.offset || [0, 0]
    let scale = .0004
    let scaledOffsetX = offsetX * scale * (offset[0] - offset[1])
    i.style.transform = `translateX(${scaledOffsetX}px)`
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
