import {forwardRef} from "react";

export const BtnBox = forwardRef(({},ref) => {
    return (
        <div className={'btn-box'}>
            <div className={'regular_h4'} ref={ref}>
                <a href={'#box'}>Посмотреть боксы</a>
            </div>
        </div>
    )
})