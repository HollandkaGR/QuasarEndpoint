import axios from 'axios'

export const getProducts = ({ commit }) => {
  return axios.get('/products').then((response) => {
    commit('setProducts', response.data)
    return Promise.resolve()
  })
}

export const getCart = ({ commit }) => {
  return axios.get('/cart').then((response) => {
    commit('setCart', response.data)
    return Promise.resolve()
  })
}

export const addProductToCart = ({ commit, dispatch }, {product, quantity}) => {
  commit('addToCart', {product, quantity})

  return axios.post('/cart', {
    product_id: product.id,
    quantity
  }).catch(() => {
    dispatch('getCart')
  })
}

export const removeProductFromCart = ({ commit, dispatch }, productId) => {
  commit('removeProductFromCart', productId)

  return axios.delete('/cart/' + productId).catch(() => {
    dispatch('getCart')
  })
}

export const clearCartAction = ({commit}) => {
  commit('clearCartMutation')
}
