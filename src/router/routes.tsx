import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/HomePage/Home";
import About from "../pages/AboutPage/About";

export const routes = createBrowserRouter([
    {
        path: "/", element: <MainLayout />, children: [
            { path: "/", element: <Home /> }, { path: "/about", element: <About /> }
        ]
    }
])