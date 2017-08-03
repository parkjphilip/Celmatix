import * as CartAPIUtil from '../util/cart_api_util';

export const RECEIVE_CART_ITEMS = "RECEIVE_CART_ITEMS";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";

// adds one product to a cart using the product id and the cart id
export const addToCart = (productId, cartId) => dispatch => {
  return CartAPIUtil.addToCart(productId, cartId);
};

// deletes a cart item by using the cart id and the cartItem id
export const deleteCartItem = (cartId, cartItemId) => dispatch => {
  return CartAPIUtil.deleteCartItem(cartId, cartItemId)
                    .then(cartItem => dispatch(removeCartItem(cartItem)));
};

//grabs all cart items
export const fetchCartItems = (cartId) => dispatch => {
  return CartAPIUtil.fetchCartItems(cartId)
                    .then(cartItems => dispatch(receiveCartItems(cartItems)));
};

//receives the payload of cartItems to pass on to the reducer
export const receiveCartItems = cartItems => {
  return ({
    type: RECEIVE_CART_ITEMS,
    cartItems
  });
};

//receives the payload of a cartItem to pass on to the reducer
export const removeCartItem = cartItem => {
  return ({
    type: REMOVE_CART_ITEM,
    cartItem
  });
};