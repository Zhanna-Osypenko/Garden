import "./assets/styles/main.scss";
import React from "react"
import { Home } from "./pages";
import ErrorPage from "pages/ErrorPage/ErrorPage";


import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

const App = () => {
  return (
    <>
      
      <Router>
        {/* <Home/> */}

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App