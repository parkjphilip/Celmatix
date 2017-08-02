// export const addToCart = (productId, cartId) => {
//   return $.ajax({
//     method: 'post',
//     url: `/api/carts/${cartId}/cart_items`,
//     data: {
//       product_id: productId,
//       cart_id: cartId
//     }
//   });
// };
//
// export const fetchCartItems = (cartId) => {
//   return $.ajax({
//     method: 'get',
//     url: `api/carts/${cartId}/cart_items`
//   });
// };
//
// export const deleteCartItem = (cartId, cartItemId) => {
//   return $.ajax({
//     method: 'delete',
//     url: `api/carts/${cartId}/cart_items/${cartItemId}`
//   });
// };

export const buyItems = (userId, cartItems) => {
  return $.ajax({
    method: 'post',
    url: `/api/orders`,
    data: {
      user_id: userId,
      cart_items: cartItems
    }
  });
};