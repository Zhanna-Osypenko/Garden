import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function ProductsAllFetch() {
  const [allProducts, setAllProducts] = useState([]);
  const backendURL = "http://localhost:3333";

  useEffect(() => {
    fetch(`${backendURL}/products/all`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Data from the backend ===>>>", data);
        setAllProducts(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="products-cards__list">
      {allProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          backendURL={backendURL}
        />
      ))}
    </div>
  );
}

export default ProductsAllFetch;
