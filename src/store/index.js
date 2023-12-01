// ================= Redux Toolkit ===================
// import { configureStore } from "@reduxjs/toolkit";
// import  products  from "./toolkit/products";
// import catalog from "./toolkit/catalog";

// const store = configureStore({
//     reducer: {
//         products,
//         catalog
//     }
// })

// export default store;

// ================= Redux ===============================


// import {applyMiddleware, combineReducers, createStore} from 'redux';
// import productsReducer from './reducers/products.reducer';
// import catalogReducer from './reducers/catalog.reducer';
// import thunk from 'redux-thunk';


// const rootReducers = {
//     products: productsReducer,
//     catalog: catalogReducer
// }
// const store = createStore(combineReducers(rootReducers), applyMiddleware(thunk));

// export default store;

// ============ GPT Toolkit ============
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./toolkit/products";
import catalogReducer from "./toolkit/catalog";

const store = configureStore({
  reducer: {
    products: productsReducer,
    catalog: catalogReducer,
  },
});

export default store;

