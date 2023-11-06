<script setup lang="ts">
import { RouterLink } from 'vue-router'

import { getData } from '@/utils/fetchData'
import { onMounted, ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'All Categories'
  }
})

const categories = ref<any>([])

onMounted(async () => {
  const data = await getData('api/categories')
  // console.log({ data: data.data.data })
  categories.value = data.data.data
})
</script>

<template>
  <div id="category-section" class="container px-4 mx-auto my-16 md:px-12">
    <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">
      {{ props.title }}
    </h2>
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <!-- card categories -->
      <div
        v-for="(category, index) in categories"
        :key="`category-index-${index}`"
        class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4"
      >
        <div class="overflow-hidden border border-gray-200 rounded-xl">
          <RouterLink :to="`/categories/${category.id}`">
            <div class="m-4 overflow-hidden rounded-xl">
              <img alt="Placeholder" class="block w-full h-auto" :src="category.thumbnails" />
            </div>
          </RouterLink>

          <header class="px-4 mb-4 leading-tight">
            <h1 class="text-lg">
              <RouterLink
                class="font-semibold text-black no-underline hover:underline"
                :to="`/categories/${category.id}`"
              >
                {{ category.name }}
              </RouterLink>
            </h1>
            <span class="block text-sm font-light text-gray-500 no-underline">
              {{ category.products_count }} items
            </span>
          </header>
        </div>
      </div>
      <!-- card categories end -->
    </div>
  </div>
</template>
