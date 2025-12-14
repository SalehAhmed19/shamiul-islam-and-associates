import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Toaster } from 'react-hot-toast';

export default function MainLayout() {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
            <Toaster />
        </div>
    )
}