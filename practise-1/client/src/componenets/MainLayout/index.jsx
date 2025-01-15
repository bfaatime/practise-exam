import React from 'react'
import { Outlet } from "react-router"
import Header from '../../layouts/header'
import Footer from '../../layouts/footer'

const MainLayout = () => {
  return (
  <div>
     <Header/>
    <Outlet/>
    <Footer/>
  </div>
  )
}

export default MainLayout