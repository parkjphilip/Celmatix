import {
  RECEIVE_PRODUCTS,
  RECEIVE_ERRORS,
  RESET_ERRORS } from '../actions/product_actions';

import merge from 'lodash/merge';

const oldState = Object.freeze({
  errors:[]
});

const ProductReducer = (state = oldState, action) => {

  switch(action.type) {
    case RECEIVE_PRODUCTS:
      return action.products;
    case RECEIVE_ERRORS:

      const errors = action.errors;
      return merge({}, oldState, { errors });
    case RESET_ERRORS:
      let newState = merge({}, state);
      newState.errors = [];
      return newState;
    default:
      return state;
  }
};

export default ProductReducer;