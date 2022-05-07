import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_EDIT_ITEM_QTY,
  WISHLIST_ADD_ITEM,
  WISHLIST_REMOVE_ITEM,
} from "../constants/cartConstants";

export const cartReducer = (
  state = { cartItems: [], wishList: [] },
  action
) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    case CART_EDIT_ITEM_QTY:
      const { id, newQty } = action.payload;

      const carItemsFromState = state.cartItems;
      carItemsFromState.forEach((item) => {
        if (item.product === id) {
          item.qty = newQty;
        }
      });

      return {
        ...state,
        cartItems: carItemsFromState,
      };

    case WISHLIST_ADD_ITEM:
      const wItem = action.payload;
      const wExistItem = state.wishList.find(
        (x) => x.product === wItem.product
      );
      if (wExistItem) {
        return {
          ...state,
          wishList: state.wishList.map((x) =>
            x.product === wExistItem.product ? wItem : x
          ),
        };
      } else {
        return {
          ...state,
          wishList: [...state.wishList, wItem],
        };
      }

    case WISHLIST_REMOVE_ITEM:
      return {
        ...state,
        wishList: state.wishList.filter((x) => x.product !== action.payload),
      };
    default:
      return state;
  }
};
