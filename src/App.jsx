import React from "react";

import Layout from "./views/Layout";
import Banner from "./views/Banner";
import AboutCompany from "./views/AboutCompany";
import Goals from "./views/Goals";
import Technologies from "./views/Technologies";
import Request from "./views/Request";
import Advantages from "./views/Advantages";
import Education from "./views/Education";
import Offices from "./views/Offices";

const App = () => {

    return (
        <Layout>
            <Banner />
            <AboutCompany />
            <Goals />
            <Technologies />
            <Request />
            <Advantages />
            <Education />
            <Request />
            <Offices />
        </Layout>
    );
};

export default App;