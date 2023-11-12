import React, { useState, useEffect } from "react";
import Nav from "pages/Home/components/Nav";
import Footer from "pages/Home/components/Footer";

function MainCatalogPage() {
  const [catalogCart, setCatalogCart] = useState([]);
  const backendURL =
    process.env.REACT_APP_BACKEND_URL || "http://localhost:3333";

  useEffect(() => {
    fetch(`${backendURL}/categories/all`)
      .then((response) => response.json())
      .then((data) => setCatalogCart(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [backendURL]);

  return (
    <>
      <Nav />
      <div className="home-catalog">
        <div className="container">
          <div className="home-catalog__content">
            <div className="home-catalog__title">
              <h2>Catalog</h2>
              <button className="home-catalog__title-btn">
                All Categories
              </button>
            </div>
            <div className="home-catalog__carts">
              {catalogCart.map((category) => (
                <div key={category.id} className="home-catalog__cart">
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

      <Footer />
    </>
  );
}

export default MainCatalogPage;
