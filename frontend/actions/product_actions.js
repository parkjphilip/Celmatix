import * as ProductAPIUtil from '../util/product_api_util';

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";
export const RECEIVE_PRODUCT_ERRORS = "RECEIVE_PRODUCT_ERRORS";
export const RESET_PRODUCT_ERRORS = "RESET_PRODUCT_ERRORS";

//creates all of the products if the JSON file
// that is submitted is structured correctly
export const createProducts = file => dispatch => {
  ProductAPIUtil.createProducts(file);
};

// the input product is created and then received by the reducer on success.
// on failure, product errors are received by the reducer.
export const addProduct = product => dispatch => {
  ProductAPIUtil.addProduct(product)
                .then(product => dispatch(receiveProduct(product)),
                      (err) => dispatch(receiveProductErrors(err.responseJSON)));
};

//fetch all products and then they are received by the reducer
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

export const receiveProduct = product => {
  return ({
    type: RECEIVE_PRODUCT,
    product
  });
};

export const receiveProductErrors = errors => {
  return ({
    type: RECEIVE_PRODUCT_ERRORS,
    errors
  });
};

export const resetProductErrors = () => {
  return {
    type: RESET_PRODUCT_ERRORS
  };
};