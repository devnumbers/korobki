import {Button} from "../Button/Button.jsx";
import useSmoothScroll from "../../SmoothScroll.jsx";
import {useRef} from "react";


export const Buttons = () => {

    const headerRef = useRef(null);

    useSmoothScroll(headerRef);

    return (
        <div className={'buttons'} ref={headerRef}>
            <Button href="#box" text={'Боксы'}/>
            <Button href="#reviews" text={'Отзывы'}/>
            <Button href="#qa" text={'Вопросы'}/>
            <Button href="#question" text={'Контакты'}/>
        </div>
    )
}