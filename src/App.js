import "./assets/styles/main.scss";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Layout, Products, Cart } from "./pages";
import { Sale } from "./pages/Sale";
import ErrorPage from "pages/ErrorPage/ErrorPage";
import MainCatalogPage2 from "pages/Catalog/MainCatalogPage2";
import ProductsByCategory from 'pages/Products/components/ProductsByCategory';
import CartItem from "pages/Cart/CartItem";
import CartProductDetails  from "pages/Cart/CartProductDetails";
import ProductsCategories from "pages/Products/components/ProductsCategories";




const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/category/all" end element={<MainCatalogPage2 />} />
          <Route path="/category/:categoryId" end element={<ProductsCategories />} />
          <Route path="/products" end element={<Products />} />
          <Route path="/sales" end element={<Sale />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cartitem" end element={<CartItem />} />
          <Route path="/products/:id" end element={<CartProductDetails />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
