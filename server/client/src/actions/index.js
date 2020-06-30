import axios from 'axios';
import { FETCH_USER } from './types';
//Action creator to fetch user
export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

//Action creator to create product

export const addProduct = (product) => {
  return {
    type: 'ADD_PRODUCT',
    payload: product,
  };
};

export const createOrder = (user_id, priceDetails, shippingDetails) => {
  const order_id = '1';
  return {
    type: 'CREATE_ORDER',
    payload: { user_id, order_id, priceDetails, shippingDetails },
  };
};
