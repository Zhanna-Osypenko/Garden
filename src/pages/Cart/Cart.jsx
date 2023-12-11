import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts,  updateCartItemQuantity, removeCartItem } from "store/toolkit/products";

const Cart = () => {
  const { cart } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      if (item && item.quantity) {
        const priceToUse = item.discont_price ? item.discont_price : item.price;
        return total + priceToUse * item.quantity;
      }
      return total;
    }, 0).toFixed(2);
  };
  

  const calculateTotalQuantity = () => {
    const totalQuantity = cart.reduce((total, item) => {
      if (item && item.quantity) {
        return total + item.quantity;
      }
      return total;
    }, 0);
  
    return Number(totalQuantity.toFixed(2));
  };
  
  

  const handleQuantityChange = (productId, newQuantity) => {
    dispatch(updateCartItemQuantity({ productId, quantity: newQuantity }));
  };

  const handleRemoveCartItem = (productId) => {
    dispatch(removeCartItem(productId));
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
                      {item.image && (
                        <img
                          src={`https://garden-kcwi.onrender.com${item.image}`}
                          alt={item.title}
                        />
                      )}
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

                      <div
                        className="deletecart"
                        onClick={() => handleRemoveCartItem(item.id)}
                      >
                        <img
                          className="deletecart-img"
                          src="./Cart/deletecart2.jpg"
                          alt="delcart"
                        />
                      </div>
                    </div>

                    {item.discont_price ? (
                      <>
                        <p className="cart__price">{`${(item.discont_price*item.quantity).toFixed(2)}$`}</p>
                        <p className="cart__discount-price">{`${(item.price*item.quantity).toFixed(2)}$`}</p>
                      </>
                    ) : (
                      <p className="cart__price">{`${(item.price*item.quantity).toFixed(2)}$`}</p>
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
