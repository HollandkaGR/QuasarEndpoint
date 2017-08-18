export const setProducts = (state, products) => {
  state.products = products
}

export const setCart = (state, items) => {
  state.cart = items
}

export const addToCart = (state, {product, quantity}) => {
  const exists = state.cart.find((item) => {
    return item.product.id === product.id
  })

  if (exists) {
    exists.quantity++
  }
  else {
    state.cart.push({
      product,
      quantity
    })
  }
}

export const removeProductFromCart = (state, productId) => {
  const exists = state.cart.find((item) => {
    return item.product.id === productId
  })

  if (exists.quantity > 1) {
    exists.quantity--
  }
  else {
    state.cart = state.cart.filter((item) => {
      return item.product.id !== productId
    })
  }
}

export const clearCartMutation = (state) => {
  state.cart = []
}
