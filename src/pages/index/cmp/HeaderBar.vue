<template>
  <div class="w-full h-16 px-6 flex items-center justify-between absolute top-0 z-10 text-white text-sm ">
    <div class="flex shrink-0 mr-[30px] space-x-[15px] last:mr-0 leading-[64px]">
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
        class="flex items-center justify-between z-10 text-[#61666d] bg-[#f1f2f3] pl-1 pr-1 h-10 w-full min-w-[181px] max-w-[500px] transition-all duration-200 hover:opacity-100 rounded-md opacity-90">
      <div :class="searchClass"
           class="flex items-center justify-between bg-[#e3e5e7] w-full cursor-pointer text-white hover:text-[#fff] rounded-md py-1.5 px-[9.6px] mr-2">
        <input
            v-model="searchValue"
            @focus="searchFocus"
            @blur="searchBlur"
            class="w-full border-none text-[#61666d] leading-5 focus:outline-none bg-transparent">
        <svg
            @click="clear"
            v-show="searchValue"
            width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M8 14.75C11.7279 14.75 14.75 11.7279 14.75 8C14.75 4.27208 11.7279 1.25 8 1.25C4.27208 1.25 1.25 4.27208 1.25 8C1.25 11.7279 4.27208 14.75 8 14.75ZM9.64999 5.64303C9.84525 5.44777 10.1618 5.44777 10.3571 5.64303C10.5524 5.83829 10.5524 6.15487 10.3571 6.35014L8.70718 8.00005L10.3571 9.64997C10.5524 9.84523 10.5524 10.1618 10.3571 10.3571C10.1618 10.5523 9.84525 10.5523 9.64999 10.3571L8.00007 8.70716L6.35016 10.3571C6.15489 10.5523 5.83831 10.5523 5.64305 10.3571C5.44779 10.1618 5.44779 9.84523 5.64305 9.64997L7.29296 8.00005L5.64305 6.35014C5.44779 6.15487 5.44779 5.83829 5.64305 5.64303C5.83831 5.44777 6.15489 5.44777 6.35016 5.64303L8.00007 7.29294L9.64999 5.64303Z"
                fill="#C9CCD0"></path>
        </svg>
      </div>
      <div
          class="min-w-8 text-[#18191C] h-8 rounded-md hover:bg-[#e3e5e7] flex items-center justify-center cursor-pointer">
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M16.3451 15.2003C16.6377 15.4915 16.4752 15.772 16.1934 16.0632C16.15 16.1279 16.0958 16.1818 16.0525 16.2249C15.7707 16.473 15.4456 16.624 15.1854 16.3652L11.6848 12.8815C10.4709 13.8198 8.97529 14.3267 7.44714 14.3267C3.62134 14.3267 0.5 11.2314 0.5 7.41337C0.5 3.60616 3.6105 0.5 7.44714 0.5C11.2729 0.5 14.3943 3.59538 14.3943 7.41337C14.3943 8.98802 13.8524 10.5087 12.8661 11.7383L16.3451 15.2003ZM2.13647 7.4026C2.13647 10.3146 4.52083 12.6766 7.43624 12.6766C10.3517 12.6766 12.736 10.3146 12.736 7.4026C12.736 4.49058 10.3517 2.1286 7.43624 2.1286C4.50999 2.1286 2.13647 4.50136 2.13647 7.4026Z"
                fill="currentColor"></path>
        </svg>
      </div>
    </div>
    <div class="flex shrink-0 items-center ml-2.5 *:min-w-[50px] [&>*]:mr-1 *:cursor-pointer text-[13px] text-center">
      <div class="flex justify-center">
        <div class="rounded-[50%] bg-[#00aeec] mr-1 text-sm leading-9 h-9 w-9">
          <span>登录</span>
        </div>
      </div>
      <div class="bar-item">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M10 1C5.02955 1 1 5.02955 1 10C1 14.9705 5.02955 19 10 19C14.9705 19 19 14.9705 19 10C19 5.02955 14.9705 1 10 1ZM10.0006 2.63614C14.0612 2.63614 17.3642 5.93996 17.3642 9.99977C17.3642 14.0604 14.0612 17.3634 10.0006 17.3634C5.93996 17.3634 2.63696 14.0604 2.63696 9.99977C2.63696 5.93996 5.93996 2.63614 10.0006 2.63614Z"
                fill="currentColor"></path>
          <path
              d="M13.1381 8.05573V8.05331H10.7706C10.7859 7.8643 10.7948 7.67286 10.7948 7.47981C10.7948 7.26414 10.7843 7.05008 10.7649 6.83926C10.7658 6.82552 10.7674 6.81179 10.7674 6.79725V6.79483C10.7674 6.35541 10.4111 6 9.97254 6C9.53312 6 9.17771 6.35622 9.17771 6.79483V6.79725C9.17771 6.85137 9.18336 6.90468 9.19386 6.95557L9.18255 6.95719C9.19871 7.12924 9.20759 7.30291 9.20759 7.479C9.20759 7.67286 9.19709 7.8643 9.17771 8.0525H6.74313V8.05573C6.32876 8.08239 6 8.42649 6 8.84814V8.85057C6 9.28998 6.33683 9.64216 6.77544 9.64216C6.80937 9.64216 6.8441 9.64378 6.89903 9.64297L8.7601 9.63893C8.28837 10.7294 7.47011 11.6341 6.44507 12.2149C6.44023 12.2173 6.43619 12.2197 6.43134 12.2229C6.42003 12.2294 6.40953 12.2359 6.39822 12.2423L6.39903 12.2431C6.17528 12.3837 6.02585 12.6325 6.02585 12.916V12.9184C6.02585 13.3578 6.38207 13.7132 6.82068 13.7132C6.99111 13.7132 7.14782 13.6591 7.27706 13.5687C8.7706 12.706 9.9168 11.3094 10.4556 9.64055H13.0105C13.0517 9.64136 13.1131 9.63893 13.1131 9.63893C13.5905 9.62924 13.9039 9.2916 13.9039 8.85299V8.85057C13.9047 8.42003 13.5638 8.07108 13.1381 8.05573Z"
              fill="currentColor"></path>
          <path
              d="M13.7731 12.5388C13.7715 12.5356 13.7691 12.5331 13.7674 12.5307C13.74 12.4814 13.7077 12.4362 13.6713 12.3942C13.1584 11.6672 12.513 11.0412 11.7674 10.5541L11.7666 10.555C11.6366 10.4613 11.4766 10.4055 11.3046 10.4055C10.8652 10.4055 10.5098 10.7617 10.5098 11.2003V11.2028C10.5098 11.5033 10.677 11.765 10.9233 11.8999C11.5615 12.3215 12.0825 12.8045 12.4944 13.4499L12.5372 13.5041C12.6786 13.6333 12.866 13.7133 13.0728 13.7133C13.5122 13.7133 13.8676 13.3571 13.8676 12.9184V12.916C13.8668 12.7795 13.8329 12.6511 13.7731 12.5388Z"
              fill="currentColor"></path>
        </svg>
        <span>大会员</span>
      </div>
      <div class="bar-item">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M15.435 17.7717H4.567C2.60143 17.7717 1 16.1723 1 14.2047V5.76702C1 3.80144 2.59942 2.20001 4.567 2.20001H15.433C17.3986 2.20001 19 3.79943 19 5.76702V14.2047C19.002 16.1703 17.4006 17.7717 15.435 17.7717ZM4.567 4.00062C3.59327 4.00062 2.8006 4.79328 2.8006 5.76702V14.2047C2.8006 15.1784 3.59327 15.9711 4.567 15.9711H15.433C16.4067 15.9711 17.1994 15.1784 17.1994 14.2047V5.76702C17.1994 4.79328 16.4067 4.00062 15.433 4.00062H4.567Z"
              fill="currentColor"></path>
          <path
              d="M9.99943 11.2C9.51188 11.2 9.02238 11.0667 8.59748 10.8019L8.5407 10.7635L4.3329 7.65675C3.95304 7.37731 3.88842 6.86226 4.18996 6.50976C4.48954 6.15544 5.0417 6.09699 5.4196 6.37643L9.59412 9.45943C9.84279 9.60189 10.1561 9.60189 10.4067 9.45943L14.5812 6.37643C14.9591 6.09699 15.5113 6.15544 15.8109 6.50976C16.1104 6.86409 16.0478 7.37731 15.6679 7.65675L11.4014 10.8019C10.9765 11.0667 10.487 11.2 9.99943 11.2Z"
              fill="currentColor"></path>
        </svg>
        <span>消息</span>
      </div>
      <div class="bar-item">
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0)">
            <path
                d="M10 10.743C7.69883 10.743 5.83333 8.87747 5.83333 6.5763C5.83333 4.27512 7.69883 2.40964 10 2.40964V10.743Z"
                stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"></path>
            <path
                d="M10 10.743C10 13.0441 8.1345 14.9096 5.83333 14.9096C3.53217 14.9096 1.66667 13.0441 1.66667 10.743H10Z"
                stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"></path>
            <path
                d="M10 10.743C10 8.44182 11.8655 6.57632 14.1667 6.57632C16.4679 6.57632 18.3333 8.44182 18.3333 10.743H10Z"
                stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"></path>
            <path
                d="M9.99999 10.743C12.3012 10.743 14.1667 12.6085 14.1667 14.9096C14.1667 17.2108 12.3012 19.0763 9.99999 19.0763V10.743Z"
                stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"></path>
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="20" height="20" fill="currentColor" transform="matrix(-1 0 0 1 20 0.742981)"></rect>
            </clipPath>
          </defs>
        </svg>
        <span>动态</span>
      </div>
      <div class="bar-item">
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M11.0505 3.16759L12.7915 6.69573C12.954 7.02647 13.2702 7.25612 13.6349 7.30949L17.5294 7.87474C18.448 8.00817 18.8159 9.13785 18.1504 9.78639L15.3331 12.5334C15.0686 12.7905 14.9481 13.1609 15.0104 13.5256L15.6759 17.4031C15.8328 18.3184 14.8721 19.0171 14.0497 18.5845L10.5661 16.7537C10.2402 16.5823 9.85042 16.5823 9.52373 16.7537L6.04087 18.5845C5.21848 19.0171 4.2578 18.3184 4.41468 17.4031L5.07939 13.5256C5.14166 13.1609 5.02198 12.7905 4.75755 12.5334L1.9394 9.78639C1.27469 9.13785 1.64182 8.00817 2.56126 7.87474L6.4549 7.30949C6.82041 7.25612 7.13578 7.02647 7.29832 6.69573L9.04015 3.16759C9.45095 2.33468 10.6389 2.33468 11.0505 3.16759Z"
                stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
          <path
              d="M11.603 11.8739C11.413 12.5556 10.7871 13.0554 10.0447 13.0554C9.29592 13.0554 8.66679 12.5467 8.48242 11.8569"
              stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
        <span>收藏</span>
      </div>
      <div class="bar-item">
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M10 1.74286C5.02955 1.74286 1 5.7724 1 10.7429C1 15.7133 5.02955 19.7429 10 19.7429C14.9705 19.7429 19 15.7133 19 10.7429C19 5.7724 14.9705 1.74286 10 1.74286ZM10.0006 3.379C14.0612 3.379 17.3642 6.68282 17.3642 10.7426C17.3642 14.8033 14.0612 18.1063 10.0006 18.1063C5.93996 18.1063 2.63696 14.8033 2.63696 10.7426C2.63696 6.68282 5.93996 3.379 10.0006 3.379Z"
                fill="currentColor"></path>
          <path d="M9.99985 6.6521V10.743" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"></path>
          <path d="M12.4545 10.7427H10" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"></path>
        </svg>
        <span>历史</span>
      </div>
      <div class="bar-item">
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="1" width="16" height="20">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 1.74286H17.5V20.0762H2.5V1.74286Z"
                  fill="currentColor"></path>
          </mask>
          <g mask="url(#mask0)">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M9.99999 1.74286C9.92916 1.74286 9.85916 1.74369 9.78833 1.74536C5.85416 1.85453 2.58416 5.14869 2.50166 9.08286C2.44999 11.5404 3.58666 13.7304 5.36999 15.1337C5.52166 15.2529 5.63166 15.4162 5.67333 15.6045L6.30416 18.447C6.51583 19.3987 7.36083 20.0762 8.33583 20.0762H11.6617C12.6383 20.0762 13.4842 19.3987 13.6958 18.4445L14.3275 15.602C14.3692 15.4154 14.4775 15.2537 14.6275 15.1354C16.3733 13.7629 17.5 11.637 17.5 9.24286C17.5 5.10036 14.1425 1.74286 9.99999 1.74286ZM10.0003 3.40939C13.2161 3.40939 15.8336 6.02606 15.8336 9.24273C15.8336 11.0386 15.0186 12.7086 13.5978 13.8252C13.1428 14.1827 12.8244 14.6852 12.7011 15.2402L12.0686 18.0827C12.0269 18.2752 11.8586 18.4094 11.6619 18.4094H8.33609C8.14109 18.4094 7.97359 18.2761 7.93192 18.0852L7.30025 15.2427C7.17609 14.6869 6.85775 14.1827 6.40109 13.8236C4.94359 12.6769 4.12942 10.9619 4.16859 9.11773C4.23192 6.05523 6.77442 3.49606 9.83442 3.41189C9.88942 3.41023 9.94525 3.40939 10.0003 3.40939Z"
                  fill="currentColor"></path>
            <path d="M10 6.81299L8.81253 9.18726H11.1875L9.99952 11.561" stroke="currentColor" stroke-width="1.6"
                  stroke-linecap="round" stroke-linejoin="round"></path>
          </g>
          <path d="M6.66656 15.9095H13.3332" stroke="currentColor" stroke-width="1.7"></path>
        </svg>
        <span>创作中心</span>
      </div>
      <div class="flex items-center justify-center rounded-lg ml-1.5 bg-[#fb7299] text-sm w-[90px] h-[34px]">
        <svg class="mr-[5px]" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M12.0824 10H14.1412C15.0508 10 15.7882 10.7374 15.7882 11.6471V12.8824C15.7882 13.792 15.0508 14.5294 14.1412 14.5294H3.84707C2.93743 14.5294 2.20001 13.792 2.20001 12.8824V11.6471C2.20001 10.7374 2.93743 10 3.84707 10H5.90589"
              stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M8.99413 11.2353L8.99413 3.82353" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"
                stroke-linejoin="round"></path>
          <path d="M12.0823 6.29413L8.9941 3.20589L5.90587 6.29413" stroke="currentColor" stroke-width="1.7"
                stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
        <span>投稿</span>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import {ref} from "vue";

const searchClass = ref('')
const searchValue = ref('')

const searchFocus = () => {
  searchClass.value = 'search-focus'
}
const searchBlur = () => {
  searchClass.value = ''
}
const clear = () => {
  searchValue.value = ''
  console.log("??")
}
</script>

<style scoped>
.search-focus {
  @apply bg-[#e3e5e7]
}

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
</style>
