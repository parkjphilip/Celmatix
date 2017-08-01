export const addToCart = (productId, cartId, userId) => {
  debugger
  return $.ajax({
    method: 'post',
    url: `/api/users/${userId}/carts/${cartId}/cart_items`,
    data: {
      product_id: productId,
      cart_id: cartId
    }
  });
};