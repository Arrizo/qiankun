import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

let app=null 
const render=(props={})=>{
    const {container }=props
    app=createApp(App)
    app.use(router)
    app.mount( container? container.querySelector('#container'): '#container')
}
renderWithQiankun({
  mount(props){
    window.action=props.action
    console.log('vue3-app mount', props)
    props.action.setGlobalState({name:'修改'})
    render(props)
  },
  bootstrap(){
    console.log('bootstrap')
  },
  update(props){
    console.log('update', props)
  },
  unmount(props){
      console.log('vue3-app unmount')
    app?.unmount()
    app=null
  }
})
if(!qiankunWindow.__POWERED_BY_QIANKUN__){
  render()
}

export {bootstrap,mount,unmount} from 'vite-plugin-qiankun/dist/helper'


