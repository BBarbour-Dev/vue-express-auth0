import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

import authRouteGuard from './auth/authRouteGuard';

import Profile from './views/Profile.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      beforeEnter: authRouteGuard
    }
  ]
});
