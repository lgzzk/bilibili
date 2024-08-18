<template>
  <div class="w-full h-16 px-6 flex items-center justify-between absolute top-0 z-10 max-w-[2560px] text-white text-sm ">
    <div class="flex shrink-0 mr-[30px] space-x-[15px] last:mr-0 leading-[64px]">
      <a class="flex items-center" href="https://www.bilibili.com" target="_blank">
        <zhu-zhan-svg class="mr-1.5 "/>
        <span>首页</span>
      </a>
      <a class="hover:animate-jump" href="https://www.bilibili.com/anime/" target="_blank">
        <span>番剧</span>
      </a>
      <a class="hover:animate-jump" href="https://live.bilibili.com" target="_blank">
        <span>直播</span>
      </a>
      <a class="hover:animate-jump" href="https://game.bilibili.com/platform" target="_blank">
        <span>游戏中心</span>
      </a>
      <a class="hover:animate-jump" href="https://show.bilibili.com/platform/home.html" target="_blank">
        <span>会员购</span>
      </a>
      <a class="hover:animate-jump" href="https://manga.bilibili.com/" target="_blank">
        <span>漫画</span>
      </a>
      <a class="hover:animate-jump" href="https://www.bilibili.com/match/home" target="_blank">
        <span>赛事</span>
      </a><a class="hover:animate-jump" href="https://live.bilibili.com/blackboard/foreverlove.html" target="_blank">
      <span>仙侠夜</span>
    </a>
      <!--      <a class="hover:animate-jump" href="https://www.bilibili.com/blackboard/era/talentweb.html?auto_media_playback=1"-->
      <!--         target="_blank">-->
      <!--        <span>竞技赛</span>-->
      <!--      </a>-->
      <!--      <a href="https://www.bilibili.com/blackboard/era/SD1WyAhaIqHA1W16.html" target="_blank">-->
      <!--        <span>去巴黎</span>-->
      <!--      </a>-->
      <a class="flex items-center" href="https://app.bilibili.com" target="_blank">
        <download-svg class="mr-1.5"/>
        <span>下载客户端</span>
        <span class="new-icon"></span>
      </a>
    </div>
    <Search/>
    <div id="bar" class="flex shrink-0 items-center ml-2.5 *:cursor-pointer text-[13px] text-center">
      <div class="flex justify-center">
        <div class="rounded-[50%] bg-[#00aeec] mr-1 text-sm leading-9 h-9 w-9">
          <span>登录</span>
        </div>
      </div>
      <div class="bar-item group">
        <big-svg class="group-hover:animate-jump"/>
        <span>大会员</span>
      </div>
      <div class="bar-item group">
        <message-svg class="group-hover:animate-jump"/>
        <span>消息</span>
      </div>
      <div class="bar-item group">
        <dynamic-svg class="group-hover:animate-jump"/>
        <span>动态</span>
      </div>
      <div class="bar-item group">
        <favorite-svg class="group-hover:animate-jump"/>
        <span>收藏</span>
      </div>
      <div class="bar-item group">
        <history-svg class="group-hover:animate-jump"/>
        <span>历史</span>
      </div>
      <div class="bar-item group">
        <creation-svg class="group-hover:animate-jump"/>
        <span>创作中心</span>
      </div>
      <div class="flex items-center justify-center rounded-lg ml-1.5 bg-[#fb7299] text-sm w-[90px] h-[34px]">
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

#bar > * {
  @apply min-w-[50px] mx-[5px]
}

@media (max-width: 1448px) {
  #bar > * {
    @apply min-w-[25px]
  }
}

@media (max-width: 1331px) {
  .bar-item span {
    @apply hidden
  }

  #bar > :last-child span {
    @apply hidden
  }

  #bar > :last-child * {
    @apply m-0
  }

  #bar > :last-child {
    @apply w-[34px] h-[34px]
  }
}

</style>
