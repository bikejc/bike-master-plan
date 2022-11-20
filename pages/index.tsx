import getConfig from 'next/config'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useEffect, useState} from "react";

const navId = "myTopnav"

function enableResponsive() {
    const x = document.getElementById(navId);
    if (!x) return;
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

type Menu = {
    name: string
    id?: string
    sections?: {
        name: string
        id: string
    }[]
}

function Nav({ id, menus, onClick }: { id: string, menus: Menu[], onClick: () => void }) {
    return (
        <div id={id} className={"topnav"} onClick={onClick}>
            {
                menus.map(({ id, name, sections }) => {
                    if (sections) {
                        return <div key={name} id={id} className="dropdown">
                            <button className="dropbtn">Wards
                                <i className="fa fa-caret-down"></i>
                            </button>
                            <div className="dropdown-content">{
                                sections.map(({ id, name }) => <a key={id} href={`#${id}`}>{name}</a>)
                            }
                            </div>
                        </div>
                    } else {
                        return <a key={name} href={`#${id}`}>{name}</a>
                    }
                })
            }
            <button key={"responsive"} className="icon" onClick={enableResponsive}>&#9776;</button>
        </div>
    )
}

const Home: NextPage = () => {
    const { publicRuntimeConfig: config } = getConfig()
    const { basePath = "" } = config
    // console.log("config:", config)

    const [scrollY, setScrollY] = useState(0);
    const [clickScroll, setClickScroll] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            const topnav = document?.getElementById(navId)
            if (!topnav) return
            const curScrollY = window.scrollY;
            // console.log("scroll:", scrollY, "→", curScrollY, "clickScroll:", clickScroll)
            if (scrollY && !clickScroll && curScrollY > scrollY) {
                // Scroll down
                topnav.style.top = "-50px";
            } else {
                topnav.style.top = "0";
            }
            setScrollY(curScrollY);
            setClickScroll(false)
        }
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [ clickScroll, setClickScroll, scrollY, setScrollY ]);

    const sections = [
        { name: "Vision + Goals", id: "6" },
        { name: "Public Input, Public Action", id: "26", },
        { name: "Streets for Cycling", id: "46", },
        { name: "Map", id: "53", },
        { name: "Wards", sections: [
                { name: "Ward A", id: "59" },
                { name: "Ward B", id: "69" },
                { name: "Ward C", id: "81" },
                { name: "Ward D", id: "93" },
                { name: "Ward E", id: "103" },
                { name: "Ward F", id: "113" },
            ],
        },
        { name: "Beyond Infrastructure", id: "128", },
        { name: "Funding + Implementation", id: "158", },
    ]

    return (
        <div className={styles.container}>
            <Head>
                <title>Jersey City Bike Master Plan</title>
                <meta name="description" content="Jersey City Bike Master Plan" />
            </Head>

            <Nav id={navId} menus={sections} onClick={() => { console.log("click"); setClickScroll(true) }}/>
{/*            <div id={navId} className={"topnav"}>
                <a href="#6">Vision + Goals</a>
                <a href="#12">{`Let's Ride JC`}</a>
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
            </div>*/}

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
