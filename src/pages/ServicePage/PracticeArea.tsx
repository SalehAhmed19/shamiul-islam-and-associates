// // import { serviceVariant } from "@/motions/motions";
// // import ServiceCard from "../../components/ui/Cards/ServiceCard";
// // import Heading from "../../components/ui/Headings/Heading";
// // import { servicesData } from "../../data/Services";
// // import { motion } from "framer-motion";

// // export default function PracticeArea() {
// //     return (
// //         <section className="py-16">
// //             <Heading className="text-center">Practice Area</Heading>
// //             <motion.p variants={serviceVariant} initial="paragraphInitial" whileInView="paragraphWhileInView" className="text-center">Providing specialized legal representation across a comprehensive range of disciplines to protect your rights and interests.</motion.p>
// //             <div className="container grid grid-cols-1 gap-6 px-4 mx-auto mt-16 md:mt-24 sm:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-10">
// //                 {servicesData?.map((service, idx) => (
// //                     <ServiceCard key={idx} {...service} />
// //                 ))}
// //             </div>
// //         </section>
// //     )
// // }
// import { serviceVariant } from "@/motions/motions";
// import ServiceCard from "../../components/ui/Cards/ServiceCard";
// import Heading from "../../components/ui/Headings/Heading";
// import { servicesData } from "../../data/Services";
// import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";

// export default function PracticeArea() {
//     const { t, i18n } = useTranslation();

//     return (
//         <section className={`py-16 ${
//             i18n.language === 'bn' ? 'font-bengali' : 'font-english'
//         }`}>
//             <Heading className="text-center">
//                 {t("practice_area_heading")}
//             </Heading>

//             <motion.p
//                 variants={serviceVariant}
//                 initial="paragraphInitial"
//                 whileInView="paragraphWhileInView"
//                 className="max-w-3xl px-4 mx-auto text-center"
//             >
//                 {t("practice_area_subtitle")}
//             </motion.p>

//             <div className="container grid grid-cols-1 gap-6 px-4 mx-auto mt-16 md:mt-24 sm:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-10">
//                 {servicesData?.map((service, idx) => (
//                     <ServiceCard key={idx} {...service} />
//                 ))}
//             </div>
//         </section>
//     )
// }
import { serviceVariant } from "@/motions/motions";
import ServiceCard from "../../components/ui/Cards/ServiceCard";
import Heading from "../../components/ui/Headings/Heading";
import { servicesData } from "../../data/Services";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function PracticeArea() {
  const { t, i18n } = useTranslation();

  return (
    <section
      className={`py-16 ${
        i18n.language === "bn" ? "font-bengali" : "font-english"
      }`}
    >
      <Heading className="text-center">{t("practice_area_heading")}</Heading>

      <motion.p
        variants={serviceVariant}
        initial="paragraphInitial"
        whileInView="paragraphWhileInView"
        className="max-w-3xl px-4 mx-auto text-center"
      >
        {t("practice_area_subtitle")}
      </motion.p>

      <div className="container grid grid-cols-1 gap-6 px-4 mx-auto mt-16 md:mt-24 sm:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-10">
        {servicesData?.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </div>
    </section>
  );
}
