import { isEmpty } from 'lodash'
import { Loading } from 'quasar'
import { Popup } from './toaster'

export const setHttpToken = token => {
  if (window.axios == null) {
    window.axios = require('axios')
  }
  if (isEmpty(token)) {
    window.axios.defaults.headers.common['Authorization'] = null
  }
  window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
}

export const showLoadingScreen = () => {
  return Loading.show({
    spinner: 'rings',
    spinnerSize: 250,
    spinnerColor: 'white'
  })
}

export const showPopup = (message, type) => {
  return new Popup(message, type)
}
