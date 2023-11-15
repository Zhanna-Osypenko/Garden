import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from 'pages/Home/components/Nav'
import Footer from 'pages/Home/components/Footer'

const Layout = () => {
  return (
    <div>
      <Nav/>
        <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout