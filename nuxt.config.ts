// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ["@nuxt/ui"],
  devtools: { enabled: true },

  eslint: {
    config: {
      stylistic: {
        semi: true,
        quotes: "double",
      },
    },
  },
});