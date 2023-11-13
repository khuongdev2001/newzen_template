<template>
  <footer class="shadow">
    <div class="py-[120px] bg-[#E9E9E9]">
      <div class="container">
        <div class="grid sm:grid-cols-[1fr_auto] sm:gap-5 gap-[60px]">
          <div>
            <div class="mb-[80px]">
              <div class="mb-[30px] fonts-calibri text-[30px] font-bold">{{ footerData.contact.label }}</div>
              <div v-for="info in footerData.contact.info" :key="info.label" class="flex items-center gap-4 mb-[27px]">
                <UIcon :name="info.icon" class="w-[20px] h-[20px]" />
                <div class="fonts-calibri text-[20px]">{{ info.label }}</div>
              </div>
            </div>
            <div>
              <div class="mb-[30px] fonts-calibri text-[30px] font-bold">{{ footerData.follow.label }}</div>
              <div class="flex items-center gap-5 mb-[80px]">
                <NuxtLink v-for="info in footerData.follow.info" v-show="info.active" :key="info.link" :to="info.link" class="w-[40px] h-[40px] rounded-full bg-effects flex items-center justify-center">
                  <UIcon :name="info.icon" />
                </NuxtLink>
              </div>

              <div class="lg:hidden block max-w-[608px] mx-auto pl-[26px] pr-6">
                <div class="item-images relative ">
                  <img :src="footerData.image.src" :alt="footerData.image.alt" class="relative z-[10] object-cover aspect-1">
                </div>
              </div>

              <!-- <UIcon name="i-ri-facebook-fill" /> -->
              <!-- <UIcon name="i-ri-twitter-fill" /> -->
              <!-- <UIcon name="i-ri-linkedin-fill" /> -->
              <!-- <UIcon name="i-ri-google-fill" /> -->
              <!-- <UIcon name="i-ri-skype-fill" /> -->
              <!-- <UIcon name="i-ri-youtube-fill" /> -->
              <!-- <UIcon name="i-mdi-map-marker" /> -->
              <!-- <UIcon name="i-mdi-phone" /> -->
              <!-- <UIcon name="i-mdi-email-outline" /> -->
              <div class="mb-[30px] fonts-calibri text-[30px] font-bold">{{ footerData.location.label }}</div>
              <!-- eslint-disable vue/no-v-html -->
              <div class="cs-iframe" v-html="footerData.location.iframe" />
              <!--eslint-enable-->
            </div>
          </div>
          <div>
            <div class="lg:block hidden">
              <div class="item-images relative pl-[26px] pr-6">
                <img :src="footerData.image.src" :alt="footerData.image.alt" class="relative z-[10] object-cover aspect-1">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="border-t footer-bottom py-[60px] ">
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

<style lang="scss" scoped>
.footer-bottom {
  background: var(--color-primary);
}
.item-images {
  &::after {
    content: '';
    width: 508px;
    height: 508px;
    position: absolute;
    bottom: -3px;
    left: 0;
    background-color: var(--color-effects);
    border-radius: 50%;
    z-index: 0;
  }
  &::before {
    content: '';
    width: 560px;
    height: 560px;
    position: absolute;
    top: -18px;
    right: 0;
    background-color: var(--color-primary);
    border-radius: 50%;
    z-index: 0;
  }
}

@media (max-width: 1024px) {
  .item-images {
    &::after {
      content: '';
      width: 100%;
      height: 100%;
      left: -26px;
    }
    &::before {
      content: '';
      width: 100%;
      height: 100%;
      right: -24px;
    }
  }
}
</style>

<style lang="scss">
.cs-iframe {
  max-width: 100% !important;
  iframe {
    width: 100% !important;
    height: 350px;
  }
}
</style>
