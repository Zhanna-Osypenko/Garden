import React from "react";

function HomeCatalog() {
  const catalogCart = [
    {
      "id": 1,
      "title": "Annuals",
      "image": "/category_img/1.jpeg",
      "createdAt": "2022-10-02T14:43:29.000Z",
      "updatedAt": "2022-10-02T14:43:29.000Z"
    },
    {
      "id": 2,
      "title": "Nursery",
      "image": "/category_img/2.jpeg",
      "createdAt": "2022-10-02T14:43:29.000Z",
      "updatedAt": "2022-10-02T14:43:29.000Z"
    },
    {
      "id": 3,
      "title": "Garden Art",
      "image": "/category_img/3.jpeg",
      "createdAt": "2022-10-02T14:43:29.000Z",
      "updatedAt": "2022-10-02T14:43:29.000Z"
    },
    {
      "id": 4,
      "title": "Plant Care",
      "image": "/category_img/4.jpeg",
      "createdAt": "2022-10-02T14:43:29.000Z",
      "updatedAt": "2022-10-02T14:43:29.000Z"
    },
    {
      "id": 5,
      "title": "Seasonal",
      "image": "/category_img/5.jpeg",
      "createdAt": "2022-10-02T14:43:29.000Z",
      "updatedAt": "2022-10-02T14:43:29.000Z"
    }
  ]

  const backendURL = process.env.REACT_APP_BACKEND_URL || "http://localhost:3333";

  return (
    <div className="home-catalog">
      <div className="container">
        <div className="home-catalog__content">
          <div className="home-catalog__title">
            <h2>Catalog</h2>
            <button className="home-catalog__title-btn">All Categories</button>
          </div>

          <div className="home-catalog__carts">
            {catalogCart.map(category => (
              <div key={category.id} className="home-catalog__cart">
                <img src={`${backendURL}${category.image}`} alt={category.title} />
                <h3>{category.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCatalog;