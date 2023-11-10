<template>
  <Navbar />
  <div class="container px-4 mx-auto my-16 md:px-12">
    <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">{{ data.name }}</h2>
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <!--  -->
      <div
        v-for="(item, index) in data.products"
        :key="`item-id-${index}`"
        class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
      >
        <div class="overflow-hidden border border-gray-200 rounded-xl">
          <RouterLink :to="'/detail/' + item.id">
            <div class="m-4 overflow-hidden rounded-xl">
              <img :alt="item.name" class="block w-full h-auto" :src="item.thumbnails" />
            </div>
          </RouterLink>

          <header class="px-4 mb-4 leading-tight">
            <h1 class="text-lg">
              <RouterLink
                class="font-semibold text-black no-underline hover:underline"
                :to="'/detail/' + item.id"
              >
                {{ item.name }}
              </RouterLink>
            </h1>
            <span class="block text-sm font-light text-gray-500 no-underline">
              <!-- {{ item.category.name }} -->
            </span>
          </header>
        </div>
      </div>

      <!--  -->
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar/index.vue'

import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getData } from '@/utils/fetchData'

const { params } = useRoute()
const data = ref<any>([])

onMounted(async () => {
  const res = await getData('api/categories?id=' + params.id)
  //   console.log({ data: res.data.products })
  data.value = res.data
})
</script>
