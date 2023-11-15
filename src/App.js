import "./assets/styles/main.scss";
import React from "react";
import { Home, Layout, Products } from "./pages";
import ErrorPage from "pages/ErrorPage/ErrorPage";
import MainCatalogPage from "pages/Catalog/MainCatalogPage";

import { Routes, Route } from "react-router-dom";

const App = () => {
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
