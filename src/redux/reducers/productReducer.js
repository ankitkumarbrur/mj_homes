import { FETCH_PRODUCTS_SUCCESS, SELECT_PRODUCT_SUCCESS, SELECT_VARIATION_SUCCESS, RELOAD_SHOP_SUCCESS } from "../actions/productActions";

const initState = {
  products: [],
  selectedProduct: {},
  selectedVariation: "",
  reload: false
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
  if (action.type == RELOAD_SHOP_SUCCESS) {
    return {
      ...state,
      reload: action.payload
    };
  }

  return state;
};

export default productReducer;
