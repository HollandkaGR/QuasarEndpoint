import Vue from 'vue'
import VueRouter from 'vue-router'
import { beforeEach } from './beforeEach'

Vue.use(VueRouter)

function load (component) {
  return () => System.import(`../components/pages/${component}.vue`)
}

const router = new VueRouter({
  routes: [{
    path: '/',
    name: 'index',
    component: load('Index'),
    meta: {
      guest: true
    }
  },
  {
    path: '/bejelentkezes',
    name: 'login',
    component: load('Login'),
    meta: {
      guest: true
    }
  },
  {
    path: '/ettermek',
    name: 'home',
    component: load('Home'),
    meta: {
      guest: true
    }
  },
  {
    path: '/rendeleseim',
    name: 'orders',
    component: load('Orders'),
    meta: {
      needsAuth: true
    }
  },
  {
    path: '*',
    component: load('Error404')
  }
  ]
})

router.beforeEach(beforeEach)
// router.afterEach(afterEach)

export default router
