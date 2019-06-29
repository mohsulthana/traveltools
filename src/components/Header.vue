<template>
  <div>
    <b-navbar fixed="top" type="light" variant="light">
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
        <b-nav-item href="#">Gallery</b-nav-item>
        <b-nav-item href="#">Artikel</b-nav-item>
        <b-nav-item href="#">FAQ</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-button class="btn-number mr-3">+62768</b-button>
        <b-button class="btn-number">Login</b-button>
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
  .btn-number {
    width: 170px;
    height: 29.5px;
    padding-bottom: -20px;
    background-image: linear-gradient(to right, #535353, #c6c6c6);
  }
</style>
