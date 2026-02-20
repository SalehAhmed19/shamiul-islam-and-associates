// import { AnimatedNumber } from "@/components/ui/AnimatedNumber/AnimatedNumber";
// import { videos } from "../../assets/assets";
// import { motion } from "framer-motion";
// import { statsVariants } from "@/motions/motions";
// import { useTranslation } from "react-i18next";

// export default function Stats() {
//   const { t, i18n } = useTranslation();

//   return (
//     <section
//       className={`container mx-auto px-4 py-10 md:py-16 ${
//         i18n.language === "bn" ? "font-bengali" : "font-english"
//       }`}
//     >
//       {/* Video Container */}
//       <motion.div
//         className="relative overflow-hidden"
//         variants={statsVariants}
//         initial="initial"
//         whileInView="whileInView"
//       >
//         <video
//           src={videos.legalVideo}
//           muted
//           autoPlay
//           loop
//           playsInline
//           className="w-full h-[500px] md:h-[600px] object-cover"
//         ></video>

//         {/* Dark Overlay */}
//         <div className="absolute top-0 left-0 w-full h-full bg-black/80"></div>

//         {/* Text Content */}
//         <div className="absolute w-full px-4 text-center text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
//           <motion.h2
//             variants={statsVariants}
//             initial="headingInitial"
//             whileInView="headingWhileInView"
//             className="mb-4 text-3xl font-bold leading-tight md:text-5xl lg:text-6xl md:mb-6"
//           >
//             {t("stats_heading")}
//           </motion.h2>
//           <motion.p
//             variants={statsVariants}
//             initial="paragraphInitial"
//             whileInView="paragraphWhileInView"
//             className="max-w-3xl mx-auto text-base leading-relaxed text-gray-200 md:text-lg"
//           >
//             {t("stats_description")}
//           </motion.p>
//         </div>
//       </motion.div>

//       {/* Stats Grid */}
//       <div className="relative z-10 grid grid-cols-1 gap-8 p-6 mx-4 -mt-10 bg-white border border-gray-100 md:-mt-20 md:mx-10 md:p-12 sm:grid-cols-2 lg:grid-cols-4 md:gap-12">
//         <div className="text-center">
//           <div className="text-3xl md:text-[40px] font-bold flex justify-center items-center gap-2">
//             <AnimatedNumber value={1200} />+
//           </div>
//           <motion.p
//             variants={statsVariants}
//             initial="labelInitial"
//             whileInView="labelWhileInView"
//             className="mt-2 font-bold text-gray-600"
//           >
//             {t("stats_satisfied_clients")}
//           </motion.p>
//         </div>
//         <div className="text-center">
//           <div className="text-3xl md:text-[40px] font-bold flex justify-center items-center gap-2">
//             <AnimatedNumber value={98} />+
//           </div>
//           <motion.p
//             variants={statsVariants}
//             initial="labelInitial"
//             whileInView="labelWhileInView"
//             className="mt-2 font-bold text-gray-600"
//           >
//             {t("stats_success_rate")}
//           </motion.p>
//         </div>
//         <div className="text-center">
//           <div className="text-3xl md:text-[40px] font-bold flex justify-center items-center gap-2">
//             <AnimatedNumber value={15} />+
//           </div>
//           <motion.p
//             variants={statsVariants}
//             initial="labelInitial"
//             whileInView="labelWhileInView"
//             className="mt-2 font-bold text-gray-600"
//           >
//             {t("stats_experience")}
//           </motion.p>
//         </div>
//         <div className="text-center">
//           <div className="text-3xl md:text-[40px] font-bold flex justify-center items-center gap-2">
//             <AnimatedNumber value={1200} />+
//           </div>
//           <motion.p
//             variants={statsVariants}
//             initial="labelInitial"
//             whileInView="labelWhileInView"
//             className="mt-2 font-bold text-gray-600"
//           >
//             {t("stats_case_closed")}
//           </motion.p>
//         </div>
//       </div>
//     </section>
//   );
// }

import { AnimatedNumber } from "@/components/ui/AnimatedNumber/AnimatedNumber";
import { videos } from "../../assets/assets";
import { motion } from "framer-motion";
import { statsVariants } from "@/motions/motions";
import { useTranslation } from "react-i18next";

