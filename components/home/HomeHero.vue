<template>
  <section
    :data-cms-bind="dataBinding"
    class="relative py-[120px] lg:py-[125px] section-home-hero max-w-full overflow-hidden"
    :style="{background: block.background}"
  >
    <div class="container">
      <div>
        <swiper :loop="true" :pagination="pagination" :navigation="true" :modules="module">
          <swiper-slide v-for="slide in block.slides" :key="slide.title">
            <div class="flex lg:gap-0 gap-[80px] lg:flex-nowrap flex-wrap justify-center lg:justify-between items-center">
              <div class="pl-1">
                <h2 class="mb-[10px] text-[100px] text-center lg:text-left text-white font-bold fonts-timeNewRoman">{{ slide.title }}</h2>
                <div class="divider !w-[4px] h-[100px]" />
              </div>
              <div class="px-[23px] py-[28px]">
                <div class="relative item-images">
                  <img :src="slide.image" :alt="slide.image_alt" class="z-10 rounded-full sm:w-[500px] sm:h-[500px] w-full aspect-1 object-cover">
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface Props {
  dataBinding: any;
  block: any;
}

defineProps<Props>();

const module = [Navigation, Pagination]

const pagination = {
  clickable: true
}

onMounted(() => {
  const swiperWrapper = document.querySelector('.section-home-hero .swiper-wrapper');
  const newDiv = document.createElement('div');
  newDiv.className = 'new-swiper';
  if (swiperWrapper) {
    (swiperWrapper.parentNode!).insertBefore(newDiv, swiperWrapper);
    newDiv.appendChild(swiperWrapper);
  }
})
</script>

<style lang="scss" scoped>
.item-images {
  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: -27px;
    right: -23px;
    background-color: var(--color-effects);
    border-radius: 50%;
    z-index: -1;
  }
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: -27px;
    left: -23px;
    background-color: var(--color-effects);
    border-radius: 50%;
    z-index: -1;
  }
}
</style>

<style lang="scss">
.section-home-hero {
  .swiper {
    overflow: visible;
    .swiper-button-prev {
      left: -98px;
      width: 68px;
      height: 70px;
      &::after {
        content: '';
        background: url('/images/icon-arrow-left.png') no-repeat center;
        width: 68px;
        height: 70px;
      }
    }
    .swiper-button-next {
      right: -98px;
      width: 68px;
      height: 70px;
      &::after {
        content: '';
        background: url('/images/icon-arrow-right.png') no-repeat center;
        width: 68px;
        height: 70px;
      }
    }
    .new-swiper {
      position: relative;
      overflow: hidden;
    }
    .swiper-pagination {
      bottom: -95px;
      .swiper-pagination-bullet {
        width: 15px;
        height: 15px;
        background: #fff;
        opacity: 1;
        &.swiper-pagination-bullet-active {
          background: var(--color-secondary);
        }
      }
    }
  }
}
@media (max-width: 1024px) {
  .section-home-hero {
    .swiper {
      padding-bottom: 170px;
      .swiper-button-prev {
        left: calc(50% - 70px);
        top: auto;
        bottom: 40px;
      }
      .swiper-button-next {
        right: calc(50% - 70px);
        top: auto;
        bottom: 40px;
      }
      .swiper-pagination {
        bottom: 0px;
      }
    }
  }
}
</style>
