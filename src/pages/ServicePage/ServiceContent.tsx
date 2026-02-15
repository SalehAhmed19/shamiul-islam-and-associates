// import { serviceVariant } from "@/motions/motions";
// import Heading from "../../components/ui/Headings/Heading";
// import { motion } from "framer-motion";

// export default function ServiceContent() {
//     return (
//         <div className="container px-4 py-10 mx-auto md:py-16">
//             <div className="grid items-center grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
//                 {/* Heading Section */}
//                 <div>
//                     <Heading>
//                         Tailored Legal Solutions,
//                         {/* Hide the line break on mobile for better flow, show on desktop */}
//                         <br className="hidden md:block" />
//                         Exceptional Results
//                     </Heading>
//                 </div>

//                 {/* Paragraph Section */}
//                 <div className="text-sm leading-relaxed text-gray-700 md:text-base">
//                     <motion.p variants={serviceVariant} initial="textInitial" whileInView="textWhileInView">
//                         We believe that every client deserves a strategy as unique as their case, which is why we meticulously craft our legal approach to align with your specific goals. By combining in-depth industry knowledge with unwavering dedication, we navigate the complexities of the law to protect your interests at every turn.
//                     </motion.p>
//                     {/* Added a margin to the break to create actual visual separation */}
//                     <br className="block content-[''] mt-4" />
//                     <motion.p variants={serviceVariant} initial="textInitial" whileInView="textWhileInView">
//                         Experience the peace of mind that comes from having a partner driven to deliver the exceptional results you deserve.
//                     </motion.p>
//                 </div>
//             </div>
//         </div>
//     )
// }
import { serviceVariant } from "@/motions/motions";
import Heading from "../../components/ui/Headings/Heading";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function ServiceContent() {
  const { t, i18n } = useTranslation();

  return (
    <div
      className={`container mx-auto px-4 py-10 md:py-16 ${
        i18n.language === "bn" ? "font-bengali" : "font-english"
      }`}
    >
      <div className="grid items-center grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
        {/* Heading Section */}
        <div>
          <Heading>
            <span
              dangerouslySetInnerHTML={{ __html: t("service_content_heading") }}
            />
          </Heading>
        </div>

        {/* Paragraph Section */}
        <div className="text-sm leading-relaxed text-gray-700 md:text-base">
          <motion.p
            variants={serviceVariant}
            initial="textInitial"
            whileInView="textWhileInView"
          >
            {t("service_content_p1")}
          </motion.p>

          {/* Visual separation kept as per original code */}
          <br className="block content-[''] mt-4" />

          <motion.p
            variants={serviceVariant}
            initial="textInitial"
            whileInView="textWhileInView"
          >
            {t("service_content_p2")}
          </motion.p>
        </div>
      </div>
    </div>
  );
}
