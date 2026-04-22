import { SHOP_LIST, SET_SHOP_LIST, SET_LOADING  } from "./constant.js";

export const shopList = () => {
  return {
    type: SHOP_LIST,
  };
};

export const setShopList = (data) => ({
  type: SET_SHOP_LIST,
  data,
});

export const setLoading = (loading) => ({
  type: SET_LOADING,
  loading,
});


