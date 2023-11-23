import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProductsByCategory } from "store/actions/products/product.action";
import { fetchCatalog } from "store/actions/catalog/catalog.action";
import ProductCard from "./ProductCard";

const ProductsByCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const { loading: productsLoading, products, error: productsError, filteredProducts } = useSelector((state) => state.products);
  const { loading: catalogLoading, catalog, error: catalogError, currentCategoryId, categories } = useSelector((state) => state.catalog);

  useEffect(() => {
    console.log("fetchCatalog effect");
    dispatch(fetchCatalog());
  }, [dispatch]);

  useEffect(() => {
    console.log("fetchProductsByCategory effect");
    if (categoryId && !catalogLoading && !catalogError) {
      dispatch(fetchProductsByCategory(categoryId));
    } else {
      if (categoryId !== undefined){
        navigate("*");
      }
      
    }
  }, [dispatch, categoryId, catalogLoading, catalogError, navigate]);

  console.log("filteredProducts: ", filteredProducts);
  console.log("Products: ", products);

  const currentCategory = categories ? categories.find(category => category.id === currentCategoryId) : null;

  return (
    <div className="products-cards__list">
      <h2>{currentCategory ? currentCategory.title : (catalogLoading ? "Loading..." : "Category not found")}</h2>
      {(productsLoading || catalogLoading) && <p>Loading...</p>}
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};


// const ProductsByCategory = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { categoryId } = useParams();
//   const { loading, products, error, filteredProducts } = useSelector((state) => state.products);
//   const { currentCategoryId, categories } = useSelector((state) => state.catalog);

//   useEffect(() => {
//     console.log('Current Category ID:', currentCategoryId);
//     if (categoryId) {

//       dispatch(fetchProductsByCategory(categoryId));
//     } else {
//       navigate("*");
//     }
//   }, [dispatch, categoryId, navigate]);

//   console.log("filteredProducts: ", filteredProducts);
//   console.log("Products: ", products);

//   const currentCategory = categories ? categories.find(category => category.id === currentCategoryId) : null;

//   useEffect(() => {
//     console.log("currentCategory:", currentCategory);
//   }, [currentCategory]);
  

//   return (
//     <div className="products-cards__list">
//       <h2>{currentCategory ? currentCategory.title : "Loading..."}</h2>
//       {loading && <p>Loading...</p>}
//       {products.map((product) => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </div>
//   );
// };

export default ProductsByCategory;
