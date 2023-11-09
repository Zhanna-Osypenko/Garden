import React from "react";

function HomeDiscount() {
  return (
    <div className="home-discount__content">
      <div className="container">
        <div className="home-discount__content-inner">
          <div className="home-discount__content-img">
            <img src="./Home/gnom1.svg" alt="gnom" />
          </div>

<div className="home-discount__content-right">
<form className="home-discount__content-form">
            <h1>5% off</h1>
            <p>on the first order</p>
            <input type="tel" placeholder="+49" />
            <button type="submit">Get a discount</button>
          </form>
</div>
          
        </div>
      </div>
    </div>
  );
}

export default HomeDiscount;
