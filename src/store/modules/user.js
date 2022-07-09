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
