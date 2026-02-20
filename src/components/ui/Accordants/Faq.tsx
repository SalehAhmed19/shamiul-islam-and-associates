// import { useState } from "react";
// import { images } from "../../../assets/assets";
// import { FaqData } from "../../../data/FaqData";
// import { AnimatePresence, motion } from "framer-motion";
// import { FAQVariants } from "@/motions/motions";

// export default function Faq() {
//   const [openIndex, setOpenIndex] = useState<number | null>(0);

//   const toggleAccordion = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section
//       style={{
//         backgroundImage: `url(${images.faq})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//       className="relative py-16 text-white"
//     >
//       <div className="absolute inset-0 pointer-events-none bg-black/60"></div>

//       <div className="container relative z-10 px-4 mx-auto">
//         <motion.h2
//           variants={FAQVariants}
//           initial="headingInitial"
//           whileInView="headingWhileInView"
//           className="text-3xl md:text-[40px] font-bold text-center mb-10"
//         >
//           Frequently Asked Questions
//         </motion.h2>

//         <div className="flex flex-col gap-4 mx-auto">
//           {FaqData?.map((item, index) => (
//             <motion.div
//               variants={FAQVariants}
//               initial="faqInitial"
//               whileInView="faqWhileInView"
//               key={index}
//               className="border-b border-white/20 last:border-none"
//             >
//               {/* Accordion Header */}
//               <button
//                 onClick={() => toggleAccordion(index)}
//                 className="flex items-center justify-between w-full py-4 text-left cursor-pointer focus:outline-none group"
//               >
//                 <span className="text-lg font-semibold text-white">
//                   {index + 1}. {item.question}
//                 </span>

//                 <motion.svg
//                   animate={{ rotate: openIndex === index ? 180 : 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="w-5 h-5 text-white"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </motion.svg>
//               </button>

