<template>
  <section class="not-prose font-mono">
    <div class="column p-4 text-gray-400 text-sm">
      <div>date</div>
      <div>title</div>
    </div>
    <ul>
      <li v-for="post in posts" :key="post._path">
        <NuxtLink :to="post._path" class="column p-4 rounded-md dark:text-white hover:bg-gray-100 dark:hover:text-black">
          <div class="text-gray-500">2023</div>
          <div>{{post.title}}</div>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Блог'
})
const {data: posts} = await useAsyncData(
    'blog-list',
    ()=> queryContent('/blog').where({_path: {$ne: '/blog'}}).only(['_path', 'title']).find()
)
console.log(posts, 'result')
</script>
<style scoped>
.column {
  @apply flex items-center space-x-8 py-2 border-b border-gray-200 dark:border-gray-700
}
</style>