<template>
  <div class="border-2 border-gray-200 mt-8">
    <h1>Hello, MF</h1>
  </div>
</template>
<script setup lang="ts">
useSeoMeta({
  title: 'Main Page',
  description: 'This is a Main page',
  ogTitle: '[og:title]',
  ogDescription: '[og:description]',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: 'Не Twitter, а X блэд!',
  twitterDescription: 'Маск СуперЧел',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary'
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})
</script>/