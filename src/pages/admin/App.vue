<template>
  <div id="app">
    <Header />
    <!-- <Sidebar /> -->
    <router-view></router-view>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import Header from './components/Header.vue';
// import Sidebar from './components/Sidebar.vue';

export default {
  components: {
    Header,
    // Sidebar,
  },
  name: 'Admin',
};
</script>

<style lang="scss">
body {
  background-color: #d4d4f559;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
