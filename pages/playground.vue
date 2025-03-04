<template>
    <div>
      <h1>Playground</h1>
      <p>
        Test out new WebAssembly/WebGPU experiments right here. Great for quick demos and prototypes.
      </p>
      
      <!-- Responsive canvas container -->
      <div style="position: relative; width: 100%; padding-top: 56.25%;">
        <canvas ref="myCanvas" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 1px solid #ccc;"></canvas>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue'
  
  const myCanvas = ref(null)
  
  onMounted(() => {
    const canvas = myCanvas.value
    if (!canvas) return
  
    // Initialize your WebGPU or WebAssembly demo here
    // For example:
    // const adapter = await navigator.gpu.requestAdapter()
    // const device = await adapter.requestDevice()
    // ... your WebGPU code ...
  })
  </script>
  