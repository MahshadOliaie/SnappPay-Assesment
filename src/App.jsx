import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage/HomePage"
import Contactpage from "./components/ContactPage/ContactPage"


function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/contact" element={<Contactpage />} />
                </Routes>
            </Router>
        </>
    )

}

export default App