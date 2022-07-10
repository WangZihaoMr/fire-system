import Layout from '../../layout'

export default {
  path: '/system',
  name: 'system',
  // redirect: '/system/menu',
  component: Layout,
  meta: {
    icon: 'Setting',
    title: '系统管理'
  },
  children: [
    {
      path: '/system/menu',
      name: 'menu',
      component: () => import('../../views/menu'),
      meta: {
        title: '菜单管理'
      }
    }
  ]
}
