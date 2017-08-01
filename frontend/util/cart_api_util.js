export const addToCart = (product, cartId) => {
  debugger
  return $.ajax({
    method: 'patch',
    url: `/api/cart/${cartId}`,
    data: {
      product: product,
      cartId: cartId
    }
  });
};