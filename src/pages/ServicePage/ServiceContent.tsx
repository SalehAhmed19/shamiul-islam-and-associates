// import { serviceVariant } from "@/motions/motions";
// import Heading from "../../components/ui/Headings/Heading";
// import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";

// export default function ServiceContent() {
//   const { t, i18n } = useTranslation();

//   return (
//     <div
//       className={`container mx-auto px-4 py-10 md:py-16 ${
//         i18n.language === "bn" ? "font-bengali" : "font-english"
//       }`}
//     >
//       <div className="grid items-center grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
//         {/* Heading Section */}
//         <div>
//           <Heading>
//             <span
//               dangerouslySetInnerHTML={{ __html: t("service_content_heading") }}
//             />
//           </Heading>
//         </div>

//         {/* Paragraph Section */}
//         <div className="text-sm leading-relaxed text-gray-700 md:text-base">
//           <motion.p
//             variants={serviceVariant}
//             initial="textInitial"
//             whileInView="textWhileInView"
//           >
//             {t("service_content_p1")}
//           </motion.p>

//           {/* Visual separation kept as per original code */}
//           <br className="block content-[''] mt-4" />

//           <motion.p
//             variants={serviceVariant}
//             initial="textInitial"
//             whileInView="textWhileInView"
//           >
//             {t("service_content_p2")}
//           </motion.p>
//         </div>
//       </div>
//     </div>
//   );
// }

import { serviceVariant } from "@/motions/motions";
import Heading from "../../components/ui/Headings/Heading";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function ServiceContent() {
  const { t, i18n } = useTranslation();

  return (
    <section
      className={`bg-white py-16 sm:py-20 lg:py-28 border-b border-gray-100 ${
        i18n.language === "bn" ? "font-bengali" : "font-english"
      }`}
    >
      <div className="container px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        {/* Asymmetrical Grid: Left side takes less space, right side takes more */}
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:gap-20">
          {/* =========================================
              LEFT COLUMN: HEADING & ACCENT
              ========================================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:w-5/12 shrink-0 lg:sticky lg:top-32"
          >
            {/* Classic Gold Accent Line */}
            <div className="w-16 h-1 mb-6 bg-[#dbb671] rounded-full sm:mb-8"></div>

            <Heading>
              {/* Heading component styles will apply, but it's wrapped cleanly here */}
              <span
                className="leading-[1.2] tracking-tight drop-shadow-sm text-gray-900"
                dangerouslySetInnerHTML={{
                  __html: t("service_content_heading"),
                }}
              />
            </Heading>
          </motion.div>

          {/* =========================================
              RIGHT COLUMN: PARAGRAPHS
              ========================================= */}
          <div className="lg:w-7/12 flex flex-col space-y-6 sm:space-y-8 text-base sm:text-lg leading-relaxed sm:leading-[1.8] text-gray-600">
            {/* Paragraph 1 */}
            <motion.p
              variants={serviceVariant}
              initial="textInitial"
              whileInView="textWhileInView"
              viewport={{ once: true, margin: "-50px" }}
              className="md:text-justify first-letter:text-4xl sm:first-letter:text-5xl first-letter:font-extrabold first-letter:text-[#dbb671] first-letter:mr-1.5 sm:first-letter:mr-2 first-letter:float-left first-letter:leading-none"
            >
              {t("service_content_p1")}
            </motion.p>

            {/* Paragraph 2 */}
            {/* Removed the <br /> tag and used proper spacing via flex col gap (space-y-8) */}
            <motion.p
              variants={serviceVariant}
              initial="textInitial"
              whileInView="textWhileInView"
              viewport={{ once: true, margin: "-50px" }}
              className="md:text-justify"
            >
              {t("service_content_p2")}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
