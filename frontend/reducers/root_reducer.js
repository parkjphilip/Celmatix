import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ProductReducer from './product_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  products: ProductReducer
});

export default rootReducer;