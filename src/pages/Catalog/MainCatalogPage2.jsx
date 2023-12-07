import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { fetchCatalog } from "store/toolkit/catalog";

function MainCatalogPage2() {
  const navigate = useNavigate();
  const backendURL =
    process.env.REACT_APP_BACKEND_URL || "https://garden-kcwi.onrender.com";
  const dispatch = useDispatch();
  const { catalog, loading, error } = useSelector((state) => state.catalog);
  const { products } = useSelector((state) => state.products);

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
            <h2>Catalog</h2>
            <div className="tag">
              <span className="tag__item">
                <NavLink className="products-cards__title-link" to="/">
                  Home
                </NavLink>
              </span>
              /<span className="tag__item tag__item--active">Catalog</span>
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
