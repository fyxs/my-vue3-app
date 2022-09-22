import axios from 'axios'

import { message } from 'ant-design-vue'
import { Modal } from 'ant-design-vue'

import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import type { KeyObject, ResponseModel } from '@/services'

// 根据环境获取API baseURL
const baseURL = import.meta.env.VITE_API_URL

// 创建axios实例
const request = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    'content-type': 'application/json'
  },
  timeout: 15000
})

// request 拦截器
request.interceptors.request.use(
  (config: AxiosRequestConfig<any>) => {
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// response 拦截器
request.interceptors.response.use(
  response => {
    if (response.data.statusCodeValue == 401) {
      const url = response.data.body.result
      window.open(url, '_self')
      return
    }
    if (response.data.status !== 200) {
      message.error('请求失败！请重试')
      return
    }
    // console.log(response.data)

    return response.data
  },
  error => {
    // 失败响应
    if (error.response?.data.status !== 200) {
      if (error.request.responseURL.includes('api/user-subscribe/create')) {
        // console.log(error.response?.data.message);
        Modal.error({
          content: error.response?.data.message || '请求失败，请稍后再试',
          okText: '确认'
        })
      } else {
        message.error(error.response?.data.message || '请求失败，请稍后再试')
      }
    }

    return true
  }
)

/**
 *
 * @param url 路径
 * @param data 请求参数，类型为T泛型
 * @returns 返回类型为D泛型
 */
export async function AxiosPost<T, D = any, R = KeyObject>(url: string, data?: T): Promise<AxiosResponse<ResponseModel<D> & R>> {
  return request.post(url, data)
}

/**
 *
 * @param url 路径
 * @param data 请求参数，类型为T泛型
 * @returns 返回类型为D泛型
 */
export async function AxiosGet<T, D = any, R = KeyObject>(url: string, data?: T): Promise<AxiosResponse<ResponseModel<D> & R>> {
  return request.get(url, { params: data })
}