//               {/* Framer Motion Content Animation */}
//               <AnimatePresence initial={false}>
//                 {openIndex === index && (
//                   <motion.div
//                     key="content"
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{
//                       duration: 0.4,
//                       ease: [0.04, 0.62, 0.23, 0.98],
//                     }}
//                     className="overflow-hidden"
//                   >
//                     <div className="px-1 pb-4 space-y-3">
//                       <p className="text-base leading-relaxed text-gray-200">
//                         {item.answer}
//                       </p>
//                       {item.bullets && (
//                         <ul className="space-y-2">
//                           {item.bullets.map((bullet, bIndex) => (
//                             <li
//                               key={bIndex}
//                               className="flex items-center ml-3 text-base leading-relaxed text-gray-200"
//                             >
//                               <span className="h-1.5 w-1.5 bg-white rounded-full inline-block mr-2 shrink-0"></span>
//                               {bullet}
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
// import { useState } from "react";
// import { images } from "../../../assets/assets";
// import { FaqData } from "../../../data/FaqData";
// import { AnimatePresence, motion } from "framer-motion";
// import { FAQVariants } from "@/motions/motions";
// import { useTranslation } from "react-i18next";

// export default function Faq() {
//   const { t, i18n } = useTranslation();
//   const [openIndex, setOpenIndex] = useState<number | null>(0);

//   const toggleAccordion = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section
//       style={{
//         backgroundImage: `url(${images.faq})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//       className={`relative py-16 text-white ${
//         i18n.language === "bn" ? "font-bengali" : "font-english"
//       }`}
//     >
//       <div className="absolute inset-0 pointer-events-none bg-black/60"></div>

//       <div className="container relative z-10 px-4 mx-auto">
//         <motion.h2
//           variants={FAQVariants}
//           initial="headingInitial"
//           whileInView="headingWhileInView"
//           className="text-3xl md:text-[40px] font-bold text-center mb-10"
//         >
//           {t("faq_heading")}
//         </motion.h2>

//         <div className="flex flex-col gap-4 mx-auto">
//           {FaqData?.map((item, index) => (
//             <motion.div
//               variants={FAQVariants}
//               initial="faqInitial"
//               whileInView="faqWhileInView"
//               key={index}
//               className="border-b border-white/20 last:border-none"
//             >
//               {/* Accordion Header */}
//               <button
//                 onClick={() => toggleAccordion(index)}
//                 className="flex items-center justify-between w-full py-4 text-left cursor-pointer focus:outline-none group"
//               >
//                 <span className="text-lg font-semibold text-white">
//                   {index + 1}. {t(item.question)}
//                 </span>

//                 <motion.svg
//                   animate={{ rotate: openIndex === index ? 180 : 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="w-5 h-5 text-white"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </motion.svg>
//               </button>

//               {/* Framer Motion Content Animation */}
//               <AnimatePresence initial={false}>
//                 {openIndex === index && (
//                   <motion.div
//                     key="content"
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{
//                       duration: 0.4,
//                       ease: [0.04, 0.62, 0.23, 0.98],
//                     }}
//                     className="overflow-hidden"
//                   >
//                     <div className="px-1 pb-4 space-y-3">
//                       <p className="text-base leading-relaxed text-gray-200">
//                         {t(item.answer)}
//                       </p>
//                       {item.bullets && (
//                         <ul className="space-y-2">
//                           {item.bullets.map((bullet, bIndex) => (
//                             <li
//                               key={bIndex}
//                               className="flex items-center ml-3 text-base leading-relaxed text-gray-200"
//                             >
//                               <span className="h-1.5 w-1.5 bg-white rounded-full inline-block mr-2 shrink-0"></span>
//                               {t(bullet)}
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState } from "react";
import { images } from "../../../assets/assets";
import { FaqData } from "../../../data/FaqData";
import { AnimatePresence, motion } from "framer-motion";
import { FAQVariants } from "@/motions/motions";
import { useTranslation } from "react-i18next";

export default function Faq() {
  const { t, i18n } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      style={{
        backgroundImage: `url(${images.faq})`,
      }}
      // Added lg:bg-fixed for parallax and standard background cover classes
      className={`relative py-20 sm:py-24 lg:py-32 bg-center bg-no-repeat bg-cover lg:bg-fixed ${
        i18n.language === "bn" ? "font-bengali" : "font-english"
      }`}
    >
      {/* --- Premium Dark Gradient Overlay --- */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111827]/95 via-[#111827]/80 to-[#111827]/95 backdrop-blur-[2px]"></div>

      <div className="container relative z-10 max-w-4xl px-4 mx-auto">
        {/* --- Heading Section --- */}
        <div className="flex flex-col items-center mb-12 text-center sm:mb-16">
          <motion.h2
            variants={FAQVariants}
            initial="headingInitial"
            whileInView="headingWhileInView"
            viewport={{ once: true }}
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl drop-shadow-lg"
          >
            {t("faq_heading")}
          </motion.h2>

          {/* Decorative Classic Gold Accent Line */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "60px", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-1 mt-6 rounded-full bg-[#dbb671]"
          />
        </div>

        {/* --- FAQ Accordion List --- */}
        <div className="flex flex-col gap-4 mx-auto">
          {FaqData?.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                variants={FAQVariants}
                initial="faqInitial"
                whileInView="faqWhileInView"
                viewport={{ once: true, margin: "-50px" }}
                key={index}
                // Glass-like premium card effect instead of just a bottom border
                className={`border rounded-xl backdrop-blur-sm transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white/10 border-[#dbb671]/40 shadow-lg"
                    : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex items-center justify-between w-full p-5 text-left cursor-pointer sm:p-6 focus:outline-none group"
                >
                  <span
                    className={`text-base sm:text-lg font-bold pr-4 transition-colors duration-300 ${
                      isOpen
                        ? "text-[#dbb671]"
                        : "text-white group-hover:text-gray-200"
                    }`}
                  >
                    {/* Index number styled slightly differently for a classic look */}
                    <span className="text-[#dbb671] mr-2 opacity-80">
                      {index + 1}.
                    </span>
                    {t(item.question)}
                  </span>

                  {/* Animated Icon Container */}
                  <motion.div
                    animate={{
                      rotate: isOpen ? 180 : 0,
                      backgroundColor: isOpen
                        ? "rgba(219, 182, 113, 0.2)"
                        : "rgba(255, 255, 255, 0.05)",
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex items-center justify-center shrink-0 w-8 h-8 rounded-full border border-white/10 group-hover:border-[#dbb671]/50 transition-colors"
                  >
                    <svg
                      className={`w-4 h-4 transition-colors ${isOpen ? "text-[#dbb671]" : "text-white"}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </button>

                {/* Framer Motion Content Animation */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.04, 0.62, 0.23, 0.98], // Super smooth custom easing
                      }}
                    >
                      <div className="px-5 pt-4 pb-5 space-y-4 text-gray-300 border-t sm:px-6 sm:pb-6 border-white/5">
                        <p className="text-sm leading-relaxed sm:text-base">
                          {t(item.answer)}
                        </p>

                        {/* Bullets handling with premium styling */}
                        {item.bullets && (
                          <ul className="mt-4 space-y-3">
                            {item.bullets.map((bullet, bIndex) => (
                              <li
                                key={bIndex}
                                className="flex items-start text-sm leading-relaxed sm:text-base"
                              >
                                {/* Custom Gold Bullet Icon */}
                                <svg
                                  className="w-4 h-4 mt-1 mr-3 text-[#dbb671] shrink-0"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span>{t(bullet)}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
