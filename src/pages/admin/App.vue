<template>
  <div id="app">
    <Header />
    <Sidebar />
    <router-view></router-view>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';

export default {
  components: {
    Header,
    Sidebar,
  },
  name: 'Admin',
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #2c3e50;
  height: 100%;
  margin-top: 80px;
}
</style>
