import React from "react";
import "../../assets/styles/pages/home.scss";



import Header from './components/Header';
import HomeTitle from './components/HomeTitle';
import HomeCatalog from './components/HomeCatalog';
import HomeDiscount from './components/HomeDiscount';
import HomeSale from './components/HomeSale';
import Footer from './components/Footer';
import Nav from "./components/Nav";

const Home = () => {
  return (
    <>
      <div className="home">
        <Nav />
        <Header />
        <HomeCatalog />
        {/* <HomeDiscount /> */}
        {/* <HomeSale /> */}
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Home;
