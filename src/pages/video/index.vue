<template>
  <div>
    {{ videoSrc }}
    <video controls autoplay :src="videoSrc"></video>
    <audio controls autoplay :src="audioSrc"></audio>
  </div>
</template>

<script setup lang="ts">
import {getVideoPlayer, getVideoView} from "@/api/video.ts";
import {ref} from "vue";

const props = defineProps({bvid: String})
const audioSrc = ref()
const videoSrc = ref()


getVideoView(props.bvid!).then(async data => {
  let videoPlayer = await getVideoPlayer(data);
  let videoUrl = new URL(videoPlayer.dash.video[2].baseUrl);
  let audioUrl = new URL(videoPlayer.dash.audio[2].baseUrl);

  const basePath = 'https://www.lgzzk.site/stream';
  videoSrc.value = getFinalUrl(videoUrl, basePath);
  audioSrc.value = getFinalUrl(audioUrl, basePath);
})

function getFinalUrl(url:URL, basePath:string) {
  if (url.pathname.startsWith('/v1')) {
    return url.href;
  } else {
    return `${basePath}${url.pathname}${url.search}`;
  }
}
</script>

<style scoped>

</style>
