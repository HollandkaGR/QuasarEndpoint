import axios from 'axios'

export const fetchEttermek = ({commit}) => {
  return axios.get('/api/ettermek').then(response => {
    commit('setEttermek', response.data.data)
  }).catch((errors) => {
    return Promise.reject(new Error('Csatlakozási hiba'))
  })
}

export const resetEttermek = ({commit}) => {
  return commit('resetEttermek')
}

export const fetchProducts = ({commit}, payload) => {
  return axios.get('/api/products/' + payload.restId).then(response => {
    return Promise.resolve(response.data)
  }).catch((errors) => {
    return Promise.reject(new Error('Csatlakozási hiba'))
  })
}
