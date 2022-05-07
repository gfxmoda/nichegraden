import axios from "axios";

import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_CATEGORY_LIST_REQUEST,
  PRODUCT_CATEGORY_LIST_SUCCESS,
  PRODUCT_CATEGORY_LIST_FAIL,
  PRODUCT_FOR_HIM_LIST_REQUEST,
  PRODUCT_FOR_HIM_LIST_SUCCESS,
  PRODUCT_FOR_HIM_LIST_FAIL,
  PRODUCT_FOR_HER_LIST_REQUEST,
  PRODUCT_FOR_HER_LIST_SUCCESS,
  PRODUCT_FOR_HER_LIST_FAIL,
  PRODUCT_UNISEX_LIST_REQUEST,
  PRODUCT_UNISEX_LIST_SUCCESS,
  PRODUCT_UNISEX_LIST_FAIL,
  PRODUCT_FOR_HOME_LIST_REQUEST,
  PRODUCT_FOR_HOME_LIST_SUCCESS,
  PRODUCT_FOR_HOME_LIST_FAIL,
  PRODUCT_SKIN_CARE_LIST_REQUEST,
  PRODUCT_SKIN_CARE_LIST_SUCCESS,
  PRODUCT_SKIN_CARE_LIST_FAIL,
  PRODUCT_BEST_LIST_REQUEST,
  PRODUCT_BEST_LIST_SUCCESS,
  PRODUCT_BEST_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "../constants/productConstants";

// get all products
export const listProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_LIST_REQUEST,
    });

    const { data } = await axios.get(`/api/products`);

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// get categorized products
export const listCategorizedProducts = (category) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_CATEGORY_LIST_REQUEST,
    });

    const { data } = await axios.get(`/api/products`);

    dispatch({
      type: PRODUCT_CATEGORY_LIST_SUCCESS,
      payload: data.filter((product) => product.category === category),
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_CATEGORY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// get for-him products
export const listForHimProducts = (category) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_FOR_HIM_LIST_REQUEST,
    });

    const { data } = await axios.get(`/api/products`);

    dispatch({
      type: PRODUCT_FOR_HIM_LIST_SUCCESS,
      payload: data.filter((product) => product.category === category),
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_FOR_HIM_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// get for-her products
export const listForHerProducts = (category) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_FOR_HER_LIST_REQUEST,
    });

    const { data } = await axios.get(`/api/products`);

    dispatch({
      type: PRODUCT_FOR_HER_LIST_SUCCESS,
      payload: data.filter((product) => product.category === category),
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_FOR_HER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// get unisex products
export const listUnisexProducts = (category) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_UNISEX_LIST_REQUEST,
    });

    const { data } = await axios.get(`/api/products`);

    dispatch({
      type: PRODUCT_UNISEX_LIST_SUCCESS,
      payload: data.filter((product) => product.category === category),
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_UNISEX_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// get for-home products
export const listForHomeProducts = (category) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_FOR_HOME_LIST_REQUEST,
    });

    const { data } = await axios.get(`/api/products`);

    dispatch({
      type: PRODUCT_FOR_HOME_LIST_SUCCESS,
      payload: data.filter((product) => product.category === category),
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_FOR_HOME_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// get skin-care products
export const listSkinCareProducts = (category) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_SKIN_CARE_LIST_REQUEST,
    });

    const { data } = await axios.get(`/api/products`);

    dispatch({
      type: PRODUCT_SKIN_CARE_LIST_SUCCESS,
      payload: data.filter((product) => product.category === category),
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_SKIN_CARE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// get best-sellers products
export const listProductsBest = () => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_BEST_LIST_REQUEST,
    });

    const { data } = await axios.get(`/api/products`);

    dispatch({
      type: PRODUCT_BEST_LIST_SUCCESS,
      payload: data.sort((a, b) => b.numPurchased - a.numPurchased),
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_BEST_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// get single product details
export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_DETAILS_REQUEST,
    });

    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
