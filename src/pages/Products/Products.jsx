import React from "react";
import ProductsAllFetch from "./components/ProductsAllFetch";
import { Dropdown } from "components";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  filterByPrice,
  setSortBy,
  filterBySale,
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
  const { loading, products, error, filteredProducts } = useSelector(state => state);

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const dispatch = useDispatch();

  let [priceValue, setPriceValue] = useState({
    min: '0',
    max: '99999'
  })

  useEffect(() => {
    dispatch(fetchProducts());
    // console.log("useEffect loading&products => ", loading, products);
  }, []);

  useEffect(() => {
    dispatch(filterByPrice(priceValue))
  }, [priceValue]);

  useEffect(() => {
    dispatch(setSortBy(selectedOption));
  }, [selectedOption]);

  const handlerChangePrice = (e) => {
    setPriceValue(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
}

  // useEffect(() => {
  //   if (selectedOption.label === "Price Ascending") {
  //     dispatch(filterByAscending());
  //   } else if (selectedOption.label === "Price Descending") {
  //     dispatch(filterByDescending());
  //   } else if (selectedOption.label === "Sale") {
  //     dispatch(filterBySale());
  //   } else {
  //     dispatch(filterByDefault());
  //   }
  // }, [selectedOption]);

  console.log("filteredProducts => ", filteredProducts);

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
                <input 
                type="text" 
                name='min'
                className="price__item" 
                placeholder="from price"
                value={priceValue?.min}
                onChange={handlerChangePrice}
                />
                <input 
                type="text" 
                name='max'
                className="price__item" 
                placeholder="to price"
                value={priceValue?.max}
                onChange={handlerChangePrice} 
                />
                
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
              : filterData &&
                filterData.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Products;
