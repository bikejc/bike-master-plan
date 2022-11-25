import getConfig from 'next/config'
import type {NextPage} from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import index from './index.module.css'
import {Head} from "next-utils/head"
import {Nav} from "next-utils/nav";
import navCss from "next-utils/nav.css.js";
import {Slides} from "../components/slides";

const Home: NextPage = () => {
    const { publicRuntimeConfig: config } = getConfig()
    const { basePath = "" } = config
    // console.log("config:", config)
    console.log("navCss:", navCss)

    const wards = [
        { pg:  59, name:         "Ward A", id:                "ward-a",                   },
        { pg:  69, name:         "Ward B", id:                "ward-b",                   },
        { pg:  81, name:         "Ward C", id:                "ward-c",                   },
        { pg:  93, name:         "Ward D", id:                "ward-d",                   },
        { pg: 103, name:         "Ward E", id:                "ward-e",                   },
        { pg: 113, name:         "Ward F", id:                "ward-f",                   },
    ]
    const menus = [
        {          name:            "Top", id:                    "top",                  },
        { pg:   6, name:         "Vision", id:           "vision+goals",                  },
        { pg:  26, name:   "Public Input", id:           "public-input",                  },
        { pg:  46, name:        "Streets", id:    "streets-for-cycling",                  },
        { pg:  53, name:            "Map", id:                    "map",                  },
        {          name:          "Wards", id:                  "wards", sections: wards, },
        { pg: 128, name:         "Equity", id:  "beyond-infrastructure",                  },
        { pg: 158, name: "Implementation", id: "funding+implementation",                  },
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

            <Nav id={"nav"} menus={menus}>
                <a href={"https://github.com/bikejc/bike-master-plan"} className={`${navCss.menu} ${navCss.logo}`} target={"_blank"} rel={"noreferrer"}>
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
