import { combineReducers } from 'redux';
import authReducer from './authReducer';
import addProductReducer from './productsReducer';

export default combineReducers({
  auth: authReducer,
  products: addProductReducer,
});
