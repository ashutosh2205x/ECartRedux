import {CONSTANTS} from './actionsConstants';

export const setProducts = products => {
  return {
    type: CONSTANTS.GET_ALL_PRODUCTS_SUCCESS,
    payload: products,
  };
};
