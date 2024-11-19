<template>
  <div class="flex items-center w-full h-[46px] px-[12px] text-[#61666d] bg-white">
    <span class="text-[13px] mr-6">
      {{ onlineTotal?.total || '-' }}人正在看，已填装
      {{ danmakuList?.length || '-' }}
    </span>
    <div class="flex cursor-pointer hover:text-[#00aeec]">
      <div @click="isOn = !isOn" class="mr-3">
        <danmaku-switch-on-svg v-if="isOn" class="w-[24px] h-[24px]"/>
        <danmaku-switch-off-svg v-else class="w-[24px] h-[24px]"/>
      </div>
      <danmaku-setting-svg class="w-[24px] h-[24px]"/>
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

defineProps<{ onlineTotal: OnlineTotal | null }>()
const isOn = ref(false)
const danmakuList = inject<Ref<SimpleDanmaku[]> | null>('danmakuList')

</script>

<style scoped>

</style>
