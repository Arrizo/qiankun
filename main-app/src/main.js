/*
 * @Author: chase
 * @Date: 2025-12-02 17:03:39
 * @LastEditors: chase
 * @LastEditTime: 2025-12-05 18:28:06
 * @FilePath: \qiankun\main-app\src\main.js
 * @Description: 
 * 
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { registerMicroApps, start, initGlobalState } from 'qiankun'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
export const action = initGlobalState({ name: 'lisi' })
action.onGlobalStateChange((state, prev) => {
    console.log('main onGlobalStateChange', state, prev);
});
registerMicroApps([
    {
        name: 'vue3-app',
        entry: '//localhost:5171',
        container: '#vue-container',
        activeRule: '/vue',
        props: {
            action,
            data: { key: 'vue-value' },
            parentFunction: (valu) => {
                console.log('来自子应用事件:', valu)
            }
        }
    },
    {
        name: 'react-app',
        entry: '//localhost:5172',
        container: '#vue-container',
        activeRule: '/react',
        props: {
            action,
            data: { key: 'react-value' },
            parentFunction: (valu) => {
                console.log('来自子应用事件:', valu)
            }
        }
    }
]);
start()

app.mount('#app')
