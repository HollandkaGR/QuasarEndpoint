// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
// require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

/**
 * Define localstorage to store data
 */
import localforage from 'localforage'

localforage.config({
  driver: localforage.LOCALSTORAGE,
  storeName: 'quasar'
})

import Vue from 'vue'
import Quasar from 'quasar'
import router from './router'
import store from './store'

store.dispatch('auth/setToken').then(() => {
  store.dispatch('auth/fetchUser').catch(() => {
    store.dispatch('auth/clearAuth')
    router.replace({ name: 'login' })
  })
}).catch(() => {
  store.dispatch('auth/clearAuth')
})

Vue.use(Quasar) // Install Quasar Framework

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    router,
    store,
    render: h => h(require('./components/layouts/BaseLayout'))
  })
})
