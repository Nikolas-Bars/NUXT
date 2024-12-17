<template>
  <section class="not-prose font-mono">
    <div class="column p-4 text-gray-400 text-sm">
      <div style="width: 50px">date</div>
      <div>title</div>
    </div>
    <ul>
      <li v-for="post in posts" :key="post._path">
        <NuxtLink :to="post._path" class="column p-4 rounded-md dark:text-white hover:bg-gray-100 dark:hover:text-black">
          <div class="text-gray-500" style="width: 50px">{{post.displayYear ? post.year : " "}}</div>
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
const {data: data} = await useAsyncData(
    'blog-list',
    ()=> queryContent('/blog')
        .where({_path: {$ne: '/blog'}})
        .only(['_path', 'title', 'publishedAt'])
        .sort({publishedAt: -1})
        .find()
)

const posts = computed(() => {

  const result = [];
  let lastYear = null;

  if (!data.value) {
    return []
  }

  for(const post of data.value) {
    const year = new Date(post.publishedAt).getFullYear()

    const displayYear = year !== lastYear;
    post.displayYear = displayYear;
    result.push(post);
    post.year = year;
    lastYear = year;
    console.log(displayYear)
  }

  return result
})

console.log(posts, 'result')
</script>
<style scoped>
.column {
  @apply flex items-center space-x-8 py-2 border-b border-gray-200 dark:border-gray-700
}
</style>