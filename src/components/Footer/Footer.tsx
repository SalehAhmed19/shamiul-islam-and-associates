// import { FaFacebookF, FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";
// import { icons, images } from "../../assets/assets";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { footerVariants } from "@/motions/motions";
// import TotalVisitors from "../TotalVisitors";

// export default function Footer() {
//     return (
//         <motion.footer variants={footerVariants} initial="initial" whileInView="whileInView"
//             style={{
//                 backgroundImage: `url(${images.footer})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 backgroundRepeat: "no-repeat"
//             }}
//             className="relative text-white"
//         >
//             {/* Overlay for better text readability on mobile/desktop */}
//             <div className="absolute inset-0 bg-black/30"></div>

//             {/* Added 'relative z-10' so content sits above the overlay */}
//             <div className="relative z-10 container mx-auto px-5 pt-12 md:pt-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

//                 {/* Logo Section spans 2 columns on large screens */}
//                 <div className="col-span-1 space-y-6 md:col-span-2">
//                     <div className="flex items-center gap-2">
//                         <img src={icons.logo} alt="logo" className="object-contain w-10 h-10" />
//                         <h5 className="text-base font-bold uppercase md:text-lg">Shamiul Islam & Associates</h5>
//                     </div>
//                     {/* Changed fixed w-1/2 to responsive width so it doesn't squash on mobile */}
//                     <p className="w-full leading-relaxed text-gray-300 md:w-3/4 lg:w-1/2">
//                         Dedicated to providing world-class legal solutions with a commitment to integrity and personalized attention. We empower our clients with the expert guidance needed to navigate complex legal landscapes with confidence.
//                     </p>

//                     <div className="flex items-center gap-2">
//                         <a href="https://www.facebook.com/shamiul.associates/" className="h-8 w-8 bg-white hover:bg-[#dbb671] transition-colors flex justify-center items-center rounded-full text-black hover:text-white"><FaFacebookF /></a>
//                         <a href="https://x.com/advprinceislam" className="h-8 w-8 bg-white hover:bg-[#dbb671] transition-colors flex justify-center items-center rounded-full text-black hover:text-white"><FaXTwitter /></a>
//                         <a href="https://www.instagram.com/adv_shamiul/" className="h-8 w-8 bg-white hover:bg-[#dbb671] transition-colors flex justify-center items-center rounded-full text-black hover:text-white"><FaInstagram /></a>
//                         <a href="https://www.linkedin.com/in/advprinceislam/" className="h-8 w-8 bg-white hover:bg-[#dbb671] transition-colors flex justify-center items-center rounded-full text-black hover:text-white"><FaLinkedin /></a>
//                         <a href="https://www.youtube.com/AdvPrinceIslam" className="h-8 w-8 bg-white hover:bg-[#dbb671] transition-colors flex justify-center items-center rounded-full text-black hover:text-white"><FaYoutube /></a>
//                     </div>
//                 </div>

//                 {/* Quick Links */}
//                 <div className="space-y-4">
//                     <h5 className="inline-block pb-2 text-base font-bold uppercase border-b border-gray-600 md:text-lg">Quick Links</h5>
//                     <ul className="space-y-3 text-gray-300">
//                         <li><Link to={"/"} className="hover:text-[#dbb671] transition-colors">Home</Link></li>
//                         <li><Link to={"/about"} className="hover:text-[#dbb671] transition-colors">About</Link></li>
//                         <li><Link to={"/services"} className="hover:text-[#dbb671] transition-colors">Services</Link></li>
//                         <li><Link to={"/blogs"} className="hover:text-[#dbb671] transition-colors">Blogs</Link></li>
//                         <li><Link to={"/contact"} className="hover:text-[#dbb671] transition-colors">Contact</Link></li>
//                     </ul>
//                 </div>

//                 {/* Find Us */}
//                 <div className="space-y-4">
//                     <h5 className="inline-block pb-2 text-base font-bold uppercase border-b border-gray-600 md:text-lg">Find us</h5>
//                     <div className="space-y-3 text-gray-300">
//                         <p>Room No- B15,(3rd Floor), Nahar Complex, 25/1, Court House Street, Dhaka-1100, Bangladesh.</p>
//                         <p className="font-semibold text-white">+880 1711 602 369</p>
//                         <p>adv.prince.islam@gmail.com</p>
//                     </div>
//                 </div>

//                 {/* Practice Areas */}
//                 <div className="space-y-4">
//                     <h5 className="inline-block pb-2 text-base font-bold uppercase border-b border-gray-600 md:text-lg">Practice Areas</h5>
//                     <ul className="space-y-3 text-gray-300">
//                         <li className="hover:text-[#dbb671] transition-colors cursor-pointer">Civil Law</li>
//                         <li className="hover:text-[#dbb671] transition-colors cursor-pointer">Criminal Law</li>
//                         <li className="hover:text-[#dbb671] transition-colors cursor-pointer">Family Law</li>
//                         <li className="hover:text-[#dbb671] transition-colors cursor-pointer">Banking & Finance</li>
//                         <li className="hover:text-[#dbb671] transition-colors cursor-pointer">Corporate Law</li>
//                         <li className="hover:text-[#dbb671] transition-colors cursor-pointer">Cyber Law</li>
//                     </ul>
//                 </div>
//             </div>

