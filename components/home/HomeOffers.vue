<template>
  <section class="bg-white py-[120px]" :data-cms-bind="dataBinding">
    <div class="sm:container">
      <div class="grid sm:grid-cols-2">
        <div>
          <img src="/images/home/special-offers.png" alt="" class="lg:min-h-auto h-[650px] object-cover">
        </div>
        <div class="section-content bg-black p-[40px] lg:min-h-auto min-h-[650px]">
          <div class="border-[2px] border-secondary h-full flex flex-col justify-center px-[30px] sm:px-[45px]">
            <h2 class="text-[55px] title text-white">
              Special Offers
              <div class="divider bg-white my-[20px]" />
            </h2>
            <p class="desc mb-[20px] text-white">Nail art designs and ideas for different types of nails like long nails, short nails, and medium nails.
              Check out more all Nail art designs here.</p>
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
