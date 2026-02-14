// import { images } from "@/assets/assets";
// import { headOfLegalVariants } from "@/motions/motions";
// import { motion } from "framer-motion";

// export default function HeadOfLegal() {
//   return (
//     <motion.section
//       variants={headOfLegalVariants}
//       initial={"initial"}
//       whileInView={"whileInView"}
//       className="py-12 overflow-hidden bg-white md:py-20"
//     >
//       <div className="container px-6 mx-auto md:px-12">
//         <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
//           {/* Image Column with Responsive Corner Borders */}
//           <div className="relative max-w-2xl mx-auto group lg:mx-0">
//             {/* The Border Frame Container */}
//             <div className="relative p-3 md:p-5">
//               {/* Top Left Corner */}
//               <motion.div
//                 variants={headOfLegalVariants}
//                 initial={"topLeftInitial"}
//                 whileInView={"topLeftWhileInView"}
//                 className="absolute top-0 left-0 w-16 h-16 md:w-24 md:h-24 border-t-4 border-l-4 border-[#dbb671] rounded-tl-md"
//               ></motion.div>

//               {/* Bottom Right Corner */}
//               <motion.div
//                 variants={headOfLegalVariants}
//                 initial={"bottomRightInitial"}
//                 whileInView={"bottomRightWhileInView"}
//                 className="absolute bottom-0 right-0 w-16 h-16 md:w-24 md:h-24 border-b-4 border-r-4 border-[#dbb671] rounded-br-md"
//               ></motion.div>

//               {/* Image Container */}
//               <motion.div
//                 variants={headOfLegalVariants}
//                 initial={"imageInitial"}
//                 whileInView={"imageWhileInView"}
//                 className="relative overflow-hidden rounded-md shadow-xl"
//               >
//                 <motion.img
//                   variants={headOfLegalVariants}
//                   whileHover={"imageHover"}
//                   src={images.prince2}
//                   alt="head of legal"
//                   className="object-cover w-full h-auto transform cursor-pointer"
//                 />

//                 {/* Overlay Content */}
//                 <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-[#604B33] via-[#604B33]/80 to-transparent text-white p-6 md:p-8">
//                   <h3 className="text-xl font-bold md:text-2xl">
//                     Shamiul Islam Prince
//                   </h3>
//                   <p className="text-lg text-white/90">Head of Legal</p>
//                   <p className="text-sm md:text-base text-white/80">
//                     Advocate Bangladesh Supreme Court
//                   </p>
//                 </div>
//               </motion.div>
//             </div>
//           </div>

//           {/* Text Content Column */}
//           <div className="flex flex-col space-y-6 md:space-y-8">
//             <div>
//               <motion.p
//                 variants={headOfLegalVariants}
//                 initial={"chipsInitial"}
//                 whileInView={"chipsWhileInView"}
//                 className="bg-[#604B33]/10 rounded-full px-4 py-1 w-fit font-bold uppercase text-[#604B33] text-xs tracking-wider mb-4"
//               >
//                 Meet Advocate Shamiul Islam Prince
//               </motion.p>
//               <motion.h2
//                 variants={headOfLegalVariants}
//                 initial={"headingInitial"}
//                 whileInView={"headingWhileInView"}
//                 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl"
//               >
//                 <span className="block mb-2 text-5xl md:text-7xl quote">
//                   Justice is not
//                 </span>
//                 <span className="text-[#604B33] italic font-serif quote">
//                   just a profession; it is a responsibility
//                 </span>
//               </motion.h2>
//             </div>

//             <div className="space-y-4 text-base leading-relaxed text-gray-700 md:text-lg">
//               <motion.p
//                 variants={headOfLegalVariants}
//                 initial={"contentInitial"}
//                 whileInView={"contentWhileInView"}
//               >
//                 Hello, I am{" "}
//                 <strong className="text-gray-900">
//                   Advocate Md. Shamiul Islam (Prince)
//                 </strong>
//                 , an Advocate of the Supreme Court of Bangladesh. My career is
//                 built on a foundation of integrity and a passion for upholding
//                 the law.
//               </motion.p>
//               <motion.p
//                 variants={headOfLegalVariants}
//                 initial={"contentInitial"}
//                 whileInView={"contentWhileInView"}
//               >
//                 I graduated from{" "}
//                 <a
//                   href="https://nub.ac.bd/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-[#604B33] underline underline-offset-4 decoration-[#604B33]/40 hover:decoration-[#604B33] transition-all font-bold"
//                 >
//                   Northern University Bangladesh (NUB)
//                 </a>{" "}
//                 and have since dedicated my life to the legal profession. Beyond
//                 representing clients, I served as an Executive Committee Member
//                 (2022-23) of the Dhaka Bar Association.
//               </motion.p>
//             </div>

