// shopDetailsActions.js
export const FETCH_SHOP_DETAILS_REQUEST = 'FETCH_SHOP_DETAILS_REQUEST';
export const FETCH_SHOP_DETAILS_SUCCESS = 'FETCH_SHOP_DETAILS_SUCCESS';
export const FETCH_SHOP_DETAILS_FAILURE = 'FETCH_SHOP_DETAILS_FAILURE';

export const fetchShopDetailsRequest = (shopId) => ({
  type: FETCH_SHOP_DETAILS_REQUEST,
  payload: shopId,
});

export const fetchShopDetailsSuccess = (shopDetails) => ({
  type: FETCH_SHOP_DETAILS_SUCCESS,
  payload: shopDetails,
});

export const fetchShopDetailsFailure = (error) => ({
  type: FETCH_SHOP_DETAILS_FAILURE,
  payload: error,
});
