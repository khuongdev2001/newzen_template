<template>
  <section class="bg-white pt-[120px]" :data-cms-bind="dataBinding">
    <div class="container">
      <div class="grid sm:grid-cols-2 sm:gap-0 gap-[60px] items-center">
        <div class="sm:pr-[50px] relative">
          <div class="border-anchor border-[5px] absolute top-0 left-0 w-[calc(100%-40px)] sm:w-[calc(100%-90px)] h-[calc(100%-30px)] sm:h-[calc(100%-40px)] z-[1]" />
          <div class="pt-[30px] sm:pt-[40px] pl-[30px] sm:pl-[40px] relative z-[2]">
            <img :src="block.image" :alt="block.image_alt">
          </div>
        </div>
        <div class="section-content">
          <h2 class="text-[55px] title">
            {{ block.title }}
            <div class="divider bg-black mb-[20px]" />
          </h2>
          <p class="text-[22px] leading-[27px] fonts-calibri mb-[20px]">{{ block.subtitle }}</p>
          <NuxtLink class="custom-btn" :to="block.button.url">{{ block.button.text }}</NuxtLink>
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
