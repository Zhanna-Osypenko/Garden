import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./toolkit/products";
import catalogReducer from "./toolkit/catalog";
import cartReducer from './toolkit/cart'

const store = configureStore({
  reducer: {
    products: productsReducer,
    catalog: catalogReducer,
    cart: cartReducer,
  },
});

export default store;

