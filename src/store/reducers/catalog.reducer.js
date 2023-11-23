import {
  FETCH_CATALOG_REQUEST,
  FETCH_CATALOG_SUCCESS,
  FETCH_CATALOG_FAILURE,
} from "store/actions/catalog/type";

const initState = {
  catalog: [],
  loading: false,
  error: null,
  currentCategoryId: null,
};

const catalogReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_CATALOG_REQUEST:
      return { ...state, loading: true };

    case FETCH_CATALOG_SUCCESS:
      console.log("Current Category ID after fetchCatalogSuccess:", action.payload.currentCategoryId);
      return { ...state, loading: false, catalog: action.payload };

    case FETCH_CATALOG_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default catalogReducer;
