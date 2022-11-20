import getConfig from 'next/config'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import HomeCss from '../styles/Home.module.css'
import index from './index.module.css'
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

type Section = {
    name: string
    id: string
    pg?: string
}
type Menu = {
    sections?: Section[]
} & Section

function smoothScrollTo(id: string) {
    return (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        const scrollTop = document.getElementById(id)?.offsetTop
        //console.log(`${id}: scroll to:`, scrollTop)
        window.scrollTo({ top: scrollTop, behavior: "smooth" })
        history.pushState(null,"",`#${id}`);
    }
}

function Nav({ id, menus, onClick }: { id: string, menus: Menu[], onClick: () => void }) {
    return (
        <div id={id} className={"topnav"} onClick={onClick}>
            <button key={"hamburger"} className="icon" onClick={() => toggleHamburger()}>&#9776;</button>
            {
                menus.map(({ id, name, sections }) => {
                    if (sections) {
                        return <div key={name} className="dropdown menu">
                            <button className="dropbtn">Wards
                                <i className="fa fa-caret-down"></i>
                            </button>
                            <div className="dropdown-content">{
                                sections.map(({ id, name }) => <a key={id} href={`#${id}`}>{name}</a>)
                            }
                            </div>
                        </div>
                    } else {
                        return <a key={name} href={`#${id}`} className={"menu"} /*onClick={smoothScrollTo(id)}*/>{name}</a>
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

    const wards = [
        { name: "Ward A", pg: "59", id: "ward-a", },
        { name: "Ward B", pg: "69", id: "ward-b", },
        { name: "Ward C", pg: "81", id: "ward-c", },
        { name: "Ward D", pg: "93", id: "ward-d", },
        { name: "Ward E", pg: "103", id: "ward-e", },
        { name: "Ward F", pg: "113", id: "ward-f", },
    ]
    const menus: Menu[] = [
        { name: "Vision + Goals", id: "vision+goals", pg: "6" },
        { name: "Public Input, Public Action", id: "public-input", pg: "26", },
        { name: "Streets for Cycling", id: "streets-for-cycling", pg: "46", },
        { name: "Map", id: "map", pg: "53", },
        { name: "Wards", id: "wards", sections: wards, },
        { name: "Beyond Infrastructure", id: "beyond-infrastructure", pg: "128", },
        { name: "Funding + Implementation", id: "funding+implementation", pg: "158", },
    ]

    const pgIds: { [k: string]: string[] } = {}
    menus.concat(wards).forEach(({ id, pg }) => {
        if (!pg) return
        if (!(pg in pgIds)) {
            pgIds[pg] = []
        }
        pgIds[pg].push(id)
    })

    // console.log(pgIds)
    return (
        <div className={HomeCss.container}>
            <Head>
                <title>Jersey City Bike Master Plan</title>
                <meta name="description" content="Jersey City Bike Master Plan" />
            </Head>

            <Nav id={navId} menus={menus} onClick={() => { console.log("click"); setClickScroll(true) }}/>

            {
                [...Array(168).keys()].map(i => {
                    const pg = (i + 1).toString()
                    const extraIds = pgIds[pg] || []
                    return <span key={`slide-${pg}`} className={index.slide}>
                        {extraIds.map(id => <a id={id} key={`id-${id}`} />)}
                        <a id={pg} href={`#${pg}`} onClick={smoothScrollTo(pg)}>
                            <Image
                                src={`${basePath}/img/bmp-${pg.padStart(3, '0')}.png`}
                                alt={`Slide ${pg}`}
                                width={600}
                                height={450}
                                layout="responsive"
                                loading="lazy"
                            />
                        </a>
                    </span>
                })
            }
        </div>
    )
}

export default Home
