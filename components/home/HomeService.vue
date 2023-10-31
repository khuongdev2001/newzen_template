<template>
  <section class="bg-white pt-[120px]" :data-cms-bind="dataBinding">
    <div class="container">
      <div class="grid grid-cols-4 list__service">
        <div v-for="service in block.service" :key="service" class="flex flex-col service__item">
          <div :style="{background: service.color}" class="h-[330px] text-[35px] flex flex-col items-center justify-center">
            <span :class="service.color === '#000' ? 'text-white' : ''">{{ service.title }}</span>
            <div class="h-[3px] w-[71px] mt-[10px]" :class="service.color === '#000' ? 'bg-white' : 'bg-black'" />
          </div>
          <div>
            <img :src="service.image" :alt="service.image_alt" class="h-[330px] w-full">
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
