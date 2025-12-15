<script setup lang="ts">
import clientManager from '~/content/projects/clientmanagerdemo.json'
import projectTracker from '~/content/projects/multifacilityprojecttracker.json'

const projects = [clientManager, projectTracker]
</script>

<template>
  <div class="container mx-auto px-6 py-3 space-y-8">
    <SectionHeader title="Projects" subtitle="Selected projects showcasing system design and practical engineering" />

    <ProjectGrid :items="projects" />
  </div>
</template>
