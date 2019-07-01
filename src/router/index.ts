import Vue from 'vue';
import Router from 'vue-router';
import Landing from '@/components/LandingPage.vue';
import Blog from '@/components/Blog.vue';
import Artikel from '@/components/Artikel.vue';
import Dashboard from '@/components/Dashboard.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
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
  ],
});
