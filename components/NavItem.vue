<template>
    <!-- 
      Reusable navigation link with styled box and hover effects.
      Props:
        - to: the route or path to navigate to
        - label: text to display on the link
    -->
    <NuxtLink
      :to="to"
      class="
        px-3 py-2
        border border-blue-700
        rounded-md
        text-blue-700
        transition duration-150 ease-in-out
        hover:bg-blue-700 hover:text-white
      "
    >
      {{ label }}
    </NuxtLink>
  </template>
  
  <script setup>
  // Define the props for this component
  defineProps({
    to: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  });
  </script>
  