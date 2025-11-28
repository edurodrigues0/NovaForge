// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  devServer: {
    port: 3003
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/tailwindcss'
  ],
  fonts: {
    families: [
      { name: 'Inter', provider: 'google' },
      { name: 'Orbitron', provider: 'google' }
    ]
  },
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
})