import getConfig from 'next/config'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from "next/script";
import {useEffect, useState} from "react";

function myFunction() {
    const x = document.getElementById("myTopnav");
    if (!x) return;
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

const Home: NextPage = () => {
    const { publicRuntimeConfig: config } = getConfig()
    const { basePath = "" } = config
    // console.log("config:", config)

    const [scrollY, setScrollY] = useState(0);
    const navId = "myTopnav"

    useEffect(() => {
        const onScroll = () => {
            const topnav = document?.getElementById(navId)
            if (!topnav) return
            const curScrollY = window.scrollY;
            console.log("scroll:", scrollY, "→", curScrollY)
            if (curScrollY > scrollY) {
                // Scroll down
                topnav.style.top = "-50px";
            } else {
                topnav.style.top = "0";
            }
            setScrollY(curScrollY);
        }
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [ scrollY, setScrollY ]);

    return (
        <div className={styles.container}>
            <Head>
                <title>Jersey City Bike Master Plan</title>
                <meta name="description" content="Jersey City Bike Master Plan" />
            </Head>

            <div id={navId} className={"topnav"}>
                <a href="#6">Vision + Goals</a>
                {/*<a href="#12">{`Let's Ride JC`}</a>*/}
                <a href="#26">Public Input, Public Action</a>
                <a href="#46">Streets for Cycling</a>
                <a href="#128">Beyond Infrastructure</a>
                <a href="#158">Funding + Implementation</a>

                <a href="#53">Proposed Map</a>
                <div className="dropdown">
                    <button className="dropbtn">Wards
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <a href="#59">Ward A</a>
                        <a href="#69">Ward B</a>
                        <a href="#81">Ward C</a>
                        <a href="#93">Ward D</a>
                        <a href="#103">Ward E</a>
                        <a href="#113">Ward F</a>
                    </div>
                </div>
                <a href="#122">Bicycle Parking Plan</a>
                <button className="icon" onClick={myFunction}>&#9776;</button>
            </div>

            {
                [...Array(168).keys()].map(i => {
                    const id = (i + 1).toString()
                    return <a id={id} key={`slide-${id}`} href={`#${id}`}>
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
            {/*<Script src={`${basePath}/js/nav.js`} />*/}
        </div>
    )
}

export default Home
