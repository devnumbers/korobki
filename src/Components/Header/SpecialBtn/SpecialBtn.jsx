import {forwardRef} from "react";


export const SpecialBtn = forwardRef(({text,}, ref) => {
    return(
        <div className={'special-btn regular_h5'} >
            <a href={'#box'}>Арендовать</a>
        </div>
    )
})