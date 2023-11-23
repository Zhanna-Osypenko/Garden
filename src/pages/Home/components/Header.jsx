import React from "react";
import { NavLink } from "react-router-dom";
// import {HeaderLogo, CartHeaderIcon} from '../../../assets/images';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <h1>Sale<br />new season</h1>
          <NavLink to="/sales">Sale</NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
