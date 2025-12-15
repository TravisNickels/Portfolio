<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <UFooter class="bg-card">
    <template #left class="container mx-auto px-6 text-sm text-gray-600 flex justify-between">
      <p class="text-sm text-muted">© {{ year }} Travis Nickels</p>
    </template>
    <template #right class="flex gap-4">
      <UButton
        to="https://github.com/TravisNickels"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="GitHub"
        color="neutral"
        variant="ghost"
      />
      <UButton
        to="https://www.linkedin.com/in/travis-nickels/"
        target="_blank"
        icon="i-simple-icons-linkedin"
        aria-label="LinkedIn"
        color="neutral"
        variant="ghost"
      />
    </template>
  </UFooter>
</template>
