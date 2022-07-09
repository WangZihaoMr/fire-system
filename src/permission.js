import store from './store'
import router from './router'

// 未登录状态下可以进入的页面
const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
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
          next()
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
})

// router.beforeEach(async (to, from, next) => {
//   const token = store.getters.userInfo.token
//   console.log('token===>', token)
//   if (!token) {
//     // 未登录状态
//     if (to.path === '/login') {
//       next()
//     } else {
//       next('/login')
//     }
//   } else {
//     // 登录状态
//     if (to.path === '/login') {
//       next(from.path)
//     } else {
//       next()
//   const userInfo = store.getters.userInfo
//   if (userInfo !== {}) {
//     const permission = await store.dispatch('user/getPermission')
//     console.log(permission)
//     if (permission) {
//       return next(to.path)
//     }
//   }
//     }
//   }
// })
