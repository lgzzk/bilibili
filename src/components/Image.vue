<template>
  <img ref="imgRef" :src="src" referrerPolicy=no-referrer :alt="alt"/>
</template>

<script setup lang="ts">

defineProps<{
  src: string
  alt?: string
}>()

</script>

<style scoped>

</style>
