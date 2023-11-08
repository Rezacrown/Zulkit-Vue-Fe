<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar/index.vue'
import { toastContainers } from 'vue3-toastify'
</script>

<template>
  <toastContainers />
  <Navbar />
  <RouterView />
</template>

<style src="@/assets/css/styles.css"></style>
