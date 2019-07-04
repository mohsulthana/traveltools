import Vue from 'vue';
import Router from 'vue-router';
import Landing from '../views/LandingPage.vue';
import Blog from '../views/Blog.vue';
import Artikel from '../views/Artikel.vue';
import Detail from '../views/DetailArtikel.vue';

Vue.use(Router);

export default new Router({
  base: '/',
  mode: 'history',
  routes: [
    {
      path: '/home/',
      name: 'Landing',
      component: Landing,
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog,
    },
    {
      path: '/artikel',
      name: 'Artikel',
      component: Artikel,
    },
    {
      path: '/detail/artikel',
      name: 'Detail-artikel',
      component: Detail,
    },
  ],
});
