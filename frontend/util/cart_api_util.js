export const addToCart = (productId, cartId) => {
  return $.ajax({
    method: 'post',
    url: `/api/carts/${cartId}/cart_items`,
    data: {
      product_id: productId,
      cart_id: cartId
    }
  });
};

export const fetchCart = (cartId) => {
  return $.ajax({
    method: 'get',
    url: `api/carts/${cartId}`
  });
};