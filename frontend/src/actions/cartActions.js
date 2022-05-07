import axios from "axios";

import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_EDIT_ITEM_QTY,
  WISHLIST_ADD_ITEM,
  WISHLIST_REMOVE_ITEM,
} from "../constants/cartConstants";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const cartItemsFromStorage = JSON.parse(localStorage.getItem("cartItems"));

  if (cartItemsFromStorage) {
    const existItem = cartItemsFromStorage.find((x) => x.product === id);

    if (existItem) {
      alert(`Item is already in the cart!`);
      return;
    }
  }

  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      brand: data.brand,
      image: data.highlightedImage,
      size: data.size,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));

  alert(`Item added to the cart successfully!`);
};

export const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const setCartItemQty = (id, newQty) => async (dispatch, getState) => {
  dispatch({
    type: CART_EDIT_ITEM_QTY,
    payload: { id, newQty },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const addToWishList = (id) => async (dispatch, getState) => {
  const wishListFromStorage = JSON.parse(localStorage.getItem("wishList"));

  if (wishListFromStorage) {
    const existItem = wishListFromStorage.find((x) => x.product === id);

    if (existItem) {
      alert(`Item is already in the wishlist!`);
      return;
    }
  }

  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: WISHLIST_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      brand: data.brand,
      highlightedImage: data.highlightedImage,
      size: data.size,
      price: data.price,
      countInStock: data.countInStock,
    },
  });

  localStorage.setItem("wishList", JSON.stringify(getState().cart.wishList));

  alert(`Item added to the wishlist successfully!`);
};

export const removeFromWishList = (id) => async (dispatch, getState) => {
  dispatch({
    type: WISHLIST_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem("wishList", JSON.stringify(getState().cart.wishList));
};
