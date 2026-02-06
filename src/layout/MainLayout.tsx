import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from "react";
import HomeLoading from "@/components/ui/Loadings/HomeLoading";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { icons } from "@/assets/assets";
// import ReactPixel from 'react-facebook-pixel';
import { AnimatePresence, motion } from "framer-motion";
import TotalVisitors from "@/components/TotalVisitors";

export default function MainLayout() {
    const [loading, setLoading] = useState<boolean>(true);
    const location = useLocation();

    // useEffect(() => {
    //     const pixelId = import.meta.env.VITE_PIXEL_ID;
    //     if (pixelId && typeof pixelId === 'string') {
    //         try {
    //             ReactPixel.init(pixelId, undefined, { autoConfig: true, debug: false });
    //             ReactPixel.pageView();
    //         } catch (err) {
    //             console.error("Pixel Error", err);
    //         }
    //     }
    // }, [location.pathname]);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 4000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <HomeLoading />;

    // নিশ্চিত করুন ফোন নাম্বার একটি স্ট্রিং
    const phoneNumber = String(import.meta.env.VITE_PHONE_NUMBER || "");

    return (
        <div>
            <Navbar />
            <AnimatePresence mode="wait">
                <motion.div
                    key={String(location.key)} // Explicit conversion
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                >
                    <Outlet />
                </motion.div>
            </AnimatePresence>
            <Footer />
            <Toaster />
            <FloatingWhatsApp
                avatar={icons.logo}
                accountName="Shamiul Islam and Associates"
                phoneNumber={phoneNumber}
                chatMessage="Hey, how can I help you today?"
                darkMode
            />

            <TotalVisitors />

        </div>
    );
}