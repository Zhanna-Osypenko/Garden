import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { increment } from "store/toolkit/cart";
import { fetchProductById } from "store/toolkit/products";

const CartProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentProduct, loading, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    console.log("111Product ID:", id);
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  console.log("222Product in CartProductDetails:", currentProduct);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  let addToCart = (event) => {
    event.preventDefault();
    let t = event.target;
    dispatch(increment(t.getAttribute('data-key')));
  }

  return (
    <div className="container">
      <section className="cart-item">
        {currentProduct ? (
          <>
            <h1>{currentProduct.title}</h1>
            <div className="cart-item__box">
              <div className="cart-item__img">
                <img
                  src={`http://localhost:3333${currentProduct.image}`}
                  alt={currentProduct.title}
                />
              </div>

              <div className="cart-item__content">
                <h2>{`${currentProduct.price}$`}</h2>
                <button data-key={currentProduct.id} onClick={addToCart}>
                  Add to cart
                </button>
                <p className="cart-description">Description</p>
                <p>{currentProduct.description}</p>
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
