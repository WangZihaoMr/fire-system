/*
 * @Author: WangZihao 2597160811@qq.com
 * @Date: 2022-07-10 16:30:39
 * @LastEditors: WangZihao 2597160811@qq.com
 * @LastEditTime: 2022-07-10 17:07:37
 * @FilePath: \fire-system\src\store\modules\permission.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { publicRoutes, privateRoutes } from '@/router'

export default {
  namespaced: true,
  state: {
    routes: publicRoutes
  },
  mutations: {
    SET_ROUTES(state, routes) {
      state.states = [...publicRoutes, ...routes]
    }
  },
  actions: {
    async filterRoutes({ commit }, menus) {
      const routes = []
      menus.forEach((name) => {
        const data = privateRoutes.filter((item) => item.name === name)
        routes.push(...data)
      })

      // 添加路由重定向
      routes.push({
        path: '/:catchAll(.*)',
        redirect: '/404'
      })
      // 将私有数据与共有数据进行合并
      commit('SET_ROUTES', routes)
      return routes
    }
  }
}
