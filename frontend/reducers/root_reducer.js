import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ProductReducer from './product_reducer';
import CartItemsReducer from './cart_items_reducer';
import UsersReducer from './users_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  products: ProductReducer,
  cartItems: CartItemsReducer,
  users: UsersReducer,
});

export default rootReducer;