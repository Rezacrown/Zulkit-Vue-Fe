<script setup lang="ts">
import { postData } from '@/utils/fetchData'
import { useRouter } from 'vue-router'
import { toast } from 'vue3-toastify'

function handleCheckout(totalPayment: number) {
  const userLoggedIn = JSON.parse(localStorage.getItem('user_info')!) ?? null

  if (!userLoggedIn) {
    useRouter().push('/login')
    toast.error('Please Login for Checkouts', { position: 'top-center' })
  } else {
    postData(
      'api/checkout',
      {
        payment_total: totalPayment,
        payment_status: 'PENDING'
      },
      {
        accessToken: JSON.parse(localStorage.getItem('access_token')!),
        type: 'Bearer'
      }
    )
  }
}
</script>

<template>
  <div class="w-full p-5 mx-auto mb-10 md:max-w-4xl">
    <div class="grid grid-cols-1 gap-12 md:grid-cols-2">
      <!-- item 1 -->
      <div>
        <div class="p-8 border rounded-3xl">
          <h1 class="text-5xl font-semibold">
            IDR 2,000 <span class="text-xl font-light text-gray-500">/month</span>
          </h1>
          <h2 class="text-lg font-semibold mt-7">Basic Plan</h2>
          <p class="mb-6 text-gray-500">Suitable for new team</p>
          <ul class="mb-6 text-gray-700">
            <li class="mb-3">
              <img src="@/assets/img/icon-check.png" class="float-left w-6 mr-2" alt="" />
              Customizable layers
            </li>
            <li class="mb-3">
              <img src="@/assets/img/icon-check.png" class="float-left w-6 mr-2" alt="" />
              Official documentation
            </li>
            <li class="mb-3">
              <img src="@/assets/img/icon-check.png" class="float-left w-6 mr-2" alt="" />
              SVG icons
            </li>
            <li class="mb-3">
              <img src="@/assets/img/icon-check.png" class="float-left w-6 mr-2" alt="" />
              SVG illustrations
            </li>
            <li class="mb-3">
              <img src="@/assets/img/icon-check.png" class="float-left w-6 mr-2" alt="" />
              Pre-built design screen
            </li>
          </ul>
          <button
            @click="handleCheckout(2000)"
            class="inline-flex items-center justify-center w-full px-8 py-3 text-base font-medium text-black bg-gray-200 border border-transparent rounded-full hover:bg-gray-300 md:py-2 md:text-md md:px-10 hover:shadow"
          >
            Checkout Now
          </button>
        </div>
      </div>
      <!-- item 2 -->
      <div>
        <div class="p-8 border rounded-3xl">
          <h1 class="text-5xl font-semibold">
            IDR 9,000 <span class="text-xl font-light text-gray-500">/month</span>
          </h1>
          <h2 class="text-lg font-semibold mt-7">Gold Plan</h2>
          <p class="mb-6 text-gray-500">Suitable for big company</p>
          <ul class="mb-6 text-gray-700">
            <li class="mb-3">
              <img src="@/assets/img/icon-check.png" class="float-left w-6 mr-2" alt="" />
              Customizable layers
            </li>
            <li class="mb-3">
              <img src="@/assets/img/icon-check.png" class="float-left w-6 mr-2" alt="" />
              Official documentation
            </li>
            <li class="mb-3">
              <img src="@/assets/img/icon-check.png" class="float-left w-6 mr-2" alt="" />
              SVG icons
            </li>
            <li class="mb-3">
              <img src="@/assets/img/icon-check.png" class="float-left w-6 mr-2" alt="" />
              SVG illustrations
            </li>
            <li class="mb-3">
              <img src="@/assets/img/icon-check.png" class="float-left w-6 mr-2" alt="" />
              Pre-built design screen
            </li>
            <li class="mb-3">
              <img src="@/assets/img/icon-check.png" class="float-left w-6 mr-2" alt="" />
              Coded template
            </li>
            <li class="mb-3">
              <img src="@/assets/img/icon-check.png" class="float-left w-6 mr-2" alt="" />
              Support 24/7
            </li>
            <li class="mb-3">
              <img src="@/assets/img/icon-check.png" class="float-left w-6 mr-2" alt="" />
              Private designer group
            </li>
            <li class="mb-3">
              <img src="@/assets/img/icon-check.png" class="float-left w-6 mr-2" alt="" />
              Unlock cloning app
            </li>
          </ul>
          <button
            @click="handleCheckout(9000)"
            class="inline-flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-700 md:py-2 md:text-md md:px-10 hover:shadow"
          >
            Checkout Now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
