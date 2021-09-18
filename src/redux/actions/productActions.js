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
		const BASE_URL = "http://localhost:8000";
		Axios.get(`${BASE_URL}/api/products/`).then((res) => {
			dispatch(fetchProductsSuccess(res.data.product));
		});
	};
};
