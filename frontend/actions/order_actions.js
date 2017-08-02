import * as OrderAPIUtil from '../util/order_api_util';

// export const RECEIVE_CART_ITEMS = "RECEIVE_CART_ITEMS";
// export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";

export const buyItems = (userId, orderItems) => dispatch => {
  return OrderAPIUtil.buyItems(userId, orderItems);
};