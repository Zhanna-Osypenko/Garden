import React from "react";
import ProductsAllFetch from "./components/ProductsAllFetch";
import { Dropdown } from "components";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  filterByAscending,
  filterByDescending,
  filterByDefault,
} from "store/actions/products/product.action";

import ProductCard from "./components/ProductCard";

const options = [
  {
    id: 0,
    label: "Default",
  },
  {
    id: 1,
    label: "Price Ascending",
  },
  {
    id: 2,
    label: "Price Descending",
  },
  {
    id: 3,
    label: "Sale",
  },
];

const Products = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const dispatch = useDispatch();
  const { loading, products, error, filteredProducts } = useSelector(
    (state) => state
  );

  useEffect(() => {
    dispatch(fetchProducts());
    console.log("useEffect loading&products => ", loading, products);
  }, []);

  console.log("products!!! =>", products);
  console.log("error!!! =>", error);

  useEffect(() => {
    if (selectedOption.label === "Price Ascending") {
      dispatch(filterByAscending());
    } else if (selectedOption.label === "Price Descending") {
      dispatch(filterByDescending());
    } else {
      dispatch(filterByDefault());
    }
  }, [selectedOption]);

  console.log('filteredProducts => ', filteredProducts);

  const filterData = filteredProducts.length > 0 ? filteredProducts : products;

  console.log("data in Products", filterData);

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

              <Dropdown
                options={options}
                defaultLabel="Default"
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
              />
            </div>
          </div>

          <div className="products-cards__list">
            {loading
              ? "Loading ..."
              : filterData&&filterData.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
            }
          </div>

          {/* <ProductsAllFetch /> */}
        </div>
      </div>
    </section>
  );
};

export default Products;
