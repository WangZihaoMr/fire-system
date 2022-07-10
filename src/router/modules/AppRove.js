import Layout from '../../layout'

export default {
  path: '/audit',
  name: 'audit',
  redirect: '/audit/approve',
  component: Layout,
  meta: {
    icon: 'Promotion',
    title: '审批管理'
  },
  children: [
    {
      path: '/audit/approve',
      name: 'approve',
      component: () => import('../../views/approve'),
      meta: {
        title: '待审批'
      }
    }
  ]
}
