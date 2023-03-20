import React from "react";
import Footer from "./pages/Footer";
import Header from "./pages/Header";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layout;