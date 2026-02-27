/*
 * @Author: chase
 * @Date: 2025-12-02 17:52:29
 * @LastEditors: chase
 * @LastEditTime: 2025-12-05 13:43:46
 * @FilePath: \qiankun\react-app\vite.config.js
 * @Description: ,
 * 
 * 
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import qiankun from 'vite-plugin-qiankun'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    qiankun('react-app',{
    useDevMode:true
  })
],
  server:{
    hmr:false,
    port: 5172,
    cors: true,
    headers:{
      "Access-Control-Allow-Origin":'*'
    }

  },
  base:'./'
})
