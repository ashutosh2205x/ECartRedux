import {useSelector} from 'react-redux';
import {CONSTANTS} from './actionsConstants';

export const addtoCartAction = (product: object) => {
  return {
    type: CONSTANTS.ADD_CART_REQUEST,
    payload: product,
  };
};

export const emptyCartAction = () => {
  return {
    type: CONSTANTS.EMPTY_CART,
    payload: [],
  };
};

export const UpdateCartAction = (productArr: []) => {
  console.log('new prod arr', productArr);
  return {
    type: CONSTANTS.UPDATE_CART,
    payload: productArr,
  };
};

export default {addtoCartAction, emptyCartAction};
