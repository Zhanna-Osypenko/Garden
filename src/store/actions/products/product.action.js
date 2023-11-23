import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FILTER_BY_PRICE,
  SET_SORT_BY,
  FILTER_BY_SALE,
  FETCH_PRODUCTS_BY_CATEGORY,
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

export const filterByPrice = (price, isSale) => ({
  type: FILTER_BY_PRICE,
  payload: { price, isSale },
});

export const filterBySale = () => ({
  type: FILTER_BY_SALE,
});

// export const fetchProductsByCategory = (categoryId) => ({
//   type: FETCH_PRODUCTS_BY_CATEGORY,
//   payload: categoryId,
// });

export const fetchProductsByCategory = (categoryId) => {
  return async (dispatch) => {
    dispatch(fetchProductsRequest());
    console.log("fetchProductsByCategory in action");

    try {
      let response = await fetch(`http://localhost:3333/categories/${categoryId}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      let data = await response.json();
      console.log("data try categories/:categoryId => ", data);

      dispatch(fetchProductsSuccess(data.data)); // Используйте data.data для передачи массива продуктов
    } catch (error) {
      console.error("Error fetching products by category:", error.message);
      dispatch(fetchProductsFailure("Products not found!"));
    }
  };
};





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
