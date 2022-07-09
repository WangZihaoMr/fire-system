import axios from 'axios'
import store from '../store'
import loading from '../utils/loading'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000
})

// 请求拦截器
service.interceptors.request.use(
  function (config) {
    loading.open()
    // 通过请求头发送token
    const token = store.getters.userInfo.token
    token ? config.headers.Authorization = 'Bearer ' + token : ''
    return config
  },
  function (error) {
    loading.close()
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  function (response) {
    loading.close()
    // 全局数据处理
    const { data } = response.data

    // token过期处理
    if (response.code === 50001) store.dispatch('user/loginOut')

    return data
  },
  function (error) {
    loading.close()
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
