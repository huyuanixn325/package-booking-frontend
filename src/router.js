import Vue from 'vue'
import Router from 'vue-router'
import PackageStore from './views/PackageStore.vue'
import packageslist from './views/PackagesList.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'packageStore',
      component:PackageStore
    },
    {
      path: '/packageslist',
      name: 'packageslist',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:packageslist
    }
    
  ]
})
