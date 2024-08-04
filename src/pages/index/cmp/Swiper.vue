<template>
  <div class="w-[547px] h-[391px] rounded-md overflow-x-hidden relative">
    <div
        :style="{transform: `translateX(${translateX}%)`}"
        class="flex z-10 w-full shrink-0 transition-all translate-x-[-900%] duration-300 ease-in-out">
      <Image v-for="i in swipes" :src="i.pic"></Image>
    </div>
    <a
        v-if="swipes.length"
        :href="swipes[-(translateX/100)].url"
        class="z-10 text-white text-lg absolute bottom-[42px] left-[15px] ">{{ swipes[-(translateX / 100)].name }}</a>
    <div class="flex items-end z-10 space-x-3 absolute bottom-[42px] right-[15px] ">
      <button @click="play(0)" class="arrow">
        <Arrow class="w-3 h-3 rotate-180"/>
      </button>
      <button @click="play(1)" class="arrow">
        <Arrow class="w-3 h-3"/>
      </button>
    </div>
    <div
        v-if="swipes.length"
        :style="{backgroundColor: swipes[-(translateX/100)].color}"
        class="w-full h-[780px] absolute bottom-0 mask">

    </div>
  </div>
</template>

<script setup lang="ts">
import {getRecommendSwipe, SwipeItem} from "@/api/swiper.ts";
import {ref} from "vue";
import Image from "@/components/Image.vue";
import Arrow from '@/assets/icon/arrow.svg'

const swipes = ref<SwipeItem[]>([])
const translateX = ref(0)

setInterval(()=>play(1),5000)
getRecommendSwipe().then(data => {
  swipes.value = data
  console.log(data)
})

const play = (e: number) => {
  let max = -100 * (swipes.value.length - 1)
  if (e === 0) {
    if (translateX.value === 0) translateX.value = max
    else translateX.value += 100
  }
  if (e === 1) {
    if (translateX.value === max) translateX.value = 0
    else translateX.value -= 100
  }
}

// interface SwipeItem {
//   id: number
//   title: string
//   pic: string
//   url: string
//   server_type: number
// }

// import * as cheerio from 'cheerio';
//
// async function getBannerData(url: string) {
//   try {
//     // 发起 HTTP 请求
//     const response = await fetch(url);
//     // 获取响应的 HTML 内容
//     const html = await response.text();
//     // 使用 cheerio 解析 HTML
//     // console.log(html)
//     const $ = cheerio.load(html);
//     const scriptContent = $('script').filter((_, el) => {
//       return $(el).html()?.includes('window.__INITIAL_DATA__');
//     }).html();
//     console.log(scriptContent)
//     let jsonDataStr = scriptContent.match(/window\.__INITIAL_DATA__\s*=\s*(\[[^\]]*\])/)[1];
//     jsonDataStr = jsonDataStr.replace(/\\u002F/g, '/');
//     console.log(jsonDataStr)
//     // let jsonData = JSON.parse(jsonDataStr);
//
// // 打印转换后的 JSON 对象
// //     console.log(jsonData);
//     // console.log($('script').text())
//     // 假设 banner 数据在某个特定的 div 中
//     // const bannerData: Banner[] = [];
//     // $('.bili-banner .bili-banner-item').each((i, elem) => {
//     //   bannerData.push({
//     //     title: $(elem).find('.title').text(),
//     //     image: $(elem).find('img').attr('src'),
//     //   });
//     // });
//
//     // return bannerData;
//   } catch (error) {
//     console.error('Error fetching banner data:', error);
//     return [];
//   }
// }
//
// // 调用函数并输出结果
// getBannerData('/host')


</script>

<style scoped>
.arrow {
  @apply bg-[#FFFFFF33] text-white w-7 h-7 rounded-lg flex items-center justify-center active:scale-95
}

.mask {
  -webkit-mask-image: linear-gradient(0, #2f3238 11%, transparent 20%)

}
</style>
