<template>
  <NuxtLayout>
    <section>
      {{error.message}}
    </section>
  </NuxtLayout>
</template>

<script setup>
defineProps({
  error: Object,
})
</script>