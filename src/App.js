import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";

//Components
import Header from "./components/Header";
import Footer from "./components/Footer/index";
// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import SinglePlace from "./pages/SinglePlace";

// I18n
// import { I18nProvider, LOCALES } from "./i18n";
// import translate from "./i18n/translate";
// import GetUserLocation from "./components/GetUserLocation";

/* <I18nProvider locale={Language}>
        {translate("edit", { path: <Header /> })}

      </I18nProvider> */

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tourism-website-react-03" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/SinglePlace/:xid" element={<SinglePlace />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <br />
      <Footer />
    </>
  );
}

export default App;
