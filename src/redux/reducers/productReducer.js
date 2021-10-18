import { FETCH_PRODUCTS_SUCCESS, SELECT_PRODUCT_SUCCESS } from "../actions/productActions";

const initState = {
  products: [],
  selectedProduct: {},
};

const productReducer = (state = initState, action) => {

  if (action.type == FETCH_PRODUCTS_SUCCESS) {
    return {
      ...state,
      products: action.payload
    };
  }
  if (action.type == SELECT_PRODUCT_SUCCESS) {
    return {
      ...state,
      selectedProduct: action.payload
    };
  }

  return state;
};

export default productReducer;
