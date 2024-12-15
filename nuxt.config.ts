// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/content'
  ],
  colorMode: {
      classSuffix: '',
  },
  // content - нужен для подсветки синтаксиса кода на странице,
  // он из библиотеки shiki которая уже установлена внутри
  // модуля nuxt-content  - https://content.nuxt.com/get-started/configuration
  content: {
    highlight: {
      theme: {
        default: 'min-light',
        dark: 'min-dark',
      },
    }
  }
})