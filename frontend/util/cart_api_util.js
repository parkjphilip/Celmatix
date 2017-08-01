export const addToCart = (product, cartId, userId) => {
  debugger
  return $.ajax({
    method: 'put',
    url: `/api/users/${userId}/carts/${cartId}`,
    data: {
      product: product,
      cartId: cartId
    }
  });
};