import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ProductReducer from './product_reducer';
import CartItemsReducer from './cart_items_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  products: ProductReducer,
  cartItems: CartItemsReducer
});

export default rootReducer;