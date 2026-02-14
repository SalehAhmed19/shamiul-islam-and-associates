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
import { icons, images } from "../../assets/assets";
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
        style={{
          backgroundImage: `url(${images.freeConsultation})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className={`text-white py-12 px-4 md:p-16 ${
          i18n.language === "bn" ? "font-bengali" : "font-english"
        }`}
      >
        <div className="container mx-auto">
          <motion.div
            variants={consultationVariants}
            initial="initial"
            whileInView="whileInView"
            className="grid items-center grid-cols-1 gap-8 md:grid-cols-2 md:gap-10"
          >
            {/* --- Left Side: Text --- */}
            <div className="flex flex-col justify-center space-y-6 text-center">
              <div>
                <motion.img
                  variants={consultationVariants}
                  whileInView="logoRotation"
                  src={icons.logo2}
                  alt="logo"
                  className="w-20 mx-auto rounded-full md:w-24"
                />
              </div>

              <motion.h2
                variants={consultationVariants}
                initial="titleInitial"
                whileInView="titleWhileInView"
                className="text-3xl md:text-[40px] font-bold leading-tight"
              >
                <span
                  dangerouslySetInnerHTML={{ __html: t("consult_title") }}
                />
              </motion.h2>

              <motion.p
                variants={consultationVariants}
                initial="contentInitial"
                whileInView="contentWhileInView"
                className="w-full mx-auto text-sm leading-relaxed md:w-3/4 lg:w-1/2 md:text-base"
              >
                {t("consult_description")}
              </motion.p>
            </div>

            {/* --- Right Side: Form --- */}
            {/* ContactForm এর ভেতরেও i18n ব্যবহার করা হয়েছে ধরে নেওয়া হচ্ছে */}
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </Element>
  );
}
