<template>
  <div class="flex-1 h-16 text-[#18191C]">
    <div class="flex flex-col w-full mt-3">
      <div
          :class="isClick?' rounded-t-md':'rounded-md'"
          class="flex items-center justify-between z-10 text-[#61666d] bg-[#f1f2f3] px-[5px] h-10 min-w-[181px] transition-colors duration-[.3s] max-w-[500px] hover:bg-white hover:opacity-100 opacity-90">
        <div
            :class="isClick?'bg-[#e3e5e7]':''"
            class="flex items-center justify-between rounded-md w-full cursor-pointer text-white hover:text-[#fff] py-1.5 px-[9.6px] mr-2">
          <input
              :title="defaultSearch"
              v-model="searchValue"
              @focus="searchFocus"
              @blur="searchBlur"
              @input="searchInput"
              @keydown.up.prevent="selectSuggestion('up')"
              @keydown.down.prevent="selectSuggestion('down')"
              :placeholder="defaultSearch"
              class="w-full border-none text-[#000] leading-5 focus:outline-none bg-transparent">
          <clean-svg @mousedown.prevent="clear" v-show="isEdit" class="text-[#c9ccd0] hover:text-[#636B74]"/>
        </div>
        <div
            class="min-w-8 h-8 rounded-md hover:bg-[#e3e5e7] flex items-center justify-center cursor-pointer">
          <search-svg/>
        </div>
      </div>
      <div v-if="isClick" class="text-sm max-h-[612px] pb-[5px]  bg-white rounded-b-lg">
        <div v-show="!isEdit" class="pt-[13px] pb-[15px]">
          <div class="px-4 leading-6 text-[16px] font-medium">bilibili热搜</div>
          <div class="flex items-center h-[38px] pl-4 hover:bg-[#e3e5e7] cursor-pointer"
               v-for="(i,index) in trendingList">
            <span class="leading-[17px] mr-1.5">{{ index + 1 }}</span>
            <span class="leading-[17px] mr-1.5">{{ i.show_name }}</span>
            <Image :src="i.icon" class="h-4"/>
          </div>
        </div>
        <div ref="suggestion" v-show="isEdit" class="mt-[13px] mb-3">
          <div v-for="(i,index) in suggestList" v-html="i.name"
               @click="clickSuggestion(i.value)"
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
import {getDefaultSearch, getSearchSuggest, getTrendingList} from "@/api/serach.ts";
import Image from "@/components/Image.vue";

const searchValue = ref('')
const defaultSearch = ref('')
const isEdit = ref(false)
const isClick = ref(false)
const trendingList = ref<TrendingItem[]>([])
const suggestList = ref<SuggestItem[]>([])
const selectIndex = ref(-1)

const searchFocus = () => {
  isClick.value = true
}
const searchBlur = () => {
  selectIndex.value = -1
  isClick.value = false
}
const searchInput = (e: Event) => {
  selectIndex.value = -1
  let data = (e.target as HTMLInputElement).value
  isEdit.value = data !== ''
  getSearchSuggest(data as string).then((data) => {
    suggestList.value = data.result.tag
  })
}
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
const clickSuggestion = (e:string) => {
  console.log(e)
  searchValue.value = e
}

getDefaultSearch().then(({data}) => {
  defaultSearch.value = data.show_name
})
getTrendingList().then(({data}) => {
  trendingList.value = data.trending.list
})


interface TrendingItem {
  goto: string
  icon: string,
  keyword: string,
  show_name: string,
  uri: string,
}

interface SuggestItem {
  value: string,
  term: string,
  ref: number,
  name: string,
  spid: number,
  type: string
}
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
