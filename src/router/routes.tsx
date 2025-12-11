import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/HomePage/Home";

export const routes = createBrowserRouter([
    {
        path: "/", element: <MainLayout />, children: [
            { path: "/", element: <Home /> }
        ]
    }
])