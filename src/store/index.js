import {applyMiddleware, combineReducers, createStore} from 'redux';
import productsReducer from './reducers/products.reducer';
import catalogReducer from './reducers/catalog.reducer';
import thunk from 'redux-thunk';

const rootReducers = {
    products: productsReducer,
    catalog: catalogReducer
}
const store = createStore(combineReducers(rootReducers), applyMiddleware(thunk));

export default store;