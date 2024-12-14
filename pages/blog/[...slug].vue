<template>
  <div>
    <article class="prose dark:prose-invert prose-pre:bg-gray-200
     dark:prose-pre:bg-gray-700 prose-pre:text-gray-700
      ">
      <ContentDoc />
    </article>
  </div>
</template>
<script setup>
  const route = useRoute()
  console.log(route.params.slug, 'slug')
  useSeoMeta({
    title: 'Блог'
  })
</script>