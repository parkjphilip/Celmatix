import * as CartAPIUtil from '../util/cart_api_util';

export const RECEIVE_CART_ITEMS = "RECEIVE_CART_ITEMS";

export const addToCart = (productId, cartId) => dispatch => {
  CartAPIUtil.addToCart(productId, cartId);
};

export const fetchCartItems = (cartId) => dispatch => {
  return CartAPIUtil.fetchCartItems(cartId)
                    .then(cartItems => dispatch(receiveCartItems(cartItems)));
};

export const receiveCartItems = cartItems => {
  debugger
  return ({
    type: RECEIVE_CART_ITEMS,
    cartItems
  });
};