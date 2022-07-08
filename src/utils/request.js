import axios from 'axios'
import store from '../store'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000
})

// 请求拦截器
service.interceptors.request.use(
  function (config) {
    // 通过请求头发送token
    const token = store.getters.token
    if (token) config.headers.Authorization = 'Bearer ' + token
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  function (response) {
    // 全局数据处理
    const { data } = response.data

    // token过期处理
    if (response.code === 401) store.dispatch('user/loginOut')

    return data
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 统一参数
function request(options) {
  options.method = options.method || 'GET'
  options.method.toLocaleUpperCase() === 'GET' ? options.data : {}
  return service(options)
}

export default request
