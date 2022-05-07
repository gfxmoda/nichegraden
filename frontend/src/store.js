import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  productListReducer,
  productCategorizedListReducer,
  productBestListReducer,
  productDetailsReducer,
} from "./reducers/productReducers";

import { blogListReducer, blogDetailsReducer } from "./reducers/blogReducers";
import {
  eventListReducer,
  eventDetailsReducer,
} from "./reducers/eventReducers";

import { cartReducer } from "./reducers/cartReducers";
import { faqListReducer } from "./reducers/faqReducers";

import {
  userLoginReducer,
  userRegisterReducer,
  userActivateReducer,
  userDetailsReducer,
} from "./reducers/userReducers";

const reducer = combineReducers({
  productList: productListReducer,
  productCategorizedList: productCategorizedListReducer,
  productBestList: productBestListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userActivate: userActivateReducer,
  userDetails: userDetailsReducer,
  blogList: blogListReducer,
  blogDetails: blogDetailsReducer,
  eventList: eventListReducer,
  eventDetails: eventDetailsReducer,
  faqList: faqListReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const wishListFromStorage = localStorage.getItem("wishList")
  ? JSON.parse(localStorage.getItem("wishList"))
  : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    wishList: wishListFromStorage,
  },
  userLogin: {
    userInfo: userInfoFromStorage,
  },
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
