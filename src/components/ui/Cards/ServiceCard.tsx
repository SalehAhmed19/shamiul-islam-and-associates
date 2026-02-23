// import { serviceCardVariants } from "@/motions/motions";
// import type { ServiceInterface } from "../../../Interfaces/ServiceInterface";
// import { motion } from "framer-motion";

// export default function ServiceCard({
//   icon,
//   title,
//   description,
// }: ServiceInterface) {
//   return (
//     <motion.div
//       variants={serviceCardVariants}
//       initial={"initial"}
//       whileInView={"whileInView"}
//       whileHover={"whileHover"}
//       className="group cursor-pointer p-6 md:p-8 border border-transparent hover:border-[#604B33]/10 flex flex-col items-center text-center"
//     >
//       {/* --- Icon Wrapper --- */}
//       <motion.div
//         variants={serviceCardVariants}
//         initial={"zoomInital"}
//         whileInView={"zoomWhileInview"}
//         className="mb-6 p-4 rounded-full cursor-pointer group-hover:bg-[#604B33]/10 transition-colors duration-300"
//       >
//         <img
//           src={icon}
//           alt={title + " icon"}
//           className="object-contain w-10 h-10 md:w-12 md:h-12"
//         />
//       </motion.div>

//       {/* --- Title --- */}
//       <motion.h3
//         variants={serviceCardVariants}
//         initial={"zoomInital"}
//         whileInView={"zoomWhileInview"}
//         className="text-lg md:text-xl text-[#604B33] font-bold mb-3"
//       >
//         {title}
//       </motion.h3>

//       {/* --- Description --- */}
//       <motion.p
//         variants={serviceCardVariants}
//         initial={"paragraphInitial"}
//         whileInView={"paragraphWhileInView"}
//         className="text-sm leading-relaxed md:text-base"
//       >
//         {description.slice(0, 120)}...
//       </motion.p>

//       {/* Optional: Read More text appearing on hover could go here */}
//     </motion.div>
//   );
// }
// import { serviceCardVariants } from "@/motions/motions";
// import type { ServiceInterface } from "../../../Interfaces/ServiceInterface";
// import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next"; // যুক্ত করা হয়েছে

// export default function ServiceCard({
//   icon,
//   title,
//   description,
// }: ServiceInterface) {
//   const { t, i18n } = useTranslation(); // যুক্ত করা হয়েছে

//   return (
//     <motion.div
//       variants={serviceCardVariants}
//       initial={"initial"}
//       whileInView={"whileInView"}
//       whileHover={"whileHover"}
//       // ভাষা অনুযায়ী ফন্ট ক্লাস সেট করা হলো যেন ডিজাইন না ভাঙে
//       className={`group cursor-pointer p-6 md:p-8 border border-transparent hover:border-[#604B33]/10 flex flex-col items-center text-center ${
//         i18n.language === "bn" ? "font-bengali" : "font-english"
//       }`}
//     >
//       {/* --- Icon Wrapper --- */}
//       <motion.div
//         variants={serviceCardVariants}
//         initial={"zoomInital"}
//         whileInView={"zoomWhileInview"}
//         className="mb-6 p-4 rounded-full cursor-pointer group-hover:bg-[#604B33]/10 transition-colors duration-300"
//       >
//         <img
//           src={icon}
//           alt={t(title) + " icon"} // Alt টেক্সটও ডাইনামিক করা হলো
//           className="object-contain w-10 h-10 md:w-12 md:h-12"
//         />
//       </motion.div>

//       {/* --- Title --- */}
//       <motion.h3
//         variants={serviceCardVariants}
//         initial={"zoomInital"}
//         whileInView={"zoomWhileInview"}
//         className="text-lg md:text-xl text-[#604B33] font-bold mb-3"
//       >
//         {t(title)}
//       </motion.h3>

//       {/* --- Description --- */}
//       <motion.p
//         variants={serviceCardVariants}
//         initial={"paragraphInitial"}
//         whileInView={"paragraphWhileInView"}
//         className="text-sm leading-relaxed md:text-base"
//       >
//         {/* কি-ওয়ার্ডটি অনুবাদ করে তারপর স্লাইস করা হচ্ছে */}
//         {t(description).slice(0, 120)}...
//       </motion.p>

