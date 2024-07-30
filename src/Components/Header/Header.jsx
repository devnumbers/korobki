import {Logo} from "../Logo/Logo.jsx";
import {Buttons} from "./Buttons/Buttons.jsx";
import {SpecialBtn} from "./SpecialBtn/SpecialBtn.jsx";
import {Burger} from "./Burger/Burger.jsx";

export const Header = () => {
    return (
        <div className={'mobile-header'}>
            <div className={'header'}>
                <Logo/>
                <Buttons/>
                <SpecialBtn/>
            </div>
            <Burger/>
        </div>
    )
}