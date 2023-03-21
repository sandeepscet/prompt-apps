// import '../styles/globals.css'
import Layout from "./layout";

import React, { Component } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
