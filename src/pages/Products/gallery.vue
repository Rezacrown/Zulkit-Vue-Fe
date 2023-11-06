<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  galeryImage: Object,
  currentImage: String
})
// state
</script>

<template>
  <section id="gallery">
    <!-- selected image -->
    <!-- <img :src="currentImage" alt="" class="w-full mt-6 rounded-2xl" /> -->

    <!-- option image -->
    <div class="grid grid-cols-4 gap-4 mt-4">
      <div
        v-for="(image, index) of galeryImage"
        :key="image.id + index"
        class="overflow-hidden cursor-pointer rounded-2xl"
      >
        <img :src="image.url" class="w-full" alt="" />
      </div>
    </div>
  </section>
</template>
