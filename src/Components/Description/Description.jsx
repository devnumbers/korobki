import image1 from '../../assets/images/description/height.png';
import image2 from '../../assets/images/description/time.png';
import image3 from '../../assets/images/description/secure.png';
import image4 from '../../assets/images/description/durability.png';

export const Description = () => {
    return (
        <div className="container-page description">
            <div className="title regular_h1">
                Боксы — это&nbsp;удобно и&nbsp;безопасно
            </div>

            <div className="content">
                <div className="items">
                    <div className="item">
                        <div className="text regular_h3">
                            Высота&nbsp;боксов<br/>
                            2,5 метра
                        </div>
                        <div>
                            <img src={image1} className={'image'} alt={'image'}/>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text regular_h3">
                            Вы сможете попасть
                            к&nbsp;складу в любое время
                            дня и ночи
                        </div>
                        <img src={image2} className={'image'} alt={'image'}/>
                    </div>
                    <div className="item">
                        <div className="text regular_h3">
                            Система видеонаблюдения круглосуточно следит за&nbsp;складом
                        </div>
                        <img src={image3} className={'image'} alt={'image'}/>
                    </div>
                    <div className="item">
                        <div className="text regular_h3">
                            Боксы
                            из&nbsp;прочного
                            металлического
                            каркаса
                        </div>
                        <img src={image4} className={'image'} alt={'image'}/>
                    </div>
                </div>
            </div>

        </div>
    )
}