<template>
    <div class="max-w-4xl mx-auto px-6 py-12">
      <h1 class="text-4xl font-bold text-blue-800 mb-4">
        Welcome to My Research &amp; Experiments
      </h1>
      <p class="text-lg text-gray-700 mb-8">
        I’m exploring WebAssembly and WebGPU for real-time rendering in the browser.
        This site showcases my projects, demos, and experiments.
      </p>
  
      <section>
        <h2 class="text-2xl font-semibold text-blue-600 mb-6">Recent Projects</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ProjectCard 
            title="WebGPU Ray Tracing"
            description="An experiment with ray tracing using WebGPU in modern browsers."
            link="/projects#webgpu-raytracing" 
          />
          <ProjectCard 
            title="WebAssembly Physics"
            description="A demo showcasing physics simulations compiled to WebAssembly."
            link="/projects#wasm-physics" 
          />
        </div>
      </section>
    </div>
  </template>
  