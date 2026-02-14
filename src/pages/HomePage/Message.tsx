// import { messageSectionVariants } from "@/motions/motions";
// import { images } from "../../assets/assets";
// import Heading from "../../components/ui/Headings/Heading";
// import { motion } from "framer-motion";

// export default function Message() {
//     return (
//         <section className="relative z-20 flex justify-center px-4 md:px-8">
//             <motion.div viewport={{ amount: 0.5 }} variants={messageSectionVariants} initial={"initial"} whileInView={"whileInView"} className="container grid items-center w-full grid-cols-1 gap-8 p-6 -mt-16 bg-white md:-mt-24 lg:-mt-32 md:p-12 lg:p-16 md:grid-cols-2 md:gap-12">

//                 {/* --- Text Content --- */}

//                 <div className="order-2 space-y-4 text-center md:space-y-6 md:order-1 md:text-left">
//                     <Heading>
//                         Dedicated Expertise for <br className="hidden lg:block" /> Your Legal Needs
//                     </Heading>

//                     <motion.p variants={messageSectionVariants} initial={"paragraphInitial"} whileInView={"paragraphWhileInView"} className="text-sm leading-relaxed text-gray-600 md:text-base">
//                         We provide clear, effective, and trustworthy legal services. We're here to
//                         understand your unique situation and guide you with expert advice and strong
//                         representation. Your legal clarity and peace of mind are our priority.
//                     </motion.p>
//                     <motion.img variants={messageSectionVariants} initial={"signatureInitial"} whileInView={"signatureWhileInView"} src={images.signature} alt="signature" className="w-40 mx-auto md:w-65 md:mx-0" />
//                 </div>

//                 {/* --- Image Content --- */}
//                 {/* order-1: On mobile, image is FIRST.
//                         md:order-2: On desktop, image is RIGHT. */}

//                 <div className="order-1 w-full h-48 overflow-hidden rounded-lg cursor-pointer md:order-2 sm:h-64 md:h-full">
//                     <motion.img whileHover={{
//                         scale: 1.05,
//                         transition: {
//                             duration: 0.3,
//                             ease: "easeInOut",
//                         }
//                     }}
//                         variants={messageSectionVariants}
//                         initial={"imageInitial"}
//                         whileInView={"imageWhileInView"}
//                         src={images.prince}
//                         alt="prince-01"
//                         className="object-cover object-top w-full transition-transform duration-500 rounded-lg hover:scale-105"
//                     />
//                 </div>

//             </motion.div>

//         </section >
//     );
// }
import { messageSectionVariants } from "@/motions/motions";
import { images } from "../../assets/assets";
import Heading from "../../components/ui/Headings/Heading";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Message() {
  const { t, i18n } = useTranslation();

  return (
    <section
      className={`relative z-20 px-4 md:px-8 flex justify-center ${
        i18n.language === "bn" ? "font-bengali" : "font-english"
      }`}
    >
      <motion.div
        viewport={{ amount: 0.5 }}
        variants={messageSectionVariants}
        initial={"initial"}
        whileInView={"whileInView"}
        className="container grid items-center w-full grid-cols-1 gap-8 p-6 -mt-16 bg-white md:-mt-24 lg:-mt-32 md:p-12 lg:p-16 md:grid-cols-2 md:gap-12"
      >
        {/* --- Text Content --- */}
        <div className="order-2 space-y-4 text-center md:space-y-6 md:order-1 md:text-left">
          <Heading>{t("message_heading")}</Heading>

          <motion.p
            variants={messageSectionVariants}
            initial={"paragraphInitial"}
            whileInView={"paragraphWhileInView"}
            className="text-sm leading-relaxed text-gray-600 md:text-base"
          >
            {t("message_description")}
          </motion.p>

          <motion.img
            variants={messageSectionVariants}
            initial={"signatureInitial"}
            whileInView={"signatureWhileInView"}
            src={images.signature}
            alt="signature"
            className="w-40 mx-auto md:w-65 md:mx-0"
          />
        </div>

        {/* --- Image Content --- */}
        <div className="order-1 w-full h-48 overflow-hidden rounded-lg cursor-pointer md:order-2 sm:h-64 md:h-full">
          <motion.img
            whileHover={{
              scale: 1.05,
              transition: {
                duration: 0.3,
                ease: "easeInOut",
              },
            }}
            variants={messageSectionVariants}
            initial={"imageInitial"}
            whileInView={"imageWhileInView"}
            src={images.prince}
            alt="prince-01"
            className="object-cover object-top w-full transition-transform duration-500 rounded-lg hover:scale-105"
          />
        </div>
      </motion.div>
    </section>
  );
}
