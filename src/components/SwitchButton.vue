<template>
  <div
      @click="toggle"
      :style="{backgroundColor: modelValue ? '#00aeec' : '#e3e5e7'}"
      class="flex items-center w-[30px] h-[20px] rounded-[10px] transition-all duration-200 cursor-pointer">
    <div
        :style="{transform: modelValue ? 'translateX(12px)' : 'translateX(2px)'}"
        class="w-[16px] h-[16px] bg-white rounded-full transition-all duration-200"></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()


const toggle = () => {
  emit('update:modelValue', !props.modelValue)
}
</script>
