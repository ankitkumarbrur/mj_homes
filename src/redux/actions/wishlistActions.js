import axios from "axios";

export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
export const DELETE_FROM_WISHLIST = "DELETE_FROM_WISHLIST";
export const DELETE_ALL_FROM_WISHLIST = "DELETE_ALL_FROM_WISHLIST";

const BASE_URL = "https://api.luxurymjhomes.com/";

// Fetch Wishlist Products

// add to wishlist
export const addToWishlist = (item, addToast) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("product", item.id);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `JWT ${localStorage.getItem("userInfo")}`,
      },
    };

    const { data } = await axios.post(`${BASE_URL}wishlist/`, formData, config);

    addToast("Added To Wishlist", {
      appearance: "success",
      autoDismiss: true,
    });

    dispatch({ type: ADD_TO_WISHLIST, payload: item });
  } catch (error) {
    console.log(error);
    // var message = "";

    // if (error.response.data.password != undefined) message = error.response.data.password;
    // else if (error.response.data.Error) message = error.response.data.Error;
    // else if (error.response.data.Message) message = error.response.data.Message;

    addToast("Failed To Add", {
      appearance: "error",
      autoDismiss: true,
    });
  }
};

// delete from wishlist
export const deleteFromWishlist = (item, addToast) => {
  return (dispatch) => {
    if (addToast) {
      addToast("Removed From Wishlist", {
        appearance: "error",
        autoDismiss: true,
      });
    }
    dispatch({ type: DELETE_FROM_WISHLIST, payload: item });
  };
};

//delete all from wishlist
export const deleteAllFromWishlist = (addToast) => {
  return (dispatch) => {
    if (addToast) {
      addToast("Removed All From Wishlist", {
        appearance: "error",
        autoDismiss: true,
      });
    }
    dispatch({ type: DELETE_ALL_FROM_WISHLIST });
  };
};
