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
