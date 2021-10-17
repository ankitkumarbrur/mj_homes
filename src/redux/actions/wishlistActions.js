import axios from "axios";

export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
export const DELETE_FROM_WISHLIST = "DELETE_FROM_WISHLIST";
export const DELETE_ALL_FROM_WISHLIST = "DELETE_ALL_FROM_WISHLIST";

const BASE_URL = "https://api.luxurymjhomes.com/";

export const fetchWishlist = (addToast) => async (dispatch) => {

  try {

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `JWT ${localStorage.getItem("userInfo")}`,
      },
    };

    const { data } = await axios.get(`${BASE_URL}wishlist/`, config);

    data.map((item) => {
      dispatch({ type: ADD_TO_WISHLIST, payload: item });
    })

    addToast("Wishlist Fetched", {
      appearance: "success",
      autoDismiss: true,
    });

  } catch (error) {

    addToast("Error to fetch wishlist", {
      appearance: "error",
      autoDismiss: true,
    });

  }

}


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

    dispatch({ type: ADD_TO_WISHLIST, payload: data });
  } catch (error) {

    // var message = "";

    // if (error.response.data.password != undefined) message = error.response.data.password;
    // else if (error.response.data.Error) message = error.response.data.Error;
    // else if (error.response.data.Message) message = error.response.data.Message;

    addToast("Login first !", {
      appearance: "error",
      autoDismiss: true,
    });
  }
};

// delete from wishlist
export const deleteFromWishlist = (item, addToast) => async (dispatch) => {

  try {

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `JWT ${localStorage.getItem("userInfo")}`,
      },
    };

    const { data } = await axios.delete(`${BASE_URL}wishlist/${item.id}/`, config);
    if (addToast) {
      addToast("Removed From Wishlist", {
        appearance: "success",
        autoDismiss: true,
      });
    }


    dispatch({ type: DELETE_FROM_WISHLIST, payload: item });

  } catch (error) {
    console.log(error)
    if (addToast) {
      addToast("Failed to Remove From Wishlist", {
        appearance: "error",
        autoDismiss: true,
      });
    }

  }


};

//delete all from wishlist
export const deleteAllFromWishlist = (wishlistItems, addToast) => (dispatch) => {

  wishlistItems.map((item) => {
    dispatch(deleteFromWishlist(item));
  })
  console.log("Deleting")

  if (addToast) {
    addToast("Removed All From Wishlist", {
      appearance: "error",
      autoDismiss: true,
    });
  }
  dispatch({ type: DELETE_ALL_FROM_WISHLIST });

};
