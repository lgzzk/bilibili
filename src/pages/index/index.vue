<template>
  <Header/>
  <div class="px-[60px]">
    <div class="grid grid-cols-5 col-end-auto col-start-5 gap-5">
    <Swiper class="col-span-2 row-span-2"/>
      <VideoCard v-for="i in recmdList" :video="i"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "@/pages/index/cmp/Header.vue";
import Swiper from "@/pages/index/cmp/Swiper.vue";
import {getRecommendVideo, VideoItem} from "@/api/video.ts";
import {ref} from "vue";
import VideoCard from "@/components/VideoCard.vue";

const recmdList = ref<VideoItem[]>([])

getRecommendVideo().then(data => {
  recmdList.value = data
})


</script>

<style scoped>

</style>
