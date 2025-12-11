// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

<<<<<<< HEAD
  devServer: {
    port: 3003
=======
  app: {
    head: {
      title: "Nova Forge - Forjando tecnologia que impulsiona negócios.",
      meta: [
        {
          name: "description",
          content: "Transformamos desafios em software robusto, escalável e preparado para crescer junto com você."
        },
        {
          property: "og:description",
          content: "Transformamos desafios em software robusto, escalável e preparado para crescer junto com você."
        },
        {
          name: "keywords",
          content: "desenvolvimento de software, desenvolvimento de aplicativos, desenvolvimento de sites, desenvolvimento de sistemas, desenvolvimento de software empresarial, desenvolvimento de software para empresas, desenvolvimento de software para startups, desenvolvimento de software para empresas de pequeno e médio porte, desenvolvimento de software para empresas de grande porte, desenvolvimento de software para empresas de médio porte, desenvolvimento de software para empresas de pequeno porte, desenvolvimento de software para empresas de grande porte, desenvolvimento de software para empresas de médio porte, desenvolvimento de software para empresas de pequeno porte"
        },
      ],
    },
>>>>>>> f36e58c87a39df848aa5bfd6909379069807afb5
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