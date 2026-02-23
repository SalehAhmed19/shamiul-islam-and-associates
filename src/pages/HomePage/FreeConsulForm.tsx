// import { icons, images } from "../../assets/assets";
// import ContactForm from "@/components/ui/Forms/ContactForm";
// import { Element } from "react-scroll";
// import { motion } from "framer-motion";
// import { consultationVariants } from "@/motions/motions";

// export default function FreeConsulForm() {
//     return (
//         <Element name="contact"><section
//             style={{
//                 backgroundImage: `url(${images.freeConsultation})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 backgroundRepeat: "no-repeat"
//             }}
//             // Changed p-16 to responsive padding: py-12 px-4 md:p-16
//             className="px-4 py-12 text-white md:p-16"
//         >
//             <div className="container mx-auto">
//                 <motion.div variants={consultationVariants} initial="initial" whileInView="whileInView" className="grid items-center grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">

//                     {/* --- Left Side: Text --- */}
//                     <div className="flex flex-col justify-center space-y-6 text-center">
//                         <div>
//                             <motion.img variants={consultationVariants} whileInView="logoRotation" src={icons.logo2} alt="logo" className="w-20 mx-auto rounded-full md:w-24" />
//                         </div>

//                         {/* Responsive Text Size */}
//                         <motion.h2 variants={consultationVariants} initial="titleInitial" whileInView="titleWhileInView" className="text-3xl md:text-[40px] font-bold leading-tight">
//                             Request A Free <br className="hidden md:block" />Consultation
//                         </motion.h2>

//                         {/* Responsive Paragraph Width: w-full on mobile, w-1/2 on large screens */}
//                         <motion.p variants={consultationVariants} initial="contentInitial" whileInView="contentWhileInView" className="w-full mx-auto text-sm leading-relaxed md:w-3/4 lg:w-1/2 md:text-base">
//                             Take the first step toward resolving your legal concerns with a complimentary, no-obligation session. Our expert team is ready to listen to your unique situation and provide professional guidance tailored to your needs. Contact us today to secure your free consultation and gain the clarity you deserve.
//                         </motion.p>
//                     </div>

//                     {/* --- Right Side: Form --- */}
//                     {/* Responsive Padding: p-6 on mobile, p-10 on desktop */}
//                     <ContactForm />
//                 </motion.div>
//             </div>
//         </section ></Element>
//     )
// }
// import { images } from "../../assets/assets";
// import ContactForm from "@/components/ui/Forms/ContactForm";
// import { Element } from "react-scroll";
// import { motion } from "framer-motion";
// import { consultationVariants } from "@/motions/motions";
// import { useTranslation } from "react-i18next";

// export default function FreeConsulForm() {
//   const { t, i18n } = useTranslation();

//   return (
//     <Element name="contact">
//       <section
//         style={{
//           backgroundImage: `url(${images.freeConsultation})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//         className={`text-white py-12 px-4 md:p-16 ${
//           i18n.language === "bn" ? "font-bengali" : "font-english"
//         }`}
//       >
//         <div className="container mx-auto">
//           <motion.div
//             variants={consultationVariants}
//             initial="initial"
//             whileInView="whileInView"
//             className="grid items-center grid-cols-1 gap-8 md:grid-cols-2 md:gap-10"
//           >
//             {/* --- Left Side: Text --- */}
//             <div className="flex flex-col justify-center space-y-6 text-center">
//               <div>
//                 <motion.img
//                   variants={consultationVariants}
//                   whileInView="logoRotation"
//                   src={images.logoV2}
//                   alt="logo"
//                   className="w-20 mx-auto md:w-24"
//                 />
//               </div>

//               <motion.h2
//                 variants={consultationVariants}
//                 initial="titleInitial"
//                 whileInView="titleWhileInView"
//                 className="text-3xl md:text-[40px] font-bold leading-tight"
//               >
//                 <span
//                   dangerouslySetInnerHTML={{ __html: t("consult_title") }}
//                 />
//               </motion.h2>

