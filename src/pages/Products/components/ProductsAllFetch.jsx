import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function ProductsAllFetch() {
  const [allProducts, setAllProducts] = useState([]);
  const backendURL = "http://localhost:3333";

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
