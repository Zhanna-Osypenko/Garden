import React from "react";
import Nav from "pages/Home/components/Nav";
import Footer from "pages/Home/components/Footer";

const ErrorPage = () => {
  return (
    <>
      <Nav />
      <div className="error-page">
        <div className="container">
          <div className="error-image">
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ErrorPage;
