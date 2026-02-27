import { createRouter, createWebHistory } from 'vue-router'

const getBasePath =()=>{
  if(window.__POWERED_BY_QIANKUN__){
    return  window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ || '/'
  }else{
    return '/'

  }
  
}

const router = createRouter({
  history: createWebHistory(getBasePath()),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/home/index.vue')
    
    },{
      path: '/vue/about',
      name: 'About',
      component: () => import('@/pages/about/index.vue')
    }
  ],
})

export default router
