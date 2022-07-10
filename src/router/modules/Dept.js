/*
 * @Author: WangZihao 2597160811@qq.com
 * @Date: 2022-07-09 14:38:52
 * @LastEditors: WangZihao 2597160811@qq.com
 * @LastEditTime: 2022-07-10 16:13:13
 * @FilePath: \fire-system\src\router\modules\Dept.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Layout from '../../layout'

export default {
  path: '/system',
  name: 'dept-query',
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
        title: '部门管理'
      }
    }
  ]
}
