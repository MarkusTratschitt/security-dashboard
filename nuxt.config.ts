// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  css: ['@/assets/style/main.less'],
  build: {
    transpile: ['vuetify'],
  },
  modules: ['@pinia/nuxt'],
  vite: {
    plugins: [vuetify()],
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})
