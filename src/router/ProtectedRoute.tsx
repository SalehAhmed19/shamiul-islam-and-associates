import { SignedOut, SignIn, useUser } from "@clerk/clerk-react";
import type { ReactNode } from "react";
import toast from "react-hot-toast";
import { Navigate, useLocation } from "react-router-dom";

interface ProtectedRouteProps {
    children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const location = useLocation();
    const { isLoaded, isSignedIn, user } = useUser();

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    if (!isSignedIn) {
        return <div className="flex justify-center items-center h-screen w-full"><SignIn forceRedirectUrl={location.pathname} /></div>;
    }

    // চেক করুন ইউজারের রোল 'admin' কিনা (যদি আপনি role setup করে থাকেন)
    if (user?.publicMetadata?.role !== "admin") {
        // যদি এডমিন না হয়, তবে হোম পেজে পাঠিয়ে দিন
        return <>
            {toast.error("You are not authorized to access this page!")}
            <Navigate to="/" replace />
            <SignedOut />
        </>;
    }

    return <>{children}</>;
};

export default ProtectedRoute;