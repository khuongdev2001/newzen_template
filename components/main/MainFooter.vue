<template>
  <footer class="shadow bg-[#000] ">
    <div class="py-10">
      <div class="container">
        <div class="grid grid-cols-5 gap-6">
          <div class="col-span-3 pr-20">
            <NuxtLink v-if="footerData.logo" to="/" class="inline-block mb-2">
              <img :src="footerData.logo" alt="logo" class="w-20 h-auto block">
            </NuxtLink>
            <div>{{ footerData.description }}</div>
          </div>
          <div v-for="section in footerData.sections" :key="section.title">
            <h3 class="font-semibold mb-1">
              {{ section.title }}
            </h3>
            <nav>
              <ul class="list-none">
                <li v-for="item in section.links" :key="item.link">
                  <NuxtLink :to="item.link">
                    {{ item.text }}
                  </NuxtLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div class="py-4 border-t">
      <div class="container">
        <p class="text-center">
          Copyright {{ dayjs().get('years') }} {{ footerData.copyright }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';
import footerData from '@/data/footer.json';
</script>

<style scoped>

</style>
