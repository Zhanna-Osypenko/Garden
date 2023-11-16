import React from "react";

function ProductCard({ product, backendURL }) {
    // const discountSpanStyle = {
    //     textDecoration: hasDiscount ? "line-through" : "none",
    //   };
    
  const hasDiscount = product.discont_price !== null;

  return (
    <div className="product-card">
      <img src={`${backendURL}${product.image}`} alt={product.title} />
      <h3>
        <a href="#" className="product-link">
          {product.title}
        </a>
      </h3>
      {hasDiscount && (
        <h6>{`-${((1 - product.discont_price / product.price) * 100).toFixed(0)}%`}</h6>
      )}
      <p>
        <span style={{textDecoration: hasDiscount ? "line-through" : "none",
          }}>{`${product.price}$`}</span>
        {hasDiscount && ` ${product.discont_price}$`}
      </p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductCard;


