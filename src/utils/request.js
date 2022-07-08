import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000
})

service.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  function (response) {
    const { data } = response.data
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
