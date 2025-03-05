<template>
  <!-- Outer wrapper takes up full height and places background iframe behind content -->
  <div id="page" class="relative min-h-screen flex flex-col font-serif">

    <!-- Godot Background as an iframe -->
    <iframe 
      src="/ocean/index.html"
      class="absolute inset-0 w-full h-full z-0"
      frameborder="0"
    ></iframe>

    <!-- Foreground Content Wrapper -->
    <div
      :class="[
        'relative z-10 w-full lg:max-w-[1024px] lg:mx-auto lg:my-6',
        'lg:shadow-[0_0_10px_rgba(0,0,0,0.1),0_0_40px_rgba(0,0,0,0.1),0_0_80px_rgba(0,0,0,0.1)]',
        'lg:rounded-lg',
        showContent ? 'bg-white/85' : 'bg-white/30'
      ]"
    >
      <!-- Header -->
      <header
        :class="[
          'shadow lg:rounded-t-lg transition-colors duration-300',
          showContent ? 'bg-white/90' : 'bg-white/50'
        ]"
      >
        <nav class="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
          <div class="logo">
            <!-- Clicking "^^" toggles content visibility -->
            <a
              href="#"
              @click.prevent="toggleContent"
              class="text-2xl font-bold text-blue-700 cursor-pointer"
              title="Toggle main content visibility"
            >
              ^^
            </a>
          </div>
          <!-- Navigation Items -->
          <ul class="flex space-x-4">
            <li>
              <NavItem to="/" label="Home" />
            </li>
            <li>
              <NavItem to="/projects" label="Projects" />
            </li>
            <li>
              <NavItem to="/playground" label="Playground" />
            </li>
            <li>
              <NavItem to="/about" label="About" />
            </li>
          </ul>
        </nav>
      </header>

      <!-- 
        Main Content + Footer go inside a <transition> so they can fold up.
        The v-if ensures they unmount entirely when hidden.
      -->
      <transition name="fold">
        <div
          v-if="showContent"
          class="fold-container"
        >
          <main class="flex-grow max-w-4xl mx-auto px-6 py-12">
            <NuxtPage />
          </main>
          <footer class="bg-white border-t border-gray-200 py-4 text-center lg:rounded-b-lg">
            <p class="text-sm text-gray-600">
              © 2025 Diego Rodrigues. All rights reserved.
            </p>
          </footer>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import NavItem from '~/components/NavItem.vue'

// Track whether main content + footer are visible
const showContent = ref(true)

// Toggle function: flips showContent when "^^" is clicked
function toggleContent() {
  showContent.value = !showContent.value
}
</script>

<!-- 
  Here we define custom transition classes for the "fold" transition.
  This approach uses max-height (and opacity) to animate folding.
-->
<style scoped>
.fold-container {
  /* Hide overflow so content can "fold" inside the box */
  overflow: hidden;
}

/* Entering + leaving use the same approach: we animate max-height + opacity */
.fold-enter-active,
.fold-leave-active {
  transition: max-height 0.4s ease, opacity 0.4s ease;
}

/* When folding in (entering), start from no height + no opacity */
.fold-enter-from,
.fold-leave-to {
  max-height: 0;
  opacity: 0;
}

/* Expand to full size */
.fold-enter-to,
.fold-leave-from {
  max-height: 1000px; /* Large enough to fit your content */
  opacity: 1;
}
</style>
