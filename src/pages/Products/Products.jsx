import React from "react";

const Products = () => {
  return (
    <section className="products">
      <div className="container">
        <div className="products__content">
          <h1>All products</h1>

          <div className="products__page-pointer">
            <span>Home</span>/<span>All products</span>
          </div>

          <div className="products__filters">
            <div className="products__filters-price">
              <h4>Price</h4>
            </div>
            <div  className="products__filters-discount">
              <h4>Discounted items</h4>
            </div>
            <div  className="products__filters-sorted">
              <h4>Sort by</h4>
              <div>
                <div><span>default</span></div>
                <div><span>Price</span></div>
                <div><span>Sale</span></div>
              </div>
            </div>
          </div>

          <div className="products__cards">

          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
