import router from '../../router'
import { getItem, setItem } from '@/utils/storage'
import UserApi from '../../api/user'

const SET_TOKEN_KEY = 'token'

export default {
  namespaced: true,
  state: {
    token: getItem(SET_TOKEN_KEY) || ''
  },
  mutations: {
    // 存储token到vuex和本地
    SET_TOKEN(state, token) {
      state.token = token
      setItem(SET_TOKEN_KEY, state.token)
    }
  },
  actions: {
    // 登录
    async login({ commit }, loginForm) {
      const response = await UserApi.login(loginForm)
      console.log(response.token)
      commit('SET_TOKEN', response.token)
    },
    // 退出登录
    loginOut({ commit }) {
      commit('SET_TOKEN', '')
      router.push('/login')
    }
  }
}
