import store from '../store'
import localforage from 'localforage'

export const afterEach = (to, from) => {
  store.dispatch('auth/checkTokenExists')
  .catch(() => {
    if (from.meta.needsAuth && from.name !== 'login') {
      localforage.setItem('intended', from.name)
    }
  })
}
