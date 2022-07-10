/*
 * @Author: WangZihao 2597160811@qq.com
 * @Date: 2022-07-08 14:30:43
 * @LastEditors: WangZihao 2597160811@qq.com
 * @LastEditTime: 2022-07-10 20:21:04
 * @FilePath: \fire-system\src\api\user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '../utils/request'

/**
 * 用户登录接口
 */
const login = (data) => {
  return request({ url: '/users/login', method: 'POST', data })
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
