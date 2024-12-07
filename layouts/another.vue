<template>
  <div class="container mx-auto max-w-2xl">
    <header class="flex justify-between border-8 border-gray-200 mt-8 mb-4 p-2">
      <div>
        <NuxtLink to="/" class="text-xl font-semibold p-2 hover:bg-gray-200">Home</NuxtLink>
      </div>
      <Menu />
    </header>
    <main class="p-2.5 mt-10">
      <div class="border-4 border-pink-600 mt-8 mb-4 p-2">
        Новый Layout
      </div>
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: '%s - TESLA'
})
</script>
