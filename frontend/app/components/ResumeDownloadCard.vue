<script setup lang="ts">
const pdfPath = '/TravisNickels_SOftwareEngineer_2025.pdf'
</script>

<template>
  <div class="bg-white border rounded-lg p-6 shadow-sm flex items-center justify-between gap-6">
    <div>
      <h3 class="text-lg font-semibold">Resume</h3>
      <p class="text-sm text-gray-600">Download a printable PDF or view it inline.</p>
    </div>

    <div class="flex gap-3">
      <a class="px-4 py-2 bg-primary text-white rounded-md" :href="pdfPath" download>Download PDF</a>
      <NuxtLink to="/resume" class="px-4 py-2 border rounded-md text-primary">View</NuxtLink>
    </div>
  </div>
</template>
