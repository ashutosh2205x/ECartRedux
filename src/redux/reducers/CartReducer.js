import {CONSTANTS} from '../actions/actionsConstants';

const initState = [];

const cartItemsReducer = (state = initState, actions) => {
  switch (actions.type) {
    case CONSTANTS.ADD_CART_REQUEST:
      return [...state, actions.payload];
    case CONSTANTS.EMPTY_CART:
      return [];
    case CONSTANTS.UPDATE_CART:
      return [...actions.payload];
    default:
      return state;
  }
};

export default cartItemsReducer;
