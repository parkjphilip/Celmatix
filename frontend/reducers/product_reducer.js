import { RECEIVE_PRODUCTS } from '../actions/product_actions';
import merge from 'lodash/merge';

const ProductReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PRODUCTS:
      return state.products;
    default:
      return state;
  }
};

export default ProductReducer;