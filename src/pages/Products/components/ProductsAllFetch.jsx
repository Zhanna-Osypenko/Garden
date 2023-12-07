import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function ProductsAllFetch() {
  const [allProducts, setAllProducts] = useState([]);
  const backendURL = "https://garden-kcwi.onrender.com";

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
