<template>
  <div class="w-full h-16 px-6 flex items-center absolute top-0 z-10 text-white text-sm ">
    <div class="flex shrink-0 *:mr-[15px] leading-[64px]">
      <a class="flex items-center" href="https://www.bilibili.com" target="_blank">
        <svg class="mr-1.5" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M3.73252 2.67094C3.33229 2.28484 3.33229 1.64373 3.73252 1.25764C4.11291 0.890684 4.71552 0.890684 5.09591 1.25764L7.21723 3.30403C7.27749 3.36218 7.32869 3.4261 7.37081 3.49407H10.5789C10.6211 3.4261 10.6723 3.36218 10.7325 3.30403L12.8538 1.25764C13.2342 0.890684 13.8368 0.890684 14.2172 1.25764C14.6175 1.64373 14.6175 2.28484 14.2172 2.67094L13.364 3.49407H14C16.2091 3.49407 18 5.28493 18 7.49407V12.9996C18 15.2087 16.2091 16.9996 14 16.9996H4C1.79086 16.9996 0 15.2087 0 12.9996V7.49406C0 5.28492 1.79086 3.49407 4 3.49407H4.58579L3.73252 2.67094ZM4 5.42343C2.89543 5.42343 2 6.31886 2 7.42343V13.0702C2 14.1748 2.89543 15.0702 4 15.0702H14C15.1046 15.0702 16 14.1748 16 13.0702V7.42343C16 6.31886 15.1046 5.42343 14 5.42343H4ZM5 9.31747C5 8.76519 5.44772 8.31747 6 8.31747C6.55228 8.31747 7 8.76519 7 9.31747V10.2115C7 10.7638 6.55228 11.2115 6 11.2115C5.44772 11.2115 5 10.7638 5 10.2115V9.31747ZM12 8.31747C11.4477 8.31747 11 8.76519 11 9.31747V10.2115C11 10.7638 11.4477 11.2115 12 11.2115C12.5523 11.2115 13 10.7638 13 10.2115V9.31747C13 8.76519 12.5523 8.31747 12 8.31747Z"
                fill="currentColor"></path>
        </svg>
        <span>首页</span>
      </a>
      <a href="https://www.bilibili.com/anime/" target="_blank">
        <span>番剧</span>
      </a>
      <a href="https://live.bilibili.com" target="_blank">
        <span>直播</span>
      </a>
      <a href="https://game.bilibili.com/platform" target="_blank">
        <span>游戏中心</span>
      </a>
      <a href="https://show.bilibili.com/platform/home.html" target="_blank">
        <span>会员购</span>
      </a>
      <a href="https://manga.bilibili.com/" target="_blank">
        <span>漫画</span>
      </a>
      <a href="https://www.bilibili.com/match/home" target="_blank">
        <span>赛事</span>
      </a>
      <a class="flex items-center" href="https://app.bilibili.com" target="_blank">
        <svg class="mr-1.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M7.23181 8.65895V1.75796C7.23181 1.33935 7.57582 1 8.00018 1C8.42453 1 8.76854 1.33935 8.76854 1.75796V8.67097L9.98589 7.47009C10.286 7.17409 10.7725 7.17409 11.0725 7.47009C11.3726 7.7661 11.3726 8.24601 11.0725 8.54201L8.54958 11.0308C8.24952 11.3268 7.76302 11.3268 7.46295 11.0308L4.94002 8.54201C4.63995 8.24601 4.63995 7.7661 4.94002 7.47009C5.24008 7.17409 5.72658 7.17409 6.02665 7.47009L7.23181 8.65895Z"
              fill="currentColor"></path>
          <path
              d="M3.48023 4.29936C2.40686 4.29936 1.53672 5.15772 1.53672 6.21656V11.5669C1.53672 12.6257 2.40686 13.4841 3.48023 13.4841H12.5198C13.5931 13.4841 14.4633 12.6257 14.4633 11.5669V6.21656C14.4633 5.15772 13.5931 4.29936 12.5198 4.29936H11.6158C11.1915 4.29936 10.8475 3.96001 10.8475 3.5414C10.8475 3.12279 11.1915 2.78344 11.6158 2.78344H12.5198C14.4418 2.78344 16 4.3205 16 6.21656V11.5669C16 13.4629 14.4418 15 12.5198 15H3.48023C1.55815 15 0 13.4629 0 11.5669V6.21656C0 4.3205 1.55815 2.78344 3.48023 2.78344H4.38418C4.80853 2.78344 5.15254 3.12279 5.15254 3.5414C5.15254 3.96001 4.80853 4.29936 4.38418 4.29936H3.48023Z"
              fill="currentColor"></path>
        </svg>
        <span>下载客户端</span>
        <span class="new-icon"></span>
      </a>
    </div>
    <div
        class="flex items-center z-10 pl-1 pr-12 h-10 w-full bg-[#D9E1E3] transition-all duration-200 hover:bg-white hover:opacity-100 rounded-md opacity-90">
      <input class="p-1.5 px-2 rounded-md w-full border-none leading-5 focus:outline-none text-[#61666d] focus:bg-[#e3e5e7] bg-transparent">
    </div>
  </div>

