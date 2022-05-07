import {
  FAQ_LIST_REQUEST,
  FAQ_LIST_SUCCESS,
  FAQ_LIST_FAIL,
} from "../constants/faqConstants";

// all faqs
export const faqListReducer = (state = { faqs: [] }, action) => {
  switch (action.type) {
    case FAQ_LIST_REQUEST:
      return {
        loading: true,
        faqs: [],
      };
    case FAQ_LIST_SUCCESS:
      return {
        loading: false,
        faqs: action.payload,
      };
    case FAQ_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
