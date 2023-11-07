<script setup lang="ts">
import { defineProps, computed, ref } from 'vue'

const props = defineProps({
  galeryImage: Object,
  currentImage: String
})

const initImage = ref('')
const selectImage = computed({
  // getter
  get() {
    return initImage.value || props.currentImage
  },
  // setter
  set() {
    // Note: we are using destructuring assignment syntax here.
    return initImage.value
  }
})

function handleChangePhoto(img: string) {
  initImage.value = img
  return img
}
</script>

<template>
  <section id="gallery">
    <!-- selected image -->
    <img :src="selectImage" alt="" class="w-full mt-6 rounded-2xl" />

    <!-- option image -->
    <div class="grid grid-cols-4 gap-4 mt-4">
      <div
        v-for="(image, index) of props.galeryImage"
        :key="image.id + index"
        class="overflow-hidden cursor-pointer rounded-2xl"
        :class="{ 'ring-2 ring-indigo-500': image.url == selectImage }"
        @click="handleChangePhoto(image.url)"
      >
        <img :src="image.url" class="w-full" alt="" />
      </div>
    </div>
  </section>
</template>
