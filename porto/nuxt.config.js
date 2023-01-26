// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-icons", "nuxt-icon", "nuxt-svgo"],
  head: {
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poiret+One&display=swap",
      },
    ],
  },
  pages: true,
});
