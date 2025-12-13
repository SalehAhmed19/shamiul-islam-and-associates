import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/HomePage/Home";
import About from "../pages/AboutPage/About";
import Service from "../pages/ServicePage/Service";
import Blogs from "../pages/BlogsPage/Blogs";
import Contact from "../pages/ContactPage/Contact";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import Blog from "../pages/BlogsPage/Blog";
import AddBlogs from "../dashboard/AddBlogs";

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
        path: "/dashboard", element: <DashboardLayout />, children: [
            { path: "/dashboard", element: <Dashboard /> },
            { path: "secure/admin-panel", element: <AddBlogs /> }
        ]
    }
])