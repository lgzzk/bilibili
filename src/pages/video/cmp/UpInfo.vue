<template>
  <div class="flex items-center text-[13px] w-full h-[104px]">
    <a
        :href="`https://space.bilibili.com/${videoView?.owner?.mid}`"
        target="_blank"
        class="relative">
      <Image class="h-[48px] w-[48px] rounded-full" v-if="videoView?.owner" :src="videoView.owner?.face"/>
      <Image
          v-if="showVerifyIcon"
          class="w-[18px] absolute bottom-0 right-0"
          src="https://i0.hdslb.com/bfs/seed/jinkela/short/user-avatar/personal.svg"/>
    </a>
    <div class="flex flex-1 flex-col ml-3 ">
      <div class="flex items-center">
        <a
            v-if="isLiving"
            :href="`https://live.bilibili.com/${getLiveUrl}`"
            target="_blank"
            class="text-[#ff6699] text-[12px] px-[6px] mr-1 leading-4 border border-[#ff6699] rounded-[9px]">
          直播中
        </a>
        <a
            :href="`https://space.bilibili.com/${videoView?.owner?.mid}`"
            target="_blank"
            class="text-[15px] text-[#FB7299] font-medium mr-3">{{ videoView?.owner?.name }}</a>
        <div class="text-[#61666d] hover:text-[#00aeec] cursor-pointer">
          <i class="message-icon"></i>
          发消息
        </div>
      </div>
      <span
          class="overflow-hidden whitespace-nowrap text-ellipsis leading-4 max-w-[38ch] text-[#9499a0]">
        {{ upCard?.card.sign }}
      </span>
      <div class="flex mt-[5px] text-[14px]">
        <div class="flex items-center justify-center mr-3 w-[109px] h-[30px] hover:bg-[#ffecf1]
                    border border-[#ff6699] text-[#ff6699] rounded-md cursor-pointer transition-all duration-300">
          <Image
              class="w-5 h-5 mr-1"
              src="https://i0.hdslb.com/bfs/garb/item/33e2e72d9a0c855f036b4cb55448f44af67a0635.png@.webp"/>
          充电
        </div>
        <div class="flex-auto flex justify-center items-center transition-all duration-300
                    h-[30px] text-white bg-[#00aeec] cursor-pointer rounded-md hover:bg-[#00b8f6]">
          <follow-svg class="w-4 h-4 mr-1"/>
          关注
          {{ formatMillion(upCard?.card.fans || 0) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import Image from "@/components/Image.vue";
import {computed} from "vue";
import FollowSvg from "@/assets/icon/follow.svg";
import {formatMillion} from "@/utils/format";
import type {UpCard} from "@/api/types/card";
import type {LiveRoomInfo} from "@/api/types/live";
import type {VideoView} from "@/api/types/video";

const props = defineProps<{
  upCard: UpCard | null
  videoView: VideoView | null
  liveRoomInfo: LiveRoomInfo | null
}>()

const showVerifyIcon = computed(() =>
    props.upCard && props.upCard.card.official_verify.type !== -1
)
const isLiving = computed(() => {
  return Object.keys(props.liveRoomInfo?.by_uids || {}).length > 0
})
const getLiveUrl = computed(() => {
  if (props.liveRoomInfo) {
    let uid = Object.keys(props.liveRoomInfo.by_uids)[0]
    return props.liveRoomInfo.by_uids[uid].room_id
  }
})


</script>

<style scoped>
@font-face {
  font-family: vanfont;
  src: url(//s1.hdslb.com/bfs/static/jinkela/video/asserts/iconfont.6401a86.ttf) format("truetype")
}

.message-icon:before {
  content: "\E6E5";
  height: 13px;
  width: 13px;
  display: inline-block;
  font-style: normal;
  font-family: "vanfont";
}

</style>
