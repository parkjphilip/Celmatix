import * as CartAPIUtil from '../util/cart_api_util';

export const RECEIVE_CART = "RECEIVE_CART";

export const addToCart = (productId, cartId) => dispatch => {
  CartAPIUtil.addToCart(productId, cartId);
};

export const fetchCart = (cartId) => dispatch => {
  return CartAPIUtil.fetchCart(cartId)
                    .then(cart => dispatch(receiveCart(cart)));
};

export const receiveCart = cart => {
  return ({
    type: RECEIVE_CART,
    cart
  });
};