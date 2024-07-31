import ReactDOM from 'react-dom';

export const Form = ({show, onCloseButtonClick, size}) => {
    if (!show) {
        return null;
    }

    const data = {
        s: "Маленького",
        m: "Среднего",
        l: "Большого"
    };

    const handleOverlayClick = (e) => {
        e.stopPropagation();
        onCloseButtonClick();
    };

    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    return ReactDOM.createPortal(
        <div className="modal-wrapper" onClick={handleOverlayClick}>
            <div className="modal" onClick={handleModalClick}>

                <div className={'title regular_h3'}>
                    Аренда {data[size]}&nbsp;бокса
                </div>
                <div className="body">
                    <input type={'text'} className={'input regular_h4'} placeholder={'Имя'}/>
                    <input type={'tel'} className={'input regular_h4'} placeholder={'Номер'}/>
                    <input type={'text'} className={'input regular_h4'} placeholder={'Срок аренды'}/>
                </div>
                <div className={'desc'}>
                    Нажимая на кнопку «Отправить заявку», вы соглашаетесь
                    с <span>политикой конфиденциальности</span> и <span>пользовательским соглашением</span>
                </div>

                <div className="footer">
                    <div className={'button regular_h4'}>Отправить заявку</div>
                    {/*<button onClick={onCloseButtonClick}>Close Modal</button>*/}
                </div>
            </div>
        </div>
        , document.body
    );
};
