import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "store/toolkit/products";

// const Cart = () => {
//   const { cart } = useSelector((state) => state.products);
//   const dispatch = useDispatch();

//   // console.log('cart =>', cart);

//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, [dispatch]);

//   const calculateTotal = () => {
//     return cart.reduce((total, item) => {
//       return total + item.price * item.quantity;
//     }, 0);
//   };


//   return (
//     <section className="cart">
//       <div className="container">
//         <section className="cart-main">
//           <h1>Shopping cart</h1>
//           <div className="cart-main__box">
//             <div className="cart-main__list">
//               {cart.map((item) => (
//                 <div className="cart-main__list-item" key={item.id}>
//                   <div className="cart__img-box">
//                     <img src={`http://localhost:3333${item.image}`} alt={item.title} />
//                   </div>
//                   <div className="cart__btn-block">
//                     <p>{item.title}</p>
//                     <div className="cart__count">
//                       <button>+</button>
//                       <p>{item.quantity}</p>
//                       <button>-</button>
//                     </div>
//                   </div>
//                   <p className="cart__price">{`${item.price}$`}</p>
//                   {item.discont_price && (
//                     <p className="cart__discount-price">{`${item.discont_price}$`}</p>
//                   )}
//                 </div>
//               ))}
//             </div>

//             <div className="cart-main__order-details">
//               <h4>Order details</h4>
//               <div className="cart-main__total-block">
//                 <p>Total</p>
//                 <p>{`${calculateTotal()}$`}</p>
//               </div>
//               <input type="tel" placeholder="+49" />
//               <button>Order</button>
//             </div>
//           </div>
//         </section>
//       </div>
//     </section>
//   );


//   // return (
//   //   <section className="cart">
//   //     <div className="container">
//   //       <section className="cart-main">
//   //         <h1>Shopping cart</h1>
//   //         <div className="cart-main__box">
//   //           <div className="cart-main__list">
//   //             <div className="cart-main__list-item">
//   //               <div className="cart__img-box">
//   //                 <img src="./Cart/cartitem2.jpg" alt="item1" />
//   //               </div>
//   //               <div className="cart__btn-block">
//   //                 <p>Manhole cover Stump medium polystone</p>
//   //                 <div className="cart__count">
//   //                   <button>+</button>
//   //                   <p>1</p>
//   //                   <button>-</button>
//   //                 </div>
//   //               </div>
//   //               <p className="cart__price">199$</p>
//   //               <p className="cart__discount-price">250$</p>
//   //             </div>
//   //           </div>

//   //           <div className="cart-main__order-details">
//   //             <h4>Order details</h4>
//   //             <div className="cart-main__total-block">
//   //               <p>Total</p>
//   //               <p>3077,00</p>
//   //             </div>
//   //             <input type="tel" placeholder="+49" />
//   //             <button>Order</button>
//   //           </div>
//   //         </div>
//   //       </section>
//   //     </div>
//   //   </section>
//   // );
// };

// export default Cart;

// ... (ваш импорт и код)

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
                        <button>+</button>
                        <p>{item.quantity}</p>
                        <button>-</button>
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

