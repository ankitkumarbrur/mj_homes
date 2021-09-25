import axios from "axios";

export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAIL = " USER_LOGIN_FAIL";
export const USER_LOGOUT = "USER_LOGOUT";
export const USER_REGISTER_REQUEST = "USER_REGISTER_REQUEST";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAIL = "USER_REGISTER_FAIL";

const BASE_URL = "http://localhost:8000";

export const login = (email, password, addToast) => async (dispatch) => {
	try {
		dispatch({
			type: USER_LOGIN_REQUEST,
		});
		const formData = new FormData();
		formData.append("username", email);
		formData.append("password", password);
		const config = {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		};

		const { data } = await axios.post(
			`${BASE_URL}/api/authenticate/login/`,
			formData,
			config,
		);

		dispatch({
			type: USER_LOGIN_SUCCESS,
			payload: data,
		});
		addToast("Logged In", {
			appearance: "success",
			autoDismiss: true,
		});
		localStorage.setItem("userInfo", JSON.stringify(data));
	} catch (error) {
		addToast("Wrong Credentials!", {
			appearance: "error",
			autoDismiss: true,
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

export const logout = (addToast) => (dispatch) => {
	localStorage.removeItem("userLogin");
	localStorage.removeItem("userInfo");
	addToast("Logged Out", {
		appearance: "error",
		autoDismiss: true,
	});
	dispatch({ type: USER_LOGOUT });
};

// export const logout = () => (dispatch) => {
//     localStorage.removeItem("userInfo");
//     dispatch({ type: USER_LOGOUT });
//     dispatch({ type: USER_DETAILS_RESET });
//     dispatch({ type: ORDER_LIST_MY_RESET });
//     dispatch({ type: USER_LIST_RESET });
// };

export const register =
	(firstname, lastname, pass, passConfirm, tel, email, address, addToast) =>
	async (dispatch) => {
		try {
			dispatch({
				type: USER_REGISTER_REQUEST,
			});

			const formData = new FormData();
			formData.append("email", email);
			formData.append("password1", pass);
			formData.append("password2", passConfirm);
			formData.append("fname", firstname);
			formData.append("lname", lastname);
			formData.append("address", address);
			formData.append("contactNumber", tel);
			const config = {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			};

			const { data } = await axios.post(
				`${BASE_URL}/api/authenticate/signup/`,
				formData,
				config,
			);

			dispatch({
				type: USER_REGISTER_SUCCESS,
				// payload: data,
			});

			dispatch({
				type: USER_LOGIN_SUCCESS,
				// payload: data,
			});
			addToast(data.message, {
				appearance: "success",
				autoDismiss: true,
			});
			console.log("SUCESS");
			// localStorage.setItem("userInfo", JSON.stringify(data));
		} catch (error) {
			addToast(error.message, {
				appearance: "error",
				autoDismiss: true,
			});
			dispatch({
				type: USER_REGISTER_FAIL,
				payload:
					error.response && error.response.data.detail
						? error.response.data.detail
						: error.message,
			});
		}
	};
