import {useState} from "react";
import {RightNav} from "../RightNav/RightNav.jsx";
import {Squash as Hamburger} from 'hamburger-react'


export const Burger = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <div className={`burger`}>
                <Hamburger toggled={isOpen} toggle={setOpen} distance="lg" size={20} rounded/>
            </div>
            <RightNav open={isOpen}/>
        </>
    )
}