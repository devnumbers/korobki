import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import {useEffect} from 'react';
import {Main} from "./Components/Main/Main.jsx";
import {Description} from "./Components/Description/Description.jsx";
import {Choice} from "./Components/Choice/Choice.jsx";
import {Stay} from "./Components/Stay/Stay.jsx";
import {Reviews} from "./Components/Reviews/Reviews.jsx";
import {QA} from "./Components/QA/QA.jsx";
import {Question} from "./Components/Question/Question.jsx";
import {Cart} from "./Components/Cart/Cart.jsx";
import {Footer} from "./Components/Footer/Footer.jsx";
import {SL} from "./Components/Slider/Slider.jsx";
import {Header} from "./Components/Header/Header.jsx";
import axios from "axios";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AppContent/>}/>
                <Route path="/initialize" element={<Initialize/>}/>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

function AppContent() {
    return (
        <>
            <Header/>
            <Main/>
            <Description/>
            <Choice/>
            <Stay/>
            <SL/>
            <Reviews/>
            <QA/>
            <Question/>
            <Cart/>
            <Footer/>
        </>
    );
}

function Initialize() {

    const baseUrl = "http://localhost:8000/form"

    useEffect(() => {
        axios
            .post(baseUrl, {
                title: "Hello World!",
                body: "This is a new post about Timeweb Cloud."
            }).then(r => {
            console.log(r.data.message)
            window.location.href = '/';
        })
    }, []);

    return (
        <div>
            <p>Отправка формы...</p>
        </div>
    );
}

export default App;
