// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { icons, images } from "../../assets/assets";
// import { motion, AnimatePresence } from "framer-motion";
// import { navbarVariants } from "@/motions/motions";
// import LanguageSwitcher from "../ui/LanguageSwitcher";
// import { useTranslation } from "react-i18next";

// export default function Navbar() {
//   const { t, i18n } = useTranslation();
//   const { pathname } = useLocation();
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   // Scroll logic
//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Close mobile menu on route change
//   useEffect(() => {
//     setIsMobileMenuOpen(false);
//   }, [pathname]);

//   const navLinks = ["home", "about", "services", "blogs", "news", "contact"];

//   return (
//     <motion.nav
//       variants={navbarVariants}
//       initial="initial"
//       animate="animate"
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
//         i18n.language === "bn" ? "font-bengali" : "font-english"
//       } ${
//         isScrolled
//           ? "bg-black/80 backdrop-blur-md py-3 shadow-2xl"
//           : "bg-transparent py-5"
//       }`}
//     >
//       <div className="container flex items-center justify-between px-4 mx-auto md:px-6 lg:px-8">
//         {/* --- LOGO Changed--- */}
//         <Link to="/" className="flex items-center gap-2 group shrink-0">
//           <img
//             src={images.logoV2}
//             alt="logo"
//             className="w-8 h-8 transition-transform duration-300 group-hover:scale-110 md:w-20 md:h-20"
//           />
//           <h1 className="text-sm font-bold tracking-tight text-white uppercase sm:text-base lg:text-lg">
//             {t("nav_logo")}
//           </h1>
//         </Link>

//         {/* --- DESKTOP MENU --- */}
//         <div className="hidden md:block">
//           <ul className="flex items-center gap-5 lg:gap-8">
//             {navLinks.map((item) => (
//               <motion.li
//                 key={item}
//                 variants={navbarVariants}
//                 whileHover="menuHover"
//                 className="relative"
//               >
//                 <Link
//                   to={item === "home" ? "/" : `/${item}`}
//                   className={`text-sm lg:text-base font-bold uppercase transition-colors hover:text-[#dbb671] ${
//                     pathname === (item === "home" ? "/" : `/${item}`)
//                       ? "text-[#dbb671]"
//                       : "text-white"
//                   }`}
//                 >
//                   {t(`nav_${item}`)}
//                 </Link>
//                 {/* Active Link Underline */}
//                 {pathname === (item === "home" ? "/" : `/${item}`) && (
//                   <motion.div
//                     layoutId="underline"
//                     className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#dbb671]"
//                   />
//                 )}
//               </motion.li>
//             ))}
//           </ul>
//         </div>

//         {/* --- RIGHT ACTIONS (DESKTOP) --- */}
//         <div className="items-center hidden gap-4 md:flex lg:gap-8">
//           <div className="flex items-center gap-2 px-4 py-2 border rounded-full bg-white/10 backdrop-blur-sm border-white/20">
//             <img src={icons.call} alt="call" className="w-4 h-4" />
//             <span className="text-xs font-bold tracking-tighter text-white lg:text-sm">
//               {t("nav_phone_number")}
//             </span>
//           </div>
//           <LanguageSwitcher />
//           {/* <LogoSvg /> */}
//         </div>

//         {/* --- MOBILE TOGGLE --- */}
//         <button
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           className="p-2 text-white transition-colors rounded-lg md:hidden hover:bg-white/10"
//         >
//           <div className="relative w-6 h-5">
//             <span
//               className={`absolute block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 top-2" : "top-0"}`}
//             />
//             <span
//               className={`absolute block w-6 h-0.5 bg-white top-2 transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`}
//             />
//             <span
//               className={`absolute block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 top-2" : "top-4"}`}
//             />
//           </div>
//         </button>
//       </div>

