<template>
  <div class="container mx-auto px-6 py-3 space-y-8">
    <SectionHeader title="Travis Nickels" subtitle="Senior Software Engineer — automating things so people can do real work." />

    <div class="grid gap-8 lg:grid-cols-2 items-start">
      <!-- Left Column -->
      <div class="space-y-6">
        <p class="text-lg text-text leading-relaxed max-w-2xl">
          I design and build resilient backend systems, developer tooling, and polished frontends. My focus is event-driven architecture, messaging,
          and automation that eliminates repetitive work and lets engineering teams focus on meaningful problems.
        </p>

        <div class="flex gap-4">
          <NuxtLink to="/projects" class="px-5 py-3 bg-primary text-white rounded-md hover:bg-primary/80 transition">View Projects</NuxtLink>
        </div>

        <div class="mt-6 space-y-3">
          <h4 class="text-sm font-semibold text-text/75">Selected skills</h4>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 text-sm bg-surface border border-primary/75 rounded text-text/75">C#, .NET</span>
            <span class="px-3 py-1 text-sm bg-surface border border-primary/75 rounded text-text/75">Distributed Systems</span>
            <span class="px-3 py-1 text-sm bg-surface border border-primary/75 rounded text-text/75">RabbitMQ / NServiceBus</span>
            <span class="px-3 py-1 text-sm bg-surface border border-primary/75 rounded text-text/75">Vue 3 / Nuxt</span>
            <span class="px-3 py-1 text-sm bg-surface border border-primary/75 rounded text-text/75">CI/CD</span>
          </div>
        </div>

        <div class="bg-card border border-primary rounded-lg p-6 shadow">
          <h4 class="font-semibold text-lg text-primary">Current focus</h4>
          <p class="mt-2 text-text">
            Strengthening internal platforms, refining service boundaries, improving observability, and standardizing CI/CD and shared tooling across
            teams.
          </p>
        </div>
        <ResumeDownloadCard />
      </div>

      <!-- Right Column -->
      <div class="flex flex-col gap-6">
        <div class="flex justify-center">
          <img src="assets/headshot.png" alt="Headshot" class="rounded-full w-64 shadow-lg" />
        </div>
      </div>
    </div>
  </div>
</template>
