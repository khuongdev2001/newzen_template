<template>
  <section
    :data-cms-bind="dataBinding"
    class="relative"
  >
    <div>
      <img :src="block.image" alt="">
    </div>
    <div class="container absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
      <div class="flex items-center">
        <div class="w-7/12 text-white">
          <h1 class="font-bold text-[100px] mb-4 leading-none">
            {{ block.title }}
          </h1>
          <h2 class="text-[65px] mb-4 leading-none">
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
