<template>
  <div class="container mx-auto max-w-2xl">
    <header class="flex justify-between border-8 border-gray-200 mt-8 mb-4 p-2">
      <div class="flex items-center space-x-4">
        <div>
          <NuxtLink to="/" class="text-xl font-semibold p-2 hover:bg-gray-200">Home</NuxtLink>
        </div>
        <Menu />

      </div>
      <ClientOnly>
        <ColorModeSelector />
      </ClientOnly>

    </header>
    <main class="p-2.5 mt-10">
      <slot />
    </main>
  </div>
</template>
<script setup lang="ts">
useHead({
  titleTemplate: '%s - TESLA',
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
      crossorigin: ''
    },
  ]
})
</script>
<style>
  body {
    font-family:'Yuji Mai', serif;
  }
  body {
    @apply bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300
  }
</style>