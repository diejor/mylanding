<template>
  <div class="bg-white border border-gray-200 rounded-md p-6 text-center transition-shadow hover:shadow-lg">
    <h3 class="text-xl font-semibold mb-3">{{ title }}</h3>
    <p class="text-gray-700 mb-4">{{ description }}</p>
    <NuxtLink :to="link" class="text-blue-600 hover:underline font-medium">
      Read more →
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true }
})
</script>
