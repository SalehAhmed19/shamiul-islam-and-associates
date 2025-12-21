import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from "react";
import HomeLoading from "@/components/ui/Loadings/HomeLoading";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { icons } from "@/assets/assets";
// import ReactPixel from 'react-facebook-pixel';

export default function MainLayout() {
    const [loading, setLoading] = useState<boolean>(true)


    // useEffect(() => {
    //     // এখানে আপনার নিজস্ব Pixel ID বসান
    //     const pixelId = 'YOUR_PIXEL_ID_HERE';

    //     const options = {
    //         autoConfig: true, // ঐচ্ছিক
    //         debug: true,     // ডেভেলপমেন্টের সময় true রাখতে পারেন
    //     };

    //     // পিক্সেল ইনিশিয়ালাইজ করা
    //     ReactPixel.init(pixelId, undefined, options);

    //     // পেজ ভিউ ট্র্যাক করা
    //     ReactPixel.pageView();
    // }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setLoading(false)
        }, 4000)
        return () => clearInterval(timer)
    }, [])

    if (loading) {
        return <HomeLoading />
    }
    const phoneNumber = import.meta.env.VITE_PHONE_NUMBER as string
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
            <Toaster />
            <FloatingWhatsApp
                avatar={icons.logo}
                accountName={"Shamiul Islam and Associates"}
                phoneNumber={phoneNumber}
                chatMessage="Hey, how can I help you today?"
                placeholder="Write your queries..."
                darkMode
            />
        </div>
    )
}