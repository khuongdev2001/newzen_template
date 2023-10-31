<template>
  <section class="bg-white pt-[120px]" :data-cms-bind="dataBinding">
    <div class="container">
      <div class="grid lg:grid-cols-2 list__service sm:px-0 px-[60px]">
        <div v-for="service in block.service" :key="service" class="grid sm:grid-cols-2 items-stretch service__item">
          <div :style="{background: service.color}" class="min-h-[330px] text-[35px] flex flex-col items-center justify-center service-bg">
            <span class="text-ellipsis-custom px-[10px]" :class="service.color === '#000' ? 'text-white' : ''">{{ service.title }}</span>
            <div class="h-[3px] w-[71px] mt-[10px]" :class="service.color === '#000' ? 'bg-white' : 'bg-black'" />
          </div>
          <div>
            <img :src="service.image" :alt="service.image_alt" class="min-h-[330px] sm:min-h-full w-full object-cover">
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

@media (min-width: 640px) and (max-width: 1023px) {
  .list__service {
    .service__item {
      &:nth-child(even) {
        .service-bg {
          order: 1;
        }
      }
    }
  }
}

@media (min-width: 1024px) {
  .list__service {
    .service__item {
      &:nth-child(4n), &:nth-child(4n - 1) {
        .service-bg {
          order: 1;
        }
      }
    }
  }
}
.text-ellipsis-custom {
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

</style>
