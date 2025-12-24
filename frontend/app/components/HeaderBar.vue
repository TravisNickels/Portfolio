<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[][]>([
  [
    { label: 'Home', to: '/', class: 'hover:text-accent' },
    { label: 'Projects', to: '/projects', class: 'hover:text-accent' },
    { label: 'Impact', to: '/impact', class: 'hover:text-accent' },
    { label: 'Resume', to: '/resume', class: 'hover:text-accent' },
    { label: 'Contact', to: '/contact', class: 'hover:text-accent' },
    { label: 'About', to: '/about', class: 'hover:text-accent' },
  ],
])
</script>

<template>
  <UHeader class="shadow-sm">
    <template #left>
      <NuxtLink to="/" class="text-xl font-semibold text-primary"> Travis<span class="text-secondary"> Nickels</span> </NuxtLink>
    </template>
    <template #right>
      <UNavigationMenu :items="items" variant="link" class="hover:text-accent hidden md:flex" color="info" />
      <UColorModeButton />
    </template>
    <template #body>
      <UNavigationMenu :items="items" variant="link" orientation="vertical" class="space-y-2" color="info" />
    </template>
  </UHeader>
</template>
