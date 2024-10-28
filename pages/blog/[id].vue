<template>
  <div>
    <h1>MY BLOG</h1>
    <div> id is {{route.params.id}}</div>
  </div>
</template>
<script setup>
  const route = useRoute()
</script>