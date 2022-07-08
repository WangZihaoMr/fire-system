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
