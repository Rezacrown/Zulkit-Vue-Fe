<script setup lang="ts">
import { ref } from 'vue'

const curretImageSelect = ref<imageRef>({
  id: 1,
  image: 'gallery-1.png'
})

const images = ref<imageRef[]>([
  {
    id: 2,
    image: 'gallery-2.png'
  },
  {
    id: 3,
    image: 'gallery-3.png'
  },
  {
    id: 4,
    image: 'gallery-4.png'
  },
  {
    id: 5,
    image: 'gallery-5.png'
  }
])

const handleChangePhoto = (img: any) => {
  curretImageSelect.value.image = img
}
</script>

<template>
  <section id="gallery">
    <!-- curret image -->
    <img
      :src="'/src//assets/img/' + curretImageSelect.image"
      :alt="String(curretImageSelect.id)"
      class="w-full mt-6 rounded-2xl"
    />
    <!-- option image -->
    <div class="grid grid-cols-4 gap-4 mt-4">
      <!-- <div class="overflow-hidden cursor-pointer ring-2 ring-indigo-500 rounded-2xl">
        <img src="@/assets/img/gallery-3.png" class="w-full" alt="" />
      </div> -->

      <div
        v-for="(image, index) in images"
        :key="`gallery-items-${index}`"
        class="overflow-hidden cursor-pointer rounded-2xl"
        :class="{ 'ring-2 ring-indigo-500': curretImageSelect.image == image.image }"
        @click="handleChangePhoto(image.image)"
      >
        <img :src="'/src/assets/img/' + image.image" class="w-full" alt="" />
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
