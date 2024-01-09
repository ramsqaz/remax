import React from "react";
import { Helmet } from "react-helmet";
import { Table, HeaderCell, Cell, Column } from "rsuite-table";
import 'rsuite-table/dist/css/rsuite-table.css';

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
        <div>
            <Helmet htmlAttributes>
                <html lang="ru" />
                <title>RE/MAX</title>
                <meta name="description" content="Бизнес-модель RE/MAX, признанная лучшей в мире, основана на уникальном ноу-хау и слаженной системе, что позволяет компании сохранять лидерские позиции на протяжении уже 50 лет в более чем 119 странах мира." />
            </Helmet>
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
        </div>
    );
};

export default App;