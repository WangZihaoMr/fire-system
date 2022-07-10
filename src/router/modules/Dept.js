import Layout from '../../layout'

export default {
  path: '/system',
  name: 'system',
  // redirect: '/system/dept',
  component: Layout,
  meta: {
    icon: 'Setting',
    title: '系统管理'
  },
  children: [
    {
      path: '/system/dept',
      name: 'dept',
      component: () => import('../../views/dept'),
      meta: {
        title: '用户管理'
      }
    }
  ]
}
