import "./assets/styles/main.scss";
import React from "react";
import { Home, Layout, Products } from "./pages";
import { Sale } from "./pages/Sale";
import ErrorPage from "pages/ErrorPage/ErrorPage";
import MainCatalogPage from "pages/Catalog/MainCatalogPage";
import MainCatalogPage2 from "pages/Catalog/MainCatalogPage2";
import ProductsByCategory from 'pages/Products/components/ProductsByCategory';
import { Routes, Route } from "react-router-dom";
import CartItem from "pages/Cart/CartItem";
import CartProducts from "pages/Cart/CartProducts";



const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="/category2" element={<MainCatalogPage />} /> */}
          <Route path="/category/all" end element={<MainCatalogPage2 />} />
          <Route path="/category/:categoryId" end element={<ProductsByCategory />} />
          <Route path="/products" end element={<Products />} />
          <Route path="/sales" end element={<Sale />} />
          <Route path="/cartitem" end element={<CartItem />} />
          <Route path="/cartproducts" end element={<CartProducts />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
