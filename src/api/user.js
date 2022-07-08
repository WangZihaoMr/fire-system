import request from '../utils/request'

/**
 * 用户登录接口
 */
const login = (data) => {
  return request({ url: 'users/login', method: 'POST', data })
}

/**
 * 用户权限接口
 */
const getPermission = () => {
  return request({ url: '/users/getPermissionList', method: 'GET' })
}

// 导出API方法
export default {
  login,
  getPermission
}
