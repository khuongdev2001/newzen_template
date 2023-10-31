<template>
  <section :style="{ background: block.background }" class="mt-[120px] py-[120px] relative" :data-cms-bind="dataBinding">
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
              <div class="border-[2px] border-secondary h-full flex items-center justify-center p-[10px]">
                <span class="text-[35px] text-secondary">{{ service.title }}</span>
              </div>
            </div>
            <div class="relative">
              <img src="/images/home/our-service.png" alt="" class="sm:min-h-auto min-h-[570px] object-cover">
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <!-- <div>
      <div class="swiper-button-prev">Prev</div>
      <div class="swiper-button-next">next</div>
    </div> -->
  </section>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';

interface Props {
  dataBinding: any;
  block: any;
}

defineProps<Props>();

const module = [Navigation]

const swipers = document.querySelector('.swiper')
onMounted(() => {
  if (swipers) {
    // swiper.swiper.slideNext()
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
}</style>
