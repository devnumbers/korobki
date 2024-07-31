import './App.css'
import {Main} from "./Components/Main/Main.jsx";
import {Description} from "./Components/Description/Description.jsx";
import {Choice} from "./Components/Choice/Choice.jsx";
import {Stay} from "./Components/Stay/Stay.jsx";
import {Reviews} from "./Components/Reviews/Reviews.jsx";
import {QA} from "./Components/QA/QA.jsx";

function App() {

    return (
        <>
            <Main/>
            <Description/>
            <Choice/>
            <Stay/>
            <Reviews/>
            <QA/>
        </>
    )
}

export default App
