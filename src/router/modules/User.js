import Layout from '../../layout'
import user from '../../views/user'

export default {
  path: '/system',
  name: 'system',
  redirect: '/system/user',
  component: Layout,
  meta: {
    icon: 'Setting',
    title: '系统管理'
  },
  children: [
    {
      path: '/system/user',
      name: 'user',
      component: user,
      meta: {
        title: '用户管理'
      }
    }
  ]
}
