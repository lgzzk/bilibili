<template>
  <div class="flex items-center w-full h-[46px] px-[12px] text-[13px] text-[#61666d] bg-white bar-shadow">
    <span class="mr-6 shrink-0">
      {{ onlineTotal?.total || '-' }} 人正在看，已填装
      {{ danmakuList?.length || '-' }}
      <template v-if="danmakuList?.length"> 条弹幕</template>
    </span>
    <div class="flex cursor-pointer">
      <div @click="isOn = !isOn" class="mr-3 w-6 h-6 hover:text-[#00aeec]">
        <danmaku-switch-on-svg v-if="isOn"/>
        <danmaku-switch-off-svg v-else/>
      </div>
      <danmaku-setting-svg
          :class="{'hover:text-[#00aeec]': isOn, 'opacity-40': !isOn}"
          class="w-6 h-6 mr-3"/>
    </div>
    <div class="flex rounded-lg overflow-hidden w-full h-[32px] bg-[#f1f2f3]">
      <div class="flex items-center h-full w-full">
        <danmaku-type-svg
            v-if="isOn"
            class="shrink-0 ml-1.5 w-6 cursor-pointer hover:text-[#00aeec]"/>
        <input
            v-if="isOn"
            class="text-[#18191C] w-full px-[5px] h-7 border-none focus:outline-none bg-transparent"
            placeholder="发个友善的弹幕见证当下">
        <div v-else class="ml-[6px] w-full text-[#999]">已关闭弹幕</div>
        <a
            class="flex items-center mr-[5px] text-[#9499A0] hover:text-[#00aeec] transition-all duration-300 text-nowrap"
            target="_blank"
            href="https://www.bilibili.com/blackboard/help.html">
          弹幕礼仪
          <arrow-svg class="ml-1 w-[11px]"/>
        </a>
      </div>
      <div
          :class="`sent-button-${isOn ? 'on' : 'off'}`"
          class="flex items-center justify-center shrink-0 w-[62px] h-full cursor-pointer">
        发送
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {OnlineTotal} from "@/api/types/video.ts";
import {inject, ref, Ref} from "vue";
import {SimpleDanmaku} from "@/api/types/danmaku.ts";
import DanmakuSwitchOnSvg from "@/assets/icon/danmaku-switch-on.svg";
import DanmakuSwitchOffSvg from "@/assets/icon/danmaku-switch-off.svg";
import DanmakuSettingSvg from "@/assets/icon/danmaku-setting.svg";
import DanmakuTypeSvg from "@/assets/icon/danmaku-type.svg";
import ArrowSvg from "@/assets/icon/arrow.svg";

defineProps<{ onlineTotal: OnlineTotal | null }>()
const isOn = ref(true)
const danmakuList = inject<Ref<SimpleDanmaku[]> | null>('danmakuList')

</script>

<style scoped>
.bar-shadow {
  box-shadow: 0 0 8px #dcdcdc;
}

input::placeholder {
  color: #757575;
}

.sent-button-on {
  @apply text-white bg-[#00aeec];
}

.sent-button-off {
  @apply text-[#9499A0] bg-[#E3E5E7];
}
</style>
