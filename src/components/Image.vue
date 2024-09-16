<template>
  <img ref="imgRef" :src="src" referrerPolicy=no-referrer :alt="src"/>
</template>

<script setup lang="ts">
import {ref} from "vue";

defineProps({
  src: String
})
const imgRef = ref<HTMLImageElement | null>(null)

defineExpose({
  imgRef
});

</script>

<style scoped>

</style>
