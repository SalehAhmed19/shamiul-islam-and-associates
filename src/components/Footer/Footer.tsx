// // import { FaFacebookF, FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";
// // import { icons, images } from "../../assets/assets";
// // import { Link } from "react-router-dom";
// // import { motion } from "framer-motion";
// // import { footerVariants } from "@/motions/motions";
// // import TotalVisitors from "../TotalVisitors";

// // export default function Footer() {
// //     return (
// //         <motion.footer variants={footerVariants} initial="initial" whileInView="whileInView"
// //             style={{
// //                 backgroundImage: `url(${images.footer})`,
// //                 backgroundSize: "cover",
// //                 backgroundPosition: "center",
// //                 backgroundRepeat: "no-repeat"
// //             }}
// //             className="relative text-white"
// //         >
// //             {/* Overlay for better text readability on mobile/desktop */}
// //             <div className="absolute inset-0 bg-black/30"></div>

// //             {/* Added 'relative z-10' so content sits above the overlay */}
// //             <div className="relative z-10 container mx-auto px-5 pt-12 md:pt-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

// //                 {/* Logo Section spans 2 columns on large screens */}
// //                 <div className="col-span-1 space-y-6 md:col-span-2">
// //                     <div className="flex items-center gap-2">
// //                         <img src={icons.logo} alt="logo" className="object-contain w-10 h-10" />
// //                         <h5 className="text-base font-bold uppercase md:text-lg">Shamiul Islam & Associates</h5>
// //                     </div>
// //                     {/* Changed fixed w-1/2 to responsive width so it doesn't squash on mobile */}
// //                     <p className="w-full leading-relaxed text-gray-300 md:w-3/4 lg:w-1/2">
// //                         Dedicated to providing world-class legal solutions with a commitment to integrity and personalized attention. We empower our clients with the expert guidance needed to navigate complex legal landscapes with confidence.
// //                     </p>

// //                     <div className="flex items-center gap-2">
// //                         <a href="https://www.facebook.com/shamiul.associates/" className="h-8 w-8 bg-white hover:bg-[#dbb671] transition-colors flex justify-center items-center rounded-full text-black hover:text-white"><FaFacebookF /></a>
// //                         <a href="https://x.com/advprinceislam" className="h-8 w-8 bg-white hover:bg-[#dbb671] transition-colors flex justify-center items-center rounded-full text-black hover:text-white"><FaXTwitter /></a>
// //                         <a href="https://www.instagram.com/adv_shamiul/" className="h-8 w-8 bg-white hover:bg-[#dbb671] transition-colors flex justify-center items-center rounded-full text-black hover:text-white"><FaInstagram /></a>
// //                         <a href="https://www.linkedin.com/in/advprinceislam/" className="h-8 w-8 bg-white hover:bg-[#dbb671] transition-colors flex justify-center items-center rounded-full text-black hover:text-white"><FaLinkedin /></a>
// //                         <a href="https://www.youtube.com/AdvPrinceIslam" className="h-8 w-8 bg-white hover:bg-[#dbb671] transition-colors flex justify-center items-center rounded-full text-black hover:text-white"><FaYoutube /></a>
// //                     </div>
// //                 </div>

// //                 {/* Quick Links */}
// //                 <div className="space-y-4">
// //                     <h5 className="inline-block pb-2 text-base font-bold uppercase border-b border-gray-600 md:text-lg">Quick Links</h5>
// //                     <ul className="space-y-3 text-gray-300">
// //                         <li><Link to={"/"} className="hover:text-[#dbb671] transition-colors">Home</Link></li>
// //                         <li><Link to={"/about"} className="hover:text-[#dbb671] transition-colors">About</Link></li>
// //                         <li><Link to={"/services"} className="hover:text-[#dbb671] transition-colors">Services</Link></li>
// //                         <li><Link to={"/blogs"} className="hover:text-[#dbb671] transition-colors">Blogs</Link></li>
// //                         <li><Link to={"/contact"} className="hover:text-[#dbb671] transition-colors">Contact</Link></li>
// //                     </ul>
// //                 </div>

// //                 {/* Find Us */}
// //                 <div className="space-y-4">
// //                     <h5 className="inline-block pb-2 text-base font-bold uppercase border-b border-gray-600 md:text-lg">Find us</h5>
// //                     <div className="space-y-3 text-gray-300">
// //                         <p>Room No- B15,(3rd Floor), Nahar Complex, 25/1, Court House Street, Dhaka-1100, Bangladesh.</p>
// //                         <p className="font-semibold text-white">+880 1711 602 369</p>
// //                         <p>adv.prince.islam@gmail.com</p>
// //                     </div>
// //                 </div>

