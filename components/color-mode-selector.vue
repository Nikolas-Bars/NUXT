<template>

      <div class="flex space-x-2 items-center">
        <div v-if="showNextModelLabel" class="text-gray-500 text-xs">Change to {{nextMode}}</div>
        <button @click="toggleMode"
                @mouseenter="showNextModelLabel = true"
                @mouseleave="showNextModelLabel = false"
                class="hover:bg-gray-200 dark:hover:bg-gray-600 px-2 py-1 text-gray-500 rounded-md">
          {{nextModeIcons[nextMode] || nextModeIcons['system']}}
        </button>
      </div>

</template>
<script setup>
  const showNextModelLabel = ref(false)

  const colorMode = useColorMode();
  const modes = [
      'systems',
      'dark',
      'light',
  ]
  const nextMode = computed(() => {
    const currentModeIndex = modes.indexOf(colorMode.preference)
    let nextModeIndex = null
    if (currentModeIndex + 1 === modes.length) {
      nextModeIndex = 0
    } else {
      nextModeIndex = currentModeIndex + 1
    }
    return modes[nextModeIndex]
  })

  const nextModeIcons = {
    system: '🌗',
    light: '☀️',
    dark: '🌑',
  };

  const toggleMode = () => {
    colorMode.preference = nextMode.value
  }
</script>