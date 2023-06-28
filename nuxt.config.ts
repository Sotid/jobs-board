// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  buildModules: [
  '@nuxt/typescript-build',     
  '@nuxtjs/google-fonts'
],
vite: {
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/assets/css/_variables.scss" as *;'
      }
    }
  }
},
  css:['~/assets/css/main.scss', '~/assets/css/reset.scss' ],
  googleFonts: {
    preload: true,
    families: {
      Roboto: true,
    }
  }
})
