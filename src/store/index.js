import auth from './../app/auth/vuex'
import restaurant from './../app/restaurant/vuex'
import cart from './../app/cart/vuex'
import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'

Vue.use(Vuex)

// Define api link
import axios from 'axios'
axios.defaults.baseURL = 'http://spa.dev'

export default new Vuex.Store({
  state,
  modules: {
    auth, restaurant, cart
  }
})
