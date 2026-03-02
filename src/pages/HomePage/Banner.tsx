// import { images } from "../../assets/assets";
// import Button from "../../components/ui/Buttons/Button";
// import { Link } from "react-scroll";
// import { motion } from "framer-motion";
// import { bannerVariants } from "@/motions/motions";
// import { useTranslation } from "react-i18next";

// export default function Banner() {
//   const { t, i18n } = useTranslation();

//   return (
//     <section
//       className={`relative flex items-center justify-center min-h-[100dvh] w-full overflow-hidden text-white bg-center bg-no-repeat bg-cover ${
//         i18n.language === "bn" ? "font-bengali" : "font-english"
//       }`}
//       style={{
//         backgroundImage: `url(${images.hero})`,
//         // ম্যাক বা আইফোনের কিছু ব্রাউজারে bg-fixed সমস্যা করে, তাই 'scroll' রাখা নিরাপদ বা মিডিয়া কুয়েরি ব্যবহার করা ভালো
//         backgroundAttachment: "scroll",
//       }}
//     >
//       {/* --- Sophisticated Overlays --- */}
//       <div className="absolute inset-0 bg-black/60"></div>
//       <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

//       {/* --- Content Container --- */}
//       <div className="container relative z-10 flex flex-col items-center justify-center h-full px-6 mx-auto text-center">
//         {/* Wrapper with max-width for large screens (Mac/Desktop) */}
//         <div className="flex flex-col items-center w-full max-w-5xl gap-6 md:gap-8 lg:gap-10">
//           {/* Animated Logo */}
//           <motion.img
//             variants={bannerVariants}
//             initial="logoInitial"
//             whileInView="logoWhileInView"
//             viewport={{ once: true }}
//             src={images.logoLight}
//             alt="Logo"
//             className="object-contain w-20 h-20 drop-shadow-2xl md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36"
//           />

//           {/* Heading - Fluid Typography and line-height adjustment */}
//           <motion.h1
//             variants={bannerVariants}
//             initial="headingInitial"
//             whileInView="headingWhileInView"
//             viewport={{ once: true }}
//             className="text-3xl font-extrabold leading-tight tracking-tight uppercase sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl drop-shadow-lg"
//           >
//             <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300">
//               {t("banner_title")}
//             </span>
//           </motion.h1>

//           {/* Decorative Divider */}
//           <motion.div
//             initial={{ width: 0, opacity: 0 }}
//             whileInView={{ width: "60px", opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             viewport={{ once: true }}
//             className="h-[3px] rounded-full bg-[#dbb671]"
//           />

//           {/* Description - Max-width limited to keep readability on Mac */}
//           <motion.p
//             variants={bannerVariants}
//             initial="paragraphInitial"
//             whileInView="paragraphWhileInView"
//             viewport={{ once: true }}
//             className="max-w-2xl mx-auto text-sm font-medium leading-relaxed text-gray-200 sm:text-base md:text-lg lg:text-xl drop-shadow-md"
//           >
//             {t("banner_description")}
//           </motion.p>

//           {/* CTA Button */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.7 }}
//             viewport={{ once: true }}
//           >
//             <Link
//               to="contact"
//               smooth={true}
//               duration={500}
//               offset={-80}
//               className="inline-block cursor-pointer"
//             >
//               <Button className="px-8 py-3.5 text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:scale-105 md:px-10 md:py-4 md:text-base border border-white/20 hover:border-[#dbb671]">
//                 {t("banner_btn_text")}
//               </Button>
//             </Link>
//           </motion.div>
//         </div>
//       </div>

//       {/* Scroll Down Indicator - logic simplified for Retina displays */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.5, duration: 1 }}
//         className="absolute flex-col items-center hidden gap-3 -translate-x-1/2 bottom-8 left-1/2 sm:flex"
//       >
//         <span className="text-[10px] uppercase tracking-[0.3em] text-white/60 font-light">
//           Scroll
//         </span>
//         <motion.div
//           animate={{ y: [0, 8, 0] }}
//           transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
//           className="w-[1px] h-10 bg-gradient-to-b from-[#dbb671] to-transparent"
//         />
//       </motion.div>
//     </section>
//   );
// }

import { images } from "../../assets/assets";
import Button from "../../components/ui/Buttons/Button";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { bannerVariants } from "@/motions/motions";
import { useTranslation } from "react-i18next";

export default function Banner() {
  const { t, i18n } = useTranslation();

  return (
    <section
      className={`relative flex items-center justify-center min-h-[100dvh] w-full overflow-hidden text-white bg-center bg-no-repeat bg-cover ${
        i18n.language === "bn" ? "font-bengali" : "font-english"
      }`}
      style={{
        backgroundImage: `url(${images.hero})`,
        // ম্যাক বা আইফোনের কিছু ব্রাউজারে bg-fixed সমস্যা করে, তাই 'scroll' রাখা নিরাপদ বা মিডিয়া কুয়েরি ব্যবহার করা ভালো
        backgroundAttachment: "scroll",
      }}
    >
      {/* --- Sophisticated Overlays --- */}
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

      {/* --- Content Container --- */}
      {/* পরিবর্তন: pt-28 এবং pb-24 যোগ করা হয়েছে যাতে Navbar এবং নিচের Scroll লেখার সাথে ধাক্কা না লাগে */}
      <div className="container relative z-10 flex flex-col items-center justify-center h-full px-6 pb-24 mx-auto text-center pt-28">
        {/* Wrapper with max-width for large screens (Mac/Desktop) */}
        {/* পরিবর্তন: গ্যাপ একটু কমানো হয়েছে (gap-5) যাতে কন্টেন্ট আরও কমপ্যাক্ট থাকে */}
        <div className="flex flex-col items-center w-full max-w-5xl gap-5 md:gap-6 lg:gap-8">
          {/* Animated Logo */}
          <motion.img
            variants={bannerVariants}
            initial="logoInitial"
            whileInView="logoWhileInView"
            viewport={{ once: true }}
            src={images.logoLight}
            alt="Logo"
            className="object-contain w-16 h-16 drop-shadow-2xl md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28"
          />

          <motion.h1
            variants={bannerVariants}
            initial="headingInitial"
            whileInView="headingWhileInView"
            viewport={{ once: true }}
            className="text-3xl font-extrabold leading-tight tracking-tight uppercase sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl drop-shadow-lg"
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300">
              {t("banner_title")}
            </span>
          </motion.h1>

          {/* Decorative Divider */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "60px", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="h-[3px] rounded-full bg-[#dbb671]"
          />

          {/* Description - Max-width limited to keep readability on Mac */}
          <motion.p
            variants={bannerVariants}
            initial="paragraphInitial"
            whileInView="paragraphWhileInView"
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-sm font-medium leading-relaxed text-gray-200 sm:text-base md:text-lg lg:text-xl drop-shadow-md"
          >
            {t("banner_description")}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="inline-block cursor-pointer"
            >
              <Button className="px-8 mb-6 text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:scale-105 md:px-10 md:py-4 md:text-base border border-white/20 hover:border-[#dbb671]">
                {t("banner_btn_text")}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator - logic simplified for Retina displays */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute flex-col items-center hidden gap-3 -translate-x-1/2 bottom-8 left-1/2 sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/60 font-light">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-gradient-to-b from-[#dbb671] to-transparent"
        />
      </motion.div>
    </section>
  );
}
