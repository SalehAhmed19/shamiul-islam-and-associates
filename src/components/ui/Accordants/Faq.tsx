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
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className={`relative py-16 text-white ${
        i18n.language === "bn" ? "font-bengali" : "font-english"
      }`}
    >
      <div className="absolute inset-0 pointer-events-none bg-black/60"></div>

      <div className="container relative z-10 px-4 mx-auto">
        <motion.h2
          variants={FAQVariants}
          initial="headingInitial"
          whileInView="headingWhileInView"
          className="text-3xl md:text-[40px] font-bold text-center mb-10"
        >
          {t("faq_heading")}
        </motion.h2>

        <div className="flex flex-col gap-4 mx-auto">
          {FaqData?.map((item, index) => (
            <motion.div
              variants={FAQVariants}
              initial="faqInitial"
              whileInView="faqWhileInView"
              key={index}
              className="border-b border-white/20 last:border-none"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className="flex items-center justify-between w-full py-4 text-left cursor-pointer focus:outline-none group"
              >
                <span className="text-lg font-semibold text-white">
                  {index + 1}. {t(item.question)}
                </span>

                <motion.svg
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </button>

              {/* Framer Motion Content Animation */}
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-1 pb-4 space-y-3">
                      <p className="text-base leading-relaxed text-gray-200">
                        {t(item.answer)}
                      </p>
                      {item.bullets && (
                        <ul className="space-y-2">
                          {item.bullets.map((bullet, bIndex) => (
                            <li
                              key={bIndex}
                              className="flex items-center ml-3 text-base leading-relaxed text-gray-200"
                            >
                              <span className="h-1.5 w-1.5 bg-white rounded-full inline-block mr-2 shrink-0"></span>
                              {t(bullet)}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
