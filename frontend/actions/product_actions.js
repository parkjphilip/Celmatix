import * as ProductAPIUtil from '../util/product_api_util';

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";

export const createProducts = file => dispatch => {
  ProductAPIUtil.createProducts(file)
                .then(products => dispatch(receiveProducts(products)));
};

export const receiveProducts = products => ({
  type: RECEIVE_PRODUCTS,
  products
});