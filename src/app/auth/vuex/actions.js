import { isEmpty } from 'lodash'
import { setHttpToken } from './../../../helpers'
import router from './../../../router'
import localforage from 'localforage'
import axios from 'axios'

export const register = ({ dispatch }, { payload, context }) => {
  return axios.post('/api/register', payload).then(response => {
    dispatch('setToken', response.data.meta.token).then(() => {
      dispatch('fetchUser')
    })
  }).catch((errors) => {
    context.errors = errors.response.data.errors
  })
}

export const login = ({ dispatch, state }, { payload, context }) => {
  return axios.post('/api/login', payload)
  .then(response => {
    dispatch('setToken', response.data.meta.token)
    dispatch('fetchUser')
    .then(() => {
      if (isEmpty(this.errors)) {
        localforage.getItem('intended').then((name) => {
          if (isEmpty(name)) {
            router.replace({ name: 'index' })
          }
          else {
            localforage.removeItem('intended')
            router.replace({ name: name })
          }
        })
      }
      console.log(response.data)
    })
    return Promise.resolve(response.data.data)
  }).catch((errors) => {
    context.errors = errors.response.data.errors
  })
}

export const logout = ({ dispatch, rootState }) => {
  return axios
  .post(rootState.baseUrl + '/api/logout')
  .then(() => {
    dispatch('clearAuth')
  })
  .catch((error) => {
    router.replace({ name: 'index' })
    console.log(error.response.data)
  })
}

export const fetchUser = ({commit, dispatch, rootState}) => {
  return axios.get(rootState.baseUrl + '/api/me').then((response) => {
    commit('setAuthenticated', true)
    commit('setUserData', response.data.data)
    return Promise.resolve(response.data.data)
  }).catch(() => {
    dispatch('clearAuth')
    return Promise.reject(new Error('Token expired'))
  })
}

export const setToken = ({ commit, dispatch }, token) => {
  if (isEmpty(token)) {
    return dispatch('checkTokenExists').then((token) => {
      setHttpToken(token)
    })
  }
  commit('setToken', token)
  setHttpToken(token)
}

export const checkTokenExists = ({ commit, dispatch }, token) => {
  return localforage.getItem('authToken').then((token) => {
    if (isEmpty(token)) {
      return Promise.reject(new Error('NO_STORAGE_TOKEN'))
    }
    return Promise.resolve(token)
  })
}

export const clearAuth = ({ commit }) => {
  commit('setAuthenticated', false)
  commit('setUserData', null)
  commit('setToken', null)
  setHttpToken(null)
}
