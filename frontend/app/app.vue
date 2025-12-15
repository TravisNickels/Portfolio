<script setup>
const base = useRuntimeConfig().app.baseURL
console.log('Base: ', base)
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'author', content: 'Travis Nickels' },
    { name: 'robots', content: 'index, follows' },
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: `${base}faviconTN.ico` }],
  htmlAttrs: {
    lang: 'en',
  },
})

const title = 'Travis Nickels - Senior Software Engineer'
const description =
  'Senior software engineer specializing in .NET, Vue, distributed systems, and workflow automation. Experience building internal platforms, developer tooling, and scalable systems.'

useSeoMeta({
  title,
  description,
  ogType: 'profile',
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://travisnickels.github.io/Portfolio/ogImage.png',

  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: 'https://travisnickels.github.io/Portfolio/ogImage.png',
})
</script>

<template>
  <UApp class="bg-surface text-text">
    <div class="min-h-screen flex flex-col">
      <HeaderBar />

      <!-- Expands to anchor footer to bottom of page -->
      <main class="flex-1 flex">
        <div class="container mx-auto px-6 py-12 w-full">
          <NuxtPage />
        </div>
      </main>

      <!-- <USeparator icon="i-simple-icons-nuxtdotjs" /> -->
      <FooterBar />
    </div>
  </UApp>
</template>
