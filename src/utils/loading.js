/*
 * @Author: WangZihao 2597160811@qq.com
 * @Date: 2022-07-08 23:19:48
 * @LastEditors: WangZihao 2597160811@qq.com
 * @LastEditTime: 2022-07-10 16:32:16
 * @FilePath: \fire-system\src\utils\loading.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ElLoading } from 'element-plus'

const loading = {
  loadingInstance: null,
  // 开启loading加载
  open() {
    // 使用javascript单例模式
    if (this.loadingInstance === null) {
      this.loadingInstance = ElLoading.service({
        target: 'body',
        text: '拼命加载中...',
        background: 'rgba(0, 0, 0, 0.4)'
      })
    }
  },
  close() {
    if (this.loadingInstance !== null) {
      this.loadingInstance.close()
      this.loadingInstance = null
    }
  }
}

export default loading
