<script setup lang="ts">
import { ref } from 'vue'
import { defineProps } from 'vue'

const props = defineProps({
  data: null,
  curretImage: {
    type: String,
    required: true,
    defaultValue: ''
  }
})
// state
const curretImageSelect = ref<any>(props.curretImage)

// function
const handleChangePhoto = (img: any) => {
  curretImageSelect.value = img
}

// cyle
</script>

<template>
  <section id="gallery">
    <!-- curret image -->
    <img :src="curretImageSelect || props.curretImage" alt="" class="w-full mt-6 rounded-2xl" />

    <!-- option image -->
    <div class="grid grid-cols-4 gap-4 mt-4">
      <!-- <div class="overflow-hidden cursor-pointer ring-2 ring-indigo-500 rounded-2xl">
        <img src="@/assets/img/gallery-3.png" class="w-full" alt="" />
      </div> -->

      <div
        v-for="(image, index) in data"
        :key="`gallery-items-${index}`"
        class="overflow-hidden cursor-pointer rounded-2xl"
        @click="handleChangePhoto(image.thumbnails)"
      >
        <img :src="image.thumbnails" class="w-full" :alt="image.name" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
interface imageRef {
  id: number
  image: string
}
</script>
