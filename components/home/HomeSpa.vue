<template>
  <section :style="{ background: block.background }" class="py-[120px]" :data-cms-bind="dataBinding">
    <div class="container">
      <div class="section-content">
        <h2 class="text-[55px] title text-center">
          Spa Special
          <div class="divider bg-black my-[20px] mx-auto" />
        </h2>
        <p v-if="block.subtitle" class="desc my-[20px] text-center">Nails Salon & Spa is always up-to-date with the latest technology and trends in the nail industry. With years of experience, we take pride in doing a great job.</p>
      </div>
      <div class="grid grid-cols-3 items-center p-[60px] gap-[15px] bg-black ">
        <div>
          <div class="mb-[20px]">
            <img src="/images/home/about.png" alt="" class="w-full h-[360px]">
          </div>
          <p class="text-white">SPA MANICURE</p>
        </div>
        <div>
          <div class="mb-[20px]">
            <img src="/images/home/about.png" alt="" class="w-full h-[360px]">
          </div>
          <p class="text-white">SPA MANICURE</p>
        </div>
        <div>
          <div class="mb-[20px]">
            <img src="/images/home/about.png" alt="" class="w-full h-[360px]">
          </div>
          <p class="text-white">SPA MANICURE</p>
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
