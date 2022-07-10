import store from './store'
import router from './router'

// 未登录状态下可以进入的页面
const whiteList = ['/login', '/404']

router.beforeEach(async (to, from, next) => {
  const token = store.getters.userInfo.token
  const menus = store.getters.menus

  if (token && to.path === '/login') {
    return next(from.path)
  }

  if (!token && to.path !== '/login') {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }

  if (!menus) {
    const response = await store.dispatch('user/getMenus')
    if (response) {
      console.log(response)
      const permission = response.menuList
      console.log(permission)
      return next(to.path)
    }
  }
  next()
})

// router.beforeEach(async (to, from, next) => {
//   const token = store.getters.userInfo.token
//   console.log('token===>', token)
//   if (token) {
//     if (to.path === '/login') {
//       next(from.path)
//     } else {
//       const menus = store.getters.menus
//       if (!menus) {
//         const response = await store.dispatch('user/getMenus')
//         if (response) {
//           console.log(response)
//           const permission = response.menuList
//           console.log(permission)
//           next()
//         }
//       } else {
//         next()
//       }
//     }
//   } else {
//     if (whiteList.includes(to.path)) {
//       next()
//     } else {
//       next('/login')
//     }
//   }
// })
