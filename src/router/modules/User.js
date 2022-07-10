import Layout from '../../layout'

export default {
  path: '/system',
  name: 'user-query',
  component: Layout,
  meta: {
    icon: 'Setting',
    title: '系统管理'
  },
  children: [
    {
      path: '/system/user',
      name: 'user',
      component: () => import('../../views/user'),
      meta: {
        title: '用户管理'
      }
    }
  ]
}
