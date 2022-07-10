import Layout from '../../layout'

export default {
  path: '/audit',
  name: 'audit',
  // redirect: '/audit/leave',
  component: Layout,
  meta: {
    icon: 'Promotion',
    title: '审批管理'
  },
  children: [
    {
      path: '/audit/leave',
      name: 'leave',
      component: () => import('../../views/leave'),
      meta: {
        title: '休假申请'
      }
    }
  ]
}
