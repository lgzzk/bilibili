<template>
  <div class="pb-[75px]">
    <div
        @mouseenter="clearTimer"
        @mouseleave="setTimer"
        class="h-full w-full rounded-md overflow-x-hidden relative">
      <div
          :style="{transform: `translateX(${translateX}%)`}"
          class="flex transition-all duration-300 ease-in-out">
        <a v-for="{url,pic} in swipes" :href="url"
           class="w-full h-full shrink-0" target="_blank">
          <Image class="w-full h-full" :src="pic+'@800w_512h_!web-home-carousel-cover.avif'"></Image>
        </a>
      </div>
      <a
          v-if="swipes.length"
          :href="getCurrentSwipeItem.url"
          class="z-20 text-white text-variable absolute bottom-[42px] left-[15px]"
          target="_blank">{{ getCurrentSwipeItem.name }}</a>
      <div class="flex items-end z-20 space-x-3 absolute bottom-[42px] right-[15px] ">
        <button @click="play(0)" class="arrow">
          <Arrow class="w-3 h-3 rotate-180"/>
        </button>
        <button @click="play(1)" class="arrow">
          <Arrow class="w-3 h-3"/>
        </button>
      </div>
      <div
          class="flex items-center justify-center absolute left-[15px] bottom-[20px] m-[-1.5px] z-10">
        <div v-for="(_,index) in swipes.length"
             :class="getCurrentSwipeIndex == index?'active-dot':'carousel-dot'"
             @click="selectSwipe(index)"
             class="rounded-full relative overflow-hidden cursor-pointer">
          <div
              :class="getCurrentSwipeIndex == index?swipeDrect==1?'eat-haha-up':'eat-haha-down':''"
              class="w-3.5 h-[7px] top-0 bg-white rounded-t-[7px] origin-bottom"></div>
          <div
              :class="getCurrentSwipeIndex == index?swipeDrect==1?'eat-haha-down':'eat-haha-up':''"
              class="w-3.5 h-[7px] bottom-0 bg-white rounded-b-[7px] origin-top"></div>
        </div>
      </div>
      <div
          v-if="swipes.length"
          :style="{backgroundColor: getCurrentSwipeItem.color}"
          class="w-full h-[780px] absolute bottom-0 pointer-events-none mask"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {getRecommendSwipe, setSwipeColor} from "@/api/swiper.ts";
import {computed, ref} from "vue";
import Image from "@/components/Image.vue";
import Arrow from '@/assets/icon/arrow.svg'
import {useThrottleFn} from "@vueuse/core";
import {SwipeItem} from "@/api/types/swiper.ts";

const swipes = ref<SwipeItem[]>([])
const translateX = ref(0)
let swipeDrect = ref(1)


getRecommendSwipe().then(data => {
  swipes.value = data.filter(item => item.name !== "")
  setSwipeColor(swipes.value)
  /*去广*/
  // swipes.value = [
  //   data[data.length - 1],
  //   ...data,
  //   data[0]
  // ]

})

const throttleFn = useThrottleFn((e: number) => {
  swipeDrect.value = e
  let max = -100 * (swipes.value.length - 1)
  if (e === 0) {
    if (translateX.value === 0) translateX.value = max
    else translateX.value += 100
  }
  if (e === 1) {
    if (translateX.value === max) translateX.value = 0
    else translateX.value -= 100
  }
}, 300)

const play = (e: number) => throttleFn(e)

const getCurrentSwipeItem = computed(() => {
  return swipes.value[getCurrentSwipeIndex.value]
})
const getCurrentSwipeIndex = computed(() => {
  let index = (translateX.value / 100)
  return index < 0 ? index * -1 : index
})

// TODO 无限滚动
// const getFlexDerctClass = computed(() => {
//   return getCurrentSwipeIndex.value == 0 ? 'flex-row-reverse' : ''
// })
const selectSwipe = (e: number) => {
  if (e < getCurrentSwipeIndex.value) swipeDrect.value = 0
  else swipeDrect.value = 1
  translateX.value = -e * 100
}
let timer: NodeJS.Timeout;
const setTimer = () => {
  timer = setInterval(() => play(1), 5000)
}
const clearTimer = () => {
  clearInterval(timer)
}

setTimer()

</script>

<style scoped>
.arrow {
  @apply bg-[#FFFFFF1A] text-white w-7 h-7 rounded-lg flex items-center
  justify-center active:scale-95 hover:bg-[#FFFFFF33]
}

.carousel-dot {
  @apply w-2 h-2 bg-[#FFFFFF66] *:w-0 m-1
}

.active-dot {
  @apply w-3.5 h-3.5 m-[1px]
}

.mask {
  -webkit-mask-image: linear-gradient(0, #2f3238 11%, transparent 20%)

}

.eat-haha-up {
  animation: eat-haha-up .8s;
}

.eat-haha-down {
  animation: eat-haha-down .8s;
}

.text-variable {
  font-size: var(--swiper-font-size);
}


@keyframes eat-haha-up {
  0% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(-45deg);
  }
  50% {
    transform: rotate(0);
  }
  75% {
    transform: rotate(-45deg);
  }
  100% {
    transform: rotate(0);
  }
}

@keyframes eat-haha-down {
  0% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(45deg);
  }
  50% {
    transform: rotate(0);
  }
  75% {
    transform: rotate(45deg);
  }
  100% {
    transform: rotate(0);
  }
}
</style>
