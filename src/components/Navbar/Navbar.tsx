// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { icons } from "../../assets/assets";
// import { motion } from "framer-motion";
// import { navbarVariants } from "@/motions/motions";
// import LanguageSwitcher from "../ui/LanguageSwitcher";
// import { useTranslation } from "react-i18next";

// export default function Navbar() {
//   const { t } = useTranslation();
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   // Handle Scroll Effect
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <motion.nav
//       variants={navbarVariants}
//       initial="initial"
//       animate="animate"
//       className={`fixed top-0 left-0 w-full z-50 text-white font-bold transition-all duration-300 ease-in-out ${
//         isScrolled
//           ? "bg-black/60 backdrop-blur-lg py-3 shadow-md"
//           : "bg-transparent py-5"
//       }`}
//     >
//       <div className="container flex items-center justify-between px-4 mx-auto md:px-0">
//         {/* --- LOGO --- */}
//         <div>
//           <Link to={"/"} className="flex items-center gap-2 cursor-pointer">
//             {/* Added w-8/h-8 for responsive image sizing */}
//             <img
//               src={icons.logo}
//               alt="logo"
//               className="object-contain w-8 h-8"
//             />
//             <h5 className="text-sm uppercase md:text-base lg:text-lg">
//               {t("nav_logo")}
//             </h5>
//           </Link>
//         </div>

//         {/* --- DESKTOP MENU (Hidden on Mobile) --- */}
//         <div className="hidden md:block">
//           <ul className="flex gap-6 text-sm lg:gap-8 lg:text-base">
//             <motion.li
//               variants={navbarVariants}
//               whileHover={"menuHover"}
//               className="transition-colors hover:text-gray-300"
//             >
//               <Link to={"/"}>{t("nav_home")}</Link>
//             </motion.li>
//             <motion.li
//               variants={navbarVariants}
//               whileHover={"menuHover"}
//               className="transition-colors hover:text-gray-300"
//             >
//               <Link to={"/about"}>{t("nav_about")}</Link>
//             </motion.li>
//             <motion.li
//               variants={navbarVariants}
//               whileHover={"menuHover"}
//               className="transition-colors hover:text-gray-300"
//             >
//               <Link to={"/services"}>{t("nav_services")}</Link>
//             </motion.li>
//             <motion.li
//               variants={navbarVariants}
//               whileHover={"menuHover"}
//               className="transition-colors hover:text-gray-300"
//             >
//               <Link to={"/blogs"}>{t("nav_blogs")}</Link>
//             </motion.li>
//             <motion.li
//               variants={navbarVariants}
//               whileHover={"menuHover"}
//               className="transition-colors hover:text-gray-300"
//             >
//               <Link to={"/contact"}>{t("nav_contact")}</Link>
//             </motion.li>
//           </ul>
//         </div>

//         {/* --- CONTACT INFO (Hidden on Mobile) --- */}
//         <div className="items-center hidden gap-2 md:flex">
//           <img src={icons.call} alt="call-icon" className="w-5 h-5" />
//           <h5 className="text-sm lg:text-base">+880 1711 602 369</h5>
//         </div>
//         <div className="items-center hidden gap-2 md:flex">
//           <LanguageSwitcher />
//         </div>

//         {/* --- MOBILE HAMBURGER BUTTON --- */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="text-white focus:outline-none"
//           >
//             {isMobileMenuOpen ? (
//               // Close Icon (X)
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-6 h-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             ) : (
//               // Menu Icon (Hamburger)
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-6 h-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             )}
//           </button>
//         </div>
//       </div>

