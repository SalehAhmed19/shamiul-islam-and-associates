import DashboardLayout from "@/layout/DashboardLayout";
import { SignIn, useUser } from "@clerk/clerk-react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const { isLoaded, isSignedIn, user } = useUser();

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    if (!isSignedIn) {
        return <div className="flex justify-center items-center h-screen w-full">
            {/* এখানে সরাসরি Clerk এর SignIn কম্পোনেন্ট কল করা হয়েছে */}
            <SignIn />
        </div>
    }

    // চেক করুন ইউজারের রোল 'admin' কিনা (যদি আপনি role setup করে থাকেন)
    if (user?.publicMetadata?.role !== "admin") {
        // যদি এডমিন না হয়, তবে হোম পেজে পাঠিয়ে দিন
        return <Navigate to="/" replace />;
    }

    return <DashboardLayout />;
};

export default ProtectedRoute;