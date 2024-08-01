<template>
  <header-bar/>
  <Banner/>
  <header-channel/>
</template>

<script setup lang="ts">

import Banner from "@/pages/index/cmp/Banner.vue";
import HeaderBar from "@/pages/index/cmp/HeaderBar.vue";
import HeaderChannel from "@/pages/index/cmp/HeaderChannel.vue";
</script>

<style scoped>
.icon {
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
