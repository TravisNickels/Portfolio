<script setup lang="ts">
defineProps<{
  title: string
  description: string
  items: { text: string; link?: string }[]
}>()
</script>

<template>
  <section>
    <h3 class="text-2xl font-semibold text-primary mb-2">{{ title }}</h3>
    <p class="text-text mb-4">{{ description }}</p>

    <ul class="list-disc ml-6 space-y-1 text-text">
      <li v-for="i in items" :key="i.text">
        <a v-if="i.link" :href="i.link" target="_blank" class="underline text-accent hover:text-primary">
          {{ i.text }}
        </a>
        <span v-else>{{ i.text }}</span>
      </li>
    </ul>
  </section>
</template>
