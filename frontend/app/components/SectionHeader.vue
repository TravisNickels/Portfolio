<script setup lang="ts">
defineProps<{ title: string; subtitle?: string }>()
</script>

<template>
  <div class="mb-6 border-l-4 border-primary pl-4">
    <h1 class="text-3xl font-semibold text-primary">{{ title }}</h1>
    <p v-if="subtitle" class="mt-2 text-sm text-text/60">{{ subtitle }}</p>
  </div>
</template>
