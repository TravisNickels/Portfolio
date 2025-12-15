<script setup lang="ts">
defineProps<{
  title: string
  description: string
  stack: string[]
  slug?: string
}>()
</script>

<template>
  <article class="p-6 bg-card border border-primary rounded-xl shadow hover:shadow-md transition">
    <div>
      <h3 class="text-xl font-semibold text-primary mb-1">{{ title }}</h3>
      <p class="mt-4 text-text leading-relaxed">{{ description }}</p>
      <p class="mt-4 text-sm text-secondary font-medium mb-4">{{ stack.join(' • ') }}</p>
    </div>
    <div class="text-sm text-gray-400">
      <NuxtLink v-if="slug" :to="`/projects/${slug}`" class="text-accent font-medium underline hover:text-primary">View Project →</NuxtLink>
    </div>
  </article>
</template>