//       {/* --- MOBILE MENU DROPDOWN --- */}
//       {/* Using overflow-hidden to animate height could be added, but simple conditional rendering is safest for now */}
//       {isMobileMenuOpen && (
//         <div className="absolute left-0 w-full border-t border-gray-700 shadow-lg md:hidden bg-black/90 backdrop-blur-xl top-full">
//           <ul className="flex flex-col items-center gap-6 py-8 text-lg">
//             <li onClick={() => setIsMobileMenuOpen(false)}>
//               <Link to={"/"}>{t("nav_home")}</Link>
//             </li>
//             <li onClick={() => setIsMobileMenuOpen(false)}>
//               <Link to={"/about"}>{t("nav_about")}</Link>
//             </li>
//             <li onClick={() => setIsMobileMenuOpen(false)}>
//               <Link to={"/services"}>{t("nav_services")}</Link>
//             </li>
//             <li onClick={() => setIsMobileMenuOpen(false)}>
//               <Link to={"/blogs"}>{t("nav_blogs")}</Link>
//             </li>
//             <li onClick={() => setIsMobileMenuOpen(false)}>
//               <Link to={"/contact"}>{t("nav_contact")}</Link>
//             </li>

//             {/* Mobile Contact Display */}
//             <li className="flex items-center gap-2 mt-4 text-gray-300">
//               <img src={icons.call} alt="call-icon" className="w-5 h-5" />
//               <span>+880 1711 602 369</span>
//             </li>
//             <li className="flex items-center gap-2 mt-4 text-gray-300">
//               <LanguageSwitcher />
//             </li>
//           </ul>
//         </div>
//       )}
//     </motion.nav>
//   );
// }
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { icons } from "../../assets/assets";
import { motion } from "framer-motion";
import { navbarVariants } from "@/motions/motions";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation(); // i18n ও নিয়ে আসলাম
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      variants={navbarVariants}
      initial="initial"
      animate="animate"
      // ভাষা অনুযায়ী font-bengali অথবা font-english সেট হবে
      className={`fixed top-0 left-0 w-full z-50 text-white transition-all duration-300 ease-in-out ${
        i18n.language === "bn"
          ? "font-bengali font-semibold"
          : "font-english font-bold"
      } ${
        isScrolled
          ? "bg-black/60 backdrop-blur-lg py-3 shadow-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between px-4 mx-auto md:px-0">
        {/* --- LOGO --- */}
        <div>
          <Link to={"/"} className="flex items-center gap-2 cursor-pointer">
            <img
              src={icons.logo}
              alt="logo"
              className="object-contain w-8 h-8"
            />
            <h5 className="text-sm uppercase md:text-base lg:text-lg">
              {t("nav_logo")}
            </h5>
          </Link>
        </div>

        {/* --- DESKTOP MENU --- */}
        <div className="hidden md:block">
          <ul className="flex gap-6 text-sm lg:gap-8 lg:text-base">
            {["home", "about", "services", "blogs", "contact"].map((item) => (
              <motion.li
                key={item}
                variants={navbarVariants}
                whileHover={"menuHover"}
                className="transition-colors hover:text-gray-300"
              >
                <Link to={item === "home" ? "/" : `/${item}`}>
                  {t(`nav_${item}`)}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* --- LANGUAGE & CONTACT --- */}
        <div className="items-center hidden gap-6 md:flex">
          <div className="flex items-center gap-2">
            <img src={icons.call} alt="call-icon" className="w-5 h-5" />
            <h5 className="text-sm lg:text-base">+880 1711 602 369</h5>
          </div>
          <LanguageSwitcher />
        </div>

        {/* --- MOBILE MENU BUTTON --- */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU DROPDOWN --- */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 w-full border-t border-gray-700 shadow-lg md:hidden bg-black/90 backdrop-blur-xl top-full">
          <ul className="flex flex-col items-center gap-6 py-8 text-lg">
            {["home", "about", "services", "blogs", "contact"].map((item) => (
              <li key={item} onClick={() => setIsMobileMenuOpen(false)}>
                <Link to={item === "home" ? "/" : `/${item}`}>
                  {t(`nav_${item}`)}
                </Link>
              </li>
            ))}
            <LanguageSwitcher />
          </ul>
        </div>
      )}
    </motion.nav>
  );
}
