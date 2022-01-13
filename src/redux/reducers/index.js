import {combineReducers} from 'redux';
import cartItemsReducer from './CartReducer';
import getAllProducts from './productReducer';

const RootReducer = combineReducers({
  getAllProducts: getAllProducts,
  cartItemsReducer: cartItemsReducer,
});

export default RootReducer;
