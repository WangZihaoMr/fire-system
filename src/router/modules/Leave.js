/*
 * @Author: WangZihao 2597160811@qq.com
 * @Date: 2022-07-09 15:14:34
 * @LastEditors: WangZihao 2597160811@qq.com
 * @LastEditTime: 2022-07-10 16:13:31
 * @FilePath: \fire-system\src\router\modules\Leave.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Layout from '../../layout'

export default {
  path: '/audit',
  name: 'leave-query',
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
