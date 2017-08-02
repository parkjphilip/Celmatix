import { RECEIVE_CART_ITEMS } from '../actions/cart_actions';
import merge from 'lodash/merge';

const CartItemsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CART_ITEMS:
      return action.cartItems;
    default:
      return state;
  }
};

export default CartItemsReducer;