//       {/* Optional: Read More text appearing on hover could go here */}
//     </motion.div>
//   );
// }

// import { useState } from "react";
// import { serviceCardVariants } from "@/motions/motions";
// import type { ServiceInterface } from "../../../Interfaces/ServiceInterface";
// import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";

// export default function ServiceCard({
//   icon,
//   title,
//   description,
// }: ServiceInterface) {
//   const { t, i18n } = useTranslation();
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <motion.div
//       variants={serviceCardVariants}
//       initial="initial"
//       whileInView="whileInView"
//       viewport={{ once: true, margin: "-50px" }}
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//       // মোশন দিয়ে কার্ডের মূল হোভার অ্যানিমেশন (Scale, Lift & Shadow)
//       animate={{
//         y: isHovered ? -5 : 0, // হালকা উপরে উঠবে
//         scale: isHovered ? 1.03 : 1, // স্মুথ স্কেল ইফেক্ট (৩% বড় হবে)
//         boxShadow: isHovered
//           ? "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)"
//           : "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06)",
//       }}
//       // ট্রানজিশন আরও স্মুথ করা হয়েছে
//       transition={{ duration: 0.4, ease: "easeInOut" }}
//       className={`relative flex flex-col items-center text-center h-full p-6 sm:p-8 bg-white border border-gray-100 rounded-2xl overflow-hidden cursor-pointer ${
//         i18n.language === "bn" ? "font-bengali" : "font-english"
//       }`}
//     >
//       {/* Top Accent Line */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: isHovered ? 1 : 0 }}
//         transition={{ duration: 0.4, ease: "easeInOut" }}
//         className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#dbb671] to-transparent"
//       />

//       {/* --- Icon Wrapper --- */}
//       <div className="relative mb-6 sm:mb-8">
//         {/* Softly Expanding Background Circle */}
//         <motion.div
//           initial={{ scale: 0 }}
//           animate={{ scale: isHovered ? 1.5 : 0 }}
//           transition={{ duration: 0.5, ease: "easeOut" }}
//           className="absolute inset-0 rounded-full bg-[#604B33]/5"
//         />

//         <motion.div
//           variants={serviceCardVariants}
//           initial="zoomInital"
//           whileInView="zoomWhileInview"
//           animate={{
//             backgroundColor: isHovered ? "#ffffff" : "#f9fafb",
//             borderColor: isHovered
//               ? "rgba(219, 182, 113, 0.3)"
//               : "rgba(243, 244, 246, 1)",
//           }}
//           transition={{ duration: 0.4 }}
//           className="relative z-10 flex items-center justify-center w-16 h-16 p-4 border rounded-full shadow-sm sm:w-20 sm:h-20"
//         >
//           {/* Icon Image - Smooth Scale */}
//           <motion.img
//             animate={{
//               scale: isHovered ? 1.15 : 1,
//             }}
//             transition={{ duration: 0.4, ease: "easeOut" }}
//             src={icon}
//             alt={`${t(title)} icon`}
//             className="object-contain w-8 h-8 sm:w-10 sm:h-10"
//           />
//         </motion.div>
//       </div>

//       {/* --- Title --- */}
//       <motion.h3
//         variants={serviceCardVariants}
//         initial="zoomInital"
//         whileInView="zoomWhileInview"
//         animate={{ color: isHovered ? "#604B33" : "#111827" }}
//         transition={{ duration: 0.4 }}
//         className="mb-3 text-lg font-bold tracking-tight sm:mb-4 sm:text-xl lg:text-2xl"
//       >
//         {t(title)}
//       </motion.h3>

//       {/* --- Description --- */}
//       <motion.p
//         variants={serviceCardVariants}
//         initial="paragraphInitial"
//         whileInView="paragraphWhileInView"
//         animate={{ color: isHovered ? "#374151" : "#4B5563" }}
//         transition={{ duration: 0.4 }}
//         className="text-sm leading-relaxed sm:text-base"
//       >
//         {t(description).length > 120
//           ? `${t(description).slice(0, 120)}...`
//           : t(description)}
//       </motion.p>
//     </motion.div>
//   );
// }

