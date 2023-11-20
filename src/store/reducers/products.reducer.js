import { 
FETCH_PRODUCTS_FAILURE, 
FETCH_PRODUCTS_REQUEST, 
FETCH_PRODUCTS_SUCCESS,
FILTER_BY_DEFAULT,
FILTER_BY_PRICE_ASCENDING,
FILTER_BY_PRICE_DESCENDING 
} from "store/actions/products/types"

const initState = {
    products: [],
    filteredProducts:[],
    loading: false,
    error: null
}

const productsReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return {...state, loading: true}
        case FETCH_PRODUCTS_SUCCESS:
            return {...state, loading: false, products: action.payload} 
        case FETCH_PRODUCTS_FAILURE:
            return {...state, loading: false, error: action.payload}
        case FILTER_BY_PRICE_ASCENDING:
            return {...state, filteredProducts: [...state.products].sort((a, b) => {
                const priceA = a.discont_price !== null ? a.discont_price : a.price;
                const priceB = b.discont_price !== null ? b.discont_price : b.price;
          
                return priceA - priceB;
              })
            }
        case FILTER_BY_PRICE_DESCENDING: 
            return {...state, filteredProducts: [...state.products].sort((a, b) => {
                const priceA = a.discont_price !== null ? a.discont_price : a.price;
                const priceB = b.discont_price !== null ? b.discont_price : b.price;
          
                return priceB - priceA;
              })
            }
        case FILTER_BY_DEFAULT:
            return {...state, filteredProducts: []}
    
        default:
            return state;
    }
}

export default productsReducer;

// {discont_price ? discont_price : price}