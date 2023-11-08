import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { getData } from '@/utils/fetchData'

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

  const getuser = () => {
    getData('api/user', {
      type: 'Bearer',
      accessToken:
        localStorage.getItem('access_token') && JSON.parse(localStorage.getItem('access_token')!)
    }).then((res: { data: UserInfoResponse }) => {
      userData.value = res.data
      isLoggIn.value = true
    })
  }

  return { getuser, userData, isLoggIn }
})
