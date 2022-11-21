import getConfig from 'next/config'
import type {NextPage} from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import nav from '../components/nav.module.css'
import index from './index.module.css'
import {Menu, Nav} from "../components/nav";
import {smoothScrollTo} from "../components/scroll";
import {Head} from "next-utils/head"

const navId = "nav"

type Slides = {
    numSlides: number
    src: (pg: number) => string
    pgIds: { [k: number]: string[] }
    width?: number
    height?: number
}
function Slides({ numSlides, src, pgIds, width, height, }: Slides) {
    return <div className={index.slides}>{
        [...Array(numSlides).keys()].map(i => {
            const pg = i + 1
            const extraIds = pgIds[pg] || []
            const id = pg.toString()
            return <div key={`slide-${pg}`} className={index.slide}>
                {extraIds.map(id => <a id={id} key={`id-${id}`} />)}
                <a id={id} href={`#${pg}`} onClick={smoothScrollTo(id)}>
                    <Image
                        src={src(pg)}
                        alt={`Slide ${pg}`}
                        width={width}
                        height={height}
                        layout="responsive"
                        loading="lazy"
                    />
                </a>
            </div>
        })
    }</div>
}

const Home: NextPage = () => {
    const { publicRuntimeConfig: config } = getConfig()
    const { basePath = "" } = config
    // console.log("config:", config)

    const wards = [
        { name: "Ward A", pg: 59, id: "ward-a", },
        { name: "Ward B", pg: 69, id: "ward-b", },
        { name: "Ward C", pg: 81, id: "ward-c", },
        { name: "Ward D", pg: 93, id: "ward-d", },
        { name: "Ward E", pg: 103, id: "ward-e", },
        { name: "Ward F", pg: 113, id: "ward-f", },
    ]
    const menus: Menu[] = [
        { name: "Top", id: "top", },
        { name: "Vision", id: "vision+goals", pg: 6 },
        { name: "Public Input", id: "public-input", pg: 26, },
        { name: "Streets", id: "streets-for-cycling", pg: 46, },
        { name: "Map", id: "map", pg: 53, },
        { name: "Wards", id: "wards", sections: wards, },
        { name: "Equity", id: "beyond-infrastructure", pg: 128, },
        { name: "Implementation", id: "funding+implementation", pg: 158, },
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
    const url = "https://bikejc.github.io/bike-master-plan"
    return (
        <div id={"top"} className={styles.container}>
            <Head
                title={"Jersey City Bicycle Master Plan"}
                description={"The Let’s Ride JC Bicycle Master Plan is intended to help our community build safer streets for everyone."}
                url={url}
                thumbnail={`${url}/screenshot.png`}
            />

            <Nav id={navId} menus={menus}>
                <a href={"https://github.com/bikejc/bike-master-plan"} className={nav.menu} style={{ padding: 0 }} target={"_blank"} rel={"noreferrer"}>
                    <Image alt={"GitHub logo"} src={`${basePath}/gh-wb.png`} width={48} height={48} />
                </a>
            </Nav>
            <div className={index.intro}>
                <h1 className={styles.title}>Jersey City Bicycle Master Plan</h1>
                <p>Adapted from <a href={"https://cdn5-hosted.civiclive.com/UserFiles/Servers/Server_6189660/File/Community/Transportation/LetsRideJCMasterPlan-FinalDraft%206.16.19_09_30.pdf\n"}>the JC Bike Master Plan PDF</a> (available from <a href={"https://www.jerseycitynj.gov/cityhall/infrastructure"}>the JC Dept of Infrastructure&apos;s website</a>, under &quot;Plans&quot;).</p>
                <p>That PDF is ≈72MB, and a bit unwieldy to scroll through or deep-link into, so here it is as a series of images. Click each image for a permalink, or use the menu to jump between sections.</p>
            </div>
            <Slides
                numSlides={168}
                src={pg => `${basePath}/img/bmp-${pg.toString().padStart(3, '0')}.png`}
                pgIds={pgIds}
                width={1651}
                height={1275}
            />
        </div>
    )
}

export default Home
