import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function MainLayout() {
    return (
        <div className="relative">
            <div className="sticky top-0" style={{ zIndex: 88989 }}>
                <NavBar />
            </div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeContent />}>

                    </Route>
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    )
}