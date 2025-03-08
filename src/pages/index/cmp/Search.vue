<template>
  <div
      @click.stop
      class="flex-1 h-16 text-[#18191C] max-w-[500px]">
    <div class="flex flex-col mt-3 border border-[#e3e5e7] rounded-lg overflow-hidden">
      <div
          class="flex items-center justify-between z-10 text-[#61666d] bg-[#f1f2f3] px-[5px] h-10 min-w-[250px] transition-colors duration-[.3s] max-w-[500px] hover:bg-white hover:opacity-100 opacity-90">
        <div
            :class="isClick?'bg-[#e3e5e7]':''"
            class="flex items-center justify-between rounded-md w-full cursor-pointer text-white hover:text-[#fff] py-1.5 px-[9.6px] mr-2">
          <input
              :title="defaultSearch"
              v-model="searchValue"
              @focus="searchFocus"
              @input="searchInput"
              @keydown.enter.prevent="goToSearch(searchValue)"
              @keydown.up.prevent="selectSuggestion('up')"
              @keydown.down.prevent="selectSuggestion('down')"
              :placeholder="defaultSearch"
              class="w-full border-none text-[#000] leading-5 focus:outline-none bg-transparent">
          <clean-svg @mousedown.prevent="clear" v-show="searchValue" class="text-[#c9ccd0] hover:text-[#636B74]"/>
        </div>
        <div
            @click="goToSearch(searchValue || defaultSearch)"
            class="min-w-8 h-8 rounded-md hover:bg-[#e3e5e7] flex items-center justify-center cursor-pointer">
          <search-svg/>
        </div>
      </div>
      <div v-if="isClick" class="text-sm w-full max-h-[612px] pb-[5px] bg-white">
        <div v-show="!isEdit" class="pt-[13px] pb-[15px]">
          <div class="px-4 leading-6 text-[16px] font-medium">bilibili热搜</div>
          <div
              @click="goToSearch(i.show_name)"
              v-for="(i,index) in trendingList"
              class="flex items-center h-[38px] pl-4 hover:bg-[#e3e5e7] cursor-pointer">
            <span class="leading-[17px] mr-1.5 min-w-[15px]">{{ index + 1 }}</span>
            <span class="leading-[17px] mr-1.5">{{ i.show_name }}</span>
            <Image :src="i.icon" class="h-4"/>
          </div>
        </div>
        <div ref="suggestion" v-show="isEdit" class="mt-[13px] mb-3">
          <div v-for="(i,index) in suggestList" v-html="i.name"
               @click="goToSearch(i.value)"
               :class="index === selectIndex?'bg-[#e3e5e7]':''"
               class="px-4 mb-1 leading-8 text-sm cursor-pointer hover:bg-[#e3e5e7]"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import CleanSvg from '@/assets/icon/clean.svg'
import SearchSvg from '@/assets/icon/search.svg'
import {getDefaultSearch, getSearchSuggest, getTrendingList} from "@/api/search";
import Image from "@/components/Image.vue";
import {type Fn, useDebounceFn, useEventListener} from '@vueuse/core'
import type {SuggestItem, TrendingItem} from "@/api/types/serach";

const searchValue = ref('')
const defaultSearch = ref('')
const isEdit = ref(false)
const isClick = ref(false)
const trendingList = ref<TrendingItem[]>([])
const suggestList = ref<SuggestItem[]>([])
const selectIndex = ref(-1)
let otherClickEvent: Fn | null;

const searchFocus = () => {
  isClick.value = true
  addEvent()
}

const debounceFn = useDebounceFn((e: Event) => {
  selectIndex.value = -1
  let data = (e.target as HTMLInputElement).value
  isEdit.value = data !== ''
  getSearchSuggest(data as string).then(data => {
    suggestList.value = data
  })
})

const searchInput = (e: Event) => debounceFn(e)
const clear = () => {
  searchValue.value = ''
  isEdit.value = false
}
const selectSuggestion = (e: string) => {
  if (e === 'up' && selectIndex.value > 0)
    selectIndex.value--
  if (e === 'down' && selectIndex.value < 9) {
    selectIndex.value++
  }
  if (selectIndex.value === -1) selectIndex.value = 0
  searchValue.value = suggestList.value[selectIndex.value].value

}
const addEvent = () => {
  if (!otherClickEvent) {
    otherClickEvent = useEventListener(document, 'click', _ => {
      isClick.value = false
      selectIndex.value = -1
      removeEvent()
    })
  }
}
const removeEvent = () => {
  if (otherClickEvent) otherClickEvent()
  otherClickEvent = null
}
const goToSearch = (key: string) => {
  searchValue.value = key
  setTimeout(_ =>
      window.open(`https://search.bilibili.com/all?keyword=${key}`), 80)
}

getDefaultSearch().then(data => {
  defaultSearch.value = data.show_name
})
getTrendingList().then(data => {
  trendingList.value = data
})


</script>

<style scoped>
input::placeholder {
  color: #61666d;
}
</style>
<style>
.suggest_high_light {
  color: #f25d8e;
  font-style: normal;
}
</style>
