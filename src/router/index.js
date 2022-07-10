import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/login'
import Layout from '../layout'

import User from './modules/User'
import Menu from './modules/Menu'
import Role from './modules/Role'
import Dept from './modules/Dept'
import Leave from './modules/Leave'
import AppRove from './modules/AppRove'

const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'layout',
    redirect: '/welcome',
    component: Layout,
    children: [
      {
        path: '/welcome',
        name: 'welcome',
        component: () => import('../views/welcome')
      },
      {
        path: '/404',
        name: '404',
        component: () => import('../views/error-page')
      }
    ]
  },
  // 当所访问的页面不存在的时候，跳到404页面
  {
    path: '/:catchAll(.*)',
    redirect: '/404'
  }
]

const privateRoutes = [User, Menu, Role, Dept, Leave, AppRove]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...publicRoutes, ...privateRoutes]
})

export default router
