<template>
    <div>
        <h1>Welcome to My Research & Experiments</h1>
        <p>
            I’m exploring WebAssembly and WebGPU for real-time rendering in the browser.
            This site showcases my projects, demos, and experiments.
        </p>

        <section>
            <h2>Recent Projects</h2>
            <div class="project-grid">
                <ProjectCard title="WebGPU Ray Tracing"
                    description="An experiment with ray tracing using WebGPU in modern browsers."
                    link="/projects#webgpu-raytracing" />
                <ProjectCard title="WebAssembly Physics"
                    description="A demo showcasing physics simulations compiled to WebAssembly."
                    link="/projects#wasm-physics" />
            </div>
        </section>
    </div>
</template>
