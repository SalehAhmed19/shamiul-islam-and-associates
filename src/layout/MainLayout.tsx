import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from "react";
import HomeLoading from "@/components/ui/Loadings/HomeLoading";

export default function MainLayout() {
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const timer = setInterval(() => {
            setLoading(false)
        }, 4000)
        return () => clearInterval(timer)
    }, [])

    if (loading) {
        return <HomeLoading />
    }
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
            <Toaster />
        </div>
    )
}