//       {/* --- MOBILE MENU (AnimatePresence for smooth entry/exit) --- */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className="absolute left-0 w-full border-t bg-black/95 backdrop-blur-2xl border-white/10 md:hidden top-full"
//           >
//             <ul className="flex flex-col items-center gap-6 py-10">
//               {navLinks.map((item) => (
//                 <li key={item} className="w-full text-center">
//                   <Link
//                     to={item === "home" ? "/" : `/${item}`}
//                     onClick={() => setIsMobileMenuOpen(false)}
//                     className="block text-xl font-bold text-white uppercase transition-colors hover:text-[#dbb671]"
//                   >
//                     {t(`nav_${item}`)}
//                   </Link>
//                 </li>
//               ))}
//               <div className="flex flex-col items-center w-3/4 gap-6 pt-6 border-t border-white/10">
//                 <div className="flex items-center gap-2 text-white">
//                   <img src={icons.call} alt="call" className="w-5 h-5" />
//                   <span className="font-bold">{t("nav_phone_number")}</span>
//                 </div>
//                 <LanguageSwitcher />
//               </div>
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// }
// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { icons, images } from "../../assets/assets";
// import { motion, AnimatePresence } from "framer-motion";
// import { navbarVariants } from "@/motions/motions";
// import LanguageSwitcher from "../ui/LanguageSwitcher";
// import { useTranslation } from "react-i18next";

// export default function Navbar() {
//   const { t, i18n } = useTranslation();
//   const { pathname } = useLocation();
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   // Scroll logic
//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Close mobile menu on route change
//   useEffect(() => {
//     setIsMobileMenuOpen(false);
//   }, [pathname]);

//   // Auto-close mobile menu if window is resized to desktop width
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Prevent background scrolling when mobile menu is open
//   useEffect(() => {
//     if (isMobileMenuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [isMobileMenuOpen]);

//   const navLinks = ["home", "about", "services", "blogs", "news", "contact"];

//   return (
//     <motion.nav
//       variants={navbarVariants}
//       initial="initial"
//       animate="animate"
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
//         i18n.language === "bn" ? "font-bengali" : "font-english"
//       } ${
//         isScrolled || isMobileMenuOpen
//           ? "bg-black/90 backdrop-blur-lg py-3 shadow-2xl"
//           : "bg-transparent py-4 lg:py-6"
//       }`}
//     >
//       <div className="container flex items-center justify-between px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
//         {/* --- LOGO --- */}
//         <Link
//           to="/"
//           className="z-50 flex items-center gap-2 group shrink-0 lg:gap-3"
//         >
//           <img
//             src={images.logoV2}
//             alt="logo"
//             className="object-contain w-10 h-10 transition-transform duration-300 group-hover:scale-105 sm:w-12 sm:h-12 lg:w-16 lg:h-16"
//           />
//           <h1 className="text-sm font-bold tracking-tight text-white uppercase whitespace-nowrap sm:text-base lg:text-lg xl:text-xl">
//             {t("nav_logo")}
//           </h1>
//         </Link>

//         {/* --- DESKTOP MENU --- */}
//         <div className="justify-center flex-1 hidden lg:flex">
//           <ul className="flex items-center gap-6 xl:gap-8">
//             {navLinks.map((item) => {
//               const isActive =
//                 pathname === (item === "home" ? "/" : `/${item}`);
//               return (
//                 <motion.li
//                   key={item}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="relative"
//                 >
//                   <Link
//                     to={item === "home" ? "/" : `/${item}`}
//                     className={`text-sm xl:text-base font-semibold uppercase tracking-wide transition-colors duration-200 hover:text-[#dbb671] ${
//                       isActive ? "text-[#dbb671]" : "text-white/90"
//                     }`}
//                   >
//                     {t(`nav_${item}`)}
//                   </Link>
//                   {/* Active Link Underline */}
//                   {isActive && (
//                     <motion.div
//                       layoutId="desktop-underline"
//                       className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-[#dbb671] rounded-full"
//                       transition={{
//                         type: "spring",
//                         bounce: 0.2,
//                         duration: 0.6,
//                       }}
//                     />
//                   )}
//                 </motion.li>
//               );
//             })}
//           </ul>
//         </div>

