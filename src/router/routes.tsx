import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

// Layouts and Protected Route can remain static or be lazy loaded too. 
// Keeping layouts static prevents layout flickering.
import MainLayout from "../layout/MainLayout";
import DashboardLayout from "../layout/DashboardLayout";
import ProtectedRoute from "./ProtectedRoute";
import HomeLoading from "@/components/ui/Loadings/HomeLoading";


// Lazy Imports for Public Pages
const Home = lazy(() => import("../pages/HomePage/Home"));
const About = lazy(() => import("../pages/AboutPage/About"));
const Service = lazy(() => import("../pages/ServicePage/Service"));
const Blogs = lazy(() => import("../pages/BlogsPage/Blogs"));
const Blog = lazy(() => import("../pages/BlogsPage/Blog"));
const Contact = lazy(() => import("../pages/ContactPage/Contact"));

// Lazy Imports for Dashboard Pages
const AddBlogs = lazy(() => import("../dashboard/AddBlogs"));
// Note: Keeping your mixed path styles (@/ vs ../) exactly as provided
const ManageBlogs = lazy(() => import("@/dashboard/ManageBlogs"));
const EditBlogs = lazy(() => import("@/dashboard/EditBlogs"));
const AddAssociates = lazy(() => import("@/dashboard/AddAssociates"));
const ManageAssociates = lazy(() => import("@/dashboard/ManageAssociates"));
const EditAssociate = lazy(() => import("@/dashboard/EditAssociate"));


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Suspense fallback={<HomeLoading />}><Home /></Suspense>
            },
            {
                path: "/about",
                element: <Suspense fallback={<HomeLoading />}><About /></Suspense>
            },
            {
                path: "/services",
                element: <Suspense fallback={<HomeLoading />}><Service /></Suspense>
            },
            {
                path: "/blogs",
                element: <Suspense fallback={<HomeLoading />}><Blogs /></Suspense>
            },
            {
                path: "/blogs/:id",
                element: <Suspense fallback={<HomeLoading />}><Blog /></Suspense>
            },
            {
                path: "/contact",
                element: <Suspense fallback={<HomeLoading />}><Contact /></Suspense>
            },
        ]
    },
    {
        path: "/dashboard/secure/admin-panel",
        // ProtectedRoute এবং Layout সাধারণভাবেই লোড হবে
        element: (
            <ProtectedRoute>
                <DashboardLayout />
            </ProtectedRoute>
        ),
        children: [
            {
                index: true,
                element: <Suspense fallback={<HomeLoading />}><AddBlogs /></Suspense>
            },
            {
                path: "manage-blogs",
                element: <Suspense fallback={<HomeLoading />}><ManageBlogs /></Suspense>
            },
            {
                path: "manage-blogs/edit-blogs/:id",
                element: <Suspense fallback={<HomeLoading />}><EditBlogs /></Suspense>
            },
            {
                path: "add-associates",
                element: <Suspense fallback={<HomeLoading />}><AddAssociates /></Suspense>
            },
            {
                path: "manage-associates",
                element: <Suspense fallback={<HomeLoading />}><ManageAssociates /></Suspense>
            },
            {
                path: "manage-associates/edit-associates/:_id",
                element: <Suspense fallback={<HomeLoading />}><EditAssociate /></Suspense>
            }
        ]
    }
]);