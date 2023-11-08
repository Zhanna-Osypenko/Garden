import React from "react";
import { useState } from "react";

function Nav() {
  
  const menuItems = [
    {
      title: "Main Page",
      url: "#",
      cName: "nav-links",
    },
    {
      title: "All Products",
      url: "#",
      cName: "nav-links",
    },
    {
      title: "All Sales",
      url: "#",
      cName: "nav-links",
    },
  ];

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  }

  return (
    <nav className="nav__section">
      <div className="container">
        <div className="navbar">
          <div className="navbar__left">
            <div className="navbar__left-logo">
              {/* <img src="./Home/Home11.svg" alt="logo" /> */}
              <img
                src="https://thumbs.dreamstime.com/b/green-leaf-logo-ecology-nature-vector-illustration-124462441.jpg"
                alt="hello"
              />
            </div>
            <button className="navbar__left-btn">Catalog</button>
          </div>

          <div className="navbar__menu-icon"    onClick={handleClick}>
            {clicked ? "\u2716" : "\u2630"}
          </div>

          <div className={clicked ? "navbar__right active" : "navbar__right"
            }>
            <ul className="navbar__right-list">
              {menuItems.map((item, index) => {
                return (
                  <li key={index}>
                    <a className={item.cName} href={item.url}>
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="navbar__right-cart">
              {/* <img src="./images/Home12.svg" alt="cart" /> */}
              <img
                src="https://www.freeiconspng.com/thumbs/bags-icon/bag-icon-6.png"
                alt="cart"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
