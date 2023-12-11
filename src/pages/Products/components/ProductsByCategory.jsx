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
  console.log('=> useParams categoryId=>',categoryId);
  const { loading: productsLoading, products, error: productsError, filteredProducts } = useSelector((state) => state.products);
  const { loading: catalogLoading, catalog, error: catalogError, currentCategoryId, categories } = useSelector((state) => state.catalog);

  
  useEffect(() => {
    console.log("11 fetchCatalog effect");
    dispatch(fetchCatalog());
  }, [dispatch]);

  useEffect(() => {
    console.log("22 fetchProductsByCategory effect");

    if (categoryId && !catalogLoading && !catalogError) {
      dispatch(fetchProductsByCategory(categoryId));
    } else {
      if (categoryId) {
        console.log("33 Navigating to /category/all");
        navigate(`/category/${categoryId}`);
      }
    }
  }, [dispatch, categoryId, catalogLoading, catalogError, navigate]);

  console.log("44 catalogLoading:", catalogLoading);
  console.log("55 catalogError:", catalogError);
  console.log("66 catalog:", catalog);

  console.log("77 filteredProducts: ", filteredProducts);
  console.log("88 Products: ", products);
  console.log('000 categories', categories);

  // const currentCategory = categories ? categories.find(category => category.id === currentCategoryId) : null;

  // const currentCategory = catalog ? catalog.find(category =>  products.categoryId === category.id) : null;

  const currentCategory =  catalog ? catalog.find(category => category.id == categoryId) : null;

// const categoryName = currentCategory ? currentCategory.title : "Unknown Category";


  console.log("99 currentCategory ===>>>", currentCategory);

  return (
    <>
    <div className="container">
      <h2 className="products-cards__title">{currentCategory ? currentCategory.title : (catalogLoading ? "Loading..." : "CategoryName not found")}</h2>

      <div className="products-cards__list">
      
      {(productsLoading || catalogLoading) && <p>Loading...</p>}
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </div>
    
      
    
    </>
    
  );
};



export default ProductsByCategory;
