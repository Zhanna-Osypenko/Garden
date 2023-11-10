import React from "react";
import "../../assets/styles/pages/home.scss";



import Header from './components/Header';
import HomeTitle from './components/HomeTitle';
import HomeCatalog from './components/HomeCatalog';
import HomeCatalogFetch from './components/HomeCatalogFetch';
import HomeDiscount from './components/HomeDiscount';
import HomeSale from './components/HomeSale';
import HomeSalePage from './components/HomeSalePage';
import Footer from './components/Footer';
import Nav from "./components/Nav";

const Home = () => {
  return (
    <>
      <div className="home">
        <Nav />
        <Header />
        {/* <HomeCatalog /> */}
        <HomeCatalogFetch />
        <HomeDiscount />
        {/* <HomeSale /> */}
        {/* <HomeSaleFetch categoryId={1}/> */}
        {/* <HomeDiscountProductsFetch categoryId={1}/> */}
        <HomeSalePage/>
        <Footer />
      </div>
    </>
  );
};

export default Home;
