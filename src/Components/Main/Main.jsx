import yandex from '../../assets/images/yandex.png';


import {Header} from "../Header/Header.jsx";
import {BtnBox} from "../BtnBox/BtnBox.jsx";

export const Main = () => {
    return (
        <div className="main">
            <div className="container-page">
                <Header/>
                <div className="content">
                    <div className="text regular_h2">
                        Аренда боксов<br/>
                        для хранения вещей<br/>
                        в Краснодаре
                    </div>
                    <div className={'desc regular_h3'}>
                        улица Ягодина, 50/1
                    </div>
                    <div className={'buttons'}>
                        <BtnBox/>
                        <div className={'btn-yandex'}>
                            <img src={yandex} className={'image'} alt="yandex"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}