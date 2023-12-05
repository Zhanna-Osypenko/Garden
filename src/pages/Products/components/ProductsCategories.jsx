import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import ProductCard from "./ProductCard";

const ProductsCategories = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3333/categories/${categoryId}`)
      .then((resp) => resp.json())
      .then((res) => setProducts(res))
      .finally(() => {
        setLoading(false);
        console.log("fetch prod", products);
      });
  }, []);

  console.log("Products ", categoryId, " => ", products);

  return (
    <div>
      <div className="container">
        <h2 className="products-cards__title">
          {products
            ? products.category.title
            : loading
            ? "Loading..."
            : "CategoryName not found"}
        </h2>

        <div className="tag">
          <span className="tag__item">
          <NavLink className="products-cards__title-link" to="/">
            Home
          </NavLink>
          {" "}/{" "}
            <NavLink className="products-cards__title-link" to="/category/all">
              <span className="tag__item">Catalog</span>
            </NavLink>
          </span>
          /
          <span className="tag__item tag__item--active">
            {products
              ? products.category.title
              : loading
              ? "Loading..."
              : "CategoryName not found"}
          </span>
        </div>

        <div className="products-cards__list">
          {!loading
            ? products &&
              products.data &&
              products.data.map((product) => (
                <Link to={`/products/${product.id}`}>
                  <ProductCard key={product.id} product={product} />
                </Link>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};

export default ProductsCategories;
