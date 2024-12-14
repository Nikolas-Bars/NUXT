<template>
  <nav class="font-mono">
    <ul class="flex space-x-4">
      <li class="link">
        <NuxtLink to="/" >Home</NuxtLink>
      </li>
      <li class="link">
        <NuxtLink to="/about" >About</NuxtLink>
      </li>
      <li class="link">
        <NuxtLink to="/blog" >Blog</NuxtLink>
      </li>
      <li class="link">
        <NuxtLink to="/projects" >Projects</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
<style scoped>
.link {
  @apply hover:bg-gray-200 p-1.5 bg-gray-300 rounded-md text-black;
}
</style>