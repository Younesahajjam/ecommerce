import {
    FIND_PRODUCTS_FAILURE,
    FIND_PRODUCTS_REQUEST,
    FIND_PRODUCTS_SUCCESS,
    FIND_PRODUCT_BY_ID_FAILURE,
    FIND_PRODUCT_BY_ID_REQUEST,
    FIND_PRODUCT_BY_ID_SUCCESS
  } from "./ActionType";
  
  const initialState = {
    products: [],
    product: null,
    loading: false,
    error: null
  };
  
  export const customerProductReducer = (state = initialState, action) => {
    switch (action.type) {
      case FIND_PRODUCTS_REQUEST:
      case FIND_PRODUCT_BY_ID_REQUEST:
        return { ...state, loading: true, error: null,
           };
  
      case FIND_PRODUCTS_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
          products: action.payload,
          product: null // Reset product when products are fetched
        };
  
      case FIND_PRODUCT_BY_ID_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
          product: action.payload,
          products: [] // Reset products when a single product is fetched by ID
        };
  
      case FIND_PRODUCTS_FAILURE:
      case FIND_PRODUCT_BY_ID_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  