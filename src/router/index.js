import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../layout'

const routes = [
  {
    path: '/layout',
    name: 'layout',
    // redirect: '/layout',
    component: Layout
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
