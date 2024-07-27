<template>
  <div class="flex flex-col w-full">
    <div
        class="flex items-center justify-between z-10 text-[#61666d] bg-[#f1f2f3] pl-1 pr-1 h-10 min-w-[181px] max-w-[500px] transition-all duration-200 hover:bg-white hover:opacity-100 rounded-md opacity-90">
      <div :class="searchClass"
           class="flex items-center justify-between w-full cursor-pointer text-white hover:text-[#fff] rounded-md py-1.5 px-[9.6px] mr-2">
        <input
            v-model="searchValue"
            @focus="searchFocus"
            @blur="searchBlur"
            @input="isEdit = true"
            :placeholder="defaultSearch"
            class="w-full border-none text-[#000] leading-5 focus:outline-none bg-transparent">
        <clean-svg @click="clear" v-show="isEdit"/>
      </div>
      <div
          class="min-w-8 text-[#18191C] h-8 rounded-md hover:bg-[#e3e5e7] flex items-center justify-center cursor-pointer">
        <search-svg/>
      </div>
      <!--      <div class="w-full max-h-[612px]">-->

      <!--      </div>-->
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import httpApi from "@/utils/request";
import CleanSvg from '@/assets/icon/clean.svg'
import SearchSvg from '@/assets/icon/search.svg'

const searchClass = ref('')
const searchValue = ref('')
const defaultSearch = ref('')
const isEdit = ref(false)
const trendingList = ref<TrendingItem[]>([])

const searchFocus = () => {
  searchClass.value = 'search-focus'
}
const searchBlur = () => {
  searchClass.value = ''
}
const clear = () => {
  isEdit.value = false
  searchValue.value = ''
}

httpApi('api/x/web-interface/search/default').then(({data}) => {
  defaultSearch.value = data.show_name
})
httpApi('api/x/web-interface/wbi/search/square?limit=10').then(({data}) => {
  trendingList.value = data.trending.list
})


interface TrendingItem {
  goto: string
  icon: string,
  keyword: string,
  show_name: string,
  uri: string,
}
</script>

<style scoped>
.search-focus {
  @apply bg-[#e3e5e7]
}
</style>
