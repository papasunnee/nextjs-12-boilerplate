import App from "next/app";
import React, { Fragment } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Router from "next/router";
import NProgress from "nprogress";
import { ApolloProvider } from "@apollo/react-hooks";
import withApollo from "../lib/withApollo";
import { ThemeProvider } from "styled-components";
import CookieConsent from "../components/Common/CookieConsent";

const Tawkto = dynamic(() => import("../components/Common/Tawkto"), {
  ssr: false,
  loading: () => <p>Loading</p>
});

Router.events.on("routeChangeStart", url => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const theme = {
  colors: {
    primary: "#00AEEF",
    yellow: "#fff507"
  }
};

class MyApp extends App {
  static displayName = "MyApp";

  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Fragment>
        <Head>
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/css/nprogress.css"
          />
        </Head>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={apolloClient}>
            <CookieConsent />
            <Component {...pageProps} />
            <Tawkto />
          </ApolloProvider>
        </ThemeProvider>
      </Fragment>
    );
  }
}

export default withApollo(MyApp);
