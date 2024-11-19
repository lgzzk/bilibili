<template>
  <div
      v-if="videoPlayConfig"
      class="flex items-center absolute bottom-3 left-3 bg-[#212121e6] text-white p-3 rounded-md">
    <div>
      <p class="text-[15px] font-medium leading-[21px]">{{ videoPlayConfig?.elec_high_level.title }}</p>
      <p class="text-[12px] leading-[17px] mt-[3px]">{{ videoPlayConfig?.elec_high_level.sub_title }}</p>
    </div>
    <div class="flex justify-center items-center bg-[#ff6699] cursor-pointer
                  rounded-[4px] ml-[47px] h-[30px] pl-[6px] pr-[11px]">
      <electricity-svg class="mr-0.5"/>
      <span>去开通</span>
    </div>
  </div>
</template>

<script setup lang="ts">

import ElectricitySvg from "@/assets/icon/electricity.svg";
import {VideoPlayConfig} from "@/api/types/video.ts";

defineProps<{ videoPlayConfig: VideoPlayConfig | null }>()
</script>

<style scoped>

</style>
