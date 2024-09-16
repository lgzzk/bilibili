<template>
  <div
      class="w-full h-16 px-6 flex items-center justify-between absolute top-0 z-10 max-w-[2560px] text-white text-sm">
    <div id="bar-left" class="flex items-center mr-[30px] shrink-0 space-x-[15px] last:mr-0 leading-[64px]">
      <a class="flex items-center" href="/bilibili">
        <zhu-zhan-svg class="mr-1.5 "/>
        <span>首页</span>
      </a>
      <a
          v-for="i in barItems"
          :href="i.uri"
          class="hover:animate-jump" target="_blank">
        <span>{{ i.title }}</span>
      </a>
      <a v-if="headerBar" :href="headerBar.url" target="_blank" class="w-[54px] overflow-hidden h-16">
        <div class="h-[160px]  animate-slider">
          <span class="text-center inline-block w-full">{{ headerBar.name }}</span>
          <Image :src="headerBar.pic"/>
          <span class="text-center inline-block w-full">{{ headerBar.name }}</span>
        </div>
      </a>
      <a class="flex items-center" href="https://app.bilibili.com" target="_blank">
        <download-svg class="mr-1.5"/>
        <span>下载客户端</span>
        <span class="new-icon"></span>
      </a>
    </div>
    <Search/>
    <div id="bar-right" class="flex shrink-0 items-center ml-2.5 *:cursor-pointer text-[13px] text-center">
      <div class="flex justify-center text-white">
        <div class="rounded-[50%] bg-[#00aeec] mr-1 text-sm leading-9 h-9 w-9">
          <span>登录</span>
        </div>
      </div>
      <div v-for="i in barItems_right" class="bar-item group">
        <component :is="i.icon" class="group-hover:animate-jump"/>
        <span>{{ i.title }}</span>
      </div>
      <div class="flex items-center justify-center rounded-lg ml-1.5 bg-[#fb7299] text-sm w-[90px] text-white h-[34px]">
        <upload-svg class="mr-[5px]"/>
        <span>投稿</span>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">

import Search from "@/pages/index/cmp/Search.vue";
import ZhuZhanSvg from '@/assets/icon/zhuhan.svg'
import DownloadSvg from '@/assets/icon/download.svg'
import BigSvg from '@/assets/icon/big.svg'
import MessageSvg from '@/assets/icon/message.svg'
import DynamicSvg from '@/assets/icon/dynamic.svg'
import FavoriteSvg from '@/assets/icon/favorite.svg'
import HistorySvg from '@/assets/icon/history.svg'
import CreationSvg from '@/assets/icon/creation.svg'
import UploadSvg from '@/assets/icon/upload.svg'
import {getHeaderBar, HeaderBarItem} from "@/api/header.ts";
import {ref} from "vue";
import Image from "@/components/Image.vue";


interface BarItem {
  title: string
  uri: string
  icon?: string
}

const barItems = ref<BarItem[]>(
    [
      {
        title: '番剧',
        uri: 'https://www.bilibili.com/anime/'
      }, {
      title: '直播',
      uri: 'https://live.bilibili.com'
    }, {
      title: '游戏中心',
      uri: 'https://game.bilibili.com/platform'
    }, {
      title: '会员购',
      uri: 'https://show.bilibili.com/platform/home.html'
    }, {
      title: '漫画',
      uri: 'https://manga.bilibili.com/'
    }, {
      title: '赛事',
      uri: 'https://www.bilibili.com/match/home'
    }
    ]
)
const barItems_right: BarItem[] = [
  {
    title: '大会员',
    uri: '',
    icon: BigSvg
  }, {
    title: '消息',
    uri: '',
    icon: MessageSvg
  }, {
    title: '动态',
    uri: '',
    icon: DynamicSvg
  }, {
    title: '收藏',
    uri: '',
    icon: FavoriteSvg
  }, {
    title: '历史',
    uri: '',
    icon: HistorySvg
  }, {
    title: '创作中心',
    uri: '',
    icon: CreationSvg
  }
]
const headerBar = ref<HeaderBarItem>()

getHeaderBar().then(data => {
  data.forEach(i => {
    if (i.pic === "") {
      barItems.value.push({title: i.name, uri: i.url} as BarItem)
    } else headerBar.value = i
  })
})
</script>

