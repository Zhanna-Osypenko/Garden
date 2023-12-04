import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"; 
import { useEffect } from "react";

function Nav() {
  const menuItems = [
    {
      title: "Main Page",
      url: "/",
      cName: "nav-links",
    },
    {
      title: "All Products",
      url: "/products",
      cName: "nav-links",
    },
    {
      title: "All Sales",
      url: "/sales",
      cName: "nav-links",
    },
  ];

  const [clicked, setClicked] = useState(false);
  const cart = useSelector((state) => state.products.cart);
  const [cartTotal, setCartTotal] = useState(0);

  const handleClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    setCartTotal(totalItems);
  }, [cart]);

  const setActiveLink = ({ isActive }) =>
    isActive ? "nav-links nav-links--active" : "nav-links";

  return (
    <nav className="nav__section">
      <div className="container">
        <div className="navbar">
          <div className="navbar__left">
            <div className="navbar__left-logo">
              <NavLink className="navbar__logo-link" to="/">
                <img src="./Header/header11.svg" alt="logo" />
              </NavLink>
            </div>

            <h2 className="navbar__left-name">GardenLife</h2>
            {/* <button className="navbar__left-btn">Catalog</button> */}
          </div>

          <div className="navbar__menu-icon" onClick={handleClick}>
            {clicked ? "\u2716" : "\u2630"}
          </div>

          <div className={clicked ? "navbar__right active" : "navbar__right"}>
            <ul className="navbar__right-list">
              {menuItems.map((item, index) => {
                return (
                  <li key={index}>
                    <NavLink className={setActiveLink} to={item.url}>
                      {item.title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
            <Link to="/cart">
              <div className="navbar__right-cart">
                <img src="./Header/header12.svg" alt="cart" />
                {cartTotal > 0 && <span className="cart-count">{cartTotal}</span>}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
