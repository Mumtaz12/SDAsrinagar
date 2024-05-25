import React from "react";

import Head from "next/head";

import BannerSection from "../components/BannerSection/BannerSection";

import { Card, Container, Divider } from "semantic-ui-react";

import NotificationSection from "../components/NotificationsSection/Main";

import LandUseSection from "../components/LanduseSection/LandUseSection";

import CardSection from "../components/CardSection/CardSection";

import { backend } from "../constants/constants";

export default function Home(props) {
    return (
        <div>
            <Head>
                <title>SRINAGAR DEVELOPMENT AUTHORITY | SDA</title>
                <meta
                    name='viewport'
                    content='initial-scale=1.0, width=device-width'></meta>
                <meta
                    name='description'
                    content='Official Website Portal of SDA'></meta>
                <meta
                    name='keywords'
                    content='SDA,srinagar development authority,srinagar development,Srinagar,SMC,SDA,JaKeGA, JKIT, JKITD'></meta>
                <meta http-equiv="Content-Security-Policy" content="
        {/*default-src 'self';*/}
        font-src 'self' https://fonts.gstatic.com;
        style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
        script-src 'self' 'unsafe-eval';
        frame-src 'self' https://maps.google.com;
        img-src 'self' https://backendsdasrinagar.jk.gov.in;  /* Remove trailing comma */
    "/>
                <meta name='author' content='Mufti Hyder Ali'></meta>
            </Head>

            <BannerSection banners={props.banners}/>

            <Divider/>

            <NotificationSection data={props["data"]}/>

            <Divider/>

            <CardSection/>

            <Divider/>

            {/* <GallerySection/> */}

            <Divider/>

            <LandUseSection/>
        </div>
    );
}

export async function getServerSideProps(context) {
    let banners = await (await fetch(backend + "banners?_sort=order:ASC")).json();

    let public_notices = await (
        await fetch(backend + "public-notices?_sort=date:DESC&_limit=6")
    ).json();

    let tenders = await (
        await fetch(backend + "tenders?_sort=date:DESC&_limit=6")
    ).json();

    let eoi = await (
        await fetch(backend + "eois?_sort=date:DESC&_limit=6")
    ).json();

    let circular_orders = await (
        await fetch(backend + "circular-and-orders?_sort=date:DESC&_limit=6")
    ).json();

    let short_term_quotations = await (
        await fetch(backend + "short-term-quotations?_sort=date:DESC&_limit=6")
    ).json();

    return {
        props: {
            data: {
                public_notices,
                tenders,
                eoi,
                circular_orders,
                short_term_quotations,
            },
            banners,
        },
    };
}
