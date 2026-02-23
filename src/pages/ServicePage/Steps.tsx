// import { motion } from "framer-motion";
// import { StepsData } from "../../data/StepsData";
// import { serviceVariant } from "@/motions/motions";
// import { useTranslation } from "react-i18next"; // যুক্ত করা হয়েছে

// export default function Steps() {
//   const { t, i18n } = useTranslation(); // যুক্ত করা হয়েছে

//   return (
//     <section
//       className={i18n.language === "bn" ? "font-bengali" : "font-english"}
//     >
//       {/* Added px-4 to prevent content touching edges on mobile */}
//       {/* Adjusted py-16 to py-10 md:py-16 for better mobile vertical spacing */}
//       <div className="container px-4 py-10 mx-auto md:py-16">
//         <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
//           {StepsData?.map((step, index) => (
//             // Adjusted padding: p-6 on mobile, p-10 on desktop
//             <motion.div
//               variants={serviceVariant}
//               initial="stepsInitial"
//               whileInView="stepsWhileInView"
//               key={index} // key এখানে সরানো হয়েছে সঠিক রেন্ডারিংয়ের জন্য
//             >
//               <div className="flex items-center h-full gap-4 p-6 bg-white md:p-10">
//                 {/* Added flex-1: Ensures text takes up available space but allows wrapping */}
//                 <div className="flex-1">
//                   {/* Responsive text size: text-2xl on mobile, text-[28px] on desktop */}
//                   <h2 className="text-2xl md:text-[28px] font-bold text-[#604B33] mb-2">
//                     {t(step.title)}
//                   </h2>
//                   <p className="text-sm text-gray-600 md:text-base">
//                     {t(step.description)}
//                   </p>
//                 </div>

//                 {/* Added shrink-0: Prevents the icon box from getting squashed on small screens */}
//                 <div className="flex items-center justify-center bg-[#604B33] p-4 md:p-5 shrink-0 rounded-sm">
//                   <img
//                     src={step.icon}
//                     alt={t(step.title)}
//                     className="object-contain w-8 h-8 md:w-auto md:h-auto"
//                   />
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState } from "react";
import { motion } from "framer-motion";
import { StepsData } from "../../data/StepsData";
import { serviceVariant } from "@/motions/motions";
import { useTranslation } from "react-i18next";

// ==========================================
// TYPES/INTERFACES ADDED FOR TYPESCRIPT
// ==========================================
interface StepType {
  title: string;
  description: string;
  icon: string;
}

interface StepCardProps {
  step: StepType;
  index: number;
  t: any; // অথবা t: (key: string) => string;
}

// ==========================================
// INDIVIDUAL STEP CARD COMPONENT
// ==========================================
const StepCard = ({ step, index, t }: StepCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={serviceVariant}
      initial="stepsInitial"
      whileInView="stepsWhileInView"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="h-full"
    >
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        // Framer Motion Smooth Hover: Card Lift & Shadow
        animate={{
          y: isHovered ? -10 : 0,
          boxShadow: isHovered
            ? "0 25px 50px -12px rgba(96, 75, 51, 0.25)"
            : "0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)",
          borderColor: isHovered
            ? "rgba(219, 182, 113, 0.3)"
            : "rgba(229, 231, 235, 1)",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex flex-col h-full overflow-hidden bg-white border border-gray-200 cursor-pointer sm:flex-row rounded-2xl"
      >
        {/* =========================================
            LEFT SIDE: MASSIVE ICON BLOCK
            ========================================= */}
        <motion.div
          // Left block darkens slightly on hover
          animate={{ backgroundColor: isHovered ? "#4a3a27" : "#604B33" }}
          transition={{ duration: 0.4 }}
          className="relative flex items-center justify-center p-8 overflow-hidden sm:w-[35%] shrink-0"
        >
          {/* Background Number (Scales up smoothly on hover) */}
          <motion.span
            animate={{
              scale: isHovered ? 1.1 : 1,
              opacity: isHovered ? 0.1 : 0.05,
              x: isHovered ? -10 : 0,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute font-extrabold text-white pointer-events-none select-none -bottom-6 -right-2 text-9xl"
          >
            {index + 1}
          </motion.span>

          {/* Animated Icon Wrapper */}
          <motion.div
            animate={{
              scale: isHovered ? 1.15 : 1,
              backgroundColor: isHovered
                ? "rgba(219, 182, 113, 0.2)"
                : "rgba(255, 255, 255, 0.1)",
              rotate: isHovered ? [0, -5, 5, 0] : 0, // Subtle shake effect
            }}
            transition={{ duration: 0.5, ease: "backOut" }}
            className="relative z-10 p-4 rounded-xl backdrop-blur-sm"
          >
            <motion.img
              src={step.icon}
              alt={t(step.title)}
              className="object-contain w-16 h-16 sm:w-20 sm:h-20 drop-shadow-lg"
            />
          </motion.div>
        </motion.div>

        {/* =========================================
            RIGHT SIDE: TEXT CONTENT
            ========================================= */}
        <div className="relative flex flex-col justify-center flex-1 p-6 sm:p-8 lg:p-10">
          {/* Step Badge */}
          <div className="flex items-center gap-3 mb-4">
            <motion.span
              animate={{ width: isHovered ? "48px" : "32px" }}
              transition={{ duration: 0.4 }}
              className="h-1 bg-[#dbb671] rounded-full"
            />
            <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
              Step 0{index + 1}
            </span>
          </div>

          {/* Title (Color smoothly changes to Gold) */}
          <motion.h2
            animate={{ color: isHovered ? "#dbb671" : "#111827" }}
            transition={{ duration: 0.3 }}
            className="text-2xl sm:text-3xl lg:text-[28px] font-extrabold mb-3 leading-tight"
          >
            {t(step.title)}
          </motion.h2>

          {/* Description */}
          <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
            {t(step.description)}
          </p>

          {/* Golden Corner Accent Glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 right-0 w-24 h-24 pointer-events-none bg-gradient-to-bl from-[#dbb671]/15 to-transparent"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

// ==========================================
// MAIN STEPS COMPONENT
// ==========================================
export default function Steps() {
  const { t, i18n } = useTranslation();

  return (
    <section
      className={`bg-[#faf9f8] py-16 md:py-24 border-t border-gray-200 ${
        i18n.language === "bn" ? "font-bengali" : "font-english"
      }`}
    >
      <div className="container px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:gap-12 md:grid-cols-2">
          {StepsData?.map((step, index) => (
            // এখানে ম্যাপ করে আমরা আমাদের নতুন StepCard কম্পোনেন্টটি কল করছি
            <StepCard key={index} step={step} index={index} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