//         {/* --- RIGHT ACTIONS (DESKTOP) --- */}
//         <div className="items-center hidden gap-4 shrink-0 lg:flex">
//           {/* Changed to an 'a' tag so it's clickable for calling */}
//           <a
//             href="tel:+1234567890" // Remember to map this properly if dynamic
//             className="flex items-center gap-2 px-4 py-2 transition-all border rounded-full group bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-white/30"
//           >
//             <img
//               src={icons.call}
//               alt="call"
//               className="w-4 h-4 transition-transform group-hover:scale-110"
//             />
//             <span className="text-sm font-bold tracking-tight text-white whitespace-nowrap">
//               {t("nav_phone_number")}
//             </span>
//           </a>
//           <LanguageSwitcher />
//         </div>

//         {/* --- MOBILE TOGGLE --- */}
//         <button
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           className="z-50 p-2 -mr-2 text-white transition-colors rounded-lg lg:hidden hover:bg-white/10 focus:outline-none"
//           aria-label="Toggle Menu"
//         >
//           <div className="relative w-6 h-5">
//             <span
//               className={`absolute block w-6 h-[2px] rounded-full bg-white transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 top-2" : "top-0"}`}
//             />
//             <span
//               className={`absolute block w-6 h-[2px] rounded-full bg-white top-2 transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`}
//             />
//             <span
//               className={`absolute block w-6 h-[2px] rounded-full bg-white transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 top-2" : "top-4"}`}
//             />
//           </div>
//         </button>
//       </div>

//       {/* --- MOBILE MENU --- */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "100vh" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3, ease: "easeInOut" }}
//             className="absolute left-0 flex flex-col w-full overflow-hidden border-t border-white/10 bg-black/95 backdrop-blur-2xl lg:hidden top-full"
//           >
//             <div className="flex-1 px-4 py-8 pb-32 overflow-y-auto">
//               <ul className="flex flex-col items-center gap-6">
//                 {navLinks.map((item, index) => {
//                   const isActive =
//                     pathname === (item === "home" ? "/" : `/${item}`);
//                   return (
//                     <motion.li
//                       key={item}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: index * 0.05 + 0.1 }}
//                       className="w-full text-center"
//                     >
//                       <Link
//                         to={item === "home" ? "/" : `/${item}`}
//                         onClick={() => setIsMobileMenuOpen(false)}
//                         className={`block text-2xl font-bold uppercase tracking-wider transition-colors py-2 ${
//                           isActive
//                             ? "text-[#dbb671]"
//                             : "text-white hover:text-[#dbb671]"
//                         }`}
//                       >
//                         {t(`nav_${item}`)}
//                       </Link>
//                     </motion.li>
//                   );
//                 })}
//               </ul>

