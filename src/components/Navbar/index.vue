<script setup lang="ts">
import { RouterLink } from 'vue-router'
import navLink from './nav-link.vue'
import authSection from './auth.vue'
import userInfo from './user-info.vue'

import { onMounted, watch } from 'vue'
import { useUserInfo } from '@/stores/user'

const user = useUserInfo()

// const isLoggIn = ref(false)

onMounted(() => {
  if (!user.userData) {
    user.getuser().then(() => {
      user.isLoggIn = true
    })
  }
  // user.getuser()
})

// watch mirip useeffect di react
watch(user.isLoggIn, async (newValue) => {
  if (!newValue || !user.userData) {
    user.isLoggIn = false
  }
})
</script>

<template>
  <header>
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div class="container flex flex-wrap items-center justify-between mx-auto my-2">
        <RouterLink to="/" class="flex items-center">
          <img src="@/assets/img/logo.svg" class="h-8 ml-3 sm:ml-0 sm:h-8" alt="Flowbite Logo" />
        </RouterLink>
        <!-- navlink section -->
        <navLink />
        <!-- auth section -->
        <userInfo v-if="user.isLoggIn" :user="user.userData!" />
        <authSection v-else />
        <!-- <authSection /> -->
      </div>
    </nav>
  </header>
</template>
