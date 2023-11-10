<script setup lang="ts">
import Navbar from '@/components/Navbar/index.vue'
import Hero from '@/components/Hero/index.vue'
import Categories from '@/components/Categories/index.vue'
import NewItems from '@/components/NewItems/index.vue'
</script>

<template>
  <Navbar />
  <main>
    <Hero />
    <Categories title="Top Categories" />
    <!-- boleh pakai binding atau tidak -->
    <NewItems />
  </main>
</template>
