/*
 * @Author: WangZihao 2597160811@qq.com
 * @Date: 2022-07-08 16:02:17
 * @LastEditors: WangZihao 2597160811@qq.com
 * @LastEditTime: 2022-07-10 16:31:00
 * @FilePath: \fire-system\src\store\modules\user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import router from '../../router'
import UserApi from '../../api/user'
import { getItem, setItem } from '@/utils/storage'

const SET_USER_INFO_KEY = 'userInfo'

export default {
  namespaced: true,
  state: {
    userInfo: getItem(SET_USER_INFO_KEY) || {},
    menus: ''
  },
  mutations: {
    // 存储userInfo到vuex和本地
    SET_USER_INFO(state, userInfo) {
      console.log(userInfo)
      state.userInfo = userInfo
      setItem(SET_USER_INFO_KEY, userInfo)
    },
    // menus页面权限
    SET_ROUTES(state, menus) {
      state.menus = menus
    }
  },
  actions: {
    // 登录
    async login({ commit }, loginForm) {
      const response = await UserApi.login(loginForm)
      console.log(response)
      commit('SET_USER_INFO', {
        token: response.token,
        userEmail: response.userEmail,
        userName: response.userName
      })
      return response
    },
    // 退出登录
    loginOut({ commit }) {
      router.push('/login')
      commit('SET_USER_INFO', {})
    },
    // 页面权限
    async getMenus({ commit }) {
      const response = await UserApi.getPermission()
      commit('SET_ROUTES', response)
      return response
    }
  }
}
