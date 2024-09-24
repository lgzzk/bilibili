<template>
  <div>
    <div class="loading_animation pt-[56.25%] rounded-md"></div>
    <div class="mt-2.5 *:rounded *:h-[18px]">
      <p class="loading_animation w-[94%] mb-1"></p>
      <p class="loading_animation w-[72%] mb-3"></p>
      <p class="loading_animation w-[50%] mb-3"></p>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.loading_animation {
  background: linear-gradient(-45deg, #f1f2f3 25%, #ffffff 45%, #f1f2f3 65%);
  background-size: 400% 100%;
  animation: skeleton-loading 1.2s ease-in-out infinite;
}

@keyframes skeleton-loading {
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
</style>
