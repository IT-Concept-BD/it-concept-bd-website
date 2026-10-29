import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/i18n', '@nuxt/fonts'],
  css: ['~/assets/css/main.css'],
  vite: { plugins: [tailwindcss()] },
  i18n: {
    defaultLocale: 'en',
    strategy: 'no_prefix',
    locales: [{ code: 'en', language: 'en-US', file: 'en.json' }],
    langDir: 'locales',
  },
  fonts: {
    families: [
      { name: 'Plus Jakarta Sans', provider: 'google', weights: [500, 600, 700] },
      { name: 'Inter', provider: 'google', weights: [400, 500, 600] },
    ],
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'IT Concept BD | Websites, Software and Brand Design in Dhaka',
      meta: [
        { name: 'description', content: 'IT Concept BD is a creative digital team in Dhaka that builds websites, business software and brands that look trusted and modern.' },
      ],
      link: [{ rel: 'icon', href: '/logo.jpeg' }],
    },
  },
})
