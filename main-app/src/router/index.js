/*
 * @Author: chase
 * @Date: 2025-12-02 17:03:39
 * @LastEditors: chase
 * @LastEditTime: 2025-12-05 11:41:12
 * @FilePath: \qiankun\main-app\src\router\index.js
 * @Description: 
 * 
 */
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/home/index.vue'),
    },
    
  ],
})

export default router
