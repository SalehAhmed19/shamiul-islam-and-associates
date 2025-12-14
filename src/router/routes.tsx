import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/HomePage/Home";
import About from "../pages/AboutPage/About";
import Service from "../pages/ServicePage/Service";
import Blogs from "../pages/BlogsPage/Blogs";
import Contact from "../pages/ContactPage/Contact";
import DashboardLayout from "../layout/DashboardLayout";
import Blog from "../pages/BlogsPage/Blog";
import AddBlogs from "../dashboard/AddBlogs";
import ProtectedRoute from "./ProtectedRoute";
import ManageBlogs from "@/dashboard/ManageBlogs";
import EditBlogs from "@/dashboard/EditBlogs";

export const routes = createBrowserRouter([
    {
        path: "/", element: <MainLayout />, children: [
            { path: "/", element: <Home /> },
            { path: "/about", element: <About /> },
            { path: "/services", element: <Service /> },
            { path: "/blogs", element: <Blogs /> },
            { path: "/blogs/:id", element: <Blog /> },
            { path: "/contact", element: <Contact /> },
        ]
    },
    {
        path: "/dashboard/secure/admin-panel", element: <ProtectedRoute><DashboardLayout /></ProtectedRoute>, children: [
            { index: true, element: <AddBlogs /> },
            { path: "manage-blogs", element: <ManageBlogs /> },
            { path: "manage-blogs/edit-blogs/:id", element: <EditBlogs /> }
        ]
    }
])