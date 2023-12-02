import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts, filterByPrice, filterBySale } from "store/toolkit/products";

import ProductCard from "../Products/components/ProductCard";
import { Dropdown } from "components";

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

const Sale = () => {
  const { loading, products, filteredProducts } = useSelector((state) => state.products);

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

  useEffect(() => {
    // dispatch(filterByPrice(priceValue, true));
    dispatch(filterByPrice({ ...priceValue, isSale: true }));
  }, [priceValue]);

  useEffect(() => {
    dispatch(filterBySale());
  }, []); 

  const handlerChangePrice = (e) => {
    setPriceValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // console.log("filteredProducts => ", filteredProducts);

  // const filterData = sortProducts(filteredProducts.length > 0 ? filteredProducts : products);

  const filterData = sortProducts(filteredProducts);

  console.log("333filterData sale => ", filterData);

  return (
    <section className="products">
      <div className="container">
        <div className="products__content">
          <h1>All Sales</h1>
          <div className="tag">
            <span className="tag__item">Home</span>/
            <span className="tag__item tag__item--active">All Sales</span>
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

export default Sale;
