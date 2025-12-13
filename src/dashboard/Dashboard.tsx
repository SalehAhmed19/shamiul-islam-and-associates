import { Link } from "react-router-dom";
import Heading from "../components/ui/Headings/Heading";
import { FaArrowRight } from "react-icons/fa6";

export default function Dashboard() {
    return (
        <div className="flex flex-col h-screen justify-center items-center gap-5">
            <Heading>Dashboard</Heading>
            <Link to={"/dashboard/secure/admin-panel"} className="text-white font-bold bg-[#604B33] px-4 py-2 rounded-md flex items-center gap-2 animate-bounce">Dive into admin panel <FaArrowRight /></Link>
        </div>
    )
}