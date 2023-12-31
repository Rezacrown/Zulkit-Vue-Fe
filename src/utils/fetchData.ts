import axios from 'axios'
import { config } from '@/config'
import { toast } from 'vue3-toastify'

export const getData = async (
  url: string,
  token?: {
    accessToken: String
    type: 'Bearer'
  }
) => {
  try {
    const response = await axios.get(`${config.base_url}/${url}`, {
      headers: {
        Authorization: token?.accessToken && token.type ? `${token.type} ${token.accessToken}` : ''
      }
    })

    return response.data
  } catch (error) {
    toast.error('something wrong', { position: 'top-center' })
  }
}

export const postData = async (
  url: string,
  payload: Object,
  token?: {
    accessToken: String
    type: 'Bearer'
  }
) => {
  try {
    const response = await axios.post(`${config.base_url}/${url}`, payload, {
      headers: {
        Authorization: token?.accessToken && token.type ? `${token.type} ${token.accessToken}` : ''
      }
    })

    return response.data
  } catch (error) {
    // console.log({ error })
    toast.error('Internal Server Error', { position: 'top-center' })
  }
}
