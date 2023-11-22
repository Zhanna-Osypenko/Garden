import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FILTER_BY_PRICE,
  SET_SORT_BY,
  FILTER_BY_SALE,
//   FILTER_BY_PRICE_DESCENDING,
//   FILTER_BY_PRICE_ASCENDING,
//   FILTER_BY_DEFAULT,
} from "./types";

export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
});

export const setSortBy = (sortBy) => ({
  type: SET_SORT_BY,
  payload: sortBy,
});

export const filterByPrice = (price) => ({
  type: FILTER_BY_PRICE,
  payload: price,
});

export const filterBySale = () => ({
  type: FILTER_BY_SALE,
});

// export const filterByAscending = () => ({
//   type: FILTER_BY_PRICE_ASCENDING,
// });

// export const filterByDescending = () => ({
//   type: FILTER_BY_PRICE_DESCENDING,
// });

// export const filterByDefault = () => ({
//   type: FILTER_BY_DEFAULT,
// });

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(fetchProductsRequest());
    console.log("fetchProducts in action");

    try {
      let response = await fetch("http://localhost:3333/products/all");
      let data = await response.json();
      console.log("data try => ", data);

      dispatch(fetchProductsSuccess(data));
    } catch (error) {
      dispatch(fetchProductsFailure("Products not found!"));
    }
  };
};
