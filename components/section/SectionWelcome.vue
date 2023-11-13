<template>
  <section :data-cms-bind="dataBinding" class="py-[120px]">
    <div class="container ">
      <div class="section-content text-center">
        <h2 class="title mb-5">{{ block.title }}</h2>
        <p class="max-w-[794px] mx-auto desc mb-[30px]">{{ block.subtitle }}</p>
        <NuxtLink :to="block.button.url" class="custom-btn">{{ block.button.text }}</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  dataBinding: any;
  block: any;
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
h2 {
  color: var(--color-primary);
}
</style>
