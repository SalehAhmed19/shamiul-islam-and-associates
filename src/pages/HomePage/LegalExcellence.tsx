// import { images } from "../../assets/assets";
// import Button from "../../components/ui/Buttons/Button";
// import Heading from "../../components/ui/Headings/Heading";
// import { motion } from "framer-motion";
// import { legalExcellenceVariants } from "@/motions/motions";

// export default function LegalExcellence() {
//   return (
//     // Added px-4 md:px-8 so content doesn't touch screen edges on mobile
//     <section className="bg-[#FAF9F4] py-12 md:py-16 px-4 md:px-8">
//       {/* Added 'items-center' to vertically center the image and text relative to each other */}
//       <motion.div
//         variants={legalExcellenceVariants}
//         initial="initial"
//         whileInView="whileInView"
//         className="grid items-center max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-2 md:gap-12"
//       >
//         {/* Image Wrapper: Ensures image scales correctly within the grid */}

//         <motion.div
//           variants={legalExcellenceVariants}
//           initial="imageInitial"
//           whileInView="imageWhileInView"
//           className="w-full h-full overflow-hidden cursor-pointer"
//         >
//           <motion.img
//             variants={legalExcellenceVariants}
//             whileHover="imageHover"
//             src={images.legal1}
//             alt="legal"
//             className="object-cover w-full h-full"
//           />
//         </motion.div>

//         {/* Text Content */}
//         {/* 1. text-center md:text-left: Centers text on mobile, aligns left on desktop (next to image).
//                     2. justify-center md:justify-start: Aligns the button correctly based on screen size.
//                 */}
//         <div className="flex flex-col justify-center space-y-6 text-center">
//           <Heading>
//             Legal Excellence, <br />
//             Personalized Care
//           </Heading>

//           <motion.p
//             variants={legalExcellenceVariants}
//             initial="paragraphInitial"
//             whileInView="paragraphWhileInView"
//             className="text-sm leading-relaxed md:text-base"
//           >
//             At our firm, we combine world-class legal expertise with a deep
//             commitment to understanding your individual story. We believe that
//             achieving legal excellence is only half the battle; the other half
//             is providing the compassionate, one-on-one attention you deserve.
//             Trust our dedicated team to protect your interests with
//             sophisticated strategies while treating your case with the personal
//             care it requires.
//           </motion.p>

//           <div className="flex justify-center">
//             <Button>Learn More</Button>
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// }
// import { images } from "../../assets/assets";
// import Button from "../../components/ui/Buttons/Button";
// import Heading from "../../components/ui/Headings/Heading";
// import { motion } from "framer-motion";
// import { legalExcellenceVariants } from "@/motions/motions";
// import { useTranslation } from "react-i18next";

// export default function LegalExcellence() {
//   const { t, i18n } = useTranslation();

//   return (
//     <section
//       className={`bg-[#FAF9F4] py-12 md:py-16 px-4 md:px-8 ${
//         i18n.language === "bn" ? "font-bengali" : "font-english"
//       }`}
//     >
//       <motion.div
//         variants={legalExcellenceVariants}
//         initial="initial"
//         whileInView="whileInView"
//         className="grid items-center max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-2 md:gap-12"
//       >
//         {/* Image Wrapper */}
//         <motion.div
//           variants={legalExcellenceVariants}
//           initial="imageInitial"
//           whileInView="imageWhileInView"
//           className="w-full h-full overflow-hidden rounded-lg shadow-lg cursor-pointer"
//         >
//           <motion.img
//             variants={legalExcellenceVariants}
//             whileHover="imageHover"
//             src={images.legal1}
//             alt="legal"
//             className="object-cover w-full h-full"
//           />
//         </motion.div>

//         {/* Text Content */}
//         <div className="flex flex-col justify-center space-y-6 text-center">
//           <Heading>
//             {/* dangerouslySetInnerHTML ব্যবহার করা হয়েছে কারণ JSON-এ <br /> ট্যাগ আছে */}
//             <span
//               dangerouslySetInnerHTML={{ __html: t("legal_exc_heading") }}
//             />
//           </Heading>