// //                 {/* Practice Areas */}
// //                 <div className="space-y-4">
// //                     <h5 className="inline-block pb-2 text-base font-bold uppercase border-b border-gray-600 md:text-lg">Practice Areas</h5>
// //                     <ul className="space-y-3 text-gray-300">
// //                         <li className="hover:text-[#dbb671] transition-colors cursor-pointer">Civil Law</li>
// //                         <li className="hover:text-[#dbb671] transition-colors cursor-pointer">Criminal Law</li>
// //                         <li className="hover:text-[#dbb671] transition-colors cursor-pointer">Family Law</li>
// //                         <li className="hover:text-[#dbb671] transition-colors cursor-pointer">Banking & Finance</li>
// //                         <li className="hover:text-[#dbb671] transition-colors cursor-pointer">Corporate Law</li>
// //                         <li className="hover:text-[#dbb671] transition-colors cursor-pointer">Cyber Law</li>
// //                     </ul>
// //                 </div>
// //             </div>

// //             {/* copyright */}
// //             <div className="relative z-10 flex flex-col items-center justify-center gap-2 p-5 mt-10 text-sm text-center border-t text-white/50 border-white/10">
// //                 <p>&copy; {new Date().getFullYear()} | <a href="https://www.facebook.com/adv.prince.islam/" target="_blank" className="font-bold hover:text-white">Shamiul Islam & Associates</a>. All rights reserved. | Developed by <a href="https://www.facebook.com/techxbureau" target="_blank" className="font-bold hover:text-white">Tech<span className="text-orange-500">X</span>bureau</a></p>
// //                 <TotalVisitors />
// //             </div>

// //         </motion.footer >
// //     )
// // }
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedin,
//   FaXTwitter,
//   FaYoutube,
// } from "react-icons/fa6";
// import { images } from "../../assets/assets";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { footerVariants } from "@/motions/motions";
// import TotalVisitors from "../TotalVisitors";
// import { useTranslation } from "react-i18next";

// export default function Footer() {
//   const { t, i18n } = useTranslation();

//   return (
//     <motion.footer
//       variants={footerVariants}
//       initial="initial"
//       whileInView="whileInView"
//       style={{
//         backgroundImage: `url(${images.footer})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//       className={`text-white relative ${i18n.language === "bn" ? "font-bengali" : "font-english"}`}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/30"></div>

//       <div className="relative z-10 container mx-auto px-5 pt-12 md:pt-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
//         {/* Logo Section */}
//         <div className="col-span-1 space-y-6 md:col-span-2">
//           <div className="flex items-center gap-2">
//             <img
//               src={images.logoV2}
//               alt="logo"
//               className="object-contain w-10 h-10"
//             />
//             <h5 className="text-base font-bold uppercase md:text-lg">
//               {t("nav_logo")}
//             </h5>
//           </div>
//           <p className="w-full leading-relaxed text-gray-300 md:w-3/4 lg:w-1/2">
//             {t("footer_desc")}
//           </p>

//           <div className="flex items-center gap-2">
//             <a
//               href="https://www.facebook.com/shamiul.associates/"
//               className="h-8 w-8 bg-white hover:bg-[#dbb671] transition-colors flex justify-center items-center rounded-full text-black hover:text-white"
//             >
//               <FaFacebookF />
//             </a>
//             <a
//               href="https://x.com/advprinceislam"
//               className="h-8 w-8 bg-white hover:bg-[#dbb671] transition-colors flex justify-center items-center rounded-full text-black hover:text-white"
//             >
//               <FaXTwitter />
//             </a>
//             <a
//               href="https://www.instagram.com/adv_shamiul/"
//               className="h-8 w-8 bg-white hover:bg-[#dbb671] transition-colors flex justify-center items-center rounded-full text-black hover:text-white"
//             >
//               <FaInstagram />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/advprinceislam/"
//               className="h-8 w-8 bg-white hover:bg-[#dbb671] transition-colors flex justify-center items-center rounded-full text-black hover:text-white"
//             >
//               <FaLinkedin />
//             </a>
//             <a
//               href="https://www.youtube.com/AdvPrinceIslam"
//               className="h-8 w-8 bg-white hover:bg-[#dbb671] transition-colors flex justify-center items-center rounded-full text-black hover:text-white"
//             >
//               <FaYoutube />
//             </a>
//           </div>
//         </div>

