import axios from 'axios'
import { message, Modal } from 'antd'
import * as config from '../config'
import querystring from 'querystring'
import loginIn from '../utils/loginIn'

const confirm = Modal.confirm;
const ax = axios.create({
  baseURL: config.API_ROOT
})

const methodArr = ['post', 'put', 'delete', 'patch']

export const getAuthorization = () => {
  let str = ''
  if (window.localStorage.getItem('TOKEN')) {
    str = `Naice ${JSON.parse(window.localStorage.getItem('TOKEN') || '').token}`
  }
  return str
}
// 拦截器
ax.interceptors.request.use(config => {
  if (methodArr.includes(config.method)) {
    config.data = querystring.stringify(config.data)
  }
  config.headers.Authorization = getAuthorization()
  return config
}, (error) => {
  return Promise.reject(error)
})

ax.interceptors.response.use(response => {
  let data = {}
  if (response.data.code === 0) {
    message.error(response.data.message);
  } else {
    data = response.data
  }
  return data
}, (error) => {
  if (!loginIn()) {
    confirm({
      title: '提示!',
      content: '用户信息已过期，请点击确定后重新登录。',
      okText: '确定',
      cancelText: '取消',
      onOk() {
        window.location.href="/#/login"
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
  return Promise.reject(error)
})

export default ax
