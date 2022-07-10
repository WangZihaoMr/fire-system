import Layout from '../../layout'

export default {
  path: '/system',
  name: 'system',
  // redirect: '/system/role',
  component: Layout,
  meta: {
    icon: 'Setting',
    title: '系统管理'
  },
  children: [
    {
      path: '/system/role',
      name: 'role',
      component: () => import('../../views/role'),
      meta: {
        title: '用户管理'
      }
    }
  ]
}
