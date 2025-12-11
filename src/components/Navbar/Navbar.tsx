import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { icons } from "../../assets/assets";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Handle Scroll Effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 text-white font-bold transition-all duration-300 ease-in-out ${isScrolled
                ? "bg-black/60 backdrop-blur-lg py-3 shadow-md"
                : "bg-transparent py-5"
                }`}
        >
            <div className="mx-auto flex items-center justify-between px-4 md:px-8 lg:px-16">

                {/* --- LOGO --- */}
                <div>
                    <Link to={"/"} className="flex items-center gap-2 cursor-pointer">
                        {/* Added w-8/h-8 for responsive image sizing */}
                        <img src={icons.logo} alt="logo" className="w-8 h-8 object-contain" />
                        <h5 className="uppercase text-sm md:text-base lg:text-lg">
                            Shamiul Islam & Associates
                        </h5>
                    </Link>
                </div>

                {/* --- DESKTOP MENU (Hidden on Mobile) --- */}
                <div className="hidden md:block">
                    <ul className="flex gap-6 lg:gap-8 text-sm lg:text-base">
                        <li className="hover:text-gray-300 transition-colors"><Link to={"/"}>Home</Link></li>
                        <li className="hover:text-gray-300 transition-colors"><Link to={"/about"}>About</Link></li>
                        <li className="hover:text-gray-300 transition-colors"><Link to={"/services"}>Services</Link></li>
                        <li className="hover:text-gray-300 transition-colors"><Link to={"/blogs"}>Blogs</Link></li>
                        <li className="hover:text-gray-300 transition-colors"><Link to={"/contact"}>Contact</Link></li>
                    </ul>
                </div>

                {/* --- CONTACT INFO (Hidden on Mobile) --- */}
                <div className="hidden md:flex items-center gap-2">
                    <img src={icons.call} alt="call-icon" className="w-5 h-5" />
                    <h5 className="text-sm lg:text-base">+880 1711 602 369</h5>
                </div>

                {/* --- MOBILE HAMBURGER BUTTON --- */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-white focus:outline-none"
                    >
                        {isMobileMenuOpen ? (
                            // Close Icon (X)
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            // Menu Icon (Hamburger)
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* --- MOBILE MENU DROPDOWN --- */}
            {/* Using overflow-hidden to animate height could be added, but simple conditional rendering is safest for now */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-black/90 backdrop-blur-xl absolute top-full left-0 w-full shadow-lg border-t border-gray-700">
                    <ul className="flex flex-col items-center gap-6 py-8 text-lg">
                        <li onClick={() => setIsMobileMenuOpen(false)}><Link to={"/"}>Home</Link></li>
                        <li onClick={() => setIsMobileMenuOpen(false)}><Link to={"/about"}>About</Link></li>
                        <li onClick={() => setIsMobileMenuOpen(false)}><Link to={"/services"}>Services</Link></li>
                        <li onClick={() => setIsMobileMenuOpen(false)}><Link to={"/blogs"}>Blogs</Link></li>
                        <li onClick={() => setIsMobileMenuOpen(false)}><Link to={"/contact"}>Contact</Link></li>

                        {/* Mobile Contact Display */}
                        <li className="flex items-center gap-2 mt-4 text-gray-300">
                            <img src={icons.call} alt="call-icon" className="w-5 h-5" />
                            <span>+880 1711 602 369</span>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}