import axios from 'axios'
import { config } from '@/config'

export const getData = async (
  url: string,
  token?: {
    accessToken: String
    type: 'Bearer'
  }
) => {
  const response = await axios.get(`${config.base_url}/${url}`, {
    headers: {
      Authorization: token?.accessToken && token.type ? `${token.type} ${token.accessToken}` : ''
    }
  })

  return response.data
}

export const postData = async (url: string, payload: Object) => {
  try {
    const response = await axios.post(`${config.base_url}/${url}`, payload)

    return response.data
  } catch (error) {
    console.log({ error })
  }
}
