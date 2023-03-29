import Subscription from '@/src/Component/Subcription'
import React from 'react'
// import Footer from "./pages/Component/Footer";
// import Header from "./pages/Component/Header";
import Footer from '../src/Component/Footer'
import Header from '../src/Component/Header'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      
      {children}
      <Footer />
    </>
  )
}

export default Layout
