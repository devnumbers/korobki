import React, { useState } from 'react';
import ReactDOM from 'react-dom';

export const Form = ({ show, onCloseButtonClick, size, onSuccess }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [duration, setDuration] = useState('');
    const [errors, setErrors] = useState({
        name: false,
        phone: false,
        duration: false
    });

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

    const handleSubmit = () => {
        const newErrors = {
            name: !name,
            phone: !phone,
            duration: !duration
        };
        setErrors(newErrors);

        if (!newErrors.name && !newErrors.phone && !newErrors.duration) {
            console.log({ name, phone, duration });
            onCloseButtonClick();
            onSuccess();
        }
    };

    const handleFocus = (field) => {
        setErrors(prevErrors => ({
            ...prevErrors,
            [field]: false
        }));
    };

    return ReactDOM.createPortal(
        <div className="modal-wrapper" onClick={handleOverlayClick}>
            <div className="modal" onClick={handleModalClick}>
                <div className="title regular_h3">
                    Аренда {data[size]}&nbsp;бокса
                </div>
                <div className="body">
                    <input
                        type="text"
                        className={`input regular_h4 ${errors.name ? 'error' : ''}`}
                        placeholder="Имя"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onFocus={() => handleFocus('name')}
                    />
                    <input
                        type="tel"
                        className={`input regular_h4 ${errors.phone ? 'error' : ''}`}
                        placeholder="Номер"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        onFocus={() => handleFocus('phone')}
                    />
                    <input
                        type="text"
                        className={`input regular_h4 ${errors.duration ? 'error' : ''}`}
                        placeholder="Срок аренды"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        onFocus={() => handleFocus('duration')}
                    />
                </div>
                <div className="desc">
                    Нажимая на кнопку «Отправить заявку», вы соглашаетесь
                    с <span>политикой конфиденциальности</span> и <span>пользовательским соглашением</span>
                </div>
                <div className="footer" onClick={handleSubmit}>
                    <div className="button regular_h4">
                        Отправить заявку
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};