<style scoped>
.bar-item {
  @apply flex flex-col justify-center items-center;
}

.new-icon {
  display: inline-block;
  width: 17px;
  height: 14px;
  margin-left: 4px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAcCAYAAAAEN20fAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAO6SURBVHgBvVc9bBRHFP7e7NnofI0LnNabEmiCEiVdcnSJKGywD13+JKeKlBRR+ki+SKRKESKFCCpAAnHiMJgCRMcBHT+yG+ySNR0cxTW2gdudx3uzt3dn7Nv12YZPOt3OzJuZN+/nmzeEbWD9h+miF2GCCUX5+WCMpk4gNGGxaIDFiHEjX71az9hCpqQp8F1pRgRmAfaxK3BgCJXhS3MXMIgi6+Wyb0x4nYFPsKfggG10JF+dD94dMdikxPEZ8sKFvVdCQT6Z3MLrb6cmN430NlSAia7jA8Awzwxf7rqqYxF1Bxs6lzaZxj/G8L+n4R0vIQs0UoD39VHQ2EdbjluiU+vlST9p5zoTTXSnXzaYL4u9W8D75ij4ZaPTw48eiMwRUdQHRkZgfB+0P1YgOnAQ4T9/b7XsqDE5tf7heFUk2cF9rbHvUg1peHNyFkM//woUCsDqKuzKCtB4Dru8BF5+Al5b6zvXkLhIsinX1mY2baOWbGQOHHIbWTm9myNuovFx2Ht1YCVwfRwEaP1VwSCwjIr8XTBKVlk8oSejg4eci/TbtcUNnriDG43UE2eD/PXydDHnMSZslqhYg2VztYqnysjmRhSzYnZIMBK1k68w4mQ3QeKJGy/6ru8RJujV99MapMW+SoyNYfjU/0hD68xp5KZKfTNEx+39etoSizlRIp24VtfQOvtfp6nuUMv09qm1gJI7dSQxQ4U4dXnlKaJHD8HPAmTA12BNvcB4bRVYWu52fPpF3N/Tl6Syxkt0reasqIpo9mh7GxjNbUdq6I/ZTWZXYkvw5rdfsFuoIk1kWCW6fcsRlcL77HOXMeHcla6AWE0VVYvsEE0jAR9kSUW3bzrKZuELm3BGO4WtjCVXlsbEjsASrLJEPeum1dMqreuMXqh1HHMqkwIbaH8QaAFlIsKNTEG5LxTR44edPuUQzRIjyiR3keOVHYBA8yZ/Uco4piBN0Js64TaN07SLUGLHLj1x5ObG25YZCMzB0OXaXRN/489+ckbuFBUI52py/Z9wmybQ+HCxsn/Mje8EokCl/Q/kq7XzEiuLWwlaCcDWyYpjRiOXXKxUN2PUHdp+lzkdpctNnAqxRlIcdSo0LYzIhAvISOU9RJNteDipXzsVWr5alcKWfscHAoX8U28RvaF4di5iPoaY5N4Xmlqv7rsyN9/b2fc5QSSlI+32PbMRJMRlOTy21XMi/YFVlhKSpHrbrUISlJodvVX7QIokaP1Y+opDnrRGGDguG7ICuikLB2KBupKV8kSGPN4C0oikKGkFJUIAAAAASUVORK5CYII=) center center no-repeat;
  background-size: cover;
}

#bar-right > * {
  @apply min-w-[50px] mx-[5px]
}

@media (max-width: 1448px) {


  #bar-right > * {
    @apply min-w-[25px]
  }
}

@media (max-width: 1331px) {
  .bar-item span {
    @apply hidden
  }

  #bar-left {
    @apply mr-2.5
  }

  #bar-right > :last-child span {
    @apply hidden
  }

  #bar-right > :last-child * {
    @apply m-0
  }

  #bar-right > :last-child {
    @apply w-[34px] h-[34px]
  }
}

.animate-slider {
  animation: slider 10s infinite ease-out;
  animation-delay: 4.5s;
}

@keyframes slider {
  0% {
    transform: translateY(0);
  }
  5% {
    transform: translateY(-50px);
  }
  50% {
    transform: translateY(-50px);
  }
  55% {
    transform: translateY(-100px);
  }
  100% {
    transform: translateY(-100px);
  }

}
</style>
