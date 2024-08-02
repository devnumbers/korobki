import {useRef, useState} from "react";
import {RightNav} from "../RightNav/RightNav.jsx";
import {Squash as Hamburger} from 'hamburger-react';
import useSmoothScroll from "../../SmoothScroll.jsx";

export const Burger = () => {
    const [isOpen, setOpen] = useState(false);

    const headerRef = useRef(null);

    useSmoothScroll(headerRef);

    return (
        <div ref={headerRef}>
            <div className={`burger`}>
                <Hamburger toggled={isOpen} toggle={setOpen} distance="lg" size={20} rounded/>
            </div>
            <RightNav open={isOpen} setOpen={setOpen}/>
        </div>
    )
}
