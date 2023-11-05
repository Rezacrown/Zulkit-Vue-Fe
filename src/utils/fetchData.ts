import axios from 'axios'
import { config } from '@/config'

export const getData = async (url: string, typeInterface?: any) => {
  const response = await axios.get<any, typeof typeInterface>(`${config.base_url}/${url}`)

  return response.data
}
