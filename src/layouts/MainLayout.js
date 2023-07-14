import Footer from "../components/layout/Footer"
import NavBar from "../components/layout/NavBar"
import LandingPage from "../pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function MainLayout() {
    return (
        <div className="relative">
            <div className="sticky top-0" style={{ zIndex: 88989 }}>
                <NavBar />
            </div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />}>
                    </Route>
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    )
}