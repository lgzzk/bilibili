<template>
  <svg aria-hidden="true">
    <use :xlink:href="href"></use>
  </svg>
</template>

<script setup lang="ts">
defineProps<{href: string}>()
</script>

<style scoped>

</style>
