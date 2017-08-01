import { RECEIVE_CART } from '../actions/cart_actions';
import merge from 'lodash/merge';

const CartReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CART:
      return action.cart;
    default:
      return state;
  }
};

export default CartReducer;