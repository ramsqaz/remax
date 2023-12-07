import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import useAdaptive from "../../hooks/useAdaptive";
import MobileHeader from "./MobileHeader";

const Layout = ({ children }) => {
    const isMobile = useAdaptive();

    return (
        <>
            {isMobile ? <MobileHeader /> : <Header />}
            <main style={{ width: "100%", marginTop: isMobile ? 110 : 80 }}>
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;