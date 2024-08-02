import yandex from '../../assets/images/yandex.png';


import {BtnBox} from "../BtnBox/BtnBox.jsx";
import {useRef} from "react";
import useSmoothScroll from "../SmoothScroll.jsx";

export const Main = () => {
    const headerRef = useRef(null);

    useSmoothScroll(headerRef);
    return (
        <div className="main">
            <div className="container-page">
                <div className="content">
                    <div className="text regular_h2">
                        Аренда боксов<br/>
                        для хранения вещей<br/>
                        в Краснодаре
                    </div>
                    <div className={'desc regular_h3'}>
                        улица Ягодина, 50/1
                    </div>
                    <div className={'buttons'} ref={headerRef}>
                        <BtnBox/>
                        <div className={'btn-yandex'}>
                            <a target="_blank" href={'https://yandex.ru/maps/35/krasnodar/house/ulitsa_im_yagodina_m_d_50_1/Z0AYdgdlSEYAQFpvfX1xdHRqZg==/?ll=39.005072%2C45.105942&z=17.13' }><img src={yandex} className={'image'} alt="yandex"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}