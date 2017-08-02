import * as CartAPIUtil from '../util/cart_api_util';

export const RECEIVE_CART_ITEMS = "RECEIVE_CART_ITEMS";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";

export const addToCart = (productId, cartId) => dispatch => {
  return CartAPIUtil.addToCart(productId, cartId);
};

export const deleteCartItem = (cartId, cartItemId) => dispatch => {
  return CartAPIUtil.deleteCartItem(cartId, cartItemId)
                    .then(cartItem => dispatch(removeCartItem(cartItem)));
};

export const fetchCartItems = (cartId) => dispatch => {
  return CartAPIUtil.fetchCartItems(cartId)
                    .then(cartItems => dispatch(receiveCartItems(cartItems)));
};

export const receiveCartItems = cartItems => {
  return ({
    type: RECEIVE_CART_ITEMS,
    cartItems
  });
};

export const removeCartItem = cartItem => {
  return ({
    type: REMOVE_CART_ITEM,
    cartItem
  });
};