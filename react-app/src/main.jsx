/*
 * @Author: chase
 * @Date: 2025-12-02 17:52:29
 * @LastEditors: chase
 * @LastEditTime: 2025-12-05 17:19:51
 * @FilePath: \qiankun\react-app\src\main.jsx
 * @Description: 
 * 
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

let root = null
const render = (props = {}) => {
  console.log(11111111111111, props)
  const { container } = props
  root = createRoot(container ? container.querySelector('#root') : document.getElementById('root'))
  root.render(
    <App />
  )
}

renderWithQiankun({
  mount(props) {
    console.log('react-app mount', props)
    render(props)
  },
  bootstrap() {
    console.log('react-app bootstrap')
  },
  update(props) {
    console.log('react-app update', props)
  },
  unmount(props) {
    console.log('react-app unmount')
    if (root) {
      root.unmount()
      root = null
    }
  }
})
// 判断是否在 qiankun 环境下
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render()
}
// 导出生命周期钩子
export { bootstrap, mount, unmount } from 'vite-plugin-qiankun/dist/helper'