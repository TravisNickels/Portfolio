<template>
  <header class="bg-white shadow-sm border-b">
    <nav class="container mx-auto px-6 py-4 flex items-center justify-between">
      <!-- Left: Logo / Name -->
      <NuxtLink to="/" class="text-xl font-semibold text-primary"> Travis<span class="text-secondary"> Nickels</span> </NuxtLink>

      <!-- Right: Nav Items -->
      <ul class="flex gap-8 text-sm font-medium">
        <li>
          <NuxtLink to="/" class="hover:text-primary" :class="{ 'text-primary font-semibold': $route.path === '/' }"> Home </NuxtLink>
        </li>

        <li>
          <NuxtLink to="/projects" class="hover:text-primary" :class="{ 'text-primary font-semibold': $route.path === '/projects' }">
            Projects
          </NuxtLink>
        </li>

        <li>
          <NuxtLink to="/impact" class="hover:text-primary" :class="{ 'text-primary font-semibold': $route.path === '/impact' }"> Impact </NuxtLink>
        </li>

        <li>
          <NuxtLink to="/resume" class="hover:text-primary" :class="{ 'text-primary font-semibold': $route.path === '/resume' }"> Resume </NuxtLink>
        </li>

        <li>
          <NuxtLink to="/contact" class="hover:text-primary" :class="{ 'text-primary font-semibold': $route.path === '/contact' }">
            Contact
          </NuxtLink>
        </li>

        <li>
          <NuxtLink to="/about" class="hover:text-primary" :class="{ 'text-primary font-semibold': $route.path === '/about' }"> About </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
