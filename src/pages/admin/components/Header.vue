<template>
  <div>
    <b-navbar sticky="top" toggleable="lg" class="box navbar">
      <b-navbar-brand href="#" class="navbar-brand">Tools.Travel</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link :to="{ name: 'Landing' }">Home</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link :to="{ name: 'Blog' }">Blog</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link :to="{ name: 'Artikel' }">Artikel</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link :to="{ name: 'Detail-artikel' }">Detail</router-link>
          </b-nav-item>
          <b-nav-item href="#">Gallery</b-nav-item>
          <b-nav-item href="#">Artikel</b-nav-item>
          <b-nav-item href="#">FAQ</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-button class="btn-number">+62877-7111-1173</b-button>
          <b-button class="btn-login">Login</b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({

});
</script>

<style scoped>
.navbar-brand {
  position: relative;
  left: 100px;
}
.navbar {
  background-color: #fff;
  z-index: 1;
  position: fixed;
}
.box {
  z-index: 2;
  height: 80px;
  width: 80px;
  background-color: #7675c8;
}
</style>
