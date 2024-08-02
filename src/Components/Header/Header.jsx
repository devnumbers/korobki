import {Logo} from "../Logo/Logo.jsx";
import {Buttons} from "./Buttons/Buttons.jsx";
import {SpecialBtn} from "./SpecialBtn/SpecialBtn.jsx";
import {Burger} from "./Burger/Burger.jsx";
import {useRef} from "react";
import useSmoothScroll from "../SmoothScroll.jsx";

export const Header = () => {

    const headerRef = useRef(null);

    useSmoothScroll(headerRef);

    return (
        <div className={'mobile-header'} ref={headerRef}>
            <div className={'header'}>
                <Logo/>
                <Buttons/>
                <SpecialBtn/>
            </div>
            <Burger/>
        </div>
    )
}