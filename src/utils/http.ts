import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { message, Modal } from 'antd'
import { API_ROOT } from './config'
import isLogin from './login'

const confirm = Modal.confirm;
export const http = axios.create({
  baseURL: API_ROOT
})

export const getAuthorization = () => {
  let str = ''
  if (window.localStorage.getItem('TOKEN')) {
    str = `Naice ${JSON.parse(window.localStorage.getItem('TOKEN') || '').token}`
  }
  return str
}
// 拦截器
http.interceptors.request.use((config: AxiosRequestConfig) => {
  config.headers.Authorization = getAuthorization()
  return config
}, (error) => {
  return Promise.reject(error)
})

http.interceptors.response.use((response: AxiosResponse<any>): AxiosResponse<any> | Promise<AxiosResponse<any>> => {
  if (response.data.code === 0) {
    message.error(response.data.message)
  }
  return response
}, (error: any) => {
  if (!isLogin()) {
    confirm({
      title: '提示!',
      content: '用户信息已过期，请点击确定后重新登录。',
      okText: '确定',
      cancelText: '取消',
      onOk() {
        window.location.href = '/login'
      },
      onCancel() {
        console.log('Cancel')
      }
    })
  }
  return Promise.reject(error)
})
