<template>
  <footer class="shadow">
    <div class="py-[120px] bg-[#E9E9E9]">
      <div class="container">
        <div class="grid sm:grid-cols-2 sm:gap-5 gap-[60px]">
          <div>
            <div class="mb-[80px]">
              <div class="mb-[30px] fonts-calibri text-[30px] font-bold">{{ footerData.contact.label }}</div>
              <div v-for="info in footerData.contact.info" :key="info.label" class="flex items-center gap-4 mb-[27px]">
                <UIcon :name="info.icon" class="w-[20px] h-[20px]" />
                <div class="fonts-calibri text-[20px]">{{ info.label }}</div>
                <!-- <UIcon name="i-mdi-facebook" /> -->
              </div>
            </div>
            <div>
              <div class="mb-[30px] fonts-calibri text-[30px] font-bold">{{ footerData.follow.label }}</div>
              <div class="flex items-center gap-5">
                <NuxtLink v-for="info in footerData.follow.info" v-show="info.active" :key="info.link" :to="info.link">
                  <UIcon :name="info.icon" class="w-[40px] h-[40px]" />
                </NuxtLink>
              </div>
              <!-- <UIcon name="i-mdi-twitter" /> -->
              <!-- <UIcon name="i-mdi-linkedin" /> -->
              <!-- <UIcon name="i-mdi-google" /> -->
              <!-- <UIcon name="i-mdi-map-marker" /> -->
              <!-- <UIcon name="i-mdi-phone" /> -->
              <!-- <UIcon name="i-mdi-email-outline" /> -->
            </div>
          </div>
          <div>
            <div class="mb-[30px] fonts-calibri text-[30px] font-bold">{{ footerData.location.label }}</div>
            <!-- eslint-disable vue/no-v-html -->
            <div class="cs-iframe" v-html="footerData.location.iframe" />
            <!--eslint-enable-->
          </div>
        </div>
      </div>
    </div>
    <div class="border-t bg-secondary py-[60px] ">
      <div class="container">
        <p class="text-center text-white text-xl fonts-calibri">
          © {{ dayjs().get('years') }} {{ footerData.copyright }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';
import footerData from '@/data/footer.json';
</script>

<style lang="scss">
.cs-iframe {
  max-width: 100% !important;
  iframe {
    width: 100% !important;
    height: 350px;
  }
}
</style>
