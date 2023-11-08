import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <App />
);

// assets 
// -----> fonts ----> файлы для .otf или .ttf
// -----> images ----> изображение
// -----> styles ----> стили
          // -----> components
          // -----> pages ----> // .scss или .css файлы
          // другие .scss или .css файлы
// components
          // -----> Product папка где у Вас будут фругие маленькие компоненты которые относиться к этой странице
// pages
// -----> Home
          // -----> Home.jsx
          // -----> index.js
// -----> Products
          // -----> Products.jsx
          // -----> index.js
// -----> index.js откуда у нас инпортируються все Page компоненты
// App.js
// index.js