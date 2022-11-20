import {useEffect, useState} from "react";

export function toggleHamburger(id: string, open?: boolean) {
    const x = document.getElementById(id);
    if (!x) return;
    open = open || (open === undefined && !x.classList.contains("open"))
    if (open) {
        x.classList.add("open")
    } else {
        x.classList.remove("open")
    }
}

export type Section = {
    name: string
    id: string
    pg?: string
}
export type Menu = {
    sections?: Section[]
} & Section

export function Nav({ id, menus }: { id: string, menus: Menu[] }) {
    const [scrollY, setScrollY] = useState(0);
    const [clickScroll, setClickScroll] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            const nav = document?.getElementById(id)
            if (!nav) return
            const curScrollY = window.scrollY;
            // console.log("scroll:", scrollY, "→", curScrollY, "clickScroll:", clickScroll)
            if (scrollY && !clickScroll && curScrollY > scrollY) {
                // Scroll down
                nav.style.top = "-50px";
            } else {
                nav.style.top = "0";
            }
            setScrollY(curScrollY);
            setClickScroll(false)
        }
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [ clickScroll, setClickScroll, scrollY, setScrollY ]);

    return (
        <div id={id} className={"topnav"} onClick={() => { console.log("click"); setClickScroll(true) }}>
            <button key={"hamburger"} className="icon" onClick={() => toggleHamburger(id)}>&#9776;</button>
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
