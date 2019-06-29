import Vue from 'vue';
import Router from 'vue-router';
import Landing from '@/components/LandingPage.vue';
import Blog from '@/components/Blog.vue';

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
  ],
});
