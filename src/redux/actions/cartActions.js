import axios from "axios";
export const ADD_TO_CART = "ADD_TO_CART";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY";
export const DELETE_FROM_CART = "DELETE_FROM_CART";
export const DELETE_ALL_FROM_CART = "DELETE_ALL_FROM_CART";

const BASE_URL = "http://localhost:8000";

//add to cart
export const addToCart = (
  item,
  addToast,
  quantityCount,
  selectedProductColor,
  selectedProductSize,
  variationId
) => {
  console.log(variationId);
  return (dispatch) => {
    // try {
    //   const formData = new FormData();
    //   formData.append("userId", 4);
    //   formData.append("productId", item.id);
    //   formData.append("quantity", quantityCount);
    //   const config = {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   };

    //   const { data } = await axios.post(
    //     `${BASE_URL}/api/order/addToCart/`,
    //     formData,
    //     config
    //   );

    if (addToast) {
      addToast("Added To Cart", {
        appearance: "success",
        autoDismiss: true,
      });
    }

    dispatch({
      type: ADD_TO_CART,
      payload: {
        ...item,
        quantity: quantityCount,
        selectedProductColor: selectedProductColor
          ? selectedProductColor
          : item.selectedProductColor
          ? item.selectedProductColor
          : null,
        selectedProductSize: selectedProductSize
          ? selectedProductSize
          : item.selectedProductSize
          ? item.selectedProductSize
          : null,
      },
    });
  };
  // catch (error) {
  //   if (addToast) {
  //     addToast(error.message, { appearance: "fail", autoDismiss: true });
  //   }
  // }

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
export const deleteFromCart = (item, addToast) => {
  return (dispatch) => {
    if (addToast) {
      addToast("Removed From Cart", {
        appearance: "error",
        autoDismiss: true,
      });
    }
    dispatch({ type: DELETE_FROM_CART, payload: item });
  };
};
//delete all from cart
export const deleteAllFromCart = (addToast) => {
  return (dispatch) => {
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
  if (item.stock) {
    return item.stock;
  } else {
    return item.variation.filter((single) => single.color == color)[0];
  }
};
