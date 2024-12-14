<template>
  <div>
    <article class="prose dark:prose-invert">
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