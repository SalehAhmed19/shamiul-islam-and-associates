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
// import { messageSectionVariants } from "@/motions/motions";
// import { images } from "../../assets/assets";
// import Heading from "../../components/ui/Headings/Heading";
// import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";

// export default function Message() {
//   const { t, i18n } = useTranslation();

//   return (
//     <section
//       className={`relative z-20 px-4 md:px-8 flex justify-center ${
//         i18n.language === "bn" ? "font-bengali" : "font-english"
//       }`}
//     >
//       <motion.div
//         viewport={{ amount: 0.5 }}
//         variants={messageSectionVariants}
//         initial={"initial"}
//         whileInView={"whileInView"}
//         className="container grid items-center w-full grid-cols-1 gap-8 p-6 -mt-16 bg-white md:-mt-24 lg:-mt-32 md:p-12 lg:p-16 md:grid-cols-2 md:gap-12"
//       >
//         {/* --- Text Content --- */}
//         <div className="order-2 space-y-4 text-center md:space-y-6 md:order-1 md:text-left">
//           <Heading>{t("message_heading")}</Heading>

//           <motion.p
//             variants={messageSectionVariants}
//             initial={"paragraphInitial"}
//             whileInView={"paragraphWhileInView"}
//             className="text-sm leading-relaxed text-gray-600 md:text-base"
//           >
//             {t("message_description")}
//           </motion.p>

//           <motion.img
//             variants={messageSectionVariants}
//             initial={"signatureInitial"}
//             whileInView={"signatureWhileInView"}
//             src={images.signature}
//             alt="signature"
//             className="w-40 mx-auto md:w-65 md:mx-0"
//           />
//         </div>

//         {/* --- Image Content --- */}
//         <div className="order-1 w-full h-48 overflow-hidden rounded-lg cursor-pointer md:order-2 sm:h-64 md:h-full">
//           <motion.img
//             whileHover={{
//               scale: 1.05,
//               transition: {
//                 duration: 0.3,
//                 ease: "easeInOut",
//               },
//             }}
//             variants={messageSectionVariants}
//             initial={"imageInitial"}
//             whileInView={"imageWhileInView"}
//             src={images.prince}
//             alt="prince-01"
//             className="object-cover object-top w-full transition-transform duration-500 rounded-lg hover:scale-105"
//           />
//         </div>
//       </motion.div>
//     </section>
//   );
// }
import { images } from "../../assets/assets";
import { motion } from "framer-motion";
import { messageSectionVariants } from "@/motions/motions";
import { useTranslation } from "react-i18next";
// import Heading from "../../components/ui/Heading"; // আপনার Heading কম্পোনেন্ট ইমপোর্ট করে নিবেন

export default function MessageSection() {
  const { t, i18n } = useTranslation();

  return (
    <section
      className={`py-16 overflow-hidden bg-gray-50 sm:py-20 lg:py-28 ${
        i18n.language === "bn" ? "font-bengali" : "font-english"
      }`}
    >
      <div className="container px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        {/* CSS Grid for perfect responsive alignment */}
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 xl:gap-24">
          {/* --- Image Content (Order 1 on Mobile, Order 2 on Desktop) --- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative order-1 w-full max-w-md mx-auto lg:max-w-none lg:order-2"
          >
            {/* Modern Decorative Offset Background */}
            <div className="absolute inset-0 transform translate-x-4 translate-y-4 border-2 rounded-2xl border-[#dbb671]/40 -z-10 sm:translate-x-6 sm:translate-y-6"></div>

            {/* Image Wrapper with fixed aspect ratio to prevent stretching */}
            <div className="relative overflow-hidden shadow-2xl rounded-2xl aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] bg-gray-200">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                variants={messageSectionVariants}
                initial="imageInitial"
                whileInView="imageWhileInView"
                viewport={{ once: true }}
                src={images.prince}
                alt="Founder Portrait"
                className="block object-cover object-top w-full h-full"
              />

              {/* Optional: Subtle gradient overlay at the bottom of the image for a premium look */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>
          </motion.div>

          {/* --- Text Content (Order 2 on Mobile, Order 1 on Desktop) --- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col order-2 gap-6 lg:order-1 sm:gap-8"
          >
            <div className="space-y-4 sm:space-y-6">
              {/* আপনার কাস্টম Heading কম্পোনেন্ট ব্যবহার করতে পারেন, অথবা নিচের মতো ডিজাইন করতে পারেন */}
              {/* <Heading>{t("message_heading")}</Heading> */}

              <motion.h2
                variants={messageSectionVariants}
                initial="headingInitial" // আপনার ভেরিয়েন্ট অনুযায়ী নাম চেঞ্জ করে নিবেন যদি আলাদা থাকে
                whileInView="headingWhileInView"
                viewport={{ once: true }}
                className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
              >
                {t("message_heading")}
                <span className="block w-20 h-1 mt-4 rounded-full bg-[#dbb671]"></span>
              </motion.h2>

              {/* Message Description */}
              <motion.p
                variants={messageSectionVariants}
                initial="paragraphInitial"
                whileInView="paragraphWhileInView"
                viewport={{ once: true }}
                className="text-base leading-relaxed text-gray-600 sm:text-lg lg:text-[1.1rem]"
              >
                {t("message_description")}
              </motion.p>
            </div>

            {/* Signature & Title Section */}
            <motion.div
              variants={messageSectionVariants}
              initial="signatureInitial"
              whileInView="signatureWhileInView"
              viewport={{ once: true }}
              className="pt-6 mt-4 border-t border-gray-200/60"
            >
              <img
                src={images.signature}
                alt="Signature"
                className="w-32 h-auto mb-3 md:w-40 xl:w-48 filter contrast-125"
              />
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-gray-900">
                  {/* JSON ফাইলে নাম থাকলে সেটি কল করতে পারেন, না থাকলে হার্ডকোড করতে পারেন */}
                  Shamiul Islam
                </h4>
                <p className="text-sm font-medium tracking-widest text-[#dbb671] uppercase">
                  Founder & Principal Associate
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
