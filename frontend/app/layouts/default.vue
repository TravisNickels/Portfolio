<template>
  <div class="min-h-screen flex flex-col bg-surface text-text">
    <HeaderBar />

    <main class="flex-1 container mx-auto px-6 py-12">
      <slot />
    </main>

    <FooterBar />
  </div>
</template>
