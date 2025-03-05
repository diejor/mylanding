import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/public/main.css'],

  routeRules: {
    '/api/**': { cors: true }
  },

  app: {
    baseURL: '/',
    buildAssetsDir: 'assets'
  },

  nitro: {
    preset: 'static'
  },

  vite: { 
    plugins: [
      tailwindcss(),
    ], 
  },
})