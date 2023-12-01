import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { fetchCatalog } from "store/actions/catalog/catalog.action";
import { fetchCatalog } from "store/toolkit/catalog";
import { fetchProductsByCategory } from "store/actions/products/product.action";

function MainCatalogPage2() {
  const navigate = useNavigate();
  const backendURL =
    process.env.REACT_APP_BACKEND_URL || "http://localhost:3333";
  const dispatch = useDispatch();
  const { catalog, loading, error } = useSelector((state) => state.catalog);

  useEffect(() => {
    dispatch(fetchCatalog());
  }, []);
  
  console.log("catalog =>", catalog);

  const handleCategoryClick = (categoryId) => {
    navigate(`/category/${categoryId}`);
  };
  

  return (
    <>
      <div className="home-catalog">
        <div className="container">
          <div className="home-catalog__content">
            <div className="home-catalog__title">
              <h2>Catalog</h2>
            </div>
            <div className="main-catalog__carts">
              {catalog.map((category) => (
                <div
                  key={category.id}
                  className="main-catalog__cart"
                  onClick={() => handleCategoryClick(category.id)}
                >
                  <img
                    src={`${backendURL}${category.image}`}
                    alt={category.title}
                  />
                  <h3>{category.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainCatalogPage2;
