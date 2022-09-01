import axios from 'axios'
import type {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios'

const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_ROOT_API,
  timeout: 1000 * 30,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
  },
})

axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // Check cookies
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  },
)

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error: AxiosError) => {
    const { response } = error
    if (response?.status === 401) {
      console.log('401')
    }
    if (response?.status === 403) {
      console.log('403')
    }
    if (response?.status === 404) {
      console.log('404')
    }
    if (response?.status === 500) {
      console.log('500')
    }
    return Promise.reject(error)
  },
)

export default axiosInstance
