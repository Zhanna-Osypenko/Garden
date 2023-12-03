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

