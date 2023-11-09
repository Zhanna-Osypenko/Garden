import React, { useEffect, useState } from "react";

function HomeSale() {
  // const [saleProducts, setSaleProducts] = useState([]);

  // useEffect(() => {
  //   // Здесь вам нужно запросить данные о товарах со скидкой с бэкенда
  //   // и установить их в состояние saleProducts с помощью setSaleProducts
  //   // Например, с использованием fetch:
  //   fetch("http://localhost:3333/sale/send")
  //     .then((response) => response.json())
  //     .then((data) => setSaleProducts(data))
  //     .catch((error) => console.error("Error fetching sale products:", error));
  // }, []);

  return (
    <div className="home-sale">
      <div className="container">
        <div className="home-sale__content">
          <div className="home-sale__content-title">
            <h2>Sale Products</h2>
            <button className="home-sale__content-btn">All Sale</button>
          </div>

          <div className="home-sale__products">
            <div className="home-sale__product">
              <h6>-50%</h6>
              <img src="./Home/sale1.jpg" alt="sale1" />
              <p>
                <span>1000$</span> &nbsp;&nbsp; 500$
              </p>
              <h3>Decorative forged bridge</h3>
            </div>
            <div className="home-sale__product">
              <h6>-50%</h6>
              <img src="./Home/sale1.jpg" alt="sale1" />
              <p>
                <span>1000$</span> &nbsp;&nbsp; 500$
              </p>
              <h3>Decorative forged bridge</h3>
            </div>
            <div className="home-sale__product">
              <h6>-50%</h6>
              <img src="./Home/sale1.jpg" alt="sale1" />
              <p>
                <span>1000$</span> &nbsp;&nbsp; 500$
              </p>
              <h3>Decorative forged bridge</h3>
            </div>
            <div className="home-sale__product">
              <h6>-50%</h6>
              <img src="./Home/sale1.jpg" alt="sale1" />
              <p>
                <span>1000$</span> &nbsp;&nbsp; 500$
              </p>
              <h3>Decorative forged bridge</h3>
            </div>
            <div className="home-sale__product">
              <h6>-50%</h6>
              <img src="./Home/sale1.jpg" alt="sale1" />
              <p>
                <span>1000$</span> &nbsp;&nbsp; 500$
              </p>
              <h3>Decorative forged bridge</h3>
            </div>
            <div className="home-sale__product">
              <h6>-50%</h6>
              <img src="./Home/sale1.jpg" alt="sale1" />
              <p>
                <span>1000$</span> &nbsp;&nbsp; 500$
              </p>
              <h3>Decorative forged bridge</h3>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSale;
