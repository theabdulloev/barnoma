// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
    experimental: {
        payloadExtraction: false,
      },
    modules: ["@unocss/nuxt",'@nuxt/ui'],
    nitro: {
    }
});
