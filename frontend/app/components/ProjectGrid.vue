<script setup lang="ts">
defineProps<{ items: any[] }>()
</script>

<template>
  <div class="grid gap-6 grid-cols-1 md:grid-cols-1">
    <ProjectCard v-for="p in items" :key="p.slug ?? p.title" v-bind="p" />
  </div>
</template>