//             {/* copyright */}
//             <div className="relative z-10 flex flex-col items-center justify-center gap-2 p-5 mt-10 text-sm text-center border-t text-white/50 border-white/10">
//                 <p>&copy; {new Date().getFullYear()} | <a href="https://www.facebook.com/adv.prince.islam/" target="_blank" className="font-bold hover:text-white">Shamiul Islam & Associates</a>. All rights reserved. | Developed by <a href="https://www.facebook.com/techxbureau" target="_blank" className="font-bold hover:text-white">Tech<span className="text-orange-500">X</span>bureau</a></p>
//                 <TotalVisitors />
//             </div>

//         </motion.footer >
//     )
// }
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { icons, images } from "../../assets/assets";
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
      style={{
        backgroundImage: `url(${images.footer})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className={`text-white relative ${i18n.language === "bn" ? "font-bengali" : "font-english"}`}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 container mx-auto px-5 pt-12 md:pt-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Logo Section */}
        <div className="col-span-1 space-y-6 md:col-span-2">
          <div className="flex items-center gap-2">
            <img
              src={icons.logo}
              alt="logo"
              className="object-contain w-10 h-10"
            />
            <h5 className="text-base font-bold uppercase md:text-lg">
              {t("nav_logo")}
            </h5>
          </div>
          <p className="w-full leading-relaxed text-gray-300 md:w-3/4 lg:w-1/2">
            {t("footer_desc")}
          </p>

          <div className="flex items-center gap-2">
            <a
              href="https://www.facebook.com/shamiul.associates/"
              className="h-8 w-8 bg-white hover:bg-[#dbb671] transition-colors flex justify-center items-center rounded-full text-black hover:text-white"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/advprinceislam"
              className="h-8 w-8 bg-white hover:bg-[#dbb671] transition-colors flex justify-center items-center rounded-full text-black hover:text-white"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.instagram.com/adv_shamiul/"
              className="h-8 w-8 bg-white hover:bg-[#dbb671] transition-colors flex justify-center items-center rounded-full text-black hover:text-white"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/advprinceislam/"
              className="h-8 w-8 bg-white hover:bg-[#dbb671] transition-colors flex justify-center items-center rounded-full text-black hover:text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.youtube.com/AdvPrinceIslam"
              className="h-8 w-8 bg-white hover:bg-[#dbb671] transition-colors flex justify-center items-center rounded-full text-black hover:text-white"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h5 className="inline-block pb-2 text-base font-bold uppercase border-b border-gray-600 md:text-lg">
            {t("footer_quick_links")}
          </h5>
          <ul className="space-y-3 text-gray-300">
            <li>
              <Link to={"/"} className="hover:text-[#dbb671] transition-colors">
                {t("nav_home")}
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className="hover:text-[#dbb671] transition-colors"
              >
                {t("nav_about")}
              </Link>
            </li>
            <li>
              <Link
                to={"/services"}
                className="hover:text-[#dbb671] transition-colors"
              >
                {t("nav_services")}
              </Link>
            </li>
            <li>
              <Link
                to={"/blogs"}
                className="hover:text-[#dbb671] transition-colors"
              >
                {t("nav_blogs")}
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                className="hover:text-[#dbb671] transition-colors"
              >
                {t("nav_contact")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Find Us */}
        <div className="space-y-4">
          <h5 className="inline-block pb-2 text-base font-bold uppercase border-b border-gray-600 md:text-lg">
            {t("footer_find_us")}
          </h5>
          <div className="space-y-3 text-gray-300">
            <p>{t("footer_address")}</p>
            <p className="font-semibold text-white">+880 1711 602 369</p>
            <p>adv.prince.islam@gmail.com</p>
          </div>
        </div>

        {/* Practice Areas */}
        <div className="space-y-4">
          <h5 className="inline-block pb-2 text-base font-bold uppercase border-b border-gray-600 md:text-lg">
            {t("footer_practice_areas")}
          </h5>
          <ul className="space-y-3 text-gray-300">
            {[
              "civil",
              "criminal",
              "family",
              "banking",
              "corporate",
              "cyber",
            ].map((area) => (
              <li
                key={area}
                className="hover:text-[#dbb671] transition-colors cursor-pointer"
              >
                {t(`service_${area}_title`)}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-2 p-5 mt-10 text-sm text-center border-t text-white/50 border-white/10">
        <p>
          &copy; {new Date().getFullYear()} |{" "}
          <a
            href="https://www.facebook.com/adv.prince.islam/"
            target="_blank"
            className="font-bold hover:text-white"
          >
            Shamiul Islam & Associates
          </a>
          . {t("footer_rights")} | {t("footer_developed")}{" "}
          <a
            href="https://www.facebook.com/techxbureau"
            target="_blank"
            className="font-bold hover:text-white"
          >
            Tech<span className="text-orange-500">X</span>bureau
          </a>
        </p>
        <TotalVisitors />
      </div>
    </motion.footer>
  );
}
