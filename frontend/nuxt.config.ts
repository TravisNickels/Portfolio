// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    assetsInclude: ['**/*.mmd'],
  },
  ssr: false,
  app: {
    baseURL:
      process.env.NODE_ENV === 'production'
        ? '/TravisNickels/' // GitHub Pages repo name
        : '/',
    head: {
      title: 'Travis Nickels • Software Engineer',
      meta: [
        {
          name: 'description',
          content: 'Senior Software Engineer with experience in .NET, Vue, distributed systems, and workflow automation.',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
})
