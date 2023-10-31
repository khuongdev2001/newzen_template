<template>
  <header class="shadow bg-white text-black sticky top-0 z-[99999] h-[87px]">
    <div class="container">
      <div class="flex items-center justify-between">
        <NuxtLink to="/">
          <img v-if="headerData.logo" class="h-auto block" :src="headerData.logo" alt="">
        </NuxtLink>
        <nav>
          <ul class="flex items-center">
            <li v-for="item in headerData.items" :key="item.link">
              <NuxtLink
                class="block py-2 px-4"
                :to="item.link"
                active-class="text-primary font-medium"
              >
                {{ item.text }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import headerData from '@/data/header.json';
</script>

<style scoped>

</style>
