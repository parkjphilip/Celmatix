import * as CartAPIUtil from '../util/cart_api_util';

// export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";

export const addToCart = (product, cartId, userId) => dispatch => {
  CartAPIUtil.addToCart(product, cartId, userId);
};

// export const fetchProducts = () => dispatch => {
//   return ProductAPIUtil.fetchProducts()
//                        .then(products => dispatch(receiveProducts(products)));
// };
//
// export const receiveProducts = products => {
//   return ({
//     type: RECEIVE_PRODUCTS,
//     products
//   });
// };