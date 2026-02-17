// import { images } from "../../assets/assets";
// import Button from "../../components/ui/Buttons/Button";
// import Heading from "../../components/ui/Headings/Heading";
// import { motion } from "framer-motion";
// import { legalExcellenceVariants } from "@/motions/motions";

// export default function LegalExcellence() {
//   return (
//     // Added px-4 md:px-8 so content doesn't touch screen edges on mobile
//     <section className="bg-[#FAF9F4] py-12 md:py-16 px-4 md:px-8">
//       {/* Added 'items-center' to vertically center the image and text relative to each other */}
//       <motion.div
//         variants={legalExcellenceVariants}
//         initial="initial"
//         whileInView="whileInView"
//         className="grid items-center max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-2 md:gap-12"
//       >
//         {/* Image Wrapper: Ensures image scales correctly within the grid */}

//         <motion.div
//           variants={legalExcellenceVariants}
//           initial="imageInitial"
//           whileInView="imageWhileInView"
//           className="w-full h-full overflow-hidden cursor-pointer"
//         >
//           <motion.img
//             variants={legalExcellenceVariants}
//             whileHover="imageHover"
//             src={images.legal1}
//             alt="legal"
//             className="object-cover w-full h-full"
//           />
//         </motion.div>

//         {/* Text Content */}
//         {/* 1. text-center md:text-left: Centers text on mobile, aligns left on desktop (next to image).
//                     2. justify-center md:justify-start: Aligns the button correctly based on screen size.
//                 */}
//         <div className="flex flex-col justify-center space-y-6 text-center">
//           <Heading>
//             Legal Excellence, <br />
//             Personalized Care
//           </Heading>

//           <motion.p
//             variants={legalExcellenceVariants}
//             initial="paragraphInitial"
//             whileInView="paragraphWhileInView"
//             className="text-sm leading-relaxed md:text-base"
//           >
//             At our firm, we combine world-class legal expertise with a deep
//             commitment to understanding your individual story. We believe that
//             achieving legal excellence is only half the battle; the other half
//             is providing the compassionate, one-on-one attention you deserve.
//             Trust our dedicated team to protect your interests with
//             sophisticated strategies while treating your case with the personal
//             care it requires.
//           </motion.p>

//           <div className="flex justify-center">
//             <Button>Learn More</Button>
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// }
import { images } from "../../assets/assets";
import Button from "../../components/ui/Buttons/Button";
import Heading from "../../components/ui/Headings/Heading";
import { motion } from "framer-motion";
import { legalExcellenceVariants } from "@/motions/motions";
import { useTranslation } from "react-i18next";

export default function LegalExcellence() {
  const { t, i18n } = useTranslation();

  return (
    <section
      className={`bg-[#FAF9F4] py-12 md:py-16 px-4 md:px-8 ${
        i18n.language === "bn" ? "font-bengali" : "font-english"
      }`}
    >
      <motion.div
        variants={legalExcellenceVariants}
        initial="initial"
        whileInView="whileInView"
        className="grid items-center max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-2 md:gap-12"
      >
        {/* Image Wrapper */}
        <motion.div
          variants={legalExcellenceVariants}
          initial="imageInitial"
          whileInView="imageWhileInView"
          className="w-full h-full overflow-hidden rounded-lg shadow-lg cursor-pointer"
        >
          <motion.img
            variants={legalExcellenceVariants}
            whileHover="imageHover"
            src={images.legal1}
            alt="legal"
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* Text Content */}
        <div className="flex flex-col justify-center space-y-6 text-center">
          <Heading>
            {/* dangerouslySetInnerHTML ব্যবহার করা হয়েছে কারণ JSON-এ <br /> ট্যাগ আছে */}
            <span
              dangerouslySetInnerHTML={{ __html: t("legal_exc_heading") }}
            />
          </Heading>

          <motion.p
            variants={legalExcellenceVariants}
            initial="paragraphInitial"
            whileInView="paragraphWhileInView"
            className="text-sm leading-relaxed text-gray-600 md:text-base"
          >
            {t("legal_exc_description")}
          </motion.p>

          <div className="flex justify-center">
            <Button>{t("legal_exc_btn")}</Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
