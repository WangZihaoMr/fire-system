/*
 * @Author: WangZihao 2597160811@qq.com
 * @Date: 2022-07-09 14:37:29
 * @LastEditors: WangZihao 2597160811@qq.com
 * @LastEditTime: 2022-07-10 16:14:18
 * @FilePath: \fire-system\src\router\modules\Menu.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Layout from '../../layout'

export default {
  path: '/system',
  name: 'menu_query',
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
