import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomeDiscountProductsFetch2() {
  const [discountProducts, setDiscountProducts] = useState([]);

  const backendURL = "http://localhost:3333";

  useEffect(() => {
    fetch(`${backendURL}/products/all`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Data from the backend222 ===>>>", data);
        setDiscountProducts(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const saleProducts = discountProducts.filter(
    (product) => product.discont_price !== null
  );

  return (
    <div className="home-sale">
      <div className="container">
        <div className="home-sale__content">
          <div className="home-sale__content-title">
            <h2>Sale Products</h2>
          </div>

          <div className="home-sale__products">
            {saleProducts.map((product) => (
              <Link to={`/products/${product.id}`}>
                <div key={product.id} className="home-sale__product">
                  <h6>{`-${(
                    (1 - product.discont_price / product.price) *
                    100
                  ).toFixed(0)}%`}</h6>
                  <img
                    src={`${backendURL}${product.image}`}
                    alt={product.title}
                  />
                  <p>
                    <span>{`${product.price}$`}</span> &nbsp;&nbsp;
                    {`${product.discont_price}$`}
                  </p>
                  <p href="#" className="home-sale__product-link">
                    {product.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeDiscountProductsFetch2;
