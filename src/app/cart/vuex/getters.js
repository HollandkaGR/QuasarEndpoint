export const products = (state) => {
  return state.products
}

export const cart = (state) => {
  return state.cart
}

export const cartItemCount = (state) => {
  return state.cart.length
}

export const cartTotal = (state) => {
  return state.cart.reduce((a, b) => {
    return a + b.product.price * b.quantity
  }, 0)
}
