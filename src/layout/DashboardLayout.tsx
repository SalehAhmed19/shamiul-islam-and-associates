// import Heading from "@/components/ui/Headings/Heading";
// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
// import AppSideBar from "@/dashboard/AppSideBar";
// import { Toaster } from "react-hot-toast";
// import { Outlet } from "react-router-dom";

// export default function DashboardLayout() {
//     return (
//         <div>
//             <SidebarProvider>
//                 <AppSideBar />
//                 <SidebarTrigger />
//                 <Outlet />
//             </SidebarProvider>
//             <Toaster />
//         </div>
//     )
// }

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSideBar from "@/dashboard/AppSideBar";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
    return (
        <SidebarProvider>
            {/* ১. সাইডবার সবসময় ফিক্সড থাকবে */}
            <AppSideBar />

            {/* ২. মেইন কন্টেন্ট এরিয়া (ট্রিগার + ডাইনামিক পেজ) */}
            <main className="w-full">
                {/* ট্রিগার বাটনটি উপরে রাখার জন্য */}
                <div className="h-16 p-2 border-b bg-background sticky top-0 z-10 flex items-center">
                    <SidebarTrigger />
                </div>

                {/* ডাইনামিক সাব-রাউটগুলো এখানে রেন্ডার হবে */}
                <div className="p-4 bg-gray-50">
                    <Outlet />
                </div>
            </main>

            <Toaster />
        </SidebarProvider>
    )
}