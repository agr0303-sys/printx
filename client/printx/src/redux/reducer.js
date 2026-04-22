// reducer.js
import { SET_SHOP_LIST, SET_LOADING } from "./constant.js";

const initialState = {
  shops: [],
  loading: false,
};

const shopData = (state = initialState, action) => {
  switch (action.type) {
    case SET_SHOP_LIST:
      return {
        ...state,
        shops: action.data,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
};

export default shopData;