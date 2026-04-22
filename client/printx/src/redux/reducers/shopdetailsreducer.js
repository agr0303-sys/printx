// shopDetailsReducer.js
import {
    FETCH_SHOP_DETAILS_REQUEST,
    FETCH_SHOP_DETAILS_SUCCESS,
    FETCH_SHOP_DETAILS_FAILURE,
  } from '../action/shopdetailsaction';
  
  const initialState = {
    shopDetails: null,
    loading: false,
    error: null,
  };
  
  const shopDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_SHOP_DETAILS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_SHOP_DETAILS_SUCCESS:
        console.log("action paylod in success "+action.payload)
        return {
      
          ...state,
          shopDetails: action.payload,
          loading: false,
          error: null,
        };
      case FETCH_SHOP_DETAILS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default shopDetailsReducer;
  