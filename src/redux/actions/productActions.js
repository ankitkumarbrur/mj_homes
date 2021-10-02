import Axios from "axios";

export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";

const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
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
    const BASE_URL = "http://ankitbrur.pythonanywhere.com/";
    Axios.get(`${BASE_URL}product/`).then((res) => {
      dispatch(fetchProductsSuccess(res.data));
      console.log(res.data);
    });
  };
};
