<template>
  <div class="min-h-[155px] h-[9.375vw] min-w-[1000px] relative flex">
    <img referrerPolicy=no-referrer :src="vcList[0]" class="h-[162px] w-full absolute"/>
    <img referrerPolicy=no-referrer :src="vcList[1]" class="h-[162px] w-[1664px] absolute"/>
    <img referrerPolicy=no-referrer :src="vcList[2]" class="h-[162px] w-[1664px] absolute"/>
    <img referrerPolicy=no-referrer :src="vcList[3]" class="h-[162px] w-[1664px] absolute"/>
    <img referrerPolicy=no-referrer :src="vcList[4]" class="h-[162px] w-[1664px] absolute"/>
    <img referrerPolicy=no-referrer :src="vcList[5]" class="h-[162px] w-[1664px] absolute"/>
    <img referrerPolicy=no-referrer :src="vcList[6]" class="h-[162px] w-[1664px] absolute"/>
    <img referrerPolicy=no-referrer :src="vcList[7]" class="h-[162px] w-[1664px] absolute"/>
    <img referrerPolicy=no-referrer :src="vcList[8]" class="h-[162px] w-[1664px] absolute"/>
    <img referrerPolicy=no-referrer :src="vcList[9]" class="h-[162px] w-[1664px] absolute"/>
    <img referrerPolicy=no-referrer :src="vcList[10]" class="h-[162px] w-[1664px] absolute"/>
    <img referrerPolicy=no-referrer :src="vcList[11]" class="h-[162px] w-[1664px] absolute"/>
    <img referrerPolicy=no-referrer :src="vcList[12]" class="h-[162px] w-[1664px] absolute"/>
    <video
        :src="blobUrl"
        loop playsinline muted autoplay
        style="object-fit: cover; height: 250px; width: 100px; transform: translate(500px, 0px) rotate(0deg) scale(1); opacity: 1;"></video>
    <img referrerPolicy=no-referrer :src="vcList[13]" class="h-[162px] w-[1664px] absolute"/>
    <img referrerPolicy=no-referrer :src="vcList[14]" class="h-[162px] w-[1664px] absolute"/>
    <img referrerPolicy=no-referrer :src="vcList[10]" class="h-[162px] w-[1664px] absolute"/>
    <img referrerPolicy=no-referrer :src="vcList[15]" class="h-[162px] w-[1664px] absolute"/>
    <img referrerPolicy=no-referrer :src="vcList[16]" class="h-[162px] w-[1664px] absolute"/>
    <img referrerPolicy=no-referrer :src="vcList[17]" class="h-[162px] w-[1664px] absolute"/>
    <video loop playsinline muted autoplay src="@/assets/v.webm" width="108" height="270" style="object-fit: cover; height: 270px; width: 108px; transform: translate(216px, 0px) rotate(0deg) scale(1); opacity: 1;" data-height="500" data-width="200"></video>
    <video loop playsinline muted autoplay src="@/assets/v.webm" width="200" height="500" style="object-fit: cover; height: 500px; width: 200px; transform: translate(-700px, 0px) rotate(0deg) scale(1); opacity: 1;" data-height="500" data-width="200"></video>
  </div>
</template>

<script setup lang="ts">

import {ref} from "vue";

const vcList = [
  'https://i0.hdslb.com/bfs/vc/75ec2d45ce8c942a1f7379d4641171da4d90ab0d.png@1c.webp',
  'https://i0.hdslb.com/bfs/vc/286eb259a60a0eabfcde96d7ea92d239fe68b3fe.png@1c.webp',
  'https://i0.hdslb.com/bfs/vc/782d55aeca6cc75f51d2d630005f514a61a0ddfa.png@1c.webp',
  'https://i0.hdslb.com/bfs/vc/d6c941cf2d5fc6c717173f7e3f166dbc444aa15b.png@1c.webp',
  'https://i0.hdslb.com/bfs/vc/27e411d92729604aa594858beb5130ed60aad76d.png@1c.webp',
  'https://i0.hdslb.com/bfs/vc/09d0855b6b6d6965e8f02404777986237848c6c9.png@1c.webp',
  'https://i0.hdslb.com/bfs/vc/40878bbef514e2d4bf5d660fe1145c869567bec2.png@1c.webp',
  'https://i0.hdslb.com/bfs/vc/42485baddbca05d2c4c7710a0b76b74d303e06d7.png@1c.webp',
  'https://i0.hdslb.com/bfs/vc/8ea0e95a8e5fc85ae227810925dba1ace1e9fcba.png@1c.webp',
  'https://i0.hdslb.com/bfs/vc/c13ca9c6405c71bf864ed2bc421680cb437f45ef.png@1c.webp',
  'https://i0.hdslb.com/bfs/vc/142a486b8dd500a626a60b68ad993af8dabc8b55.png@1c.webp',
  'https://i0.hdslb.com/bfs/vc/ce8c5e45230a6d3805baf60f5916f1cd441aac8e.png@1c.webp',
  'https://i0.hdslb.com/bfs/vc/cbf19f3682dfb02e62557d07fefaf241a80296a1.png@1c.webp',
  'https://i0.hdslb.com/bfs/vc/7998ca9f0bc267375fb7b45f75626d96806f94d7.png@1c.webp',
  'https://i0.hdslb.com/bfs/vc/198efffbc58493300854c04ab0ea8d979a6f9223.png@1c.webp',
  'https://i0.hdslb.com/bfs/vc/bb6266e1525a51f7920fc8881e47cadeee271b0c.png@1c.webp',
  'https://i0.hdslb.com/bfs/vc/cd68251cde11936871237ca94360acb451bf7ed2.png@1c.webp',
  'https://i0.hdslb.com/bfs/vc/a43c6833d262301373234ffbd6934559d2ce7fb2.png@1c.webp',
]
const blobUrl = ref<string>('')

fetch('https://i0.hdslb.com/bfs/vc/4a4c1f6b2977478c73e41f39a2910c3b3c33167e.webm', {referrerPolicy: 'no-referrer'})
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.blob();
    })
    .then(blob => {
      blobUrl.value = URL.createObjectURL(blob)
    })

</script>

<style scoped>

</style>
