<template>
  <img :src="src" referrerPolicy=no-referrer />
</template>

<script setup lang="ts">
defineProps({
  src: String
})
</script>

<style scoped>

</style>
