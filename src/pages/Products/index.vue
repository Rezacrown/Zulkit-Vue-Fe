<script setup lang="ts">
import Gallery from './gallery.vue'
import SideMenu from './side-menu.vue'

import { onMounted, ref } from 'vue'
import { getData } from '../../utils/fetchData'
import { useRoute } from 'vue-router'

import type { ProductsPropsResponse } from '@/dto/products'

const router = useRoute()
const detail = ref<any>({})

onMounted(() => {
  const { id } = router.params
  getData('api/products?id=' + id).then((res: ProductsPropsResponse) => {
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
        <p class="text-gray-500">{{ detail.subtitle }}</p>
        <!-- gallery section -->
        <Gallery :galery-image="detail.galleries" :current-image="detail" />
        <!-- description section -->
        <section class="" id="orders">
          <h1 class="mt-8 mb-3 text-lg font-semibold">About</h1>
          <div v-html="detail.description" class="text-gray-500"></div>
        </section>
      </main>
      <!-- side-part section -->
      <SideMenu />
    </div>
  </div>
</template>
