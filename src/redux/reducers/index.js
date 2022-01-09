import {combineReducers} from 'redux';
import getAllProducts from './productReducer';

const RootReducer = combineReducers({
  getAllProducts: getAllProducts,
});

export default RootReducer;
