import React, { useEffect, useState } from "react";

function HomeSaleFetch({ categoryId }) {
  const [saleProducts, setSaleProducts] = useState([]);
  const [categoryTitle, setCategoryTitle] = useState("");
  const backendURL =
    process.env.REACT_APP_BACKEND_URL || "http://localhost:3333";

  useEffect(() => {
    fetch(`${backendURL}/categories/${categoryId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Data from the backend ===>>>", data);
        setSaleProducts(data.data);
        setCategoryTitle(data.category.title); 
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [backendURL, categoryId]);

  const discountedProducts = saleProducts.filter(
    (product) => product.discont_price !== null
  );

  return (
    <div className="home-sale">
      <div className="container">
        <div className="home-sale__content">
          <div className="home-sale__content-title">
            <h2>
              {categoryTitle && `Sale Products - ${categoryTitle}`}
            </h2>
            <button className="home-sale__content-btn">All Sale</button>
          </div>

          <div className="home-sale__products">
            {discountedProducts.map((product) => (
              <div key={product.id} className="home-sale__product">
                <h6>{`-${product.discont_price}%`}</h6>
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

export default HomeSaleFetch;