export default function Stats() {
  const { t, i18n } = useTranslation();

  return (
    <section
      className={`relative py-16 md:py-24 bg-[#faf9f8] ${
        i18n.language === "bn" ? "font-bengali" : "font-english"
      }`}
    >
      <div className="container px-4 mx-auto sm:px-6 lg:px-8 max-w-[1400px]">
        {/* =========================================
            1. CINEMATIC VIDEO SECTION
            ========================================= */}
        <motion.div
          variants={statsVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          className="relative overflow-hidden shadow-2xl rounded-3xl lg:rounded-[2.5rem]"
        >
          {/* Video Background */}
          <video
            src={videos.legalVideo}
            muted
            autoPlay
            loop
            playsInline
            className="object-cover w-full h-[500px] md:h-[550px] lg:h-[650px] scale-105 pointer-events-none"
          ></video>

          {/* Premium Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90"></div>

          {/* Text Content (Centered perfectly using Flex) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center sm:px-6 md:px-12">
            {/* Decorative Gold Line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "60px", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1 mb-6 rounded-full bg-[#dbb671]"
            />

            <motion.h2
              variants={statsVariants}
              initial="headingInitial"
              whileInView="headingWhileInView"
              className="mb-6 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-lg"
            >
              {t("stats_heading")}
            </motion.h2>

            <motion.p
              variants={statsVariants}
              initial="paragraphInitial"
              whileInView="paragraphWhileInView"
              className="max-w-3xl mx-auto text-base leading-relaxed text-gray-300 sm:text-lg lg:text-xl drop-shadow-md"
            >
              {t("stats_description")}
            </motion.p>
          </div>
        </motion.div>

        {/* =========================================
            2. FLOATING STATS GRID
            ========================================= */}
        {/* -mt-24 pulls the card up to overlap the video beautifully */}
        <div className="relative z-10 px-4 mx-auto -mt-20 max-w-7xl md:-mt-24 lg:-mt-28">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] rounded-2xl md:rounded-[2rem] py-10 px-6 sm:px-10 lg:py-14"
          >
            {/* lg:divide-x creates the professional vertical separators between stats on desktop */}
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-gray-200">
              {/* Stat 1 */}
              <div className="flex flex-col items-center text-center group">
                <div className="text-4xl lg:text-5xl font-extrabold flex items-center justify-center gap-1 text-[#111827] group-hover:scale-105 transition-transform duration-300">
                  <AnimatedNumber value={1200} />
                  <span className="text-[#dbb671]">+</span>
                </div>
                <motion.p
                  variants={statsVariants}
                  initial="labelInitial"
                  whileInView="labelWhileInView"
                  className="mt-3 text-xs font-bold tracking-[0.2em] text-gray-400 uppercase sm:text-sm"
                >
                  {t("stats_satisfied_clients")}
                </motion.p>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center text-center group">
                <div className="text-4xl lg:text-5xl font-extrabold flex items-center justify-center gap-1 text-[#111827] group-hover:scale-105 transition-transform duration-300">
                  <AnimatedNumber value={98} />
                  <span className="text-[#dbb671]">%</span>
                </div>
                <motion.p
                  variants={statsVariants}
                  initial="labelInitial"
                  whileInView="labelWhileInView"
                  className="mt-3 text-xs font-bold tracking-[0.2em] text-gray-400 uppercase sm:text-sm"
                >
                  {t("stats_success_rate")}
                </motion.p>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center text-center group">
                <div className="text-4xl lg:text-5xl font-extrabold flex items-center justify-center gap-1 text-[#111827] group-hover:scale-105 transition-transform duration-300">
                  <AnimatedNumber value={15} />
                  <span className="text-[#dbb671]">+</span>
                </div>
                <motion.p
                  variants={statsVariants}
                  initial="labelInitial"
                  whileInView="labelWhileInView"
                  className="mt-3 text-xs font-bold tracking-[0.2em] text-gray-400 uppercase sm:text-sm"
                >
                  {t("stats_experience")}
                </motion.p>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col items-center text-center group">
                <div className="text-4xl lg:text-5xl font-extrabold flex items-center justify-center gap-1 text-[#111827] group-hover:scale-105 transition-transform duration-300">
                  <AnimatedNumber value={1200} />
                  <span className="text-[#dbb671]">+</span>
                </div>
                <motion.p
                  variants={statsVariants}
                  initial="labelInitial"
                  whileInView="labelWhileInView"
                  className="mt-3 text-xs font-bold tracking-[0.2em] text-gray-400 uppercase sm:text-sm"
                >
                  {t("stats_case_closed")}
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
