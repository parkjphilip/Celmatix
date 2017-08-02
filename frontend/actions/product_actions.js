import * as ProductAPIUtil from '../util/product_api_util';

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RESET_ERRORS = "RESET_ERRORS";

export const createProducts = file => dispatch => {
  ProductAPIUtil.createProducts(file);
};

export const addProduct = product => dispatch => {
  ProductAPIUtil.addProduct(product)
                .then( (err) => dispatch(receiveErrors(err.responseJSON)));

};

export const fetchProducts = () => dispatch => {
  return ProductAPIUtil.fetchProducts()
                       .then(products => dispatch(receiveProducts(products)));
};

export const receiveProducts = products => {
  return ({
    type: RECEIVE_PRODUCTS,
    products
  });
};

export const receiveErrors = errors => {
  return ({
    type: RECEIVE_ERRORS,
    errors
  });
};

export const resetErrors = () => {
  return {
    type: RESET_ERRORS
  };
};