<template>
  <div>
    <video ref="video" :src="videoSrc" loop controls preload="auto"></video>
  </div>
</template>


<script setup lang="ts">
import {getVideoPlayer, getVideoView} from "@/api/video.ts";
import {ref} from "vue";
import {getRange, setSourceBuffer} from "@/api/play.ts";

const props = defineProps({bvid: String})
const video = ref<HTMLVideoElement | null>(null)
const videoSrc = ref()
const mediaSource = new MediaSource();


getVideoView(props.bvid!).then(async data => {
  let videoPlayer = await getVideoPlayer(data);

  let videoList = videoPlayer.dash.video.filter(item => {
    let url = new URL(item.baseUrl)
    return !item.codecs.includes('hev') && url.pathname.startsWith('/v1')
  })
  videoList.forEach(video => {
    console.log(video.id, video.codecs, video.baseUrl)
  })

  let videoDash = videoList[0] || videoPlayer.dash.video[0]
  let audioDash = videoPlayer.dash.audio[2]

  videoSrc.value = URL.createObjectURL(mediaSource)
  mediaSource.addEventListener('sourceopen', handleSourceOpen);

  video.value?.addEventListener('error', (event) => {
    console.error('Video error occurred:', event);
  });

  async function handleSourceOpen() {
    let initSize = 300 * 1024
    let videoMaxRange = 0
    let audioMaxRange = 0
    let videoRange = 0
    let audioRange = 0

    const videoSourceBuffer = mediaSource.addSourceBuffer(`${videoDash.mimeType};codecs=${videoDash.codecs}`);
    const audioSourceBuffer = mediaSource.addSourceBuffer(`${audioDash.mimeType};codecs=${audioDash.codecs}`);

    [videoMaxRange, audioMaxRange] = await Promise.all([
      getRange(videoDash.baseUrl),
      getRange(audioDash.baseUrl)
    ])

    setSourceBuffer(videoDash.baseUrl, videoSourceBuffer, 0, initSize).then(
        data => videoRange = data)
    setSourceBuffer(audioDash.baseUrl, audioSourceBuffer, 0, initSize).then(
        data => audioRange = data)

    videoSourceBuffer.addEventListener('updateend', async () => {
      console.log(mediaSource.readyState, 'videoSourceBuffer')
      console.log(videoRange, videoMaxRange)
      if (videoRange < videoMaxRange) {
        videoRange += await setSourceBuffer(videoDash.baseUrl, videoSourceBuffer, videoRange, initSize + videoRange)
      }
    })

    audioSourceBuffer.addEventListener('updateend', async () => {
      console.log(mediaSource.readyState, 'audioSourceBuffer')
      console.log(audioRange, audioMaxRange)
      if (audioRange < audioMaxRange) {
        audioRange += await setSourceBuffer(audioDash.baseUrl, audioSourceBuffer, audioRange, initSize + audioRange)
      }
    })
  }
})

</script>

<style scoped>

</style>
