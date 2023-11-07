<template>
  <section :style="{ background: block.background }" class="section-our-service mt-[120px] py-[120px] relative" :data-cms-bind="dataBinding">
    <div class="container">
      <div class="section-content text-center mb-[40px]">
        <h2 class="text-[55px] title">
          Our Service
          <div class="divider bg-black mb-[20px] mx-auto" />
        </h2>
        <p class="desc">Professional Nail Care for Ladies and Gentleman</p>
      </div>
      <swiper :loop="true" :navigation="true" :modules="module" class="mySwiper">
        <swiper-slide v-for="service in block.service" :key="service.title">
          <div class="grid sm:grid-cols-2">
            <div class="bg-black p-[60px] sm:min-h-auto min-h-[570px]">
              <div class="border-[2px] border-anchor h-full flex flex-col items-center justify-center p-[10px]">
                <span class="text-[35px] text-anchor">{{ service.title }}</span>
                <div class="divider bg-anchor mt-[10px]" />
              </div>
            </div>
            <div class="relative">
              <img :src="service.image" :alt="service.image_alt" class="sm:min-h-auto min-h-[570px] object-cover">
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script setup lang="ts">

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';

interface Props {
  dataBinding: any;
  block: any;
}

defineProps<Props>();

const module = [Navigation]

onMounted(() => {
  const swiperWrapper = document.querySelector('.swiper-wrapper');
  const newDiv = document.createElement('div');
  newDiv.className = 'new-swiper';
  if (swiperWrapper) {
    (swiperWrapper.parentNode!).insertBefore(newDiv, swiperWrapper);
    newDiv.appendChild(swiperWrapper);
  }
})

</script>

<style lang="scss" scoped>
.list__service {
  .service__item {
    &:nth-child(even) {
      flex-direction: column-reverse;
    }
  }
}

</style>

<style lang="scss">
.section-our-service {
  .swiper {
    overflow: visible;
    .swiper-button-prev {
      left: -60px;
      width: 60px;
      height: 60px;
      &::after {
        content: '';
        background: url('/images/icon-arrow-left.png') no-repeat center;
        width: 60px;
        height: 60px;
      }
    }
    .swiper-button-next {
      right: -60px;
      width: 60px;
      height: 60px;
      &::after {
        content: '';
        background: url('/images/icon-arrow-right.png') no-repeat center;
        width: 60px;
        height: 60px;
      }
    }
    .new-swiper {
      position: relative;
      overflow: hidden;
    }
  }
}
@media (min-width: 641px) and (max-width: 1024px) {
  .section-our-service {
    padding-bottom: 160px;
    .swiper {
      .swiper-button-prev {
        left: 0px;
      }
      .swiper-button-next {
        right: 0;
      }
    }
  }
}
@media (max-width: 640px) {
  .section-our-service {
    padding-bottom: 160px;
    .swiper {
      .swiper-button-prev {
        left: calc(50% - 70px);
        top: auto;
        bottom: -100px;
        // position: relative;
      }
      .swiper-button-next {
        // position: relative;
        right: calc(50% - 70px);
        top: auto;
        bottom: -100px;
      }
    }
  }
}
</style>
