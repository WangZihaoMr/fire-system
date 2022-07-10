/*
 * @Author: WangZihao 2597160811@qq.com
 * @Date: 2022-07-08 16:12:35
 * @LastEditors: WangZihao 2597160811@qq.com
 * @LastEditTime: 2022-07-10 16:32:25
 * @FilePath: \fire-system\src\utils\storage.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 存储数据
export const setItem = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  localStorage.setItem(key, value)
}

// 获取数据
export const getItem = (key) => {
  const data = localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (error) {
    return data
  }
}

// 删除单个数据
export const clearSingle = (key) => {
  localStorage.removeItem(key)
}

// 删除所有数据
export const clearAll = () => {
  localStorage.clear()
}
