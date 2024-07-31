import React, {useRef, useState} from "react";
import close from '../../assets/images/qa/close.png'
import open from '../../assets/images/qa/open.png'

const data = [
    {
        question: "Есть ли тележка?",
        answer:
            "Да, предоставляем бесплатно"
    },
    {
        question: "Какой температурный режим?",
        answer:
            "Мы поддерживаем умеренную влажность. Постоянная температура 15°C"
    },
    {
        question: "Что если я не смогу попасть в кладовку?",
        answer:
            "Позвоните на наш номер +7 (992) 402-52-32 "
    },
    {
        question: "Как закрыть договор на аренду бокса?",
        answer:
            "Договор закроется автоматически, когда освободите бокс"
    }
];


const AccordionItem = ({question, answer, isOpen, onClick}) => {
    const contentHeight = useRef();
    return (
        <div className={`wrapper ${isOpen ? "active" : ""}`}>
            <div
                className={`question-container ${isOpen ? "active" : ""}`}
                onClick={onClick}
            >
                <div className="question-content regular_h3">{question}</div>
                <img src={`${isOpen ? open : close}` } className={`arrow`}/>
            </div>

            <div
                ref={contentHeight}
                className="answer-container"
                style={
                    isOpen
                        ? {height: contentHeight.current.scrollHeight}
                        : {height: "0px"}
                }
            >
                <div className="answer-content regular_h4">{answer}</div>
            </div>
        </div>
    );
};

export const QA = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="container-page qa" id={'faq'}>
            <div className="title regular_h2">
                Частые вопросы
            </div>
            <div className="content">
                {data.map((item, index) => (
                    <AccordionItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                        isOpen={activeIndex === index}
                        onClick={() => handleItemClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};
