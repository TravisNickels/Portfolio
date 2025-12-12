<template>
  <div class="container mx-auto px-6 py-3 space-y-8">
    <SectionHeader title="Resume" subtitle="Download a printable PDF or view it inline." />

    <div class="grid gap-6 lg:grid-cols-3">
      <div class="lg:col-span-2">
        <iframe src="/resume/TravisNickels_SoftwareEngineer_2025.pdf" class="w-full h-[80vh] border rounded-lg" />
      </div>

      <aside class="space-y-4">
        <div class="bg-white border rounded-lg p-6 shadow">
          <h4 class="font-semibold">Quick summary</h4>
          <p class="text-gray-700 mt-2">
            Senior software engineer with a track record of building automation and distributed systems that scale and reduce operational friction.
          </p>
        </div>

        <div class="bg-white border rounded-lg p-6 shadow">
          <h4 class="font-semibold">Download</h4>
          <a href="/resume/TravisNickels_SoftwareEngineer_2025.pdf" download class="mt-3 inline-block px-4 py-2 bg-primary text-white rounded-md"
            >Download PDF</a
          >
        </div>
      </aside>
    </div>
  </div>
</template>
