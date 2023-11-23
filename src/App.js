import "./assets/styles/main.scss";
import React from "react";
import { Home, Layout, Products } from "./pages";
import { Sale } from "./pages/Sale";
import ErrorPage from "pages/ErrorPage/ErrorPage";
import MainCatalogPage from "pages/Catalog/MainCatalogPage";
import MainCatalogPage2 from "pages/Catalog/MainCatalogPage2";
import ProductsByCategory from 'pages/Products/components/ProductsByCategory';
import { Routes, Route } from "react-router-dom";



const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="/category2" element={<MainCatalogPage />} /> */}
          <Route path="/category/all" element={<MainCatalogPage2 />} />
          <Route path="/category/:categoryId" element={<ProductsByCategory />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sales" end element={<Sale />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
