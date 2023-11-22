import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FILTER_BY_PRICE,
  SET_SORT_BY,
  FILTER_BY_SALE,
  // FILTER_BY_DEFAULT,
  // FILTER_BY_PRICE_ASCENDING,
  // FILTER_BY_PRICE_DESCENDING,
} from "store/actions/products/types";

const initState = {
  products: [],
  filteredProducts: [],
  loading: false,
  error: null,
  sortBy: {id: 0, label: "Default"},
}

const filteredProductsByPrice = (products, priceValue) => {
  return products.filter(
    (product) =>
      product.price >= priceValue.min && product.price <= priceValue.max
  );
};

const sortProducts = (products, sortBy) => {
  console.log('sortBy', sortBy);
  if (sortBy.label === "Price Ascending") {
    return [...products].sort((a, b) => a.price - b.price);
  } else if (sortBy.label === "Price Descending") {
    return [...products].sort((a, b) => b.price - a.price);
  } else {
    return products;
  }
};

const productsReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return { ...state, loading: true };

    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, loading: false, products: action.payload };

    case FETCH_PRODUCTS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
        filteredProducts: sortProducts(state.filteredProducts, action.payload),
      };

    case FILTER_BY_PRICE:
      const filteredProducts = filteredProductsByPrice(
        state.products,
        action.payload
      );
      const sortedProducts = sortProducts(filteredProducts, state.sortBy);

      return {
        ...state,
        filteredProducts: sortedProducts,
      };

    case FILTER_BY_SALE:
      return {
        ...state,
        filteredProducts: [...state.products].filter(
          (item) => item.discont_price !== null
        ),
      };

    // case FILTER_BY_PRICE_ASCENDING:
    //   return {
    //     ...state,
    //     filteredProducts: [...state.products].sort((a, b) => {
    //       const priceA = a.discont_price !== null ? a.discont_price : a.price;
    //       const priceB = b.discont_price !== null ? b.discont_price : b.price;

    //       return priceA - priceB;
    //     }),
    //   };
    
    // case FILTER_BY_PRICE_DESCENDING:
    //   return {
    //     ...state,
    //     filteredProducts: [...state.products].sort((a, b) => {
    //       const priceA = a.discont_price !== null ? a.discont_price : a.price;
    //       const priceB = b.discont_price !== null ? b.discont_price : b.price;

    //       return priceB - priceA;
    //     }),
    //   };

    // case FILTER_BY_DEFAULT:
    //   return { ...state, filteredProducts: [] };

    default:
      return state;
  }
};

export default productsReducer;
