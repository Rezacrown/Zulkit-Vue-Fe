<template>
  <aside class="w-full px-4 sm:w-1/3 md:w-1/3">
    <div class="sticky top-0 w-full pt-4 md:mt-24">
      <div class="p-6 border rounded-2xl">
        <!--  -->
        <div v-if="isFigma" class="mb-4">
          <div class="flex mb-2">
            <div>
              <img src="@/assets/img/icon-figma.png" alt="" class="w-16" />
            </div>
            <div class="block mt-1 ml-4">
              <h3 class="font-semibold text-md">Figma</h3>
              <p class="text-gray-400 text-md">Project Included</p>
            </div>
          </div>
        </div>
        <!--  -->
        <div v-if="isSketch" class="mb-4">
          <div class="flex mb-2">
            <div>
              <img src="@/assets/img/icon-sketch.png" alt="" class="w-16" />
            </div>
            <div class="block mt-1 ml-4">
              <h3 class="font-semibold text-md">Sketch</h3>
              <p class="text-gray-400 text-md">Project Included</p>
            </div>
          </div>
        </div>
        <!-- feature -->
        <div>
          <h1 class="mt-5 mb-3 font-semibold text-md">{{ features[0] }}</h1>
          <ul class="mb-6 text-gray-500" v-if="features.length > 0">
            <li v-for="(feature, index) in features" :key="`feature-${index}`" class="mb-2">
              {{ feature }}
              <img src="@/assets/img/icon-check.png" class="float-right w-5 mt-1" alt="" />
            </li>
          </ul>
        </div>
        <!--  -->
        <a
          v-if="subscribe > 0"
          href="#"
          class="inline-flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-700 md:py-2 md:text-md md:px-10 hover:shadow"
        >
          Download Now
        </a>
        <RouterLink
          v-else
          to="/pricing"
          class="inline-flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-700 md:py-2 md:text-md md:px-10 hover:shadow"
        >
          Subscribe
        </RouterLink>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { computed, defineProps } from 'vue'

// import type { UserInfoResponse } from '@/dto/user'
import { useUserInfo } from '@/stores/user'

const user = useUserInfo()

// const userData = computed(() => user.userData as UserInfoResponse)
const subscribe = computed(() =>
  user.userData?.subscription ? user.userData?.subscription.length : 0
)

defineProps<{
  isFigma: boolean
  isSketch: boolean
  features: String[]
}>()
</script>
