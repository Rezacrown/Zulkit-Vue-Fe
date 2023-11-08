<template>
  <form @submit.prevent="handleSubmit">
    <div class="mb-4">
      <label class="block mb-1" for="email">Email Address</label>
      <input
        v-model="email"
        placeholder="Type your email"
        id="email"
        type="text"
        name="email"
        class="block w-full py-3 mt-2 border border-gray-300 rounded-full shadow-sm px-7 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:bg-gray-100"
      />
    </div>
    <div class="mb-4">
      <label class="block mb-1" for="password">Password</label>
      <input
        v-model="password"
        @keyup.enter="handleSubmit"
        placeholder="Type your password"
        id="password"
        type="password"
        name="password"
        class="block w-full py-3 mt-2 border border-gray-300 rounded-full shadow-sm px-7 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:bg-gray-100"
      />
    </div>
    <div class="mt-6">
      <button
        type="submit"
        class="inline-flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-700 md:py-2 md:text-lg md:px-10 hover:shadow"
      >
        Sign In
      </button>
      <RouterLink
        to="/register"
        class="inline-flex items-center justify-center w-full px-8 py-3 mt-2 text-base font-medium text-black bg-gray-200 border border-transparent rounded-full hover:bg-gray-300 md:py-2 md:text-lg md:px-10 hover:shadow"
      >
        Create New Account
      </RouterLink>
    </div>
  </form>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { postData } from '@/utils/fetchData'
import type { LoginResponse } from '@/dto/user'
import { toast } from 'vue3-toastify'

const router = useRouter()

const email = ref('')
const password = ref('')

async function handleSubmit() {
  await postData('api/login', {
    email: email.value,
    password: password.value
  })
    .then((res: LoginResponse) => {
      localStorage.setItem('access_token', JSON.stringify(res.data.access_token))
      localStorage.setItem('type_token', JSON.stringify(res.data.token_type))
      localStorage.setItem('user_info', JSON.stringify(res.data.user))

      router.push('/')
    })
    .catch(() => {
      toast.error('invalid credential', { position: 'top-center' })
    })
}
</script>