//             <motion.div
//               variants={headOfLegalVariants}
//               initial={"quoteInitial"}
//               whileInView={"quoteWhileInView"}
//               className="text-xl md:text-2xl border-l-4 border-[#604B33] bg-[#604b33]/5 p-6 md:p-10 rounded-r-xl italic text-gray-800 font-serif leading-relaxed quote"
//             >
//               "Whether you are seeking legal counsel for complex litigation or
//               require guidance on legal procedures, I am here to provide
//               strategic and effective solutions."
//             </motion.div>

//             <motion.p
//               variants={headOfLegalVariants}
//               initial={"contentInitial"}
//               whileInView={"contentWhileInView"}
//               className="pt-4 italic font-medium text-gray-600 border-t border-gray-100"
//             >
//               Committed to ensuring your rights are protected within the complex
//               framework of our legal system.
//             </motion.p>
//           </div>
//         </div>
//       </div>
//     </motion.section>
//   );
// }

import { images } from "@/assets/assets";
import { headOfLegalVariants } from "@/motions/motions";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function HeadOfLegal() {
  const { t, i18n } = useTranslation();

  return (
    <motion.section
      variants={headOfLegalVariants}
      initial={"initial"}
      whileInView={"whileInView"}
      className={`py-12 overflow-hidden bg-white md:py-20 ${
        i18n.language === "bn" ? "font-bengali" : "font-english"
      }`}
    >
      <div className="container px-6 mx-auto md:px-12">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image Column */}
          <div className="relative max-w-2xl mx-auto group lg:mx-0">
            <div className="relative p-3 md:p-5">
              <motion.div
                variants={headOfLegalVariants}
                initial={"topLeftInitial"}
                whileInView={"topLeftWhileInView"}
                className="absolute top-0 left-0 w-16 h-16 md:w-24 md:h-24 border-t-4 border-l-4 border-[#dbb671] rounded-tl-md"
              ></motion.div>

              <motion.div
                variants={headOfLegalVariants}
                initial={"bottomRightInitial"}
                whileInView={"bottomRightWhileInView"}
                className="absolute bottom-0 right-0 w-16 h-16 md:w-24 md:h-24 border-b-4 border-r-4 border-[#dbb671] rounded-br-md"
              ></motion.div>

              <motion.div
                variants={headOfLegalVariants}
                initial={"imageInitial"}
                whileInView={"imageWhileInView"}
                className="relative overflow-hidden rounded-md shadow-xl"
              >
                <motion.img
                  variants={headOfLegalVariants}
                  whileHover={"imageHover"}
                  src={images.prince2}
                  alt="head of legal"
                  className="object-cover w-full h-auto transform cursor-pointer"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-[#604B33] via-[#604B33]/80 to-transparent text-white p-6 md:p-8">
                  <h3 className="text-xl font-bold md:text-2xl">
                    {t("hol_name")}
                  </h3>
                  <p className="text-lg text-white/90">
                    {t("hol_designation")}
                  </p>
                  <p className="text-sm md:text-base text-white/80">
                    {t("hol_court")}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="flex flex-col space-y-6 md:space-y-8">
            <div>
              <motion.p
                variants={headOfLegalVariants}
                initial={"chipsInitial"}
                whileInView={"chipsWhileInView"}
                className="bg-[#604B33]/10 rounded-full px-4 py-1 w-fit font-bold uppercase text-[#604B33] text-xs tracking-wider mb-4"
              >
                {t("hol_meet_title")}
              </motion.p>
              <motion.h2
                variants={headOfLegalVariants}
                initial={"headingInitial"}
                whileInView={"headingWhileInView"}
                className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl"
              >
                <span className="block mb-2 text-5xl md:text-7xl quote">
                  {t("hol_quote_main")}
                </span>
                <span className="text-[#604B33] italic font-serif quote">
                  {t("hol_quote_sub")}
                </span>
              </motion.h2>
            </div>

            <div className="space-y-4 text-base leading-relaxed text-gray-700 md:text-lg">
              <motion.p
                variants={headOfLegalVariants}
                initial={"contentInitial"}
                whileInView={"contentWhileInView"}
              >
                {t("hol_intro")}
              </motion.p>
              <motion.p
                variants={headOfLegalVariants}
                initial={"contentInitial"}
                whileInView={"contentWhileInView"}
              >
                {t("hol_education")}
              </motion.p>
            </div>

            <motion.div
              variants={headOfLegalVariants}
              initial={"quoteInitial"}
              whileInView={"quoteWhileInView"}
              className="text-xl md:text-2xl border-l-4 border-[#604B33] bg-[#604b33]/5 p-6 md:p-10 rounded-r-xl italic text-gray-800 font-serif leading-relaxed quote"
            >
              {t("hol_strategic_quote")}
            </motion.div>

            <motion.p
              variants={headOfLegalVariants}
              initial={"contentInitial"}
              whileInView={"contentWhileInView"}
              className="pt-4 italic font-medium text-gray-600 border-t border-gray-100"
            >
              {t("hol_commitment")}
            </motion.p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
