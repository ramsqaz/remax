import React from "react";
import { Helmet } from "react-helmet";
import { Route, Routes, BrowserRouter, Navigate, Outlet, HashRouter } from "react-router-dom";
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
import PrivacyPolicy from "./views/PrivacyPolicy";
import Presentation from "./views/Presentation";
import { LOCALES } from "./constants/app";

const App = () => {
    const locale = localStorage.getItem("locale") || LOCALES.RU;

    return (
        <div>
            <HashRouter>
                <Helmet>
                    <html lang={locale} />
                    <title>RE/MAX</title>
                    <meta name="description" content="Бизнес-модель RE/MAX, признанная лучшей в мире, основана на уникальном ноу-хау и слаженной системе, что позволяет компании сохранять лидерские позиции на протяжении уже 50 лет в более чем 119 странах мира." />
                </Helmet>
                <Routes>
                    <Route path="/" element={<Navigate to={locale} />} />
                    <Route path=":locale" element={<Layout><Outlet /></Layout>}>
                        <Route
                            index
                            element={(
                                <>
                                    <Banner />
                                    <AboutCompany />
                                    <Goals />
                                    {/* <Presentation /> */}
                                    <Technologies />
                                    <Request />
                                    <Advantages />
                                    <Education />
                                    <Request />
                                    <Offices />
                                </>
                            )}
                        />
                        <Route path="privacy-policy" element={<PrivacyPolicy />} />
                    </Route>
                </Routes>
            </HashRouter>
        </div>
    );
};

export default App;