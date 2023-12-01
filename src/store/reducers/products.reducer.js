import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FILTER_BY_PRICE,
  FILTER_BY_SALE,
  FETCH_PRODUCTS_BY_CATEGORY,
  FETCH_PRODUCT_BY_ID_SUCCESS,
} from "store/actions/products/types";

const initState = {
  products: [],
  filteredProducts: [],
  loading: false,
  error: null,
  currentCategoryId: null,
};

const filteredProductsByPrice = (products, priceValue) => {
  return products.filter(
    (product) =>
      product.price >= priceValue.min && product.price <= priceValue.max
  );
};

const productsReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return { ...state, loading: true };

    case FETCH_PRODUCTS_SUCCESS:
      console.log("Success Fetch Products :", action.payload);
      return { ...state, loading: false, products: action.payload };

    case FETCH_PRODUCTS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case FILTER_BY_PRICE:
      console.log("FILTER_BY_PRICE payload:", action.payload);

      const filteredProducts = filteredProductsByPrice(
        state.products,
        action.payload.price
      );

      return {
        ...state,
        filteredProducts: action.payload.isSale
          ? filteredProducts.filter((item) => item.discont_price !== null)
          : filteredProducts,
      };
      
      
  case FILTER_BY_SALE:
    console.log('checkbox => ', action.payload);
    return {
      ...state,
      filteredProducts: action.payload
        ? [...state.products].filter((item) => item.discont_price !== null)
        : state.products,
    };


    case FETCH_PRODUCTS_BY_CATEGORY:
      console.log("categoryId in FETCH_PRODUCTS_BY_CATEGORY: ", action.payload);
      return {
        ...state,
        currentCategoryId: action.payload.category.id, 
        filteredProducts: action.payload.data, 
      };

      case FETCH_PRODUCT_BY_ID_SUCCESS:
      return { ...state, loading: false, product: action.payload };
    
    default:
      return state;
  }
};

export default productsReducer;
