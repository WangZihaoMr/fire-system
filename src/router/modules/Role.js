/*
 * @Author: WangZihao 2597160811@qq.com
 * @Date: 2022-07-09 14:39:11
 * @LastEditors: WangZihao 2597160811@qq.com
 * @LastEditTime: 2022-07-10 16:14:33
 * @FilePath: \fire-system\src\router\modules\Role.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Layout from '../../layout'

export default {
  path: '/system',
  name: 'role-query',
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
