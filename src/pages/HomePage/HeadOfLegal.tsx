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

// import { images } from "@/assets/assets";
// import { headOfLegalVariants } from "@/motions/motions";
// import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";

// export default function HeadOfLegal() {
//   const { t, i18n } = useTranslation();

//   return (
//     <motion.section
//       variants={headOfLegalVariants}
//       initial={"initial"}
//       whileInView={"whileInView"}
//       className={`py-12 overflow-hidden bg-white md:py-20 ${
//         i18n.language === "bn" ? "font-bengali" : "font-english"
//       }`}
//     >
//       <div className="container px-6 mx-auto md:px-12">
//         <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
//           {/* Image Column */}
//           <div className="relative max-w-2xl mx-auto group lg:mx-0">
//             <div className="relative p-3 md:p-5">
//               <motion.div
//                 variants={headOfLegalVariants}
//                 initial={"topLeftInitial"}
//                 whileInView={"topLeftWhileInView"}
//                 className="absolute top-0 left-0 w-16 h-16 md:w-24 md:h-24 border-t-4 border-l-4 border-[#dbb671] rounded-tl-md"
//               ></motion.div>

//               <motion.div
//                 variants={headOfLegalVariants}
//                 initial={"bottomRightInitial"}
//                 whileInView={"bottomRightWhileInView"}
//                 className="absolute bottom-0 right-0 w-16 h-16 md:w-24 md:h-24 border-b-4 border-r-4 border-[#dbb671] rounded-br-md"
//               ></motion.div>

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

//                 <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-[#604B33] via-[#604B33]/80 to-transparent text-white p-6 md:p-8">
//                   <h3 className="text-xl font-bold md:text-2xl">
//                     {t("hol_name")}
//                   </h3>
//                   <p className="text-lg text-white/90">
//                     {t("hol_designation")}
//                   </p>
//                   <p className="text-sm md:text-base text-white/80">
//                     {t("hol_court")}
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
//                 {t("hol_meet_title")}
//               </motion.p>
//               <motion.h2
//                 variants={headOfLegalVariants}
//                 initial={"headingInitial"}
//                 whileInView={"headingWhileInView"}
//                 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl"
//               >
//                 <span className="block mb-2 text-5xl md:text-7xl quote">
//                   {t("hol_quote_main")}
//                 </span>
//                 <span className="text-[#604B33] italic font-serif quote">
//                   {t("hol_quote_sub")}
//                 </span>
//               </motion.h2>
//             </div>

//             <div className="space-y-4 text-base leading-relaxed text-gray-700 md:text-lg">
//               <motion.p
//                 variants={headOfLegalVariants}
//                 initial={"contentInitial"}
//                 whileInView={"contentWhileInView"}
//               >
//                 {t("hol_intro")}
//               </motion.p>
//               <motion.p
//                 variants={headOfLegalVariants}
//                 initial={"contentInitial"}
//                 whileInView={"contentWhileInView"}
//               >
//                 {t("hol_education")}
//               </motion.p>
//             </div>

//             <motion.div
//               variants={headOfLegalVariants}
//               initial={"quoteInitial"}
//               whileInView={"quoteWhileInView"}
//               className="text-xl md:text-2xl border-l-4 border-[#604B33] bg-[#604b33]/5 p-6 md:p-10 rounded-r-xl italic text-gray-800 font-serif leading-relaxed quote"
//             >
//               {t("hol_strategic_quote")}
//             </motion.div>

