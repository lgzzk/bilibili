<template>
  <div class="flex items-center">
    <Image  class="h-[48px] w-[48px]" v-if="owner" :src="owner?.face"/>
    <div>
      <span class="text-[15px]">{{ owner?.name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">

import Image from "@/components/Image.vue";
import {Owner} from "@/api/video.ts";

defineProps<{owner: Owner | null}>()
</script>

<style scoped>

</style>
