import { useEffect, useState } from "react";
import { Users } from "lucide-react";
import { axiosPublic } from "@/utils/axiosInstance";

const TotalVisitors = () => {
    const [visitors, setVisitors] = useState<number>(0);
    const [isVisible, setIsVisible] = useState(false); // এনিমেশনের জন্য

    useEffect(() => {
        const fetchVisitors = async () => {
            try {
                const hasVisited = localStorage.getItem("hasVisitedSite");
                let increment = false;

                if (!hasVisited) {
                    increment = true;
                    localStorage.setItem("hasVisitedSite", "true");
                }

                const response = await axiosPublic.get(`/stats/visitors?increment=${increment}`);
                setVisitors(response.data.totalVisitors);
                setIsVisible(true); // ডাটা লোড হলে দেখাবে

            } catch (error) {
                console.error("Failed to fetch visitors", error);
            }
        };

        fetchVisitors();
    }, []);

    if (!isVisible) return null; // লোড না হওয়া পর্যন্ত হাইড থাকবে

    return (
        <div
            className="fixed bottom-5 left-5 z-50 flex items-center gap-3 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-[#604B33]/20 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-default"
        >
            {/* Icon Box */}
            <div className="p-1.5 bg-[#604B33] rounded-full text-white shadow-sm">
                <Users size={16} />
            </div>

            {/* Text Content */}
            <div className="flex flex-col leading-none pr-1">
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                    Total Visitors
                </span>
                {/* টেক্সট কালার পরিবর্তন করেছি কারণ ব্যাকগ্রাউন্ড সাদা */}
                <span className="text-base font-extrabold text-[#604B33]">
                    {visitors.toLocaleString()}
                </span>
            </div>
        </div>
    );
};

export default TotalVisitors;