// HomeSalePage.js
import React, { useEffect, useState } from "react";
import HomeDiscountProductsFetch from "./HomeDiscountProductsFetch";

function HomeSalePage() {
  const [categories, setCategories] = useState([]);
  const backendURL =
    process.env.REACT_APP_BACKEND_URL || "http://localhost:3333";

  useEffect(() => {
    // Загружаем все категории при монтировании компонента
    fetch(`${backendURL}/categories/all`)
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, [backendURL]);

  return (
    <div>
      {/* <h2>All Discounted Products</h2> */}
      {categories.map((category) => (
        <HomeDiscountProductsFetch
          key={category.id}
          categoryId={category.id}
          categoryName={category.title}
        />
      ))}
    </div>
  );
}

export default HomeSalePage;
