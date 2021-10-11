import {
  ADD_TO_WISHLIST,
  DELETE_FROM_WISHLIST,
  DELETE_ALL_FROM_WISHLIST
} from "../actions/wishlistActions";

//Initial Manipulation for getting data for wishlist from locastorage
const obj = (localStorage.getItem("wishlistDataStorage"));
const initState = JSON.parse(obj) != null ? JSON.parse(obj) : [];

const wishlistReducer = (state = initState, action) => {

  const wishlistItems = state,
    product = action.payload;

  if (action.type == ADD_TO_WISHLIST) {
    const wishlistItem = wishlistItems.filter(
      item => item.id == product.id
    )[0];
    if (wishlistItem == undefined) {
      const result = [...wishlistItems, product];
      localStorage.setItem("wishlistDataStorage", JSON.stringify(result));
      return [...wishlistItems, product];
    } else {
      const result = wishlistItems;
      localStorage.setItem("wishlistDataStorage", JSON.stringify(result));
      return wishlistItems;
    }
  }

  if (action.type == DELETE_FROM_WISHLIST) {
    const remainingItems = (wishlistItems, product) => {
      wishlistItems.filter(wishlistItem => wishlistItem.id !== product.id);
    }
    console.log(product.id);
    var newWishList = [];
    wishlistItems.filter(wishlistItem => {

      if (wishlistItem.id !== product.id) {
        newWishList.push(wishlistItem);
        return true;
      }
      else return false;

    });
    console.log(newWishList)
    // var wishlistdelete = wishlistItems;
    // wishlistdelete.filter(wishlistItem => wishlistItem.id !== product.id);
    localStorage.setItem("wishlistDataStorage", JSON.stringify(newWishList));
    // return remainingItems(wishlistItems, product);
    return newWishList;
  }

  if (action.type == DELETE_ALL_FROM_WISHLIST) {
    return wishlistItems.filter(item => {
      return false;
    });
  }

  return wishlistItems;
};

export default wishlistReducer;
