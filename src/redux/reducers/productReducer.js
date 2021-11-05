import { FETCH_PRODUCTS_SUCCESS, SELECT_PRODUCT_SUCCESS, SELECT_VARIATION_SUCCESS } from "../actions/productActions";

const initState = {
  products: [],
  selectedProduct: {},
  selectedVariation: "",
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
  if (action.type == SELECT_VARIATION_SUCCESS) {
    return {
      ...state,
      selectedVariation: action.payload
    };
  }

  return state;
};

export default productReducer;
