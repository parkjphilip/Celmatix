import {
  RECEIVE_PRODUCTS,
  RECEIVE_PRODUCT_ERRORS,
  RESET_PRODUCT_ERRORS,
  RECEIVE_PRODUCT } from '../actions/product_actions';

import merge from 'lodash/merge';

//oldState includes both products and errors
const oldState = {
  products: [],
  errors: []
};

//each state is made to both return an object that includes a property of
//products and a property of errors
const ProductReducer = (state = oldState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PRODUCTS:
      return merge({}, state, { products: action.products, errors: []});
    case RECEIVE_PRODUCT:
      const newProducts = [action.product, ...state.products];
      return merge({}, state, {products: newProducts, errors: []});
    case RECEIVE_PRODUCT_ERRORS:
      return merge({}, state, { errors: action.errors });
    case RESET_PRODUCT_ERRORS:
      return merge({}, state, { errors: [] });
    default:
      return state;
  }
};

export default ProductReducer;