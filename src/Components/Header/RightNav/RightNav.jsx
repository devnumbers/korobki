import {Logo} from "../../Logo/Logo.jsx";
import {forwardRef} from "react";

export const RightNav = forwardRef(({open, setOpen}, ref) => {

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={`nav ${open ? 'active' : ''}`}>
            <Logo/>
            <div className={'desc'}>
                <div className={'text regular_h5'}>+7 (992) 402-52-32</div>
                <div className={'text regular_h5'}>hello@getboxx.ru</div>
                <div className={'text regular_h5'}>улица Ягодина, 50/1</div>
            </div>
            <div className={'content'}>
                <div className={'text regular_h5'}><a href={'#box'} onClick={handleClose}>Боксы</a></div>
                <div className={'text regular_h5'}><a href={'#reviews'} onClick={handleClose}>Отзывы</a></div>
                <div className={'text regular_h5'}><a href={'#qa'} onClick={handleClose}>Вопросы</a></div>
                <div className={'text regular_h5'}><a href={'#question'} onClick={handleClose}>Контакты</a></div>
                <div className={'text regular_h5'}><a href={'#not'} onClick={handleClose}>Что нельзя хранить на складе</a><br/>
                </div>
                <div className={'text regular_h5'}>
                    <hr/>
                </div>
                <div className={'text regular_h5'} onClick={handleClose}>Правила аренды</div>
                <div className={'text regular_h5'} onClick={handleClose}>Договор хранения</div>
                <div className={'text regular_h5'} onClick={handleClose}>Политика конфиденциальности</div>
                <div className={'text regular_h5'} onClick={handleClose}>Пользовательское соглашение</div>
            </div>
        </div>
    )
})
