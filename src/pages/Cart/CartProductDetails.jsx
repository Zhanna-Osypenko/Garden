import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductById } from "store/actions/products/product.action"; // action для загрузки продукта по ID

const CartProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  console.log("Product in CartProductDetails:", product);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container">
      <section className="cart-item">
      {product ? (
        
        <>
        <h1>{product.title}</h1>
        <div className="cart-item__box">
          <div className="cart-item__img">
            <img src={`http://localhost:3333${product.image}`} alt={product.title} />
          </div>

          <div className="cart-item__content">
            <h2>{`${product.price}$`}</h2>
            <button>Add to cart</button>
            <p className="cart-description">Description</p>
            <p>{product.description}</p>
          </div>
        </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
      </section>
    </div>
  );
};

export default CartProductDetails;
