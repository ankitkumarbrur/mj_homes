import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { save, load } from "redux-localstorage-simple";
import { Provider } from "react-redux";
import { fetchProducts } from "./redux/actions/productActions";
import rootReducer from "./redux/reducers/rootReducer";
// import products from "./data/products.json";
import products from "./data/products _1.json";

import App from "./App";
import "./assets/scss/style.scss";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";
import { composeWithDevTools } from "redux-devtools-extension";

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const store = createStore(
  rootReducer,
  initialState,
  // applyMiddleware(thunk),
  composeWithDevTools(applyMiddleware(thunk, save()))
);
// const BASE_URL = "http://ankitbrur.pythonanywhere.com";

// const fetch_data = async () => {
//   try {
//     const { data } = await axios.get(`${BASE_URL}/product/`);
//     console.log(data);
//   } catch (error) {
//     console.log("error");
//   }
// };
// fetch_data();
// fetch products from json file
store.dispatch(fetchProducts());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
