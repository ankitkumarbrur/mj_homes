import Axios from "axios";

export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const SELECT_PRODUCT_SUCCESS = "SELECT_PRODUCT_SUCCESS";

const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

const selectProductSuccess = ({ size, weight, material }) => ({
  type: SELECT_PRODUCT_SUCCESS,
  payload: { size, weight, material }
});

// fetch products
export const fetchProducts = (products) => {
  if (products) {
    return (dispatch) => {
      dispatch(fetchProductsSuccess(products));
    };
  }
  return (dispatch) => {
    // const BASE_URL = process.env.REACT_APP_BASE_URL;
    const BASE_URL = "https://api.luxurymjhomes.com/";
    Axios.get(`${BASE_URL}product/`).then((res) => {
      dispatch(fetchProductsSuccess(res.data));
    });
  };
};

// Selected product
export const selectProduct = (size, weight, material) => {

  return (dispatch) => {

    dispatch(selectProductSuccess({ size, weight, material }));
  };
  ;
};
