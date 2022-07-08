import store from './store'
import router from './router'

router.beforeEach((to, from, next) => {
  const token = store.getters.token
  console.log('token===>', token)
  if (!token) {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
    // if (to.path === '/login') {
    //   next(from.path)
    // } else {
    //   next()
    // }
  }
})
