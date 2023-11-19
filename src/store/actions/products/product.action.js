import {
FETCH_PRODUCTS_REQUEST, 
FETCH_PRODUCTS_SUCCESS, 
FETCH_PRODUCTS_FAILURE
} from './types';

export const fetchProductsRequest = () => ({
    type: FETCH_PRODUCTS_REQUEST
    
});

export const fetchProductsSuccess = (products) => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products
});

export const fetchProductsFailure = (error) => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: error
});

export const fetchProducts = () => {
    return async (dispatch) => {
        dispatch(fetchProductsRequest());
        // console.log('fetchProducts');
        // http://localhost:3333/products/all

        try {
            let response = await fetch('http://localhost:3333/products/all');
            let data = await response.json();
            console.log('data try ', data);
        } catch (error) {
            
        }
    }
};




