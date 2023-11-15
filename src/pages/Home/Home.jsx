import React from "react";
import "../../assets/styles/pages/home.scss";

import Header from './components/Header';
import HomeCatalogFetch from './components/HomeCatalogFetch';
import HomeDiscount from './components/HomeDiscount';
import HomeDiscountProductsFetch2 from "./components/HomeDiscountProductsFetch2";

const Home = () => {
  return (
    <>
      <div className="home">
        {/* <Nav /> */}
        <Header />
        <HomeCatalogFetch />
        <HomeDiscount />
        <HomeDiscountProductsFetch2/>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Home;
