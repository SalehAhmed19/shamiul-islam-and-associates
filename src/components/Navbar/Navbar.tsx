import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { icons, images } from "../../assets/assets";
import { motion, AnimatePresence } from "framer-motion";
import { navbarVariants } from "@/motions/motions";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll logic
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = ["home", "about", "services", "blogs", "contact"];

  return (
    <motion.nav
      variants={navbarVariants}
      initial="initial"
      animate="animate"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        i18n.language === "bn" ? "font-bengali" : "font-english"
      } ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md py-3 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between px-4 mx-auto md:px-6 lg:px-8">
        {/* --- LOGO --- */}
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <img
            src={images.logoV2}
            alt="logo"
            className="w-8 h-8 transition-transform duration-300 group-hover:scale-110 md:w-10 md:h-10"
          />
          <h1 className="text-sm font-bold tracking-tight text-white uppercase sm:text-base lg:text-lg">
            {t("nav_logo")}
          </h1>
        </Link>

        {/* --- DESKTOP MENU --- */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-5 lg:gap-8">
            {navLinks.map((item) => (
              <motion.li
                key={item}
                variants={navbarVariants}
                whileHover="menuHover"
                className="relative"
              >
                <Link
                  to={item === "home" ? "/" : `/${item}`}
                  className={`text-sm lg:text-base font-bold uppercase transition-colors hover:text-[#dbb671] ${
                    pathname === (item === "home" ? "/" : `/${item}`)
                      ? "text-[#dbb671]"
                      : "text-white"
                  }`}
                >
                  {t(`nav_${item}`)}
                </Link>
                {/* Active Link Underline */}
                {pathname === (item === "home" ? "/" : `/${item}`) && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#dbb671]"
                  />
                )}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* --- RIGHT ACTIONS (DESKTOP) --- */}
        <div className="items-center hidden gap-4 md:flex lg:gap-8">
          <div className="flex items-center gap-2 px-4 py-2 border rounded-full bg-white/10 backdrop-blur-sm border-white/20">
            <img src={icons.call} alt="call" className="w-4 h-4" />
            <span className="text-xs font-bold tracking-tighter text-white lg:text-sm">
              {t("nav_phone_number")}
            </span>
          </div>
          <LanguageSwitcher />
          {/* <LogoSvg /> */}
        </div>

        {/* --- MOBILE TOGGLE --- */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-white transition-colors rounded-lg md:hidden hover:bg-white/10"
        >
          <div className="relative w-6 h-5">
            <span
              className={`absolute block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 top-2" : "top-0"}`}
            />
            <span
              className={`absolute block w-6 h-0.5 bg-white top-2 transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 top-2" : "top-4"}`}
            />
          </div>
        </button>
      </div>

      {/* --- MOBILE MENU (AnimatePresence for smooth entry/exit) --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-0 w-full border-t bg-black/95 backdrop-blur-2xl border-white/10 md:hidden top-full"
          >
            <ul className="flex flex-col items-center gap-6 py-10">
              {navLinks.map((item) => (
                <li key={item} className="w-full text-center">
                  <Link
                    to={item === "home" ? "/" : `/${item}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-xl font-bold text-white uppercase transition-colors hover:text-[#dbb671]"
                  >
                    {t(`nav_${item}`)}
                  </Link>
                </li>
              ))}
              <div className="flex flex-col items-center w-3/4 gap-6 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-white">
                  <img src={icons.call} alt="call" className="w-5 h-5" />
                  <span className="font-bold">{t("nav_phone_number")}</span>
                </div>
                <LanguageSwitcher />
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
