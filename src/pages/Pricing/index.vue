<script setup lang="ts">
import Navbar from '@/components/Navbar/index.vue'

import IconGroup from '@/components/IconGroup/index.vue'
import ListPricing from './item-list.vue'
</script>

<template>
  <Navbar />
  <div class="relative overflow-hidden bg-white">
    <div class="mx-auto">
      <div class="flex flex-col items-center w-full sm:justify-center sm:pt-0">
        <!-- title -->
        <div class="w-full p-5 mx-auto mt-10 md:max-w-7xl">
          <h2 class="mb-4 text-5xl font-bold text-center">
            <span class="block lg:mb-2">Friendly Pricing,</span>
            <span class="block">High Quality Design</span>
          </h2>
          <p class="mb-5 text-lg text-center text-gray-500">
            Working faster and better than before
          </p>
        </div>

        <!-- list pricing -->
        <ListPricing />

        <!-- icon groups -->
        <div class="w-full p-5 mx-auto mb-10 md:max-w-7xl">
          <IconGroup :is-horizontal="true" />
        </div>
      </div>
    </div>
  </div>
</template>
