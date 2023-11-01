<template>
  <section class="bg-white pt-[120px]" :data-cms-bind="dataBinding">
    <div class="container">
      <div class="grid sm:grid-cols-2 sm:gap-0 gap-[60px] items-center">
        <div class="section-content">
          <h2 class="text-[55px] title">
            {{ block.title }}
            <div class="divider bg-black mb-[20px]" />
          </h2>
          <p class="desc mt-[20px]">{{ block.subtitle }}</p>
        </div>
        <div class="sm:pl-[50px] relative">
          <div
            class="border-[5px] border-anchor absolute top-[30px] sm:top-[50px] left-0 sm:left-[50px] w-[calc(100%-30px)] sm:w-[calc(100%-90px)] h-[calc(100%-30px)] sm:h-[calc(100%-40px)] z-[1]" />
          <div class="pl-[30px] sm:pl-[40px] pb-[30px] sm:pb-[44px] relative z-[2]">
            <img :src="block.image" :alt="block.image_alt">
          </div>
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
