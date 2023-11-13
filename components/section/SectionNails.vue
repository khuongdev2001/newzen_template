<template>
  <section :data-cms-bind="dataBinding" class="py-[120px]">
    <div class="container">
      <div class="grid lg:grid-cols-[594px_1fr] gap-[60px] lg:gap-[86px] items-center">
        <div class="max-w-[594px] mx-auto pl-[32px] pr-[14px]">
          <div class="item-images relative ">
            <img :src="block.image" :alt="block.image_alt" class="z-[10] relative">
          </div>
        </div>
        <div class="section-content">
          <h2 class="title mb-5">{{ block.title }}</h2>
          <div class="desc">{{ block.subtitle }}</div>
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

<style lang="scss" scoped>
h2 {
  color: var(--color-primary);
}
.item-images {
  &::after {
    content: '';
    width: 560px;
    height: 560px;
    position: absolute;
    bottom: 6px;
    left: -32px;
    background-color: var(--color-primary);
    border-radius: 50%;
    z-index: -1;
  }
  &::before {
    content: '';
    width: 508px;
    height: 508px;
    position: absolute;
    bottom: -3px;
    right: -14px;
    background-color: var(--color-effects);
    border-radius: 50%;
    z-index: -1;
  }
}

@media (max-width: 640px) {
  .item-images {
    &::after {
      content: '';
      width: 100%;
      height: 100%;
    }
    &::before {
      content: '';
      width: 100%;
      height: 100%;
    }
  }
}
</style>
