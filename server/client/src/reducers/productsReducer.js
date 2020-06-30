//reducer to add product
const initialState = {
  cartProducts: [],
  orders: [],
};

const addProductReducer = (state = initialState, action) => {
  if (action.type === 'ADD_PRODUCT') {
    return { ...state, cartProducts: [...state.cartProducts, action.payload] };
  }

  return initialState;
};

// const createOrderReducer = (state = initialState, action) => {
//   if (action.type === 'CREATE_ORDER') {
//     return { ...state, orders: [...state.orders, action.payload] };
//   }
//   return initialState;
// };

export default addProductReducer;
