import axios from 'axios';
import {API_CONSTANTS} from '../../utils/APIConstants';
const header = {'Content-Type': 'application/json'};

async function getProductList() {
  return await axios.get(API_CONSTANTS.BASEURL + 'products', header);
}

export {getProductList};
