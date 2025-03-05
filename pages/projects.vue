<template>
  <div class="max-w-4xl mx-auto px-6 py-12">
    <header class="mb-10">
      <h1 class="text-4xl font-bold text-blue-800 mb-4">Projects</h1>
      <p class="text-lg text-gray-700">
        A collection of my research, experiments, and side projects. Many revolve around
        WebAssembly or WebGPU, while others are explorations into new web technologies.
      </p>
    </header>

    <div class="space-y-8">
      <div id="webgpu-raytracing" class="bg-white border border-gray-200 rounded-md p-6 transition-shadow hover:shadow-lg">
        <h2 class="text-2xl font-semibold text-blue-700 mb-3">WebGPU Ray Tracing</h2>
        <p class="text-gray-700">
          A quick description of the ray tracing experiment using WebGPU. Source code and demo available.
        </p>
      </div>

      <div id="wasm-physics" class="bg-white border border-gray-200 rounded-md p-6 transition-shadow hover:shadow-lg">
        <h2 class="text-2xl font-semibold text-blue-700 mb-3">WebAssembly Physics</h2>
        <p class="text-gray-700">
          A demonstration of physics simulations using WebAssembly to maximize performance.
        </p>
      </div>
    </div>
  </div>
</template>
