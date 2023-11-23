import {
    FETCH_CATALOG_REQUEST,
    FETCH_CATALOG_SUCCESS,
    FETCH_CATALOG_FAILURE,
  } from "./type";
  
  export const fetchCatalogRequest = () => ({
    type: FETCH_CATALOG_REQUEST,
  });
  
  export const fetchCatalogSuccess = (catalog) => ({
    type: FETCH_CATALOG_SUCCESS,
    payload: catalog,
  });
  
  export const fetchCatalogFailure = (error) => ({
    type: FETCH_CATALOG_FAILURE,
    payload: error,
  });


  
  // export const fetchCatalog = () => {
  //   return async (dispatch) => {
  //     dispatch(fetchCatalogRequest());
  //     console.log("fetchCatalog in action");
  
  //     try {
  //       let response = await fetch("http://localhost:3333/categories/all");
  //       let data = await response.json();
  //       console.log("data try categories/all => ", data);
  
  //       dispatch(fetchCatalogSuccess(data));
  //     } catch (error) {
  //       dispatch(fetchCatalogFailure("Catalog not found!"));
  //     }
  //   };
  // };
  

  export const fetchCatalog = () => {
    return async (dispatch) => {
      dispatch(fetchCatalogRequest());
      console.log("fetchCatalog in action");
  
      try {
        let response = await fetch("http://localhost:3333/categories/all");
        let data = await response.json();
        console.log("data try categories/all => ", data);
  
        dispatch(fetchCatalogSuccess(data));
       
      } catch (error) {
        dispatch(fetchCatalogFailure("Catalog not found!"));
      }
    };
  };