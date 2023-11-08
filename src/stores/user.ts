import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { getData } from '@/utils/fetchData'
import axios from 'axios'
import { config } from '@/config'

import type { UserInfoResponse } from '@/dto/user'

export const useUserInfo = defineStore('user', () => {
  const userData = ref<UserInfoResponse>()

  const isLoggIn = computed<Boolean>({
    set(newVal) {
      return newVal
    },
    get() {
      return userData.value ? true : false
    }
  })

  const getuser = async () => {
    // getData('api/user', {
    //   type: 'Bearer',
    //   accessToken:
    //     localStorage.getItem('access_token') && JSON.parse(localStorage.getItem('access_token')!)
    // }).then((res: { data: UserInfoResponse }) => {
    //   userData.value = res.data
    //   isLoggIn.value = true
    // })

    try {
      const response = await axios.get(`${config.base_url}/api/user`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('access_token')!)}`
        }
      })

      return response.data
    } catch (error) {
      // toast.error('something error', { position: 'top-center' })
    }
  }

  return { getuser, userData, isLoggIn }
})
