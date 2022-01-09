import {CONSTANTS} from '../actions/actionsConstants';

const initState = [];

const cartItemsReducer = (state = initState, actions) => {
  switch (actions.type) {
    case CONSTANTS.ADD_CART_REQUEST:
      return [...state, actions.payload];
    case CONSTANTS.REMOVE_CART_REQUEST:
      return state.filter(cartItem => cartItem.id !== actions.payload.id);
    default:
      return state;
  }
};

export default cartItemsReducer;
