import logo from '../../assets/images/footer/logo2.png'


export const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <div className="container-page footer">
            <div className="content">
                <div className="title">
                    <div className="logo">
                        <img src={logo} className={'icon'} alt="logo"/>
                        <div className="text regular_h1">GetBox</div>
                    </div>
                    <div className="button regular_h4">
                        <div>Посмотреть боксы</div>
                    </div>
                </div>
                <div className={'pc'}>
                    <div className="body">
                        <div className="desc regular_h3">
                            <div>+7 (992) 402-52-32</div>
                            <div>faq@getbox.com</div>
                        </div>
                        <div className="text">
                            <div className={'item'}>
                                <div className={'top regular_h3'}>
                                    Адрес
                                </div>
                                <div className={'bottom regular_h4'}>
                                    Краснодар, улица Ягодина, 50/1
                                </div>
                            </div>
                            <div className={'item'}>
                                <div className={'top regular_h3'}>
                                    График работы
                                    склада
                                </div>
                                <div className={'bottom regular_h4'}>
                                    Круглосуточно
                                </div>
                            </div>
                            <div className={'item'}>
                                <div className={'top regular_h3'}>
                                    График работы ресепшена
                                </div>
                                <div className={'bottom regular_h4'}>
                                    Ежедневно с 9:00 до 21:00
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="reference">
                        <div className={'text regular_h5'}>
                            <div className={'item'}>Правила аренды</div>
                            <div className={'item'}>Договор хранения</div>
                            <div className={'item'}>Политика конфиденциальности</div>
                            <div className={'item'}>Пользовательское соглашение</div>
                        </div>
                        <div className={'copyright'}>© GetBox, {currentYear}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};
