import getConfig from 'next/config'
import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import HomeCss from '../styles/Home.module.css'
import index from './index.module.css'
import {Menu, Nav} from "../components/nav";
import {smoothScrollTo} from "../components/scroll";

const navId = "nav"

type Slides = {
    numSlides: number
    src: (pg: number) => string
    pgIds: { [k: number]: string[] }
    width?: number
    height?: number
}
function Slides({ numSlides, src, pgIds, width, height, }: Slides) {
    return <>{
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
    }</>
}

const Home: NextPage = () => {
    const { publicRuntimeConfig: config } = getConfig()
    const { basePath = "" } = config
    // console.log("config:", config)

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

            <Nav id={navId} menus={menus} />

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
