<template>
  <div class="flex items-center px-[60px] h-[110px] text-sm">
    <div class="flex">
      <a class="flex flex-col items-center mr-6" href="https://t.bilibili.com/">
        <div class="channel-icon-item bg-[#ff9212]">
          <dynamic-svg class="text-white scale-125"/>
        </div>
        <span>动态</span>
      </a>
      <a class="flex flex-col items-center mr-6" href="https://t.bilibili.com/">
        <div class="channel-icon-item bg-[#f07775]">
          <hot-svg class="text-white scale-125"/>
        </div>
        <span>热门</span>
      </a>
    </div>
    <div class="grid grid-cols-11 grid-rows-2 gap-2.5 w-full text-sm text-[#61666d] pr-[30px]">
      <a
          v-for="i in channelItems"
          :href="i.href" target="_blank"
          class="leading-[26px] border box-content border-[#f6f7f8] tracking-[2px] text-center bg-[#f6f7f8] rounded-md transition-colors duration-300 hover:text-[#18191c] hover:bg-[#e3e5e7]"
      >{{ i.title }}</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import DynamicSvg from '@/assets/icon/dynamic.svg'
import HotSvg from '@/assets/icon/hot.svg'

const channelItems: ChannelItem[] = [
  {
    title: '番剧',
    href: 'https://www.bilibili.com/anime/',
    subList: ['连载动画', '完结动画', '资讯', '官方延伸', '新番时间表', '番剧索引']
  },
  {
    title: '国创',
    href: 'https://www.bilibili.com/guochuang/',
    subList: ['国产动画', '国产原创相关', '布袋戏', '资讯', '新番时间表', '国产动画索引']
  },
  {
    title: '综艺',
    href: 'https://www.bilibili.com/variety/',
    subList: []
  },
  {
    title: '动画',
    href: 'https://www.bilibili.com/v/douga//',
    subList: ['MAD·AMV', 'MMD·3D', '短片·手书·配音', '综合', '配音', '特摄', '动漫杂谈']
  },
  {
    title: '鬼畜',
    href: 'https://www.bilibili.com/v/kichiku/',
    subList: ['鬼畜调教', '音MAD', '人力VOCALOID', '教程演示', '鬼畜剧场', '教程演示']
  },
  {
    title: '舞蹈',
    href: 'https://www.bilibili.com/v/dance/',
    subList: ['宅舞', '街舞', '明星舞蹈', '国风舞蹈', '颜值·网红舞', '舞蹈综合', '舞蹈教程']
  },
  {
    title: '娱乐',
    href: 'https://www.bilibili.com/v/ent/',
    subList: ['综艺', '明星', 'Korea相关', '影视', '影视杂谈']
  },
  {
    title: '科技',
    href: 'https://www.bilibili.com/v/tech/',
    subList: ['趣味科普人文', '野生技术协会', '演讲·公开课', '星海', '数码', '机械', '汽车', '手机平板']
  },
  {
    title: '美食',
    href: 'https://www.bilibili.com/v/food/',
    subList: ['美食制作', '美食侦探', '美食测评', '田园美食', '美食记录']
  },
  {
    title: '汽车',
    href: 'https://www.bilibili.com/v/car/',
    subList: ['汽车知识科普', '购车攻略', '新能源车', '赛车', '改装玩车', '摩托车', '房车', '汽车生活']
  },
  {
    title: '运动',
    href: 'https://www.bilibili.com/v/sport/',
    subList: ['综合体育', '足球', '篮球', '搏击', '羽毛球', '乒乓球', '台球',]
  },
  {
    title: '电影',
    href: 'https://www.bilibili.com/movie/',
    subList: []
  },
  {
    title: '电视剧',
    href: 'https://www.bilibili.com/tv/',
    subList: []
  },
  {
    title: '纪录片',
    href: 'https://www.bilibili.com/documentary/',
    subList: []
  },
  {
    title: '游戏',
    href: 'https://www.bilibili.com/v/game/',
    subList: ['单机游戏', '电子竞技', '手机游戏', '网络游戏', '桌游棋牌', 'GMV', '音游', 'Mugen']
  },
  {
    title: '音乐',
    href: 'https://www.bilibili.com/v/music/',
    subList: ['原创音乐', '翻唱', 'VOCALOID·UTAU', '演奏', '三次元音乐', 'OP/ED/OST', '音乐选集']
  },
  {
    title: '影视',
    href: 'https://www.bilibili.com/v/cinephile/',
    subList: ['影视杂谈', '影视剪辑', '短片', '预告·资讯', '特摄', 'AI影像']
  },
  {
    title: '知识',
    href: 'https://www.bilibili.com/v/knowledge/',
    subList: ['科学科普', '社科人文', '历史', '国学', '生活', '健康', '教育', '职业职场']
  },
  {
    title: '资讯',
    href: 'https://www.bilibili.com/v/information/',
    subList: ['国内', '国际', '社会']
  },
  {
    title: '生活',
    href: 'https://www.bilibili.com/v/life/',
    subList: ['搞笑', '日常', '美妆', '服饰', '健身', '手工', '绘画']
  },
  {
    title: '时尚',
    href: 'https://www.bilibili.com/v/fashion/',
    subList: ['美妆护肤', '服饰搭配', '健身', 'T台秀', '风尚标', '时尚资讯', '美容护肤']
  },
  {
    title: '更多',
    href: '',
    subList: ['搞笑', '日常', '美妆', '服饰', '健身', '手工', '绘画', 'ASMR', '汽车', '旅行', '生活', '时尚']
  },
]

interface ChannelItem {
  title: string
  href: string
  subList: string[]
}
</script>

<style scoped>
.channel-icon-item {
  @apply w-[46px] h-[46px] mb-1.5 flex items-center justify-center rounded-full
}
</style>
