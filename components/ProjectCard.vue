<template>
    <div class="project-card">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <NuxtLink :to="link">Read more →</NuxtLink>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    title: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true }
  })
  </script>
  
  <style scoped>
  .project-card {
    border: 1px solid #ddd;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 5px;
    background: #fff;
    transition: box-shadow 0.2s ease;
    max-width: 100%;
    text-align: center;
  }
  .project-card:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  .project-card h3 {
    margin-bottom: 10px;
    font-size: 1.3rem;
  }
  .project-card p {
    margin-bottom: 10px;
  }
  </style>
  