import { useState } from "react";
import { serviceCardVariants } from "@/motions/motions";
import type { ServiceInterface } from "../../../Interfaces/ServiceInterface";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceInterface) {
  const { t, i18n } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={serviceCardVariants}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, margin: "-50px" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      // Modern Hover: Lift, Scale & Premium Glow Shadow
      animate={{
        y: isHovered ? -8 : 0,
        scale: isHovered ? 1.02 : 1,
        boxShadow: isHovered
          ? "0 25px 40px -10px rgba(96, 75, 51, 0.15), 0 10px 20px -5px rgba(219, 182, 113, 0.1)"
          : "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
        borderColor: isHovered
          ? "rgba(219, 182, 113, 0.2)"
          : "rgba(243, 244, 246, 1)",
      }}
      transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
      className={`relative flex flex-col items-center text-center h-full p-8 sm:p-10 bg-white border border-gray-100 rounded-3xl overflow-hidden cursor-pointer ${
        i18n.language === "bn" ? "font-bengali" : "font-english"
      }`}
    >
      {/* Decorative Top Accent Line (Thicker and smoother) */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: isHovered ? 1 : 0, scaleX: isHovered ? 1 : 0.8 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute top-0 left-0 w-full h-1.5 origin-center bg-gradient-to-r from-transparent via-[#dbb671] to-transparent"
      />

      {/* --- Icon Wrapper (Glassy & Premium) --- */}
      <div className="relative flex items-center justify-center mb-8">
        {/* Expanding Background Blob on Hover */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: isHovered ? 1.4 : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute inset-0 rounded-full bg-gradient-to-br from-[#dbb671]/20 to-[#604B33]/5 blur-sm"
        />

        <motion.div
          variants={serviceCardVariants}
          initial="zoomInital"
          whileInView="zoomWhileInview"
          animate={{
            backgroundColor: isHovered
              ? "rgba(255, 255, 255, 0.8)"
              : "rgba(249, 250, 251, 1)", // gray-50 to glassy white
            borderColor: isHovered
              ? "rgba(219, 182, 113, 0.4)"
              : "rgba(229, 231, 235, 1)",
            boxShadow: isHovered
              ? "0 8px 16px -4px rgba(219, 182, 113, 0.2)"
              : "0 0 0 0 rgba(0,0,0,0)",
          }}
          transition={{ duration: 0.5 }}
          className="relative z-10 flex items-center justify-center w-20 h-20 p-4 transition-transform duration-500 transform border shadow-sm rounded-2xl sm:w-24 sm:h-24 backdrop-blur-sm rotate-3 hover:rotate-0"
        >
          {/* Icon Image - Smooth Scale & Tilt Fix */}
          <motion.img
            animate={{ scale: isHovered ? 1.15 : 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            src={icon}
            alt={`${t(title)} icon`}
            className="object-contain w-10 h-10 -rotate-3 hover:rotate-0 sm:w-12 sm:h-12"
          />
        </motion.div>
      </div>

      {/* --- Title --- */}
      <motion.h3
        variants={serviceCardVariants}
        initial="zoomInital"
        whileInView="zoomWhileInview"
        animate={{ color: isHovered ? "#604B33" : "#111827" }}
        transition={{ duration: 0.4 }}
        className="mb-4 text-xl font-extrabold tracking-tight sm:text-2xl"
      >
        {t(title)}
      </motion.h3>

      {/* --- Description --- */}
      <motion.p
        variants={serviceCardVariants}
        initial="paragraphInitial"
        whileInView="paragraphWhileInView"
        animate={{ color: isHovered ? "#4B5563" : "#6B7280" }}
        transition={{ duration: 0.4 }}
        // flex-grow pushes the bottom arrow down
        className="flex-grow text-sm leading-relaxed text-gray-500 sm:text-base"
      >
        {t(description).length > 120
          ? `${t(description).slice(0, 120)}...`
          : t(description)}
      </motion.p>
    </motion.div>
  );
}
