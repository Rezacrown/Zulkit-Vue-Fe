<script setup lang="ts">
import { onMounted } from 'vue'
import Gallery from './gallery.vue'
import SideMenu from './side-menu.vue'

import { ref } from 'vue'
import { getData } from '@/utils/fetchData'
import { useRoute } from 'vue-router'

const router = useRoute()
const detail = ref<any>({})

onMounted(() => {
  const { id } = router.params
  getData('api/categories?id=' + id).then((res) => {
    // console.log({ res: res.data })
    detail.value = res.data
  })
})
</script>

<template>
  <div class="container p-2 mx-auto my-10 max-w-7xl">
    <div class="flex flex-row flex-wrap py-4">
      <main role="main" class="w-full px-4 pt-1 sm:w-2/3 md:w-2/3">
        <h1
          class="mb-2 text-3xl font-bold leading-normal tracking-tight text-gray-900 sm:text-4xl md:text-4xl"
        >
          {{ detail.name }}
        </h1>
        <p class="text-gray-500">Build your next coin startup</p>
        <!-- gallery section -->
        <Gallery :data="detail.products" :curret-image="detail.thumbnails" />
        <!-- description section -->
        <section class="" id="orders">
          <h1 class="mt-8 mb-3 text-lg font-semibold">About</h1>
          <div class="text-gray-500">
            <p class="pb-4">
              Sportly App UI Kit will help your Sport, Fitness, and Workout App products or
              services. Came with modern and sporty style, you can easily edit and customize all
              elements with components that can speed up your design process.
            </p>
            <p class="pb-4">
              Suitable for : <br />
              - Sport App <br />
              - Fitness & GYM App <br />
              - Workout App <br />
              - Trainer & Tracker App <br />
              - And many more <br />
            </p>
          </div>
        </section>
      </main>
      <!-- side-part section -->
      <SideMenu />
    </div>
  </div>
</template>
