import "./assets/styles/main.scss";
import React, { useEffect } from "react";
import { Home, Layout, Products } from "./pages";
import ErrorPage from "pages/ErrorPage/ErrorPage";
import MainCatalogPage from "pages/Catalog/MainCatalogPage";

import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "store/actions/products/product.action";


const App = () => {
  // const dispatch = useDispatch();
  // const {loading} = useSelector(state => state);

  // useEffect(() => {
  //   dispatch(fetchProducts())
  // }, [])

  // console.log('loading => ',loading);

  return (
    <>
      

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<MainCatalogPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