//         {/* Quick Links */}
//         <div className="space-y-4">
//           <h5 className="inline-block pb-2 text-base font-bold uppercase border-b border-gray-600 md:text-lg">
//             {t("footer_quick_links")}
//           </h5>
//           <ul className="space-y-3 text-gray-300">
//             <li>
//               <Link to={"/"} className="hover:text-[#dbb671] transition-colors">
//                 {t("nav_home")}
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to={"/about"}
//                 className="hover:text-[#dbb671] transition-colors"
//               >
//                 {t("nav_about")}
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to={"/services"}
//                 className="hover:text-[#dbb671] transition-colors"
//               >
//                 {t("nav_services")}
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to={"/blogs"}
//                 className="hover:text-[#dbb671] transition-colors"
//               >
//                 {t("nav_blogs")}
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to={"/contact"}
//                 className="hover:text-[#dbb671] transition-colors"
//               >
//                 {t("nav_contact")}
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Find Us */}
//         <div className="space-y-4">
//           <h5 className="inline-block pb-2 text-base font-bold uppercase border-b border-gray-600 md:text-lg">
//             {t("footer_find_us")}
//           </h5>
//           <div className="space-y-3 text-gray-300">
//             <p>{t("footer_address")}</p>
//             <p className="font-semibold text-white">+880 1711 602 369</p>
//             <p>adv.prince.islam@gmail.com</p>
//           </div>
//         </div>

