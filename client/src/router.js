import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: () => import('./views/cp-base.vue')
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('./views/cp-profile.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('./views/cp-login.vue')
    },
    {
      path: '/search',
      name: 'Search',
      component: () => import('./views/cp-search.vue')
    }
  ]
})