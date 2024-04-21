import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage/HomePage"
import Contactpage from "./components/ContactPage/ContactPage"
import RecentlyVisited from "./context/RecentlyVisited"
import { useEffect, useState } from "react"
import LoginPage from "./components/LoginPage/LoginPage"


function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem("recentlyVisited")) || false)
    const [recentlyVisited, setRecentlyVisited] = useState(JSON.parse(localStorage.getItem("recentlyVisited")) || [{
        name: { title: 'Mr', first: 'Slaviša', last: 'Kuzmanović' },
        phone: "038-6315-988",
        picture: { large: "https://randomuser.me/api/portraits/men/3.jpg" },
        email: "slavisa.kuzmanovic@example.com",
        dob: { age: 37, date: "1986-06-17T10:05:58.199Z" },
        location: {
            city: "Bojnik",
            coordinates: { latitude: '-19.2172', longitude: '139.6357' },
            country: "Serbia",
            state: "Moravica",
            street: { number: 3010, name: 'Davidovićev Sokak' }
        }
    }])

    useEffect(() => {
        localStorage.setItem("recentlyVisited", JSON.stringify(recentlyVisited))
        localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn))

    }, [recentlyVisited , isLoggedIn])

    return (
        <>
            <RecentlyVisited.Provider value={{
                recentlyVisited,
                setRecentlyVisited,
            }}>
                {(isLoggedIn) ?
                    <Router>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/contact" element={<Contactpage />} />
                        </Routes>
                    </Router>
                    :
                    <LoginPage setIsLoggedIn={setIsLoggedIn} />
                }

            </RecentlyVisited.Provider>
        </>
    )

}

export default App