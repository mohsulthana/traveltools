<template>
  <div>
    <b-navbar toggleable="lg" fixed="top" class="navbar">
      <b-navbar-brand href="#">Tools.Travel</b-navbar-brand>

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

<style>
.navbar {
  background-color: #fff;
}
.btn-number {
  width: 170px;
  height: 43.5px;
  color: #fff;
  background-image: linear-gradient(to right, #535353, #c6c6c6);
  font-family: Futura;
  font-size: 13.8px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  float: center;
  margin-right: 20px;
}
.btn-login {
  width: 153px;
  height: 43.5px;
  float: center;
  background-image: linear-gradient(to right, #535353, #c6c6c6);
  background-image: linear-gradient(to right, #535353, #c6c6c6),
  linear-gradient(to bottom, #606060, #606060);
  font-family: Futura;
  font-size: 13.5px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #606060;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
