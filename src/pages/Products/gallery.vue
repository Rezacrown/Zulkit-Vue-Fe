<script setup lang="ts">
import { defineProps, ref, onMounted } from 'vue'

const props = defineProps({
  galeryImage: Object,
  currentImage: String
})

const selectImage = ref(props.currentImage)

function handleChangePhoto(img: any) {
  selectImage.value = img
}

onMounted(() => {
  if (props.galeryImage) {
    selectImage.value = props.currentImage
  }
})
</script>

<template>
  <section id="gallery">
    <!-- selected image -->
    <img :src="selectImage || props.currentImage" alt="" class="w-full mt-6 rounded-2xl" />

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
