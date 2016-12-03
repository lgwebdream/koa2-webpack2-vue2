<template>
  <div id="app">
    <my-header></my-header>
    <h1>Hello App!</h1>
    <p>
      <router-link to="/index">首屏</router-link>
      <router-link to="/banner">导航</router-link>
    </p>
    <router-view></router-view>
    <my-footer></my-footer>
  </div>
</template>

<script>
import myHeader from './myheader/myHeader.vue';
import myFooter from './myfooter/myFooter.vue';
export default {
  name:"app",
  components: { myHeader, myFooter }
}
</script>
