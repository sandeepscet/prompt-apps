import React from 'react'

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
