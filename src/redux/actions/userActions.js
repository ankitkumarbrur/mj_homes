import axios from "axios";

export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAIL = " USER_LOGIN_FAIL";
export const USER_LOGOUT = "USER_LOGOUT";
export const USER_REGISTER_REQUEST = "USER_REGISTER_REQUEST";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAIL = "USER_REGISTER_FAIL";

const BASE_URL = "http://eswar007.pythonanywhere.com";

export const login = (email, password) => async (dispatch) => {
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
            config
        );

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
        });

        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {

        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error.message,
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

// export const register = (name, email, password) => async (dispatch) => {
//     try {
//         dispatch({
//             type: USER_REGISTER_REQUEST,
//         });

//         const config = {
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         };

//         const { data } = await axios.post(
//             "/api/users/register/",
//             { name: name, email: email, password: password },
//             config
//         );

//         dispatch({
//             type: USER_REGISTER_SUCCESS,
//             payload: data,
//         });

//         dispatch({
//             type: USER_LOGIN_SUCCESS,
//             payload: data,
//         });

//         localStorage.setItem("userInfo", JSON.stringify(data));
//     } catch (error) {
//         dispatch({
//             type: USER_REGISTER_FAIL,
//             payload:
//                 error.response && error.response.data.detail
//                     ? error.response.data.detail
//                     : error.message,
//         });
//     }
// };