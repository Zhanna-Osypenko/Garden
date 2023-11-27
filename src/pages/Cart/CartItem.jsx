import React from "react";

const CartItem = () => {
  return (
    <div>
      <div className="container">
        <section className="cart-item">
          <h1>Grably</h1>
          <div className="cart-item__box">
            <div className="cart-item__img">
              <img src="./Cart/cartitem3.jpg" alt="item1" />
            </div>

            <div className="cart-item__content">
              <h2>199$</h2>
              <button>Add to cart</button>
              <p className="cart-description">Description</p>
              <p>
                Size, cm - 45x33 Material: frost-resistant polymer, reinforced
                by a steel galvanized bar, riveted to the blade, aluminum handle
                with a V-shaped handle.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CartItem;
