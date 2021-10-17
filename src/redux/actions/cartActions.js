import axios from "axios";
export const ADD_TO_CART = "ADD_TO_CART";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY";
export const DELETE_FROM_CART = "DELETE_FROM_CART";
export const DELETE_ALL_FROM_CART = "DELETE_ALL_FROM_CART";
export const FETCH_CART_DATA = "FETCH_CART_DATA";
const BASE_URL = "https://api.luxurymjhomes.com/";

//Fetch Cart
export const fetchCart = (addToast) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userInfo")}`,
      },
    };

    const { data } = await axios.get(`${BASE_URL}cart/`, config)
    console.log(data)
    data.map((item) => {
      dispatch({ type: ADD_TO_CART, payload: item });
    })

    addToast("Fetched Cart", {
      appearance: "success",
      autoDismiss: true
    });

    // dispatch({
    //   type: FETCH_CART_DATA,
    //   payload: data,
    // })


  } catch (error) {
    addToast("Cart Fetch Failed", {
      appearance: "error",
      autoDismiss: true
    });

  }

}

//add to cart
export const addToCart = (
  item,
  addToast,
  quantityCount,
  selectedProductColor,
  selectedProductSize,
  variationId
) => async (dispatch) => {

  // return async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("product", variationId);
    formData.append("quantity", quantityCount);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("userInfo")}`,
      },
    };

    const { data } = await axios.post(
      `${BASE_URL}cart/`,
      formData,
      config
    );

    if (addToast) {
      addToast("Added To Cart", {
        appearance: "success",
        autoDismiss: true,
      });
    }

    dispatch({
      type: ADD_TO_CART,
      payload: {
        ...data,
        selectedProductColor: selectedProductColor
          ? selectedProductColor
          : data.variation.color
            ? data.variation.color
            : null,
        selectedProductSize: selectedProductSize
          ? selectedProductSize
          : data.variation.color
            ? data.variation.color
            : null,
      },
    });
  }
  catch (error) {
    if (addToast) {
      addToast("Login first !", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  }

  // };
};

//decrease from cart
export const decreaseQuantity = (item, addToast) => {
  return (dispatch) => {
    if (addToast) {
      addToast("Item Decremented From Cart", {
        appearance: "warning",
        autoDismiss: true,
      });
    }
    dispatch({ type: DECREASE_QUANTITY, payload: item });
  };
};
//delete from cart
export const deleteFromCart = (item, addToast) => async (dispatch) => {


  try {

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `JWT ${localStorage.getItem("userInfo")}`,
      },
    };

    const { data } = await axios.delete(`${BASE_URL}cart/${item.id}/`, config);
    if (addToast) {
      addToast("Removed From Cart", {
        appearance: "success",
        autoDismiss: true,
      });
    }


    dispatch({ type: DELETE_FROM_CART, payload: item });

  } catch (error) {
    console.log(error)
    if (addToast) {
      addToast("Failed to Remove From Cart", {
        appearance: "error",
        autoDismiss: true,
      });
    }

  }



};
//delete all from cart
export const deleteAllFromCart = (cartItems, addToast) => {
  return (dispatch) => {
    cartItems.map((item) => {
      dispatch(deleteFromCart(item));
    })
    if (addToast) {
      addToast("Removed All From Cart", {
        appearance: "error",
        autoDismiss: true,
      });
    }
    dispatch({ type: DELETE_ALL_FROM_CART });
  };
};

// get stock of cart item
// export const cartItemStock = (item, color, size) => {
//   if (item.stock) {
//     return item.stock;
//   } else {
//     return item.variation
//       .filter((single) => single.color == color)[0]
//       .size.filter((single) => single.name == size)[0].stock;
//   }
// };
export const cartItemStock = (item, color) => {
  //Remove later
  return 10;
  if (item.stock) {
    return item.stock;
  } else {
    return item.variation.filter((single) => single.color == color)[0];
  }
};
