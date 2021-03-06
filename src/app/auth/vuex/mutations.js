import localforage from 'localforage'
import { isEmpty } from 'lodash'

export const setToken = (state, token) => {
  if (isEmpty(token)) {
    localforage.removeItem('authToken', token)
    return
  }
  localforage.setItem('authToken', token)
}

export const setAuthenticated = (state, isAuthenticated) => {
  state.user.authenticated = isAuthenticated
}

export const setUserData = (state, data) => {
  state.user.data = data
}
