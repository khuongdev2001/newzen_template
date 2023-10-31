<template>
  <section
    :data-cms-bind="dataBinding"
    class="relative"
  >
    <div>
      <img :src="block.image" :alt="block.image_alt" class="sm:h-auto h-[950px] object-cover">
    </div>
    <div class="container absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
      <div class="flex items-center">
        <div class="sm:w-7/12 text-white sm:text-left text-center">
          <h1 class="font-normal sm:font-bold text-[70px] sm:text-[100px] mb-4 leading-none">
            {{ block.title }}
          </h1>
          <h2 class="font-normal text-[50px] sm:text-[65px] mb-4 leading-none">
            {{ block.subtitle }}
          </h2>
        </div>
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

<style scoped>

</style>
