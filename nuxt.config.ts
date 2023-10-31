// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en'
      }
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  css: [
    '@/assets/style/main.scss'
  ],
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/ui',
    'nuxt-swiper'
  ],
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classPrefix: '',
    storageKey: 'nuxt-color-mode'
  },
  ui: {
    global: true,
    icons: ['mdi', 'ion']
  },
  tailwindcss: {
    cssPath: '@/assets/style/tailwind.css'
  },
  content: {
    documentDriven: true,
    highlight: {
      theme: 'dracula'
    }
  },
  components: {
    global: true,
    dirs: ['~/components']
  }
})
