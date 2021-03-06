import axios from "axios";
import { DELETE_ALL_FROM_CART, fetchCart } from "./cartActions";
import { fetchWishlist, deleteAllFromWishlist } from "./wishlistActions";
import { DELETE_ALL_FROM_WISHLIST } from "./wishlistActions";


export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAIL = " USER_LOGIN_FAIL";
export const USER_LOGOUT = "USER_LOGOUT";
export const USER_REGISTER_REQUEST = "USER_REGISTER_REQUEST";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAIL = "USER_REGISTER_FAIL";

const BASE_URL = "https://api.luxurymjhomes.com/";

export const login = (email, password, addToast) => async (dispatch) => {
	try {
		dispatch({
			type: USER_LOGIN_REQUEST,
		});
		const formData = new FormData();
		formData.append("email", email);
		formData.append("password", password);
		const config = {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		};

		const { data } = await axios.post(
			`${BASE_URL}login/`,
			formData,
			config
		);

		dispatch({
			type: USER_LOGIN_SUCCESS,
			payload: data.access,
		});


		addToast("Logged In", {
			appearance: "success",
			autoDismiss: true
		});
		localStorage.setItem("userName", data.name)
		localStorage.setItem("userEmail", data.email)
		localStorage.setItem("userInfo", data.access);

		// Fetch Cart and Wishlist
		await dispatch(fetchWishlist(addToast))
		await dispatch(fetchCart(addToast))


	} catch (error) {
		addToast("Wrong Credentials!", {
			appearance: "error",
			autoDismiss: true
		});
		dispatch({
			type: USER_LOGIN_FAIL,
			payload:
				error.response && error.response.data.detail
					? error.response.data.detail
					: error.message,
		});
	}
};

export const logout = (addToast) => async (dispatch, getState) => {

	try {
		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("userInfo")}`,
			},
		};
		console.log(localStorage.getItem("userInfo"))
		// const { data } = await axios.post(
		// 	`${BASE_URL}logout/`,
		// 	config,
		// 	{ withCredentials: true, }
		// );

		const {
			wishlistData, cartData
		} = getState();


		// await dispatch(deleteAllFromWishlist(wishlistData));
		dispatch({ type: DELETE_ALL_FROM_WISHLIST });
		dispatch({ type: DELETE_ALL_FROM_CART });
		localStorage.removeItem("wishlistDataStorage");
		localStorage.removeItem("userLogin");
		localStorage.removeItem("userInfo");
		localStorage.removeItem("userName");
		localStorage.removeItem("userEmail");



		addToast("Logged Out", {
			appearance: "success",
			autoDismiss: true
		});
		console.log("logout")
		// deleteAllFromWishlist(addToast)

		dispatch({ type: USER_LOGOUT });
	} catch (error) {
		addToast("Not Logged Out", {
			appearance: "error",
			autoDismiss: true
		});


	}

};



// export const logout = () => (dispatch) => {
//     localStorage.removeItem("userInfo");
//     dispatch({ type: USER_LOGOUT });
//     dispatch({ type: USER_DETAILS_RESET });
//     dispatch({ type: ORDER_LIST_MY_RESET });
//     dispatch({ type: USER_LIST_RESET });
// };

export const register = (firstname, lastname, pass, email, addToast, history) => async (dispatch) => {

	try {
		dispatch({
			type: USER_REGISTER_REQUEST,
		});

		const formData = new FormData();
		formData.append("email", email);
		formData.append("password", pass);
		formData.append("first_name", firstname + " " + lastname);

		const config = {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		};

		const { data } = await axios.post(
			`${BASE_URL}register/`,
			formData,
			config
		);



		addToast("Check your mail for Account Activation.", {
			appearance: "success",
			autoDismiss: true
		});

		return "Success";


	} catch (error) {

		var message = "";

		//Validation of form from API
		if (error.response.data.password != undefined) message = error.response.data.password;
		else if (error.response.data.Error) message = error.response.data.Error;
		else if (error.response.data.email) message = error.response.data.email;

		addToast((message), {
			appearance: "error",
			autoDismiss: true
		});

	}
};