//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.4 }}
//                 className="flex flex-col items-center w-full max-w-xs gap-6 pt-8 mx-auto mt-8 border-t border-white/10"
//               >
//                 <a
//                   href="tel:+1234567890"
//                   className="flex items-center justify-center w-full gap-3 py-3 text-white transition-colors border rounded-full bg-white/5 hover:bg-white/10 border-white/10"
//                 >
//                   <img src={icons.call} alt="call" className="w-5 h-5" />
//                   <span className="font-bold tracking-wider">
//                     {t("nav_phone_number")}
//                   </span>
//                 </a>
//                 <LanguageSwitcher />
//               </motion.div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// }
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        i18n.language === "bn" ? "font-bengali" : "font-english"
      } ${
        isScrolled || isMobileMenuOpen
          ? "bg-black/90 backdrop-blur-lg py-3 shadow-2xl"
          : "bg-transparent py-4 lg:py-6"
      }`}
    >
      {/* Max width slightly increased and padding adjusted for better fitting */}
      <div className="container flex items-center justify-between px-4 mx-auto sm:px-6 lg:px-4 xl:px-8 max-w-[1400px]">
        {/* --- LOGO --- */}
        <Link
          to="/"
          className="z-50 flex items-center gap-2 group shrink-0 lg:gap-2 xl:gap-3"
        >
          <img
            src={images.logoV2}
            alt="logo"
            className="object-contain w-10 h-10 transition-transform duration-300 group-hover:scale-105 sm:w-12 sm:h-12 lg:w-10 lg:h-10 xl:w-16 xl:h-16"
          />
          {/* Logo Text scaled down on lg to prevent overlap */}
          <h1 className="text-sm font-bold tracking-tight text-white uppercase whitespace-nowrap sm:text-base lg:text-[13px] xl:text-lg">
            {t("nav_logo")}
          </h1>
        </Link>

        {/* --- DESKTOP MENU --- */}
        {/* Removed flex-1 to prevent forcing overlap, added mx-auto */}
        <div className="justify-center hidden mx-auto lg:flex lg:px-2 xl:px-4">
          <ul className="flex items-center lg:gap-4 xl:gap-8">
            {navLinks.map((item) => {
              const isActive =
                pathname === (item === "home" ? "/" : `/${item}`);
              return (
                <motion.li
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <Link
                    to={item === "home" ? "/" : `/${item}`}
                    className={`lg:text-xs xl:text-base font-semibold uppercase tracking-wide transition-colors duration-200 hover:text-[#dbb671] ${
                      isActive ? "text-[#dbb671]" : "text-white/90"
                    }`}
                  >
                    {t(`nav_${item}`)}
                  </Link>
                  {/* Active Link Underline */}
                  {isActive && (
                    <motion.div
                      layoutId="desktop-underline"
                      className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-[#dbb671] rounded-full"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </motion.li>
              );
            })}
          </ul>
        </div>

        {/* --- RIGHT ACTIONS (DESKTOP) --- */}
        <div className="items-center hidden gap-2 shrink-0 lg:flex xl:gap-4">
          <a
            href="tel:+8801711602369"
            className="flex items-center gap-1.5 px-3 py-2 xl:px-4 xl:gap-2 transition-all border rounded-full group bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-white/30"
          >
            <img
              src={icons.call}
              alt="call"
              className="w-3.5 h-3.5 xl:w-4 xl:h-4 transition-transform group-hover:scale-110"
            />
            {/* Text size responsive fix */}
            <span className="text-[11px] xl:text-sm font-bold tracking-tight text-white whitespace-nowrap">
              {t("nav_phone_number")}
            </span>
          </a>
          <LanguageSwitcher />
        </div>

        {/* --- MOBILE TOGGLE --- */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="z-50 p-2 -mr-2 text-white transition-colors rounded-lg lg:hidden hover:bg-white/10 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <div className="relative w-6 h-5">
            <span
              className={`absolute block w-6 h-[2px] rounded-full bg-white transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 top-2" : "top-0"}`}
            />
            <span
              className={`absolute block w-6 h-[2px] rounded-full bg-white top-2 transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute block w-6 h-[2px] rounded-full bg-white transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 top-2" : "top-4"}`}
            />
          </div>
        </button>
      </div>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute left-0 flex flex-col w-full overflow-hidden border-t border-white/10 bg-black/95 backdrop-blur-2xl lg:hidden top-full"
          >
            <div className="flex-1 px-4 py-8 pb-32 overflow-y-auto">
              <ul className="flex flex-col items-center gap-6">
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
                        className={`block text-2xl font-bold uppercase tracking-wider transition-colors py-2 ${
                          isActive
                            ? "text-[#dbb671]"
                            : "text-white hover:text-[#dbb671]"
                        }`}
                      >
                        {t(`nav_${item}`)}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col items-center w-full max-w-xs gap-6 pt-8 mx-auto mt-8 border-t border-white/10"
              >
                <a
                  href="tel:+8801711602369"
                  className="flex items-center justify-center w-full gap-3 py-3 text-white transition-colors border rounded-full bg-white/5 hover:bg-white/10 border-white/10"
                >
                  <img src={icons.call} alt="call" className="w-5 h-5" />
                  <span className="font-bold tracking-wider">
                    {t("nav_phone_number")}
                  </span>
                </a>
                <LanguageSwitcher />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
