import React, { useEffect } from "react";
import "../styles/globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Head from "next/head";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";


Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                 <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic&subset=latin  "
                />

                <meta
                    name="google-site-verification"
                    content="1ogETDXq6Wjn_WSFKCeVMYqZW5jfOMkNRSDqtRMtMws"
                />
            </Head>
            <Header/>
            <Component {...pageProps}/>
            <Footer/>
        </>
    );
}

export default MyApp;
