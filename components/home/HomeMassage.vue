<template>
  <section class="bg-white pt-[120px]" :data-cms-bind="dataBinding">
    <div class="container">
      <div class="grid grid-cols-2 items-center">
        <div class="section-content">
          <h2 class="text-[55px] title">
            Massage
            <div class="divider bg-black mb-[20px]" />
          </h2>
          <p class="desc my-[20px]">Our staff always works with their talent and passion. You would be treated carefully and thoroughly at any time.</p>
        </div>
        <div class="sm:pl-[50px] relative">
          <div
            class="border-[5px] border-[#F9D1BF] absolute top-[50px] left-[50px] w-[calc(100%-90px)] h-[calc(100%-40px)] z-[1]" />
          <div class="pl-[40px] pb-[44px] relative z-[2]">
            <img src="/images/home/about.png" alt="">
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
