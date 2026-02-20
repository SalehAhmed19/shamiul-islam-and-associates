// import { headerVariants } from "@/motions/motions";
// import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";

// export default function Header({
//   title, // এখানে এখন ট্রান্সলেশন কী (যেমন: "page_title_about") পাস হবে
//   image,
// }: {
//   title: string;
//   image: string;
// }) {
//   const { t, i18n } = useTranslation();

//   return (
//     <motion.div
//       variants={headerVariants}
//       initial="initial"
//       whileInView="whileInView"
//       style={{
//         backgroundImage: `url(${image})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//       // ভাষা অনুযায়ী ফন্ট সেট করা হলো এবং হাইট অপরিবর্তিত রাখা হয়েছে
//       className={`h-[420px] ${
//         i18n.language === "bn" ? "font-bengali" : "font-english"
//       }`}
//     >
//       <div className="flex items-center justify-center h-full bg-black/40">
//         {" "}
//         {/* সামান্য ওভারলে যোগ করা যেতে পারে রিডিবিলিটির জন্য */}
//         <motion.h1
//           variants={headerVariants}
//           className="text-[40px] font-bold text-white uppercase text-center px-4"
//         >
//           {t(title)}
//         </motion.h1>
//       </div>
//     </motion.div>
//   );
// }

// import { headerVariants } from "@/motions/motions";
// import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";

// export default function Header({
//   title, // এখানে এখন ট্রান্সলেশন কী (যেমন: "page_title_about") পাস হবে
//   image,
// }: {
//   title: string;
//   image: string;
// }) {
//   const { t, i18n } = useTranslation();

//   return (
//     <motion.div
//       variants={headerVariants}
//       initial="initial"
//       whileInView="whileInView"
//       viewport={{ once: true }}
//       style={{
//         backgroundImage: `url(${image})`,
//       }}
//       // রেস্পন্সিভ হাইট এবং প্যারাল্যাক্স (bg-fixed) ইফেক্ট যোগ করা হয়েছে
//       className={`relative flex items-center justify-center h-[320px] sm:h-[380px] md:h-[420px] lg:h-[450px] bg-center bg-no-repeat bg-cover md:bg-fixed overflow-hidden ${
//         i18n.language === "bn" ? "font-bengali" : "font-english"
//       }`}
//     >
//       {/* =========================================
//           PREMIUM GRADIENT OVERLAY
//           ========================================= */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#0A0F1A]/90"></div>

//       {/* =========================================
//           TEXT CONTENT & ANIMATIONS
//           ========================================= */}
//       <div className="relative z-10 flex flex-col items-center px-4 text-center">
//         {/* Top Gold Accent Line */}
//         <motion.div
//           initial={{ width: 0, opacity: 0 }}
//           animate={{ width: "60px", opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
//           className="h-1 mb-5 rounded-full sm:mb-6 bg-[#dbb671]"
//         />

//         {/* Main Title */}
//         <motion.h1
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
//           // টাইপোগ্রাফি আরও বোল্ড এবং ট্র্যাকিং বাড়ানো হয়েছে
//           className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white uppercase tracking-[0.1em] sm:tracking-[0.15em] drop-shadow-2xl"
//         >
//           {t(title)}
//         </motion.h1>

//         {/* Bottom Decorative Accent */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.7 }}
//           className="flex items-center gap-3 mt-6 sm:mt-8 opacity-80"
//         >
//           <span className="w-12 h-[1px] bg-white/30"></span>
//           {/* Center Gold Dot */}
//           <span className="w-2 h-2 rounded-full bg-[#dbb671] shadow-[0_0_8px_rgba(219,182,113,0.8)]"></span>
//           <span className="w-12 h-[1px] bg-white/30"></span>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// }

import { headerVariants } from "@/motions/motions";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"; // Breadcrumb এর জন্য Link ইম্পোর্ট করা হলো

export default function Header({
  title, // ট্রান্সলেশন কী
  image,
}: {
  title: string;
  image: string;
}) {
  const { t, i18n } = useTranslation();

  return (
    <section
      className={`relative flex items-center justify-center h-[380px] sm:h-[450px] md:h-[500px] lg:h-[550px] overflow-hidden ${
        i18n.language === "bn" ? "font-bengali" : "font-english"
      }`}
    >
      {/* =========================================
          1. ANIMATED BACKGROUND IMAGE
          ========================================= */}
      {/* ছবিটা লোড হওয়ার পর খুব স্মুথলি একটু জুম-আউট হবে */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover md:bg-fixed"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* =========================================
          2. DEEP VIGNETTE OVERLAY
          ========================================= */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0A0F1A]/80 via-[#0A0F1A]/50 to-[#0A0F1A]/95"></div>

      {/* =========================================
          3. GLASSMORPHISM CONTENT BOX
          ========================================= */}
      <div className="relative z-20 flex flex-col items-center w-full max-w-4xl px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          // গ্লাসমরফিজম ইফেক্ট: ব্লার ব্যাকগ্রাউন্ড এবং হালকা সাদা বর্ডার
          className="flex flex-col items-center justify-center w-full px-6 py-10 sm:p-12 md:p-16 backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
        >
          {/* Decorative Top Accent (Diamond Shape) */}
          <div className="flex items-center gap-3 mb-6 sm:mb-8 opacity-90">
            <span className="w-10 sm:w-16 h-[2px] bg-gradient-to-r from-transparent to-[#dbb671]"></span>
            <span className="w-2.5 h-2.5 rotate-45 bg-[#dbb671] shadow-[0_0_12px_rgba(219,182,113,0.9)]"></span>
            <span className="w-10 sm:w-16 h-[2px] bg-gradient-to-l from-transparent to-[#dbb671]"></span>
          </div>

          {/* Main Title (Gradient Text) */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent uppercase tracking-[0.15em] sm:tracking-[0.2em] bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 drop-shadow-xl text-center leading-tight mb-6 sm:mb-8">
            {t(title)}
          </h1>

          {/* Breadcrumb / Sub-navigation */}
          <div className="flex items-center gap-3 text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.2em] text-gray-400 uppercase bg-black/20 px-6 py-2 rounded-full border border-white/5">
            <Link
              to="/"
              className="transition-colors duration-300 hover:text-[#dbb671]"
            >
              {/* Home টেক্সটটি JSON এ থাকলে t("nav_home") ব্যবহার করতে পারেন */}
              Home
            </Link>
            <span className="text-[#dbb671] mt-0.5">•</span>
            <span className="text-white drop-shadow-md">{t(title)}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
