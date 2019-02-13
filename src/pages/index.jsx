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
import Layout from "../layout";

class Index extends React.Component {
  render() {
    return (
      <Layout>
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
      </Layout>
    );
  }
}

export default Index;
