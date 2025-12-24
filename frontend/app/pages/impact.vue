<script setup lang="ts">
import SectionHeader from '~/components/SectionHeader.vue'
import rabbitmq from '~/content/impact/rabbitmq.json'
import testing from '~/content/impact/testarchitecture.json'
import research from '~/content/impact/research.json'
import documentation from '~/content/impact/documentation.json'
import design from '~/content/impact/design.json'

const categories = [rabbitmq, testing, research, documentation, design]
</script>

<template>
  <div class="container mx-auto py-3 space-y-8">
    <SectionHeader
      title="Impact"
      subtitle="Selected contributions demonstrating long-term reliability, clarity, and stewardship across distributed systems and tooling."
    />

    <p class="text-text leading-relaxed text-lg max-w-3xl">
      This page highlights the work that improved platform reliability, test architecture, developer experience, and overall product health beyond
      discrete projects.
    </p>

    <div class="grid gap-6 grid-cols-1 md:grid-cols-2">
      <ImpactCategory v-for="c in categories" :key="c.title" v-bind="c" />
    </div>
  </div>
</template>
