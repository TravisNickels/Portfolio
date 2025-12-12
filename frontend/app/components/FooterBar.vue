<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t bg-white py-6 mt-12">
    <div class="container mx-auto px-6 text-sm text-gray-600 flex justify-between">
      <p>© {{ year }} Travis Nickels</p>

      <div class="flex gap-4">
        <a href="https://github.com/TravisNickels" target="_blank" class="hover:text-primary"> GitHub </a>
        <a href="https://www.linkedin.com/in/travis-nickels/" target="_blank" class="hover:text-primary"> LinkedIn </a>
      </div>
    </div>
  </footer>
</template>
