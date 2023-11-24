import React from "react";

const CartProducts = () => {
  return (
    <div>
      <div className="container">
        <section className="cart-main">
          <h1>Shopping cart</h1>
          <div className="cart-main__box">
            <div className="cart-main__list">
              <div className="cart-main__list-item">
                <div className="cart__img-box">
                  <img src="./Cart/cartitem2.jpg" alt="item1" />
                </div>
                <div className="cart__btn-block">
                  <p>Manhole cover Stump medium polystone</p>
                  <div className="cart__count">
                    <button>+</button>
                    <p>1</p>
                    <button>-</button>
                  </div>
                </div>
                <p className="cart__price">199$</p>
                <p className="cart__discount-price">250$</p>
              </div>
              <div className="cart-main__list-item">
                <div className="cart__img-box">
                  <img src="./Cart/cartitem2.jpg" alt="item1" />
                </div>
                <div className="cart__btn-block">
                  <p>Manhole cover Stump medium polystone</p>
                  <div className="cart__count">
                    <button>+</button>
                    <p>1</p>
                    <button>-</button>
                  </div>
                </div>
                <p className="cart__price">199$</p>
                <p className="cart__discount-price">250$</p>
              </div>
              <div className="cart-main__list-item">
                <div className="cart__img-box">
                  <img src="./Cart/cartitem2.jpg" alt="item1" />
                </div>
                <div className="cart__btn-block">
                  <p>Manhole cover Stump medium polystone</p>
                  <div className="cart__count">
                    <button>+</button>
                    <p>1</p>
                    <button>-</button>
                  </div>
                </div>
                <p className="cart__price">199$</p>
                <p className="cart__discount-price">250$</p>
              </div>
            </div>

            <div className="cart-main__order-details">
              <h4>Order details</h4>
              <div className="cart-main__total-block">
                <p>Total</p>
                <p>3077,00</p>
              </div>
              <input type="tel" placeholder="+49" />
              <button>Order</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CartProducts;
