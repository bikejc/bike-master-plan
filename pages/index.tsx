import getConfig from 'next/config'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from "next/script";

const Home: NextPage = () => {
    const { publicRuntimeConfig: config } = getConfig()
    const { basePath = "" } = config
    console.log("config:", config)
    return (
        <div className={styles.container}>
            <Head>
                <title>Jersey City Bike Master Plan</title>
                <meta name="description" content="Jersey City Bike Master Plan" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            </Head>

            <div id="navbar">
                <a href="#6">Vision + Goals</a>
                <a href="#12">{`Let's Ride JC`}</a>
                <a href="#26">Public Input, Public Action</a>
                <a href="#46">Streets for Cycling</a>
                <a href="#128">Beyond Infrastructure</a>
                <a href="#158">Funding + Implementation</a>

                <a href="#53">Proposed Map</a>
                <div className="subnav">
                    <button className="subnavbtn">Wards <i className="fa fa-caret-down"></i></button>
                    <div className="subnav-content">
                        <a href="#59">Ward A</a>
                        <a href="#69">Ward B</a>
                        <a href="#81">Ward C</a>
                        <a href="#93">Ward D</a>
                        <a href="#103">Ward E</a>
                        <a href="#113">Ward F</a>
                    </div>
                </div>
                <a href="#122">Bicycle Parking Plan</a>
            </div>

            {
                [...Array(168).keys()].map(i => {
                    const id = (i + 1).toString()
                    return <a id={id} key={`slide-${id}`} href={`#${id}`}>
                        {/*<img src={require(`../public/img/bmp-${id.padStart(3, '0')}.png`)} alt={`Slide ${id}`} />*/}
                        <Image
                            src={`${basePath}/img/bmp-${id.padStart(3, '0')}.png`}
                            alt={`Slide ${id}`}
                            width={600}
                            height={450}
                            layout="responsive"
                            loading="lazy"
                        />
                    </a>
                })
            }
            <Script src={`${basePath}/js/nav.js`} />
        </div>
    )
}

export default Home
