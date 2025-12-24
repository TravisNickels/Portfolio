<script setup lang="ts">
const baseUrl = useRuntimeConfig().app.baseURL
const pdfPath = baseUrl + 'resume/TravisNickels_SoftwareEngineer_2025.pdf'
</script>

<template>
  <div class="bg-card border border-primary rounded-lg p-6 shadow-sm flex items-center justify-between gap-6">
    <div>
      <h3 class="text-lg font-semibold">Resume</h3>
      <p class="text-sm text-text/60">Download a printable PDF or view it inline.</p>
    </div>

    <div class="flex gap-3">
      <a class="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/80 transition whitespace-nowrap" :href="pdfPath" download>Download PDF</a>
      <NuxtLink to="/resume" class="px-4 py-2 border rounded-md text-primary hover:text-primary/80 hover:bg-primary/10 transition">View</NuxtLink>
    </div>
  </div>
</template>
