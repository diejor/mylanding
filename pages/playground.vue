<template>
  <div class="max-w-3xl mx-auto px-6 py-12">
    <h1 class="text-4xl font-bold text-blue-800 mb-6">Playground</h1>
    <p class="text-lg text-gray-700 mb-8">
      Test out new WebAssembly/WebGPU experiments right here. Great for quick demos and prototypes.
    </p>
    
    <!-- Responsive canvas container using Tailwind's aspect-video -->
    <div class="relative w-full aspect-video border border-gray-300">
      <canvas ref="myCanvas" class="absolute inset-0 w-full h-full"></canvas>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const myCanvas = ref(null)

onMounted(() => {
  const canvas = myCanvas.value
  if (!canvas) return

  // Initialize your WebGPU or WebAssembly demo here.
  // For example:
  // const adapter = await navigator.gpu.requestAdapter()
  // const device = await adapter.requestDevice()
  // ... your WebGPU code ...
})
</script>
