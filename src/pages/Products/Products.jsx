import React from "react";
import ProductsAllFetch from "./components/ProductsAllFetch";

const Products = () => {
  return (
    <section className="products">
      <div className="container">
        <div className="products__content">
          <h1>All products</h1>

          <div className="tag">
            <span className="tag__item">Home</span>/
            <span className="tag__item tag__item--active">All products</span>
          </div>

          <div className="products__filters">
            <div className="products__filters-price">
              <h4>Price</h4>
              <div className="price-box">
                <input className="price__item" type="text" />
                <input className="price__item" type="text" />
              </div>
            </div>

            <div className="products__filters-discount">
              <label htmlFor="discountCheckbox">Discounted items</label>
              <input type="checkbox" id="discountCheckbox" />
            </div>

            <div className="products__filters-sorted">
              <h4>Sort by: </h4>
              <div className="dropdown">
                <div>
                  <span>Default</span>
                </div>
                <div className="dropdown__content">
                  <ul>
                    <li>Price</li>
                    <li>Sale</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <ProductsAllFetch />
        </div>
      </div>
    </section>
  );
};

export default Products;
