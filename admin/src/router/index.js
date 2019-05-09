import Vue from 'vue'
import Router from 'vue-router'
import Map from '@/components/home/Map'
import Signup from '@/components/auth/Signup'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/group',
      name: 'Map',
      component: Map
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ]
})
