import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "store/toolkit/products";
import { updateCartItemQuantity } from "store/toolkit/products";


const Cart = () => {
  const { cart } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      if (item && item.price && item.quantity) {
        return total + item.price * item.quantity;
      }
      return total;
    }, 0);
  };

  const calculateTotalQuantity = () => {
    return cart.reduce((totalQuantity, item) => {
      if (item && item.quantity) {
        return totalQuantity + item.quantity;
      }
      return totalQuantity;
    }, 0);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    // Отправляем действие для обновления количества товара в корзине
    dispatch(updateCartItemQuantity({ productId, quantity: newQuantity }));
  };

  return (
    <section className="cart">
      <div className="container">
        <section className="cart-main">
          <h1>Shopping cart</h1>
          <div className="cart-main__box">
            <div className="cart-main__list">
              {cart.map((item) =>
                item ? (
                  <div className="cart-main__list-item" key={item.id}>
                    <div className="cart__img-box">
                      {item.image && <img src={`http://localhost:3333${item.image}`} alt={item.title} />}
                    </div>
                    <div className="cart__btn-block">
                      <p>{item.title}</p>
                      <div className="cart__count">
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <p>{item.quantity}</p>
                      <button
                        onClick={() =>
                          handleQuantityChange(
                            item.id,
                            Math.max(1, item.quantity - 1)
                          )
                        }
                      >
                        -
                      </button>
                      </div>
                    </div>
                    <p className="cart__price">{`${item.price}$`}</p>
                    {item.discont_price && (
                      <p className="cart__discount-price">{`${item.discont_price}$`}</p>
                    )}
                  </div>
                ) : null
              )}
            </div>

            <div className="cart-main__order-details">
              <h4>Order details</h4>
              <div className="cart-main__total-block">
                <p>Total</p>
                <p>{`${calculateTotal()}$`}</p>
              </div>
              <p>{`Total Quantity: ${calculateTotalQuantity()}`}</p>
              <input type="tel" placeholder="+49" />
              <button>Order</button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Cart;

