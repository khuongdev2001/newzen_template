<template>
  <section :style="{ background: block.background }" class="py-[120px]" :data-cms-bind="dataBinding">
    <div class="container">
      <div class="section-content">
        <h2 class="text-[55px] title text-center">
          {{ block.title }}
        </h2>
        <div class="divider bg-black mb-[20px] mx-auto" />
        <p v-if="block.subtitle" class="desc my-[20px] text-center">{{ block.subtitle }}</p>
      </div>
      <div class="grid sm:grid-cols-3 items-center py-[60px] px-[40px] sm:p-[60px] gap-[15px] bg-black mt-[40px]">
        <div v-for="spa in block.spa" :key="spa">
          <div class="mb-[20px]">
            <img :src="spa.image" :alt="spa.image_alt" class="w-full h-[360px]">
          </div>
          <p class="text-white fonts-calibri text-center">{{ spa.title }}</p>
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
