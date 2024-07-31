export const Choice = () => {

    return (
        <div className={'container-page choice'}>
            <div className="title regular_h1">
                Выберите бокс
            </div>
            <div className="content">
                <div className="box">
                    <div className={'block'}>
                        <div className="size regular_h2">S</div>
                        <div className="block-dimensions regular_h5">
                            <div className="block-size">
                                <span>1,5 м</span>
                                <span>2,5 м</span>
                            </div>
                            <div className="block-labels">
                                <span>Длина</span>
                                <span>Ширина</span>
                            </div>
                        </div>
                    </div>
                    <div className={'text'}>
                        <div className="desc regular_h4">
                            <div>Маленький</div>
                            <div>3, 75 м²</div>
                            <div>4 000 ₽ в месяц</div>
                        </div>
                        <div className="button regular_h5">
                            <div>Арендовать бокс</div>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className={'block'}>
                        <div className="size regular_h2">M</div>
                        <div className="block-dimensions regular_h5">
                            <div className="block-size">
                                <span>3 м </span>
                                <span>2,5 м</span>
                            </div>
                            <div className="block-labels">
                                <span>Длина</span>
                                <span>Ширина</span>
                            </div>
                        </div>
                    </div>
                    <div className={'text'}>
                        <div className="desc regular_h4">
                            <div>Маленький</div>
                            <div>7, 5 м²</div>
                            <div>8 000 ₽ в месяц</div>
                        </div>
                        <div className="button regular_h5">
                            <div>Арендовать бокс</div>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className={'block'}>
                        <div className="size regular_h2">L</div>
                        <div className="block-dimensions regular_h5">
                            <div className="block-size">
                                <span>6 м</span>
                                <span>2,5 м</span>
                            </div>
                            <div className="block-labels">
                                <span>Длина</span>
                                <span>Ширина</span>
                            </div>
                        </div>
                    </div>
                    <div className={'text'}>
                        <div className="desc regular_h4">
                            <div>Маленький</div>
                            <div>15 м²</div>
                            <div>15 000 ₽ в месяц</div>
                        </div>
                        <div className="button regular_h5">
                            <div>Арендовать бокс</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}