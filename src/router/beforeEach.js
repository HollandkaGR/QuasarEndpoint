import store from '../store'
import localforage from 'localforage'
import { hasIn } from 'lodash'

export const beforeEach = (to, from, next) => {
  if (hasIn(to.meta, 'needsAuth')) {
    // console.log('CheckAuth')
    store.dispatch('auth/checkTokenExists').then(() => {
      // console.log('van token')
      store.dispatch('auth/fetchUser').then(() => {
        // console.log('van user')
        next()
      })
      .catch(() => {
        // console.log('van token, nincs user')
        askLogin(to, next)
      })
    })
    .catch(() => {
      // console.log('nincs token')
      askLogin(to, next)
    })
  }
  else if (!hasIn(to.meta, 'guest')) {
    next({ name: 'index' })
  }
  next()
}

function askLogin (route, next) {
  localforage.setItem('intended', route.name)
  next({name: 'login'})
}
