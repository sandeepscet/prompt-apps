import React from 'react'
// import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/react'

import Layout from './Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </>
  )
}

export default MyApp
