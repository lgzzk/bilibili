<template>
  <div
      class="flex items-center w-[92px] mr-2 cursor-pointer transition-all duration-300 hover:text-[#00aeec] select-none">
    <component :is="icon" class="w-7 h-7 mr-2"/>
    <span class="">{{ formatMillion(value) }}</span>
  </div>
</template>

<script setup lang="ts">

import {formatMillion} from "@/utils/format";

defineProps<{ icon: object | string, value: number }>()
</script>

<style scoped>

</style>