</template>

<script setup lang="ts">

</script>

<style scoped>
.new-icon {
  display: inline-block;
  width: 17px;
  height: 14px;
  margin-left: 4px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAcCAYAAAAEN20fAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAO6SURBVHgBvVc9bBRHFP7e7NnofI0LnNabEmiCEiVdcnSJKGywD13+JKeKlBRR+ki+SKRKESKFCCpAAnHiMJgCRMcBHT+yG+ySNR0cxTW2gdudx3uzt3dn7Nv12YZPOt3OzJuZN+/nmzeEbWD9h+miF2GCCUX5+WCMpk4gNGGxaIDFiHEjX71az9hCpqQp8F1pRgRmAfaxK3BgCJXhS3MXMIgi6+Wyb0x4nYFPsKfggG10JF+dD94dMdikxPEZ8sKFvVdCQT6Z3MLrb6cmN430NlSAia7jA8Awzwxf7rqqYxF1Bxs6lzaZxj/G8L+n4R0vIQs0UoD39VHQ2EdbjluiU+vlST9p5zoTTXSnXzaYL4u9W8D75ij4ZaPTw48eiMwRUdQHRkZgfB+0P1YgOnAQ4T9/b7XsqDE5tf7heFUk2cF9rbHvUg1peHNyFkM//woUCsDqKuzKCtB4Dru8BF5+Al5b6zvXkLhIsinX1mY2baOWbGQOHHIbWTm9myNuovFx2Ht1YCVwfRwEaP1VwSCwjIr8XTBKVlk8oSejg4eci/TbtcUNnriDG43UE2eD/PXydDHnMSZslqhYg2VztYqnysjmRhSzYnZIMBK1k68w4mQ3QeKJGy/6ru8RJujV99MapMW+SoyNYfjU/0hD68xp5KZKfTNEx+39etoSizlRIp24VtfQOvtfp6nuUMv09qm1gJI7dSQxQ4U4dXnlKaJHD8HPAmTA12BNvcB4bRVYWu52fPpF3N/Tl6Syxkt0reasqIpo9mh7GxjNbUdq6I/ZTWZXYkvw5rdfsFuoIk1kWCW6fcsRlcL77HOXMeHcla6AWE0VVYvsEE0jAR9kSUW3bzrKZuELm3BGO4WtjCVXlsbEjsASrLJEPeum1dMqreuMXqh1HHMqkwIbaH8QaAFlIsKNTEG5LxTR44edPuUQzRIjyiR3keOVHYBA8yZ/Uco4piBN0Js64TaN07SLUGLHLj1x5ObG25YZCMzB0OXaXRN/489+ckbuFBUI52py/Z9wmybQ+HCxsn/Mje8EokCl/Q/kq7XzEiuLWwlaCcDWyYpjRiOXXKxUN2PUHdp+lzkdpctNnAqxRlIcdSo0LYzIhAvISOU9RJNteDipXzsVWr5alcKWfscHAoX8U28RvaF4di5iPoaY5N4Xmlqv7rsyN9/b2fc5QSSlI+32PbMRJMRlOTy21XMi/YFVlhKSpHrbrUISlJodvVX7QIokaP1Y+opDnrRGGDguG7ICuikLB2KBupKV8kSGPN4C0oikKGkFJUIAAAAASUVORK5CYII=) center center no-repeat;
  background-size: cover;
}
</style>
