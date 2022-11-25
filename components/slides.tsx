import index from "../pages/index.module.css";
import {smoothScrollTo} from "./scroll";
import Image from "next/image";

export type Slides = {
    numSlides: number
    src: (pg: number) => string
    pgIds: { [k: number]: string[] }
    width: number
    height: number
}
export function Slides({ numSlides, src, pgIds, width, height, }: Slides) {
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
