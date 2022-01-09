import {getProductList} from '../../utils/api/apiHandler';
import {CONSTANTS} from '../actions/actionsConstants';

const initState = {
  products: [],
  loading: false,
};

function productReducer(state = initState, {type, payload}) {
  switch (type) {
    case CONSTANTS.GET_ALL_PRODUCTS_REQUEST:
      return {...state, loading: true};
    case CONSTANTS.GET_ALL_PRODUCTS_SUCCESS:
      return {...state, products: payload, loading: false};
    case CONSTANTS.GET_ALL_PRODUCTS_FAIL:
      return {...state, loading: false};
    default:
      return state;
  }
}

export default productReducer;
