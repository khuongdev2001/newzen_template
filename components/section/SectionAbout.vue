<template>
  <section :data-cms-bind="dataBinding" class="py-[120px]" :style="{background: block.background}">
    <div class="container section-content">
      <h2 class="title mb-5">{{ block.title }}</h2>
      <div v-for="(about, index) in block.about" :key="index" class="about-item flex lg:flex-row flex-col gap-x-[147px] items-center justify-between gap-y-[55px]" :class="index === block.about.length - 1 ? '' : 'mb-10 lg:mb-8'">
        <p class="desc">{{ about.title }}</p>
        <div class="min-w-[240px]">
          <div class="pl-3 pr-2 relative item-images">
            <img :src="about.image" :alt="about.image_alt" class="z-[10] relative w-[220px] h-[220px] rounded-full aspect-1 object-cover">
          </div>
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
@media (min-width: 1024px) {
  .about-item {
    &:nth-child(odd) {
      flex-direction: row-reverse;
    }
  }
}
.item-images {
  &::after {
    content: '';
    width: 214px;
    height: 214px;
    position: absolute;
    top: -15px;
    right: 0;
    background-color: var(--color-effects);
    border-radius: 50%;
    z-index: 0;
  }
  &::before {
    content: '';
    width: 182px;
    height: 182px;
    position: absolute;
    bottom: 14px;
    left: 0;
    background-color: var(--color-effects);
    border-radius: 50%;
    z-index: 0;
  }
}
</style>