//         {/* Practice Areas */}
//         <div className="space-y-4">
//           <h5 className="inline-block pb-2 text-base font-bold uppercase border-b border-gray-600 md:text-lg">
//             {t("footer_practice_areas")}
//           </h5>
//           <ul className="space-y-3 text-gray-300">
//             {[
//               {
//                 link: "https://www.judiciary.org.bd/",
//                 title: t("footer_important_link_1"),
//               },
//               {
//                 link: "https://www.supremecourt.gov.bd/",
//                 title: t("footer_important_link_2"),
//               },
//               {
//                 link: "https://scba.org.bd/",
//                 title: t("footer_important_link_3"),
//               },
//               {
//                 link: "https://dhakabarassociation.com/",
//                 title: t("footer_important_link_4"),
//               },
//               {
//                 link: "https://uttoradhikar.gov.bd/",
//                 title: t("footer_important_link_5"),
//               },
//               {
//                 link: "https://bdlaws.minlaw.gov.bd/",
//                 title: t("footer_important_link_6"),
//               },
//             ].map((link) => (
//               <li
//                 key={link.link}
//                 className="hover:text-[#dbb671] transition-colors cursor-pointer"
//               >
//                 <a href={link.link} target="_blank">
//                   {link.title}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* Copyright */}
//       <div className="relative z-10 flex flex-col items-center justify-center gap-2 p-5 mt-10 text-sm text-center border-t text-white/50 border-white/10">
//         <p>
//           &copy; {new Date().getFullYear()} |{" "}
//           <a
//             href="https://www.facebook.com/adv.prince.islam/"
//             target="_blank"
//             className="font-bold hover:text-white"
//           >
//             Shamiul Islam & Associates
//           </a>
//           . {t("footer_rights")} | {t("footer_developed")}{" "}
//           <a
//             href="https://www.facebook.com/techxbureau"
//             target="_blank"
//             className="font-bold hover:text-white"
//           >
//             Tech<span className="text-orange-500">X</span>bureau
//           </a>
//         </p>
//         <TotalVisitors />
//       </div>
//     </motion.footer>
//   );
// }

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { images } from "../../assets/assets";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { footerVariants } from "@/motions/motions";
import TotalVisitors from "../TotalVisitors";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <motion.footer
      variants={footerVariants}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      style={{
        backgroundImage: `url(${images.footer})`,
      }}
      className={`relative text-white bg-center bg-no-repeat bg-cover ${
        i18n.language === "bn" ? "font-bengali" : "font-english"
      }`}
    >
      {/* --- Premium Dark Overlay --- */}
      {/* একটি ডার্ক গ্রেডিয়েন্ট ওভারলে যা টেক্সটগুলোকে খুব স্পষ্ট ও প্রিমিয়াম করে তুলবে */}
      <div className="absolute inset-0 bg-linear-to-b from-[#111827]/95 to-black/95"></div>

      <div className="container relative z-10 px-6 pt-16 pb-8 mx-auto md:pt-20 max-w-7xl">
        {/* --- Main Footer Grid --- */}
        {/* 12-column grid system for perfect proportional spacing on large screens */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* =========================================
              Column 1: Brand & About (Takes 4 cols)
              ========================================= */}
          <div className="col-span-1 space-y-6 sm:col-span-2 lg:col-span-4 md:pr-6">
            <Link to="/" className="flex inline-flex items-center gap-3 group">
              <img
                src={images.logoV2}
                alt="logo"
                className="object-contain w-12 h-12 transition-transform duration-300 group-hover:scale-105"
              />
              <h5 className="text-lg font-bold tracking-tight uppercase xl:text-xl drop-shadow-md">
                {t("nav_logo")}
              </h5>
            </Link>

            <p className="text-sm leading-relaxed text-gray-400 sm:text-base">
              {t("footer_desc")}
            </p>

            {/* Premium Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {[
                {
                  icon: FaFacebookF,
                  link: "https://www.facebook.com/shamiul.associates/",
                },
                { icon: FaXTwitter, link: "https://x.com/advprinceislam" },
                {
                  icon: FaInstagram,
                  link: "https://www.instagram.com/adv_shamiul/",
                },
                {
                  icon: FaLinkedin,
                  link: "https://www.linkedin.com/in/advprinceislam/",
                },
                {
                  icon: FaYoutube,
                  link: "https://www.youtube.com/AdvPrinceIslam",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#dbb671] hover:border-[#dbb671] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#dbb671]/20"
                >
                  <social.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* =========================================
              Column 2: Quick Links (Takes 2 cols)
              ========================================= */}
          <div className="col-span-1 lg:col-span-2">
            <div className="mb-6">
              <h5 className="text-base font-bold tracking-widest text-white uppercase">
                {t("footer_quick_links")}
              </h5>
              <div className="w-8 h-1 mt-3 bg-[#dbb671] rounded-full"></div>
            </div>

            <ul className="space-y-3 text-sm text-gray-400 sm:text-base">
              {[
                { name: t("nav_home"), path: "/" },
                { name: t("nav_about"), path: "/about" },
                { name: t("nav_services"), path: "/services" },
                { name: t("nav_blogs"), path: "/blogs" },
                { name: t("nav_contact"), path: "/contact" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="inline-block transition-all duration-300 hover:text-[#dbb671] hover:translate-x-1.5"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =========================================
              Column 3: Find Us (Takes 3 cols)
              ========================================= */}
          <div className="col-span-1 lg:col-span-3">
            <div className="mb-6">
              <h5 className="text-base font-bold tracking-widest text-white uppercase">
                {t("footer_find_us")}
              </h5>
              <div className="w-8 h-1 mt-3 bg-[#dbb671] rounded-full"></div>
            </div>

            <div className="space-y-4 text-sm leading-relaxed text-gray-400 sm:text-base">
              <p className="transition-colors hover:text-gray-200">
                {t("footer_address")}
              </p>
              <p className="font-semibold tracking-wider text-white">
                <a
                  href="tel:+8801711602369"
                  className="hover:text-[#dbb671] transition-colors"
                >
                  +880 1711 602 369
                </a>
              </p>
              <p className="font-semibold tracking-wider text-white">
                <a
                  href="tel:+8801711602369"
                  className="hover:text-[#dbb671] transition-colors"
                >
                  +880 1717 260 765
                </a>
              </p>
              <p>
                <a
                  href="mailto:adv.prince.islam@gmail.com"
                  className="hover:text-[#dbb671] transition-colors"
                >
                  adv.prince.islam@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* =========================================
              Column 4: Important Links (Takes 3 cols)
              ========================================= */}
          <div className="col-span-1 lg:col-span-3">
            <div className="mb-6">
              <h5 className="text-base font-bold tracking-widest text-white uppercase">
                {t("footer_important_links")}{" "}
                {/* JSON এ এটি Important Links হিসেবে থাকলে ভালো */}
              </h5>
              <div className="w-8 h-1 mt-3 bg-[#dbb671] rounded-full"></div>
            </div>

            <ul className="space-y-3 text-sm text-gray-400 sm:text-base">
              {[
                {
                  link: "https://judiciary.gov.bd/bn",
                  title: t("footer_important_link_1"),
                },
                {
                  link: "https://www.supremecourt.gov.bd/",
                  title: t("footer_important_link_2"),
                },
                {
                  link: "https://scba.org.bd/",
                  title: t("footer_important_link_3"),
                },
                {
                  link: "https://dhakabarassociation.com/",
                  title: t("footer_important_link_4"),
                },
                {
                  link: "https://uttoradhikar.gov.bd/",
                  title: t("footer_important_link_5"),
                },
                {
                  link: "http://bdlaws.minlaw.gov.bd/",
                  title: t("footer_important_link_6"),
                },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block transition-all duration-300 hover:text-[#dbb671] hover:translate-x-1.5"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* =========================================
            Copyright & Bottom Section
            ========================================= */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 mt-16 text-sm text-gray-500 border-t border-white/10 md:flex-row">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()}{" "}
            <a
              href="https://www.facebook.com/adv.prince.islam/"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-gray-300 transition-colors hover:text-[#dbb671]"
            >
              Shamiul Islam & Associates
            </a>
            . {t("footer_rights")} | {t("footer_developed")}{" "}
            <a
              href="https://www.facebook.com/techxbureau"
              target="_blank"
              rel="noreferrer"
              className="font-bold tracking-wide text-gray-300 transition-colors hover:text-white"
            >
              Tech<span className="text-[#dbb671]">X</span>bureau
            </a>
          </p>

          {/* Total Visitors Component */}
          <div className="flex items-center">
            <TotalVisitors />
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
