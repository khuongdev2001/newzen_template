<template>
  <section :data-cms-bind="dataBinding" class="section-our-service py-[120px]" :style="{background: block.background}">
    <div class="container">
      <div class="section-content mb-[40px]">
        <h2 class="title text-center text-white">{{ block.title }}</h2>
      </div>
      <swiper
        class="lg:max-w-[1020px] sm:max-w-[675px] max-w-[330px] mx-auto"
        :slidesPerView="1"
        :spaceBetween="15"
        :loop="true"
        :navigation="true"
        :modules="module"
        :breakpoints="{
          '640': {
            slidesPerView: 2,
          },
          '1024': {
            slidesPerView: 3,
          },
        }"
      >
        <swiper-slide v-for="service in block.service" :key="service.title" class="max-w-[330px] rounded-[30px] overflow-hidden">
          <div class="py-[100px] px-[40px] service-item">
            <div class="mb-6">
              <img :src="service.image" :alt="service.image_alt">
            </div>
            <h3>{{ service.title }}</h3>
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
  const swiperWrapper = document.querySelector('.section-our-service .swiper-wrapper');
  const newDiv = document.createElement('div');
  newDiv.className = 'new-swiper ';
  if (swiperWrapper) {
    (swiperWrapper.parentNode!).insertBefore(newDiv, swiperWrapper);
    newDiv.appendChild(swiperWrapper);
  }
})
</script>

<style lang="scss" scoped>
.section-our-service {
  .service-item {
    background: #fff;
    transition: all 0.3s ease-in;
    &:hover {
      background: var(--color-effects);
      h3 {
        color: #fff;
      }
    }
    h3 {
      font-size: 30px;
      font-weight: 400;
      text-align: center;
      transition: all 0.3s ease;
    }
  }
}
</style>

<style lang="scss">
.section-our-service {
  .swiper {
    overflow: visible;
    .new-swiper {
      position: relative;
      overflow: hidden;
    }
    .swiper-button-prev {
      left: -60px;
      width: 60px;
      height: 60px;
      &::after {
        content: '';
        background: url('/images/icon-arrow-left-bg.png') no-repeat center;
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
        background: url('/images/icon-arrow-right-bg.png') no-repeat center;
        width: 60px;
        height: 60px;
      }
    }
  }
}
</style>
