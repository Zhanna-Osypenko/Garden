import React, { useState, useEffect } from "react";

function MainCatalogPage() {
  const [catalogCart, setCatalogCart] = useState([]);
  const backendURL =
    process.env.REACT_APP_BACKEND_URL || "https://garden-kcwi.onrender.com";

  useEffect(() => {
    fetch(`${backendURL}/categories/all`)
      .then((response) => response.json())
      .then((data) => setCatalogCart(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [backendURL]);

  return (
    <>
      <div className="home-catalog">
        <div className="container">
          <div className="home-catalog__content">
            <div className="home-catalog__title">
              <h2>Catalog</h2>
            </div>
            <div className="main-catalog__carts">
              {catalogCart.map((category) => (
                <div key={category.id} className="main-catalog__cart">
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

export default MainCatalogPage;