//           <motion.p
//             variants={legalExcellenceVariants}
//             initial="paragraphInitial"
//             whileInView="paragraphWhileInView"
//             className="text-sm leading-relaxed text-gray-600 md:text-base"
//           >
//             {t("legal_exc_description")}
//           </motion.p>

//           <div className="flex justify-center">
//             <Button>{t("legal_exc_btn")}</Button>
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

import { images } from "@/assets/assets";
import { legalExcellenceVariants } from "@/motions/motions";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // আপনার পাথ অনুযায়ী মিলিয়ে নিবেন
import Button from "../../components/ui/Buttons/Button"; // আপনার পাথ অনুযায়ী মিলিয়ে নিবেন
import Heading from "@/components/ui/Headings/Heading";

export default function LegalExcellence() {
  const { t, i18n } = useTranslation();

  return (
    <section
      className={`py-16 md:py-24 overflow-hidden bg-white ${
        i18n.language === "bn" ? "font-bengali" : "font-english"
      }`}
    >
      <div className="container px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          variants={legalExcellenceVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          // Changed grid to align text and image beautifully with better gaps
          className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 xl:gap-24"
        >
          {/* =========================================
              IMAGE WRAPPER (Classic Offset Style)
              ========================================= */}
          <div className="relative w-full max-w-lg mx-auto lg:max-w-none lg:mx-0 group">
            {/* Classic Offset Golden Border */}
            <motion.div
              variants={legalExcellenceVariants}
              initial={{ opacity: 0, x: -20, y: -20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute inset-0 transform translate-x-4 translate-y-4 sm:translate-x-6 sm:translate-y-6 border-2 border-[#dbb671]/40 rounded-xl -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"
            />

            <motion.div
              variants={legalExcellenceVariants}
              initial="imageInitial"
              whileInView="imageWhileInView"
              // Perfect aspect ratio for modern premium feel
              className="relative overflow-hidden bg-gray-100 shadow-xl rounded-xl aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3]"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                src={images.legal1}
                alt="Legal Excellence"
                className="object-cover w-full h-full cursor-pointer"
              />
              {/* Subtle inner gradient to make the image pop */}
              <div className="absolute inset-0 border pointer-events-none rounded-xl border-black/5"></div>
            </motion.div>
          </div>

          {/* =========================================
              TEXT CONTENT (Modern Typography)
              ========================================= */}
          {/* Centered on mobile, Left-aligned on desktop */}
          <div className="flex flex-col justify-center space-y-6 text-center lg:text-left md:space-y-8">
            <div className="space-y-4">
              {/* Decorative Sub-title / Accent */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center gap-3 lg:justify-start"
              >
                <div className="w-8 sm:w-12 h-[2px] bg-[#dbb671]"></div>
                <span className="text-xs font-bold tracking-widest text-[#dbb671] uppercase">
                  {/* JSON এ এক্সট্রা টেক্সট না থাকলে ডিফল্ট কিছু দেখাতে পারেন */}
                  Excellence & Trust
                </span>
                <div className="w-8 sm:w-12 h-[2px] bg-[#dbb671] lg:hidden"></div>
              </motion.div>

              <Heading>
                {/* Heading styled inside the Heading component, but wrapped beautifully here */}
                <span
                  className="block text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
                  dangerouslySetInnerHTML={{ __html: t("legal_exc_heading") }}
                />
              </Heading>
            </div>

            <motion.p
              variants={legalExcellenceVariants}
              initial="paragraphInitial"
              whileInView="paragraphWhileInView"
              className="text-base leading-relaxed text-gray-600 sm:text-lg"
            >
              {t("legal_exc_description")}
            </motion.p>

            {/* Button Container */}
            <motion.div
              variants={legalExcellenceVariants}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex justify-center pt-2 lg:justify-start"
            >
              {/* Button Hover Scale is handled within your Button component or added via Framer */}
              <div className="transition-transform duration-300 rounded-full hover:-translate-y-1 hover:shadow-lg">
                <Button>{t("legal_exc_btn")}</Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
