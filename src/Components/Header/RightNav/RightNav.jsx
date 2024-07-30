import {Logo} from "../../Logo/Logo.jsx";


export const RightNav = ({open}) => {

    return (
        <div className={`nav ${open ? 'active' : ''}`}>
            <Logo/>
            <div className={'desc'}>
                <div className={'text regular_h5'}>+7 (992) 402-52-32</div>
                <div className={'text regular_h5'}>faq@getbox.com</div>
                <div className={'text regular_h5'}>улица Ягодина, 50/1</div>
            </div>
            <div className={'content'}>
                <div className={'text regular_h5'}>Боксы</div>
                <div className={'text regular_h5'}>Отзывы</div>
                <div className={'text regular_h5'}>Вопросы</div>
                <div className={'text regular_h5'}>Вопросы</div>
                <div className={'text regular_h5'}>Что нельзя<br/>
                    хранить на складе
                </div>
                <div className={'text regular_h5'}><hr/></div>
                <div className={'text regular_h5'}>Правила аренды</div>
                <div className={'text regular_h5'}>Договор хранения</div>
                <div className={'text regular_h5'}>Политика конфиденциальности</div>
                <div className={'text regular_h5'}>Пользовательское соглашение</div>
            </div>
        </div>
    )
}