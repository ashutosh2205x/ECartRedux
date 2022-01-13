import {useSelector} from 'react-redux';
import {CONSTANTS} from './actionsConstants';

export const addToCart = (product: object) => {
  return {
    type: CONSTANTS.ADD_CART_REQUEST,
    payload: product,
  };
};

export default {addToCart};
