import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/login'
import Layout from '../layout'

const routes = [
  {
    path: '/',
    name: 'layout',
    redirect: '/welcome',
    component: Layout,
    children: [
      {
        path: 'welcome',
        name: 'welcome',
        component: () => import('../views/welcome')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
