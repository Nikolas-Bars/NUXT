<template>
  <article class="prose dark:prose-invert max-w-none prose-pre:bg-gray-200
   dark:prose-pre:bg-gray-700 prose-pre:text-gray-700
    ">
    <ContentDoc v-slot="{ doc }">
      {{ doc.body.toc.links }}
      <ContentRenderer :value="doc" />
    </ContentDoc>
  </article>
</template>
<script setup>
  const route = useRoute()
  useSeoMeta({
    title: 'Блог'
  })
</script>