import {
  RECEIVE_PRODUCTS,
  RECEIVE_ERRORS,
  RESET_ERRORS } from '../actions/product_actions';

import merge from 'lodash/merge';

const oldState = Object.freeze({
  products: [],
  errors: []
});

const ProductReducer = (state = oldState, action) => {
  switch(action.type) {
    case RECEIVE_PRODUCTS:
      return merge({}, state, { products: action.products, errors: []});
    case RECEIVE_ERRORS:
      return merge({}, state, { errors: action.errors });
    case RESET_ERRORS:
      return merge({}, state, { errors: [] });
    default:
      return state;
  }
};

export default ProductReducer;