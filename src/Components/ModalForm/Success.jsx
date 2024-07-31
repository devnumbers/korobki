import React from 'react';
import ReactDOM from 'react-dom';

export const SuccessModal = ({ show, onClose }) => {
    if (!show) {
        return null;
    }

    const handleOverlayClick = (e) => {
        e.stopPropagation();
        onClose();
    };

    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    return ReactDOM.createPortal(
        <div className="modal-wrapper" onClick={handleOverlayClick}>
            <div className="modal" onClick={handleModalClick}>
                <div className="title regular_h3">
                    Заявка отправлена
                </div>
                <div className="footer" onClick={onClose}>
                    <div className="button regular_h4" >
                        Закрыть
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};
