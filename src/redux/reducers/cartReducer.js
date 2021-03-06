import uuid from "uuid/v4";
import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  DELETE_FROM_CART,
  DELETE_ALL_FROM_CART,
  FETCH_CART_DATA,
} from "../actions/cartActions";

//Initial Manipulation for getting data for wishlist from locastorage
const obj = (localStorage.getItem("cartDataStorage"));
const initState = JSON.parse(obj) != null ? JSON.parse(obj) : [];

const cartReducer = (state = initState, action) => {
  const cartItems = state,
    product = action.payload;
  // if (action.type = FETCH_CART_DATA) {
  //   console.log(product)
  //   return product;
  // }
  if (action.type == FETCH_CART_DATA) {
    console.log("REDUX : ", action.payload)
    localStorage.setItem("cartDataStorage", JSON.stringify(action.payload));
    return action.payload;
  }
  if (action.type == ADD_TO_CART) {
    // for non variant products
    if (product.variation == undefined) {
      const cartItem = cartItems.filter((item) => item.id == product.id)[0];
      if (cartItem == undefined) {
        localStorage.setItem("cartDataStorage", JSON.stringify([
          ...cartItems,
          {
            ...product,
            quantity: product.quantity ? product.quantity : 1,
            cartItemId: uuid(),
          },
        ]));
        return [
          ...cartItems,
          {
            ...product,
            quantity: product.quantity ? product.quantity : 1,
            cartItemId: uuid(),
          },
        ];
      } else {
        const result = cartItems.map((item) =>
          item.cartItemId == cartItem.cartItemId
            ? {
              ...item,
              quantity: product.quantity
                ? item.quantity + product.quantity
                : item.quantity + 1,
            }
            : item
        );
        localStorage.setItem("cartDataStorage", JSON.stringify(result));
        return result;
      }
      // for variant products
    } else {
      const cartItem = cartItems.filter(
        (item) =>
          item.id == product.id &&
          product.selectedProductColor &&
          product.selectedProductColor == item.selectedProductColor &&
          product.selectedProductSize &&
          product.selectedProductSize == item.selectedProductSize &&
          (product.cartItemId ? product.cartItemId == item.cartItemId : true)
      )[0];

      if (cartItem == undefined) {
        const result = [
          ...cartItems,
          {
            ...product,
            quantity: product.quantity ? product.quantity : 1,
            cartItemId: uuid(),
          },
        ];
        localStorage.setItem("cartDataStorage", JSON.stringify(result));
        return result;
      } else if (
        cartItem !== undefined &&
        (cartItem.selectedProductColor !== product.selectedProductColor ||
          cartItem.selectedProductSize !== product.selectedProductSize)
      ) {
        const result = [
          ...cartItems,
          {
            ...product,
            quantity: product.quantity ? product.quantity : 1,
            cartItemId: uuid(),
          },
        ];
        localStorage.setItem("cartDataStorage", JSON.stringify(result));
        return result;
      } else {
        const result = cartItems.map((item) =>
          item.cartItemId == cartItem.cartItemId
            ? {
              ...item,
              quantity: product.quantity
                ? item.quantity + product.quantity
                : item.quantity + 1,
              selectedProductColor: product.selectedProductColor,
              selectedProductSize: product.selectedProductSize,
            }
            : item
        );
        localStorage.setItem("cartDataStorage", JSON.stringify(result));
        return result;
      }
    }
  }

  if (action.type == DECREASE_QUANTITY) {
    if (product.quantity == 1) {
      const remainingItems = (cartItems, product) =>
        cartItems.filter(
          (cartItem) => cartItem.cartItemId !== product.cartItemId
        );
      return remainingItems(cartItems, product);
    } else {
      return cartItems.map((item) =>
        item.cartItemId == product.cartItemId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    }
  }

  if (action.type == DELETE_FROM_CART) {
    const remainingItems = (cartItems, product) =>
      cartItems.filter(
        (cartItem) => cartItem.cartItemId !== product.cartItemId
      );

    var newCartList = [];
    cartItems.filter(cartItem => {

      if (cartItem.cartItemId !== product.cartItemId) {
        newCartList.push(cartItem);
        return true;
      }
      else return false;

    });
    localStorage.setItem("cartDataStorage", JSON.stringify(newCartList));
    console.log(newCartList)
    return newCartList;
  }

  if (action.type == DELETE_ALL_FROM_CART) {
    return cartItems.filter((item) => {
      return false;
    });
  }

  return state;
};

export default cartReducer;
