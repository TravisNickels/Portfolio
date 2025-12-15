<script setup lang="ts">
import Mermaid from '~/components/Mermaid.vue'

const baseUrl = useRuntimeConfig().app.baseURL
const route = useRoute()
const slug = route.params.slug

// Simple loader: read JSON from content folder
const project = await import(`~/content/projects/${slug}.json`).then((m) => m.default)
const mermaidSource = ref<string | null>(null)

onMounted(async () => {
  if (!project.mermaidDiagram) return

  const url = new URL(baseUrl + project.mermaidDiagram, window.location.origin)
  mermaidSource.value = await fetch(url).then((r) => r.text())
})
</script>

<template>
  <div class="container mx-auto px-6 py-3 space-y-8">
    <SectionHeader :title="project.title" :subtitle="project.tagline" />

    <div class="grid gap-8 lg:grid-cols-3">
      <div class="lg:col-span-2 space-y-6">
        <h3 class="text-lg font-semibold">Overview</h3>
        <p class="text-text">
          {{ project.overview }}
        </p>

        <h3 class="text-lg font-semibold">Architecture</h3>
        <p class="text-text">
          {{ project.architectureSummary }}
        </p>
        <img v-if="project.diagram" :src="project.diagram" class="rounded shadow" />
        <Mermaid v-if="mermaidSource" :source="mermaidSource" :title="project.mermaidTitle" />

        <h3 class="text-lg font-semibold">Technical Approach</h3>
        <ul class="list-disc ml-6 space-y-2">
          <li v-for="(t, i) in project.technicalApproach" :key="i">
            {{ t }}
          </li>
        </ul>

        <h3 class="text-lg font-semibold">Outcome & Lessons</h3>
        <p class="text-text">
          {{ project.outcome }}
        </p>
      </div>

      <aside class="space-y-4">
        <div class="bg-card border border-primary rounded-lg p-4 shadow">
          <p class="text-sm text-text">Stack</p>
          <p class="font-medium mt-2">
            {{ project.stack.join(' • ') }}
          </p>
        </div>

        <div class="bg-card border border-primary rounded-lg p-4 shadow">
          <p class="text-sm text-text">Artifacts</p>
          <ul class="text-sm mt-2 space-y-2">
            <li v-for="(a, i) in project.artifacts" :key="i">
              <UModal :ui="{ content: 'w-[85vw] h-[85vh] max-w-none' }" :title="a.label" description="Asset images">
                <ULink v-if="a.isImage" as="button" class="cursor-pointer text-accent underline hover:text-primary">{{ a.label }}</ULink>
                <template #body>
                  <img :src="baseUrl + a.link" />
                </template>
              </UModal>
              <ULink v-if="!a.isImage" :href="a.link" target="_blank" class="cursor-pointer text-accent underline hover:text-primary">{{
                a.label
              }}</ULink>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</template>
