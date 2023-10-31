<template>
  <header class="shadow bg-white text-black sticky top-0 z-[99999] h-[87px]">
    <div class="container">
      <div class="flex items-center justify-between">
        <NuxtLink to="/">
          <img v-if="headerData.logo" class="h-auto block" :src="headerData.logo" alt="">
        </NuxtLink>
        <nav class="hidden lg:block">
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
        <div class="sm:hidden block">
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            viewBox="0 0 70 70"
            @click="isOpen = !isOpen">
            <rect width="70" height="70" rx="12" fill="#FF8083"/>
            <path d="M16.3333 23.3333H53.6666H16.3333Z" fill="#FF8083"/>
            <path d="M16.3333 23.3333H53.6666" stroke="white" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round"/>
            <path d="M16.3335 35H53.6668H16.3335Z" fill="#FF8083"/>
            <path d="M16.3335 35H53.6668" stroke="white" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round"/>
            <path d="M16.3335 46.6667H53.6668H16.3335Z" fill="#FF8083"/>
            <path d="M16.3335 46.6667H53.6668" stroke="white" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round"/>
          </svg>
          <USlideover v-model="isOpen">
            <div class="p-4 flex-1">
              text
            </div>
          </USlideover>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import headerData from '@/data/header.json';

const isOpen = ref(false)
</script>

<style scoped>

</style>
