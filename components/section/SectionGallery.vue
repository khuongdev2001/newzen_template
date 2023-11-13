<template>
  <section :data-cms-bind="dataBinding" class="section-gallery py-[120px]">
    <div class="container">
      <div class="max-w-[594px] mx-auto section-content">
        <h2 class="title text-center">{{ block.title }}</h2>
        <div class="divider h-[100px] !my-5" />
        <div class="grid gap-[120px]">
          <div v-for="(gallery, index) in block.gallery" :key="index">
            <h3 class="text-center text-[30px] font-bold">{{ gallery.title }}</h3>
            <div class="divider h-[50px] !my-5" />
            <div class="pl-[32px] pr-[14px] pt-5">
              <div class="item-images relative">
                <img :src="gallery.image" :alt="gallery.image_alt" class="z-[10] relative">
              </div>
            </div>
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
