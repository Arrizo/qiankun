/*
 * @Author: chase
 * @Date: 2025-12-02 17:20:44
 * @LastEditors: chase
 * @LastEditTime: 2025-12-05 13:46:37
 * @FilePath: \qiankun\vue3-app\vite.config.js
 * @Description: 
 * 
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import qiankun from 'vite-plugin-qiankun'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // vueDevTools(),
    qiankun('vue3-app',{
      useDevMode:true
    })
  ],
  server:{
    hmr:false,
    port: 5171,
    cors: true,
    headers:{
      "Access-Control-Allow-Origin":'*'
    }
  },
  base:'./',
  
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
