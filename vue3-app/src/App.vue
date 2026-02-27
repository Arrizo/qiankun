<!--
 * @Author: chase
 * @Date: 2025-12-02 17:20:44
 * @LastEditors: chase
 * @LastEditTime: 2025-12-10 14:34:20
 * @FilePath: \qiankun\vue3-app\src\App.vue
 * @Description: 
 * 
-->
<script setup>
const send = () => {
  window.action.setGlobalState({ name: '来自' })
}
</script>

<template>
  <section id="vue3-app">
    <section>
      <nav>
        <router-link to="/vue">Vue主页</router-link> |
        <router-link to="/vue/about">关于</router-link>
      </nav>
      <router-view>
      </router-view>
      <div>
        <h1 @click="send">Vue3 子应用</h1>
      </div>
    </section>
  </section>
</template>

<style scoped>
#vue-app {

  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
}
</style>
