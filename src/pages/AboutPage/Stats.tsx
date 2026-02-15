// import { AnimatedNumber } from "@/components/ui/AnimatedNumber/AnimatedNumber";
// import { videos } from "../../assets/assets";
// import { motion } from "framer-motion";
// import { statsVariants } from "@/motions/motions";

// export default function Stats() {
//     return (
//         <section className="container px-4 py-10 mx-auto md:py-16">
//             {/* Video Container */}
//             <motion.div className="relative overflow-hidden" variants={statsVariants} initial="initial" whileInView="whileInView">
//                 {/* Video: Added object-cover and height control */}
//                 <video
//                     src={videos.legalVideo}
//                     muted
//                     autoPlay
//                     loop
//                     playsInline // Essential for iOS autoplay
//                     className="w-full h-[500px] md:h-[600px] object-cover"
//                 ></video>

//                 {/* Dark Overlay */}
//                 <div className="absolute top-0 left-0 w-full h-full bg-black/80"></div>

//                 {/* Text Content */}
//                 <div className="absolute w-full px-4 text-center text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
//                     <motion.h2 variants={statsVariants} initial="headingInitial" whileInView="headingWhileInView" className="mb-4 text-3xl font-bold leading-tight md:text-5xl lg:text-6xl md:mb-6">
//                         We Provide Best Solutions
//                     </motion.h2>
//                     <motion.p variants={statsVariants} initial="paragraphInitial" whileInView="paragraphWhileInView" className="max-w-3xl mx-auto text-base leading-relaxed text-gray-200 md:text-lg">
//                         We provide clear, effective, and trustworthy legal services. We're here to understand your unique situation and guide you with expert advice and strong representation. Your legal clarity and peace of mind are our priority.
//                     </motion.p>
//                 </div>
//             </motion.div>

//             {/* Stats Grid */}
//             {/* Changed p-16 to p-6 for mobile, md:p-12 for desktop */}
//             <div className="relative z-10 grid grid-cols-1 gap-8 p-6 mx-4 -mt-10 bg-white border border-gray-100 md:-mt-20 md:mx-10 md:p-12 sm:grid-cols-2 lg:grid-cols-4 md:gap-12">
//                 <div className="text-center">
//                     <div className="text-3xl md:text-[40px] font-bold flex justify-center items-center gap-2"><AnimatedNumber value={1200} />+</div>
//                     <motion.p variants={statsVariants} initial="labelInitial" whileInView="labelWhileInView" className="mt-2 font-bold text-gray-600">Satisfied Clients</motion.p>
//                 </div>
//                 <div className="text-center">
//                     <div className="text-3xl md:text-[40px] font-bold flex justify-center items-center gap-2"><AnimatedNumber value={98} />+</div>
//                     <motion.p variants={statsVariants} initial="labelInitial" whileInView="labelWhileInView" className="mt-2 font-bold text-gray-600">Success Rate</motion.p>
//                 </div>
//                 <div className="text-center">
//                     <div className="text-3xl md:text-[40px] font-bold flex justify-center items-center gap-2"><AnimatedNumber value={15} />+</div>
//                     <motion.p variants={statsVariants} initial="labelInitial" whileInView="labelWhileInView" className="mt-2 font-bold text-gray-600">Years of Experience</motion.p>
//                 </div>
//                 <div className="text-center">
//                     <div className="text-3xl md:text-[40px] font-bold flex justify-center items-center gap-2"><AnimatedNumber value={1200} />+</div>
//                     <motion.p variants={statsVariants} initial="labelInitial" whileInView="labelWhileInView" className="mt-2 font-bold text-gray-600">Case Closed</motion.p>
//                 </div>
//             </div>
//         </section>
//     );
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
      className={`container mx-auto px-4 py-10 md:py-16 ${
        i18n.language === "bn" ? "font-bengali" : "font-english"
      }`}
    >
      {/* Video Container */}
      <motion.div
        className="relative overflow-hidden"
        variants={statsVariants}
        initial="initial"
        whileInView="whileInView"
      >
        <video
          src={videos.legalVideo}
          muted
          autoPlay
          loop
          playsInline
          className="w-full h-[500px] md:h-[600px] object-cover"
        ></video>

        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/80"></div>

        {/* Text Content */}
        <div className="absolute w-full px-4 text-center text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <motion.h2
            variants={statsVariants}
            initial="headingInitial"
            whileInView="headingWhileInView"
            className="mb-4 text-3xl font-bold leading-tight md:text-5xl lg:text-6xl md:mb-6"
          >
            {t("stats_heading")}
          </motion.h2>
          <motion.p
            variants={statsVariants}
            initial="paragraphInitial"
            whileInView="paragraphWhileInView"
            className="max-w-3xl mx-auto text-base leading-relaxed text-gray-200 md:text-lg"
          >
            {t("stats_description")}
          </motion.p>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="relative z-10 grid grid-cols-1 gap-8 p-6 mx-4 -mt-10 bg-white border border-gray-100 md:-mt-20 md:mx-10 md:p-12 sm:grid-cols-2 lg:grid-cols-4 md:gap-12">
        <div className="text-center">
          <div className="text-3xl md:text-[40px] font-bold flex justify-center items-center gap-2">
            <AnimatedNumber value={1200} />+
          </div>
          <motion.p
            variants={statsVariants}
            initial="labelInitial"
            whileInView="labelWhileInView"
            className="mt-2 font-bold text-gray-600"
          >
            {t("stats_satisfied_clients")}
          </motion.p>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-[40px] font-bold flex justify-center items-center gap-2">
            <AnimatedNumber value={98} />+
          </div>
          <motion.p
            variants={statsVariants}
            initial="labelInitial"
            whileInView="labelWhileInView"
            className="mt-2 font-bold text-gray-600"
          >
            {t("stats_success_rate")}
          </motion.p>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-[40px] font-bold flex justify-center items-center gap-2">
            <AnimatedNumber value={15} />+
          </div>
          <motion.p
            variants={statsVariants}
            initial="labelInitial"
            whileInView="labelWhileInView"
            className="mt-2 font-bold text-gray-600"
          >
            {t("stats_experience")}
          </motion.p>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-[40px] font-bold flex justify-center items-center gap-2">
            <AnimatedNumber value={1200} />+
          </div>
          <motion.p
            variants={statsVariants}
            initial="labelInitial"
            whileInView="labelWhileInView"
            className="mt-2 font-bold text-gray-600"
          >
            {t("stats_case_closed")}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
