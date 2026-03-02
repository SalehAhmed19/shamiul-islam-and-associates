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
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Auto-close mobile menu if window is resized to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = ["home", "about", "services", "blogs", "news", "contact"];

  return (
    <motion.nav
      variants={navbarVariants}
      initial="initial"
      animate="animate"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        i18n.language === "bn" ? "font-bengali" : "font-english"
      } ${
        isScrolled || isMobileMenuOpen
          ? "bg-[#111827]/95 backdrop-blur-xl py-2.5 sm:py-3 shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-b border-white/5"
          : "bg-transparent py-4 lg:py-6"
      }`}
    >
      <div className="container flex items-center justify-between px-4 mx-auto sm:px-6 lg:px-8 max-w-[1400px]">
        {/* =========================================
            1. LOGO SECTION (Fully Responsive)
            ========================================= */}
        <Link
          to="/"
          className="z-50 flex items-center gap-2.5 sm:gap-3 group shrink-0"
        >
          <div className="p-[2px] sm:p-[3px] transition-all duration-500 border-2 rounded-full border-[#dbb671]/40 group-hover:border-[#dbb671] group-hover:shadow-[0_0_15px_rgba(219,182,113,0.3)] shrink-0">
            <div className="flex items-center justify-center p-1 sm:p-1.5 bg-linear-to-b from-[#111827]/95 to-black/95 rounded-full shadow-inner">
              <img
                src={images.logoLight}
                alt="logo"
                // সাইজগুলো সব ডিভাইসের জন্য নিখুঁতভাবে অ্যাডজাস্ট করা হয়েছে
                className="object-contain transition-transform duration-500 w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10 xl:w-11 xl:h-11 group-hover:scale-110"
              />
            </div>
          </div>
          {/* খুব ছোট মোবাইলে টেক্সট যেন না কাটে তাই text-xs করা হয়েছে */}
          <h1 className="text-[11px] xs:text-xs sm:text-sm lg:text-[13px] xl:text-base font-extrabold tracking-widest text-white uppercase whitespace-nowrap drop-shadow-md">
            {t("nav_logo")}
          </h1>
        </Link>

        {/* =========================================
            2. DESKTOP MENU (Hidden on < 1024px)
            ========================================= */}
        {/* lg (1024px) স্ক্রিনে যাতে চাপাচাপি না হয় তাই gap-4 এবং xl এ gap-8 */}
        <div className="justify-center hidden lg:flex lg:px-2 xl:px-4">
          <ul className="flex items-center lg:gap-4 xl:gap-8">
            {navLinks.map((item) => {
              const isActive =
                pathname === (item === "home" ? "/" : `/${item}`);
              return (
                <motion.li
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group/link"
                >
                  <Link
                    to={item === "home" ? "/" : `/${item}`}
                    className={`lg:text-xs xl:text-sm font-bold uppercase tracking-[0.15em] transition-colors duration-300 hover:text-[#dbb671] ${
                      isActive ? "text-[#dbb671]" : "text-gray-200"
                    }`}
                  >
                    {t(`nav_${item}`)}
                  </Link>
                  {/* Active Link Underline */}
                  {isActive ? (
                    <motion.div
                      layoutId="desktop-underline"
                      className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#dbb671] rounded-full"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  ) : (
                    <div className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#dbb671]/50 rounded-full transition-all duration-300 group-hover/link:w-full" />
                  )}
                </motion.li>
              );
            })}
          </ul>
        </div>

        {/* =========================================
            3. RIGHT ACTIONS (DESKTOP ONLY)
            ========================================= */}
        <div className="items-center hidden gap-3 shrink-0 lg:flex xl:gap-5">
          <a
            href="tel:+8801711602369"
            className="flex items-center lg:gap-1.5 xl:gap-2 lg:px-3 xl:px-4 py-2 transition-all duration-300 border rounded-full group bg-white/5 backdrop-blur-md border-white/10 hover:bg-[#dbb671]/10 hover:border-[#dbb671]/50"
          >
            <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#dbb671]/20 shrink-0">
              <img
                src={icons.call}
                alt="call"
                className="w-3 h-3 transition-transform group-hover:scale-110"
              />
            </div>
            <span className="lg:text-[10px] xl:text-xs font-bold tracking-widest text-white uppercase whitespace-nowrap">
              {t("nav_phone_number")}
            </span>
          </a>
          <LanguageSwitcher />
        </div>

        {/* =========================================
            4. MOBILE TOGGLE HAMBURGER BUTTON
            ========================================= */}
        {/* টাচ টার্গেট বড় রাখার জন্য p-2.5 দেওয়া হয়েছে */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="z-50 p-2.5 -mr-2 text-white transition-colors rounded-lg lg:hidden hover:bg-white/10 focus:outline-none shrink-0"
          aria-label="Toggle Menu"
        >
          <div className="relative w-6 h-5">
            <span
              className={`absolute block w-6 h-[2px] rounded-full bg-[#dbb671] transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 top-2" : "top-0"}`}
            />
            <span
              className={`absolute block w-6 h-[2px] rounded-full bg-white top-2 transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute block w-6 h-[2px] rounded-full bg-[#dbb671] transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 top-2" : "top-4"}`}
            />
          </div>
        </button>
      </div>

      {/* =========================================
          5. MOBILE MENU (FULLSCREEN GLASSMORPHISM)
          ========================================= */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            // height: 100dvh (Dynamic Viewport Height) এর জন্য একটি ট্রিক, সাফারিতে ভালো কাজ করে
            className="absolute left-0 flex flex-col w-full h-screen overflow-hidden border-t border-white/5 bg-[#111827]/98 backdrop-blur-3xl lg:hidden top-full"
          >
            {/* pb-safe-bottom এবং যথেষ্ট প্যাডিং দেওয়া হয়েছে যাতে স্ক্রল করতে সমস্যা না হয় */}
            <div className="flex-1 px-6 py-8 pb-32 overflow-y-auto sm:py-12">
              <ul className="flex flex-col items-center gap-6 sm:gap-8">
                {navLinks.map((item, index) => {
                  const isActive =
                    pathname === (item === "home" ? "/" : `/${item}`);
                  return (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                      className="w-full text-center"
                    >
                      <Link
                        to={item === "home" ? "/" : `/${item}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block text-lg sm:text-xl font-bold uppercase tracking-[0.2em] transition-colors py-2 ${
                          isActive
                            ? "text-[#dbb671]"
                            : "text-gray-300 hover:text-white"
                        }`}
                      >
                        {t(`nav_${item}`)}
                        {isActive && (
                          <span className="block w-8 h-1 mx-auto mt-2 rounded-full bg-[#dbb671]"></span>
                        )}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col items-center w-full max-w-xs gap-5 pt-8 mx-auto mt-8 border-t sm:gap-6 sm:pt-10 sm:mt-10 border-white/10"
              >
                <a
                  href="tel:+8801711602369"
                  className="flex items-center justify-center w-full gap-3 py-3.5 sm:py-4 text-white transition-colors border rounded-xl bg-white/5 hover:bg-[#dbb671]/20 border-white/10 hover:border-[#dbb671]/50"
                >
                  <img src={icons.call} alt="call" className="w-5 h-5" />
                  <span className="text-sm font-bold tracking-widest uppercase">
                    {t("nav_phone_number")}
                  </span>
                </a>

                {/* Language Switcher for Mobile */}
                <div className="flex items-center justify-center w-full py-2">
                  <LanguageSwitcher />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
