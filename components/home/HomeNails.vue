<template>
  <section class="bg-white mt-[120px] relative" :data-cms-bind="dataBinding">
    <img src="/images/home/nails-special.png" alt="" class="h-[700px] sm:h-auto object-cover">
    <div class="container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div class="grid sm:grid-cols-2 items-center">
        <div class="section-content">
          <h2 class="title">
            Nails Special
            <div class="divider bg-black mb-[20px]" />
          </h2>
          <p class="desc">Nails Salon & Spa is always up-to-date with the latest technology and trends in the nail industry. With years of experience, we take pride in doing a great job.</p>
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
}</style>
