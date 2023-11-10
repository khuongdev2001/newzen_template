<template>
  <header class="shadow bg-white text-black sticky top-0 z-[99999] h-[87px]">
    <div class="container">
      <div class="flex items-center justify-between">
        <NuxtLink to="/">
          <img v-if="headerData.logo" class="h-auto block" :src="headerData.logo" alt="logo">
        </NuxtLink>
        <nav class="hidden lg:block">
          <ul class="flex items-center">
            <li v-for="item in headerData.items" :key="item.link">
              <NuxtLink
                class="block"
                :to="item.link"
              >
                {{ item.text }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <div class="lg:hidden block">
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
          <USlideover v-model="isOpen" class="nav-mobile">
            <div class="p-4 flex-1">
              <div class="mb-[40px]">
                <NuxtLink to="/">
                  <img v-if="headerData.logo" class="h-auto block" :src="headerData.logo" alt="logo">
                </NuxtLink>
              </div>
              <nav>
                <ul class="flex flex-col">
                  <li v-for="item in headerData.items" :key="item.link">
                    <NuxtLink
                      class="block"
                      :to="item.link"
                    >
                      {{ item.text }}
                    </NuxtLink>
                  </li>
                </ul>
              </nav>
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
const route = useRoute();

watch(() => route.path, () => {
  isOpen.value = false
})

</script>

<style lang="scss" scoped>
nav {
  li {
    a {
      font-family: 'Calibri', sans-serif;
      font-size: 22px;
      font-weight: 700;
      padding: 10px 36px;
      color: var(--color-anchor);
      transition: all 0.3s ease;
      &.router-link-exact-active {
        color: var(--color-primary);
      }
      &:hover {
        color: var(--color-primary);
      }
    }
  }
}
</style>

<style lang="scss">
.nav-mobile {
  z-index: 99999;
  & > div {
    &:last-child {
      background: #fff;
      max-width: 90%;
    }
  }
}
</style>
