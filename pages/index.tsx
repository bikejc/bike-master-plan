import getConfig from 'next/config'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {MouseEvent, useEffect, useState} from "react";

const navId = "myTopnav"

function toggleHamburger(open?: boolean) {
    const x = document.getElementById(navId);
    if (!x) return;
    open = open || (open === undefined && !x.classList.contains("open"))
    if (open) {
        x.classList.add("open")
    } else {
        x.classList.remove("open")
    }
}

type Menu = {
    name: string
    id: string
    sections?: {
        name: string
        id: string
    }[]
}

function smoothScrollTo(id: string) {
    return (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        const scrollTop = document.getElementById(id)?.offsetTop
        console.log(`${id}: scroll to:`, scrollTop)
        window.scrollTo({ top: scrollTop, behavior: "smooth" })
    }
}

function Nav({ id, menus, onClick }: { id: string, menus: Menu[], onClick: () => void }) {
    return (
        <div id={id} className={"topnav"} onClick={onClick}>
            <button key={"hamburger"} className="icon" onClick={() => toggleHamburger()}>&#9776;</button>
            {
                menus.map(({ id, name, sections }) => {
                    if (sections) {
                        return <div key={name} id={id} className="dropdown menu">
                            <button className="dropbtn">Wards
                                <i className="fa fa-caret-down"></i>
                            </button>
                            <div className="dropdown-content">{
                                sections.map(({ id, name }) => <a key={id} href={`#${id}`}>{name}</a>)
                            }
                            </div>
                        </div>
                    } else {
                        return <a key={name} href={`#${id}`} className={"menu"} onClick={smoothScrollTo(id)}>{name}</a>
                    }
                })
            }
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

    const menus: Menu[] = [
        { name: "Vision + Goals", id: "6" },
        { name: "Public Input, Public Action", id: "26", },
        { name: "Streets for Cycling", id: "46", },
        { name: "Map", id: "53", },
        { name: "Wards", id: "wards", sections: [
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

            <Nav id={navId} menus={menus} onClick={() => { console.log("click"); setClickScroll(true) }}/>

            {
                [...Array(168).keys()].map(i => {
                    const id = (i + 1).toString()
                    return <a id={id} key={`slide-${id}`} href={`#${id}`} onClick={smoothScrollTo(id)}>
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
        </div>
    )
}

export default Home
