import router from '../../router'
import { getItem, setItem } from '@/utils/storage'
import UserApi from '../../api/user'

const SET_USER_INFO_KEY = 'userInfo'

export default {
  namespaced: true,
  state: {
    userInfo: getItem(SET_USER_INFO_KEY) || {}
  },
  mutations: {
    // 存储userInfo到vuex和本地
    SET_USER_INFO(state, userInfo) {
      console.log(userInfo)
      state.userInfo = userInfo
      setItem(SET_USER_INFO_KEY, userInfo)
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
      commit('SET_USER_INFO', {})
      router.push('/login')
    }
  }
}
