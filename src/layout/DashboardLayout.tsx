import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
    return (
        <div>
            <Outlet />
            <Toaster />
        </div>
    )
}