//               <motion.p
//                 variants={consultationVariants}
//                 initial="contentInitial"
//                 whileInView="contentWhileInView"
//                 className="w-full mx-auto text-sm leading-relaxed md:w-3/4 lg:w-1/2 md:text-base"
//               >
//                 {t("consult_description")}
//               </motion.p>
//             </div>

//             {/* --- Right Side: Form --- */}
//             {/* ContactForm এর ভেতরেও i18n ব্যবহার করা হয়েছে ধরে নেওয়া হচ্ছে */}
//             <ContactForm />
//           </motion.div>
//         </div>
//       </section>
//     </Element>
//   );
// }

import { images } from "../../assets/assets";
import ContactForm from "@/components/ui/Forms/ContactForm";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { consultationVariants } from "@/motions/motions";
import { useTranslation } from "react-i18next";

export default function FreeConsulForm() {
  const { t, i18n } = useTranslation();

  return (
    <Element name="contact">
      <section
        className={`relative py-16 md:py-24 bg-center bg-no-repeat bg-cover lg:bg-fixed ${
          i18n.language === "bn" ? "font-bengali" : "font-english"
        }`}
        style={{ backgroundImage: `url(${images.freeConsultation})` }}
      >
        {/* --- Premium Dark Gradient Overlay --- */}
        {/* Helps the white text and the form pop out against any background image */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>

        <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            variants={consultationVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            // Shifted to lg:grid-cols-2 to prevent the form from squishing on tablets
            className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20"
          >
            {/* =========================================
                LEFT SIDE: TEXT & INFO
                ========================================= */}
            {/* Centered on mobile, Left-aligned on desktop for a classic layout */}
            <div className="flex flex-col justify-center space-y-6 text-center lg:text-left lg:space-y-8">
              {/* Logo */}
              {/* <div>
                <motion.img
                  variants={consultationVariants}
                  whileInView="logoRotation"
                  viewport={{ once: true }}
                  src={images.logoV2}
                  alt="logo"
                  className="w-16 mx-auto sm:w-20 lg:mx-0 drop-shadow-2xl"
                />
              </div> */}
              <div className="p-1 border-2 rounded-full">
                <div className="flex items-center justify-center bg-white rounded-full">
                  <motion.img
                    variants={consultationVariants}
                    whileInView="logoRotation"
                    viewport={{ once: true }}
                    src={images.logoV2}
                    alt="logo"
                    className="object-contain w-10 h-10 transition-transform duration-300 group-hover:scale-105 sm:w-12 sm:h-12 lg:w-10 lg:h-10 xl:w-16 xl:h-16"
                  />
                </div>
              </div>

              {/* Decorative Accent Line */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: "60px", opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-1 mx-auto rounded-full lg:mx-0 bg-[#dbb671]"
              />

              {/* Title */}
              <motion.h2
                variants={consultationVariants}
                initial="titleInitial"
                whileInView="titleWhileInView"
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.15] text-white drop-shadow-lg"
              >
                <span
                  dangerouslySetInnerHTML={{ __html: t("consult_title") }}
                />
              </motion.h2>

              {/* Description */}
              <motion.p
                variants={consultationVariants}
                initial="contentInitial"
                whileInView="contentWhileInView"
                // Removed w-1/2 because the grid column already constrains it perfectly
                className="max-w-xl mx-auto text-base leading-relaxed text-gray-200 sm:text-lg lg:mx-0 drop-shadow-md"
              >
                {t("consult_description")}
              </motion.p>

              {/* Optional Premium Touch: Quick Contact Info under the text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col items-center gap-4 pt-6 mt-2 border-t border-white/10 lg:items-start lg:flex-row"
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#dbb671]/20 backdrop-blur-sm border border-[#dbb671]/30">
                    <svg
                      className="w-5 h-5 text-[#dbb671]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                      Emergency Line
                    </p>
                    {/* আপনি চাইলে JSON থেকে নাম্বারটি আনতে পারেন: t("nav_phone_number") */}
                    <p className="text-lg font-bold tracking-wider text-white sm:text-xl">
                      +880 1711 602 369
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* =========================================
                RIGHT SIDE: FORM
                ========================================= */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full max-w-2xl mx-auto lg:max-w-none"
            >
              <ContactForm />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Element>
  );
}
