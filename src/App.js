import "./assets/styles/main.scss";
import React from "react"
import { Home } from "./pages";
import ErrorPage from "pages/ErrorPage/ErrorPage";
import MainCatalogPage from "pages/Catalog/MainCatalogPage";


import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

const App = () => {
  return (
    <>
      
      <Router>
        {/* <Home/> */}

        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/catalog" element={<MainCatalogPage/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App