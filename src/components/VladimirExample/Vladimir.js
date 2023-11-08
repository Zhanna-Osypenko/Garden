import React from 'react';
import { Icon } from 'components/Icon';

function Vladimir() {
  return (
    <div>
        <div className="banner banner--black">
        <p>Sign up and get 20% off to your first order. <a href="/signup">Sign Up Now</a></p>
      </div>

      <nav className="navbar">
        <div className="navbar__container">
          <div className="navbar__left">
            <a className="navbar__logo" href="/">SHOP.CO</a>
            <ul className="navbar-menu">
              <li><a href="#" className="navbar-menu__item navbar-menu__item--active">Shop</a></li>
              <li><a href="#" className="navbar-menu__item">On Sale</a></li>
              <li><a href="#" className="navbar-menu__item">New Arrivals</a></li>
              <li><a href="#" className="navbar-menu__item">Brands</a></li>
            </ul>
          </div>
          <div className="navbar__right">
            <Icon iconName="cart"/>
            <Icon iconName="avatar" />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Vladimir