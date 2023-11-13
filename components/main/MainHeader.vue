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
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            @click="isOpen = !isOpen"
          >
            <rect width="60" height="60" fill="#5C4FA8"/>
            <line x1="13" y1="14" x2="47" y2="14" stroke="white" stroke-width="4" stroke-linecap="round"/>
            <line x1="13" y1="28" x2="47" y2="28" stroke="white" stroke-width="4" stroke-linecap="round"/>
            <line x1="13" y1="42" x2="47" y2="42" stroke="white" stroke-width="4" stroke-linecap="round"/>
          </svg>
          <USlideover v-model="isOpen" class="nav-mobile">
            <div class="p-4 flex-1 relative">
              <div class="absolute top-3 right-3">
                <UIcon name="i-ri-close-line" @click="isOpen = false" class="w-[40px] h-[40px]" />
              </div>
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
