import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getData } from '@/utils/fetchData'

import type { UserInfoResponse } from '@/dto/user'

export const useUserInfo = defineStore('user', () => {
  const userData = localStorage.getItem('user_info')
    ? JSON.parse(localStorage.getItem('user_info')!)
    : ref<Object | false>(false)

  const getuser = () => {
    getData('api/user', {
      type: 'Bearer',
      accessToken:
        localStorage.getItem('access_token') && JSON.parse(localStorage.getItem('access_token')!)
    }).then((res: { data: UserInfoResponse }) => {
      userData.value = res.data
    })
  }

  return { getuser, userData }
})
