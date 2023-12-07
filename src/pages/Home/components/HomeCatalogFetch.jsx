import React, { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";

function HomeCatalogFetch() {
  const navigate = useNavigate();
  const [catalogCart, setCatalogCart] = useState([]);
  const backendURL =
    process.env.REACT_APP_BACKEND_URL || "https://garden-kcwi.onrender.com";

  useEffect(() => {
    fetch(`${backendURL}/categories/all`)
      .then((response) => response.json())
      .then((data) => setCatalogCart(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [backendURL]);

  const handleCategoryClick = (categoryId) => {
    navigate(`/category/${categoryId}`);
  };

  return (
    <div className="home-catalog">
      <div className="container">
        <div className="home-catalog__content">
          <div className="home-catalog__title">
            <h2>Catalog</h2>
            <NavLink className="home-catalog__title-btn" to="/category/all">
              All Categories
            </NavLink>
          </div>
          <div className="home-catalog__carts">
            {catalogCart.map((category) => (
         
                <div
                  key={category.id}
                  className="home-catalog__cart"
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
  );
}

export default HomeCatalogFetch;
