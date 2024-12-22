<template>
  <ul>
    <li v-for="link in links" :key="link.id">
      <NuxtLink :to="{ path: route.path, hash: `#${link.id}`}" :class="{'ml-4': level, 'text-green-600': activeId === link.id}">
        {{ link.text }}
      </NuxtLink>
      <TocLinks :active-id="activeId" :links="link.children" :level="level + 1"/>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  links: Array,
  level: {
    type: Number,
    default: 0
  },
  activeId: {
    type: Number,
    default: null
  }
})
const route = useRoute()

</script>/