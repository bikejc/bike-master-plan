import {MouseEvent} from "react";

export function smoothScrollTo(id: string) {
    return (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        const scrollTop = document.getElementById(id)?.offsetTop
        //console.log(`${id}: scroll to:`, scrollTop)
        window.scrollTo({ top: scrollTop, behavior: "smooth" })
        history.pushState(null,"",`#${id}`);
    }
}
