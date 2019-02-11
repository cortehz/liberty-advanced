import React, { Fragment } from "react";
import Helmet from "react-helmet";
import SEO from "../components/SEO/SEO";
import MainHeader from "../components/MainHeader/MainHeader";
import AboutUs from "../components/AboutUs/AboutUs";

import Landing from "../components/Landing/Landing";

import Services from "../components/Services/Services";

import Contact from "../components/Contact/Contact";

import config from "../../data/SiteConfig";
import { GlobalStyle } from "../components/Commons";

class Index extends React.Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Helmet title={config.siteTitle} />
        <SEO />
        <MainHeader />
        <Landing />
        <AboutUs />
        <Services />
        <Contact />
      </Fragment>
    );
  }
}

export default Index;
