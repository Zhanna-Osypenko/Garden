import {applyMiddleware, createStore} from 'redux';
import productsReducer from './reducers/products.reducer';
import thunk from 'redux-thunk';

const store = createStore(productsReducer, applyMiddleware(thunk));

export default store;