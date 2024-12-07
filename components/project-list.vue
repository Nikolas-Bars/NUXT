<template>
  <p class="mb-10">GitHub Projects</p>
  <section v-if="pending">Loading...</section>
  <section v-else-if="error">Error...</section>
  <section>
    <ul class="grid grid-cols-1 gap-4">
      <li v-for="repository in repos" :key="repository?.id"
          class="border border-gray-200 rounded-md p-4 hover:bg-gray-100 font-mono">
        <a :href="repository.html_url" target="_blank">
          <div class="flex items-center justify-between text-sm">
            <div class="font-semibold">
              {{repository.name}}
            </div>
            <div>
              {{repository.stargazers_count}}
            </div>
          </div>
          <p class="text-sm mt-4">
            {{repository.description}}
          </p>
        </a>
      </li>
    </ul>
  </section>
</template>
<script setup lang="ts">
  import type {Repo} from "~/types/repository.types";

  const {data, error, pending} = await useFetch<Repo[]>('https://api.github.com/users/piotr-jura-udemy/repos')
  onMounted(() => {
    console.log(data, 'data')
  })
  const repos = computed(() => {
    return data.value?.filter((repo) => repo.description)
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
  })
</script>