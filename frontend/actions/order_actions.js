import * as OrderAPIUtil from '../util/order_api_util';

// buys all of the cartItems in the current cart
export const buyItems = (userId, cartItems) => dispatch => {
  return OrderAPIUtil.buyItems(userId, cartItems);
};