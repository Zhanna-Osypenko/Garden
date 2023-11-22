import "./assets/styles/main.scss";
import React, { useEffect } from "react";
import { Home, Layout, Products } from "./pages";
import { Sale } from "./pages/Sale";
import ErrorPage from "pages/ErrorPage/ErrorPage";
import MainCatalogPage from "pages/Catalog/MainCatalogPage";

import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "store/actions/products/product.action";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<MainCatalogPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sales" element={<Sale />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
