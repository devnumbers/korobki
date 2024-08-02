import './App.css'
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

function App() {

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
    )
}

export default App
