import { RECEIVE_CART_ITEMS, REMOVE_CART_ITEM } from '../actions/cart_actions';
import merge from 'lodash/merge';

const CartItemsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CART_ITEMS:
      return action.cartItems;
    case REMOVE_CART_ITEM:
      const newState = state.concat([]);
      newState.forEach( (cartItem, idx) => {
        if (cartItem.id === action.cartItem.id) {
          newState.splice(idx, 1);
        }
      });
      return newState;
    default:
      return state;
  }
};

export default CartItemsReducer;