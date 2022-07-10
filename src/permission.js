/*
 * @Author: WangZihao 2597160811@qq.com
 * @Date: 2022-07-08 19:55:14
 * @LastEditors: WangZihao 2597160811@qq.com
 * @LastEditTime: 2022-07-10 20:47:39
 * @FilePath: \fire-system\src\permission.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import store from './store'
import router from './router'

import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

NProgress.configure({ showSpinner: false }) // 进度环隐藏

// 未登录状态下可以进入的页面
const whiteList = ['/login', '/404']

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  const token = store.getters.userInfo.token
  console.log('token===>', token)
  if (token) {
    if (to.path === '/login') {
      next(from.path)
    } else {
      const menus = store.getters.menus
      if (!menus) {
        const response = await store.dispatch('user/getMenus')
        if (response) {
          console.log(response)
          const permission = response.actionList
          // console.log(permission)
          // 调用vuex里面的filterRoutes方法，过滤出当前用户所拥有的的私有路由表
          // 获取当前登录用户的私有路由表
          const filterRoutes = await store.dispatch(
            'permission/filterRoutes',
            permission
          )
          console.log('store', filterRoutes)
          // 将vuex返回的数据循环添加进路由表
          filterRoutes.forEach((item) => {
            router.addRoute(item)
          })
          // console.log('permission===>路由表数据：', filterRoutes)
          // console.log('路由表数据：', router.getRoutes())
          return next()
        } else {
          next('/login')
        }
      } else {
        next()
      }
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
  NProgress.done()
})

// router.beforeEach(async (to, from, next) => {
//   const token = store.getters.userInfo.token
//   const menus = store.getters.menus

//   if (token && to.path === '/login') {
//     return next(from.path)
//   }

//   if (!token && to.path !== '/login') {
//     if (whiteList.includes(to.path)) {
//       next()
//     } else {
//       next('/login')
//     }
//   }

//   if (!menus) {
//     const response = await store.dispatch('user/getMenus')
//     if (response) {
//       console.log(response)
//       const permission = response.menuList
//       console.log(permission)
//       return next(to.path)
//     }
//   }
//   next()
// })
