import axios from 'axios';
import {API_CONSTANTS} from '../../utils/APIConstants';
import {CONSTANTS} from './actionsConstants';

const header = {'Content-Type': 'application/json'};

export const fetchAllProducts = () => async dispatch => {
  const response = await axios.get(API_CONSTANTS.BASEURL + 'products');
  dispatch(setProducts(response.data));
};

export const setProducts = products => {
  return {
    type: CONSTANTS.GET_ALL_PRODUCTS_SUCCESS,
    payload: products,
  };
};
