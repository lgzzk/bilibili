<template>
  <div class="flex-1 h-16">
    <div class="flex flex-col w-full mt-3">
      <div
          :class="isClick?' rounded-t-md':'rounded-md'"
          class="flex items-center justify-between z-10 text-[#61666d] bg-[#f1f2f3] px-1 h-10 min-w-[181px] transition-colors duration-[.3s] max-w-[500px] hover:bg-white hover:opacity-100 opacity-90">
        <div
            :class="isClick?'bg-[#e3e5e7]':''"
            class="flex items-center justify-between rounded-md w-full cursor-pointer text-white hover:text-[#fff] py-1.5 px-[9.6px] mr-2">
          <input
              v-model="searchValue"
              @focus="searchFocus"
              @blur="searchBlur"
              @input="searchInput"
              :placeholder="defaultSearch"
              class="w-full border-none text-[#000] leading-5 focus:outline-none bg-transparent">
          <clean-svg @mousedown.prevent="clear" v-show="isEdit" class="text-[#c9ccd0] hover:text-[#636B74]"/>
        </div>
        <div
            class="min-w-8 text-[#18191C] h-8 rounded-md hover:bg-[#e3e5e7] flex items-center justify-center cursor-pointer">
          <search-svg/>
        </div>
      </div>
      <div v-if="isClick" class="max-h-[612px] pt-[13px] pb-[15px] text-[#18191c] bg-white rounded-b-lg">
        <div class="px-4 leading-6 text-[16px] font-medium">bilibili热搜</div>
        <div class="flex items-center h-[38px] pl-4 hover:bg-[#e3e5e7] cursor-pointer"
             v-for="(i,index) in trendingList">
          <span class="leading-[17px] text-sm mr-1.5">{{ index + 1 }}</span>
          <span class="leading-[17px] text-sm mr-1.5">{{ i.show_name }}</span>
          <img class="h-4" referrerPolicy=no-referrer :src="i.icon">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import httpApi from "@/utils/request";
import CleanSvg from '@/assets/icon/clean.svg'
import SearchSvg from '@/assets/icon/search.svg'

const searchValue = ref('')
const defaultSearch = ref('')
const isEdit = ref(false)
const isClick = ref(false)
const trendingList = ref<TrendingItem[]>([])

const searchFocus = () => {
  isClick.value = true
}
const searchBlur = () => {
  isClick.value = false
}
const searchInput = (e) => {
  isEdit.value = true
  httpApi(`search/main/suggest?func=suggest&suggest_type=accurate&sub_type=tag&main_ver=v1&highlight=&userid=&bangumi_acc_num=1&special_acc_num=1&topic_acc_num=1&upuser_acc_num=3&tag_num=10&special_num=10&bangumi_num=10&upuser_num=3&term=${e.target.value}&rnd=0.9941034137736526&buvid=6326C827-4CBC-68B2-70AC-5F6921FC488118553infoc&spmid=333.1007`)
      .then(({data}) => {
        console.log(data)
      })
  // console.log(typeof e)
  console.log()
}
const clear = () => {
  searchValue.value = ''
  isEdit.value = false
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
input::placeholder {
  color: #61666d;
}
</style>
