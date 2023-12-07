import React, { useEffect, useState } from "react";

function HomeDiscountProductsFetch({ categoryId, categoryName }) {
  const [discountProducts, setDiscountProducts] = useState([]);
  
  const backendURL =
    process.env.REACT_APP_BACKEND_URL || "https://garden-kcwi.onrender.com";

  useEffect(() => {
    fetch(`${backendURL}/categories/${categoryId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Data from the backend ===>>>", data);
        setDiscountProducts(data.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [backendURL, categoryId]);

  const saleProducts = discountProducts.filter(
    (product) => product.discont_price !== null
  );

  return (
    <div className="home-sale">
      <div className="container">
        <div className="home-sale__content">
          <div className="home-sale__content-title">
            <h2>
              {categoryName && `Sale Products - ${categoryName}`}
            </h2>
          </div>

          <div className="home-sale__products">
            {saleProducts.map((product) => (
              <div key={product.id} className="home-sale__product">
                <h6>{`-${((1 - product.discont_price / product.price) * 100).toFixed(0)}%`}</h6>
                <img
                  src={`${backendURL}${product.image}`}
                  alt={product.title}
                />
                <p>
                  <span>{`${product.price}$`}</span> &nbsp;&nbsp;
                  {`${product.discont_price}$`}
                </p>
                <h3>{product.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeDiscountProductsFetch;
