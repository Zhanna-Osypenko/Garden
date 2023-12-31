import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Dropdown } from "components";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts, filterByPrice, filterBySale } from "store/toolkit/products";


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
];

const Products = () => {
  const { loading, products, error, filteredProducts } = useSelector(
    (state) => state.products
  );
  const { isSale } = useSelector((state) => state.products);

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const dispatch = useDispatch();

  const sortProducts = (products) => {
    console.log("sortBy", selectedOption);
    if (selectedOption.label === "Price Ascending") {
      return [...products].sort((a, b) => a.price - b.price);
    } else if (selectedOption.label === "Price Descending") {
      return [...products].sort((a, b) => b.price - a.price);
    } else {
      return products;
    }
  };

  let [priceValue, setPriceValue] = useState({
    min: "0",
    max: "99999",
  });

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log("Products:", products);
  console.log("Error:", error);

  useEffect(() => {
    dispatch(filterByPrice(priceValue));
  }, [priceValue]);

  const handlerChangePrice = (e) => {
    setPriceValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };


  const handleDiscountCheckboxChange = (event) => {
    console.log('event checkbox =>', event.target.checked);
    dispatch(filterBySale({
      isSale: event.target.checked,
      priceValue,
    }));
  };
  
  console.log("filteredProducts => ", filteredProducts);

  const filterData = sortProducts(filteredProducts.length > 0 ? filteredProducts : products);
  
  console.log("data in Products", filterData);

  return (
    <section className="products">
      <div className="container">
        <div className="products__content">
          <h1>All products</h1>

          <div className="tag">
            <span className="tag__item">
            <NavLink className="products-cards__title-link" to="/">
            Home
          </NavLink>
              </span>/
            <span className="tag__item tag__item--active">All products</span>
          </div>

          <div className="products__filters">
            <div className="products__filters-price">
              <h4>Price</h4>
              <div className="price-box">
                <input
                  type="text"
                  name="min"
                  className="price__item"
                  placeholder="from price"
                  value={priceValue?.min}
                  onChange={handlerChangePrice}
                />
                <input
                  type="text"
                  name="max"
                  className="price__item"
                  placeholder="to price"
                  value={priceValue?.max}
                  onChange={handlerChangePrice}
                />
              </div>
            </div>

            <div className="products__filters-discount">
              <label htmlFor="discountCheckbox">Discounted items</label>
              <input
                type="checkbox"
                id="discountCheckbox"
                onChange={handleDiscountCheckboxChange}
              />
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
              : filterData &&
                filterData.map((product) => (
                  <Link to={`/products/${product.id}`}>
                    <ProductCard key={product.id} product={product} />
                  </Link>
                  
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
