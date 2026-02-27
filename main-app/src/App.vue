<!--
 * @Author: chase
 * @Date: 2025-12-02 17:03:39
 * @LastEditors: chase
 * @LastEditTime: 2025-12-05 16:32:56
 * @FilePath: \qiankun\main-app\src\App.vue
 * @Description: 
 * 
-->
<script setup>
const goto=(url='/react')=>{
  // debugger
   history.pushState(null, '/react', '/react');
}
</script>

<template>

  <section class="box">
    <header>
      <nav>
        <router-link to="/">主应用首页</router-link>
        <router-link to="/react">react 子应用</router-link>
        <router-link to="/vue">vue3 子应用</router-link>
      </nav>
    </header>
    <main>
      <router-view></router-view>
      <div id="vue-container"></div>
    </main>

  </section>

</template>

<style scoped>
.box {
  width: 100vw;
  height: 100vh;
}

nav {
  padding: 10px;
  border: 1px solid;
}

nav a {
  display: inline-block;
  padding: 10px;
  border: 1px solid red;
}

main {
  height: 100%;
}

main #vue-container {
  height: 500px;
  width: 500px;

  border: 1px solid blueviolet;

}
</style>
