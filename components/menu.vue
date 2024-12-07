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
        <NuxtLink to="/blog/[id]" >Blog</NuxtLink>
      </li>
      <li class="link">
        <NuxtLink to="/projects" >Projects</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
<style scoped>
.link {
  @apply hover:bg-blue-300 p-1.5 bg-blue-500;
}
</style>