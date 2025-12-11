import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/HomePage/Home";
import About from "../pages/AboutPage/About";
import Service from "../pages/ServicePage/Service";
import Blogs from "../pages/BlogsPage/Blogs";
import Contact from "../pages/ContactPage/Contact";

export const routes = createBrowserRouter([
    {
        path: "/", element: <MainLayout />, children: [
            { path: "/", element: <Home /> },
            { path: "/about", element: <About /> },
            { path: "/services", element: <Service /> },
            { path: "/blogs", element: <Blogs /> },
            { path: "/contact", element: <Contact /> }
        ]
    }
])