//             <motion.p
//               variants={headOfLegalVariants}
//               initial={"contentInitial"}
//               whileInView={"contentWhileInView"}
//               className="pt-4 italic font-medium text-gray-600 border-t border-gray-100"
//             >
//               {t("hol_commitment")}
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
      viewport={{ once: true, margin: "-50px" }}
      // Premium subtle off-white background
      className={`py-16 md:py-24 overflow-hidden bg-[#faf9f8] ${
        i18n.language === "bn" ? "font-bengali" : "font-english"
      }`}
    >
      <div className="container px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12 xl:gap-20">
          {/* =========================================
              IMAGE COLUMN (Classic Frame & Modern Hover)
              ========================================= */}
          <div className="relative w-full max-w-md mx-auto group lg:max-w-none lg:mx-0">
            {/* Classic Top-Left Gold Corner */}
            <motion.div
              variants={headOfLegalVariants}
              initial="topLeftInitial"
              whileInView="topLeftWhileInView"
              className="absolute -top-4 -left-4 w-20 h-20 sm:-top-5 sm:-left-5 sm:w-28 sm:h-28 border-t-[3px] border-l-[3px] border-[#dbb671] z-0 rounded-tl-lg"
            ></motion.div>

            {/* Classic Bottom-Right Gold Corner */}
            <motion.div
              variants={headOfLegalVariants}
              initial="bottomRightInitial"
              whileInView="bottomRightWhileInView"
              className="absolute -bottom-4 -right-4 w-20 h-20 sm:-bottom-5 sm:-right-5 sm:w-28 sm:h-28 border-b-[3px] border-r-[3px] border-[#dbb671] z-0 rounded-br-lg"
            ></motion.div>

            {/* Main Image Wrapper */}
            <motion.div
              variants={headOfLegalVariants}
              initial="imageInitial"
              whileInView="imageWhileInView"
              className="relative z-10 overflow-hidden shadow-2xl rounded-xl aspect-[3/4] md:aspect-[4/5] bg-gray-200"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                src={images.prince2}
                alt={t("hol_name")}
                className="block object-cover object-top w-full h-full cursor-pointer"
              />

              {/* Dark Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-[#111827]/20 to-transparent pointer-events-none"></div>

              {/* Classic Info Box inside Image */}
              <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="pl-4 border-l-4 border-[#dbb671]"
                >
                  <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl drop-shadow-md">
                    {t("hol_name")}
                  </h3>
                  <p className="mt-1 text-sm font-medium tracking-widest text-[#dbb671] uppercase sm:text-base drop-shadow-sm">
                    {t("hol_designation")}
                  </p>
                  <p className="mt-2 text-sm text-gray-300 sm:text-base drop-shadow-sm">
                    {t("hol_court")}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* =========================================
              TEXT CONTENT COLUMN
              ========================================= */}
          <div className="flex flex-col space-y-8 md:space-y-10">
            {/* --- Heading Area --- */}
            <div className="space-y-4">
              <motion.span
                variants={headOfLegalVariants}
                initial="chipsInitial"
                whileInView="chipsWhileInView"
                className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest text-[#604B33] uppercase border border-[#604B33]/20 rounded-full bg-white shadow-sm"
              >
                {t("hol_meet_title")}
              </motion.span>

              <motion.h2
                variants={headOfLegalVariants}
                initial="headingInitial"
                whileInView="headingWhileInView"
                className="text-4xl font-extrabold leading-[1.15] text-gray-900 sm:text-5xl lg:text-5xl xl:text-6xl"
              >
                <span className="block mb-2 tracking-tight text-transparent quote bg-clip-text bg-linear-to-r from-gray-900 to-gray-600">
                  {t("hol_quote_main")}
                </span>
                <span className="block quote text-3xl italic font-bold text-[#604B33] sm:text-4xl lg:text-5xl mt-2">
                  {t("hol_quote_sub")}
                </span>
              </motion.h2>
            </div>

            {/* --- Description Paragraphs --- */}
            <div className="space-y-5 text-base leading-relaxed text-gray-600 sm:text-lg">
              <motion.p
                variants={headOfLegalVariants}
                initial="contentInitial"
                whileInView="contentWhileInView"
              >
                {t("hol_intro")}
              </motion.p>
              <motion.p
                variants={headOfLegalVariants}
                initial="contentInitial"
                whileInView="contentWhileInView"
              >
                {t("hol_education")}
              </motion.p>
            </div>

            {/* --- Premium Pull Quote Block --- */}
            <motion.div
              variants={headOfLegalVariants}
              initial="quoteInitial"
              whileInView="quoteWhileInView"
              className="relative p-6 bg-white border border-gray-100 shadow-xl sm:p-8 rounded-2xl md:p-10"
            >
              {/* Decorative Large SVG Quote Icon */}
              <svg
                className="absolute w-12 h-12 text-[#dbb671] opacity-20 top-4 left-4 sm:w-16 sm:h-16"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="relative z-10 font-serif text-lg italic leading-relaxed text-gray-800 quote sm:text-xl lg:text-2xl">
                "{t("hol_strategic_quote")}"
              </p>
            </motion.div>

            {/* --- Commitment Sign-off --- */}
            <motion.div
              variants={headOfLegalVariants}
              initial="contentInitial"
              whileInView="contentWhileInView"
              className="flex items-center gap-4 pt-4 border-t border-gray-200"
            >
              {/* Classic Line Separator */}
              <div className="w-12 h-[2px] bg-[#dbb671]"></div>
              <p className="font-serif text-sm italic font-semibold tracking-wide text-gray-500 sm:text-base">
                {t("hol_commitment")}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
