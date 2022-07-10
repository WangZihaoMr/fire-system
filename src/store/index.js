/*
 * @Author: WangZihao 2597160811@qq.com
 * @Date: 2022-07-08 10:05:13
 * @LastEditors: WangZihao 2597160811@qq.com
 * @LastEditTime: 2022-07-10 19:57:24
 * @FilePath: \fire-system\src\store\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createStore } from 'vuex'
import getters from './getters'
import user from './modules/user'
import permission from './modules/permission'

export default createStore({
  getters,
  modules: {
    user,
    permission
  }
})
