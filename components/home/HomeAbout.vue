<template>
  <section class="bg-white pt-[120px]" :data-cms-bind="dataBinding">
    <div class="container">
      <div class="grid grid-cols-2 items-center">
        <div class="sm:pr-[50px] relative">
          <div class="border-[5px] border-[#F9D1BF] absolute top-0 left-0 w-[calc(100%-90px)] h-[calc(100%-40px)] z-[1]" />
          <div class="pt-[40px] pl-[40px] relative z-[2]">
            <img src="/images/home/about.png" alt="">
          </div>
        </div>
        <div>
          <h2 class="text-[55px] section-title">
            About Us
            <div class="divider bg-black mb-[20px]" />
          </h2>
          <p class="text-[22px] leading-[27px] fonts-calibri mb-[20px]">Come to visit our nail salon and enjoy the comfortable relaxing moments by the leading service provided. At I-Spa Lash Nails Lounge, you are able to immerse into a cozy and luxurious space, reduce your stress of work, and forget all life’s pressure. Our valued customers will be satisfied with all services by our friendly, passionate staff. We always try our best to upgrade all services and give you the best moment.</p>
          <NuxtLink class="custom-btn" to="#">More</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>

interface Props {
  dataBinding: any;
  block: any;
}

defineProps<Props>();

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
