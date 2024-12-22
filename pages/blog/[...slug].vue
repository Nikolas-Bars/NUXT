<template>
  <article class="prose dark:prose-invert max-w-none prose-pre:bg-gray-200
   dark:prose-pre:bg-gray-700 prose-pre:text-gray-700
    ">
    <ContentDoc>
      <template #not-found>
        <h1>
          Document not found
        </h1>
      </template>
      <template v-slot="{ doc }">
        <div class="grid grid-cols-6 gap-16">
          <div :class="{ 'col-span-4': doc.toc, 'col-span-6': !doc.toc }">
            <ContentRenderer :value="doc" />
          </div>
          <div v-if="doc.toc" class="col-span-2 not-prose">
            <aside class="sticky top-8">
              <div class="font-semibold mb-2">
                TableOfContents
              </div>
              <nav>
                <TocLinks :active-id="activeId" :links="doc.body.toc.links" />
              </nav>
            </aside>
          </div>
        </div>
      </template>

    </ContentDoc>
  </article>
</template>
<script setup>

const activeId = ref(null);

onMounted(()=> {
  const callback = (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        activeId.value = entry.target.id;
        break;
      }
    }
    console.log(entries)
  }
  const observer = new IntersectionObserver(callback, {
    root: null,
    threshold: 0.5
  })
  const elements = document.querySelectorAll('h2, h3');

  for (const element of elements) {
    observer.observe(element)
  }

  onBeforeUnmount(() => {
    console.log('onBeforeUnmount', activeId.value)
    for (const element of elements) {
      observer.unobserve(element)
    }
  })
})

</script>