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

// all products
export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    case PRODUCT_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// categorized
export const productCategorizedListReducer = (
  state = { productsCategorized: [] },
  action
) => {
  switch (action.type) {
    case PRODUCT_CATEGORY_LIST_REQUEST:
      return {
        loading: true,
        productsCategorized: [],
      };
    case PRODUCT_CATEGORY_LIST_SUCCESS:
      return {
        loading: false,
        productsCategorized: action.payload,
      };
    case PRODUCT_CATEGORY_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// for-him
export const productForHimListReducer = (
  state = { productsForHim: [] },
  action
) => {
  switch (action.type) {
    case PRODUCT_FOR_HIM_LIST_REQUEST:
      return {
        loading: true,
        productsForHim: [],
      };
    case PRODUCT_FOR_HIM_LIST_SUCCESS:
      return {
        loading: false,
        productsForHim: action.payload,
      };
    case PRODUCT_FOR_HIM_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// for-her
export const productForHerListReducer = (
  state = { productsForHer: [] },
  action
) => {
  switch (action.type) {
    case PRODUCT_FOR_HER_LIST_REQUEST:
      return {
        loading: true,
        productsForHer: [],
      };
    case PRODUCT_FOR_HER_LIST_SUCCESS:
      return {
        loading: false,
        productsForHer: action.payload,
      };
    case PRODUCT_FOR_HER_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// unisex
export const productUnisexListReducer = (
  state = { productsUnisex: [] },
  action
) => {
  switch (action.type) {
    case PRODUCT_UNISEX_LIST_REQUEST:
      return {
        loading: true,
        productsUnisex: [],
      };
    case PRODUCT_UNISEX_LIST_SUCCESS:
      return {
        loading: false,
        productsUnisex: action.payload,
      };
    case PRODUCT_UNISEX_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// for-home
export const productForHomeListReducer = (
  state = { productsForHome: [] },
  action
) => {
  switch (action.type) {
    case PRODUCT_FOR_HOME_LIST_REQUEST:
      return {
        loading: true,
        productsForHome: [],
      };
    case PRODUCT_FOR_HOME_LIST_SUCCESS:
      return {
        loading: false,
        productsForHome: action.payload,
      };
    case PRODUCT_FOR_HOME_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// skin-care
export const productSkinCareListReducer = (
  state = { productsSkinCare: [] },
  action
) => {
  switch (action.type) {
    case PRODUCT_SKIN_CARE_LIST_REQUEST:
      return {
        loading: true,
        productsSkinCare: [],
      };
    case PRODUCT_SKIN_CARE_LIST_SUCCESS:
      return {
        loading: false,
        productsSkinCare: action.payload,
      };
    case PRODUCT_SKIN_CARE_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// best-sellers
export const productBestListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_BEST_LIST_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case PRODUCT_BEST_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    case PRODUCT_BEST_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// single product details
export const productDetailsReducer = (
  state = {
    product: {
      mainAccords: [],
      keyNotes: [],
      size: [],
      images: [],
      reviews: [],
    },
  },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
