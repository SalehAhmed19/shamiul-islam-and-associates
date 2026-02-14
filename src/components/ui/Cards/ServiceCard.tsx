// import { serviceCardVariants } from "@/motions/motions";
// import type { ServiceInterface } from "../../../Interfaces/ServiceInterface";
// import { motion } from "framer-motion";

// export default function ServiceCard({
//   icon,
//   title,
//   description,
// }: ServiceInterface) {
//   return (
//     <motion.div
//       variants={serviceCardVariants}
//       initial={"initial"}
//       whileInView={"whileInView"}
//       whileHover={"whileHover"}
//       className="group cursor-pointer p-6 md:p-8 border border-transparent hover:border-[#604B33]/10 flex flex-col items-center text-center"
//     >
//       {/* --- Icon Wrapper --- */}
//       <motion.div
//         variants={serviceCardVariants}
//         initial={"zoomInital"}
//         whileInView={"zoomWhileInview"}
//         className="mb-6 p-4 rounded-full cursor-pointer group-hover:bg-[#604B33]/10 transition-colors duration-300"
//       >
//         <img
//           src={icon}
//           alt={title + " icon"}
//           className="object-contain w-10 h-10 md:w-12 md:h-12"
//         />
//       </motion.div>

//       {/* --- Title --- */}
//       <motion.h3
//         variants={serviceCardVariants}
//         initial={"zoomInital"}
//         whileInView={"zoomWhileInview"}
//         className="text-lg md:text-xl text-[#604B33] font-bold mb-3"
//       >
//         {title}
//       </motion.h3>

//       {/* --- Description --- */}
//       <motion.p
//         variants={serviceCardVariants}
//         initial={"paragraphInitial"}
//         whileInView={"paragraphWhileInView"}
//         className="text-sm leading-relaxed md:text-base"
//       >
//         {description.slice(0, 120)}...
//       </motion.p>

//       {/* Optional: Read More text appearing on hover could go here */}
//     </motion.div>
//   );
// }
import { serviceCardVariants } from "@/motions/motions";
import type { ServiceInterface } from "../../../Interfaces/ServiceInterface";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // যুক্ত করা হয়েছে

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceInterface) {
  const { t, i18n } = useTranslation(); // যুক্ত করা হয়েছে

  return (
    <motion.div
      variants={serviceCardVariants}
      initial={"initial"}
      whileInView={"whileInView"}
      whileHover={"whileHover"}
      // ভাষা অনুযায়ী ফন্ট ক্লাস সেট করা হলো যেন ডিজাইন না ভাঙে
      className={`group cursor-pointer p-6 md:p-8 border border-transparent hover:border-[#604B33]/10 flex flex-col items-center text-center ${
        i18n.language === "bn" ? "font-bengali" : "font-english"
      }`}
    >
      {/* --- Icon Wrapper --- */}
      <motion.div
        variants={serviceCardVariants}
        initial={"zoomInital"}
        whileInView={"zoomWhileInview"}
        className="mb-6 p-4 rounded-full cursor-pointer group-hover:bg-[#604B33]/10 transition-colors duration-300"
      >
        <img
          src={icon}
          alt={t(title) + " icon"} // Alt টেক্সটও ডাইনামিক করা হলো
          className="object-contain w-10 h-10 md:w-12 md:h-12"
        />
      </motion.div>

      {/* --- Title --- */}
      <motion.h3
        variants={serviceCardVariants}
        initial={"zoomInital"}
        whileInView={"zoomWhileInview"}
        className="text-lg md:text-xl text-[#604B33] font-bold mb-3"
      >
        {t(title)}
      </motion.h3>

      {/* --- Description --- */}
      <motion.p
        variants={serviceCardVariants}
        initial={"paragraphInitial"}
        whileInView={"paragraphWhileInView"}
        className="text-sm leading-relaxed md:text-base"
      >
        {/* কি-ওয়ার্ডটি অনুবাদ করে তারপর স্লাইস করা হচ্ছে */}
        {t(description).slice(0, 120)}...
      </motion.p>

      {/* Optional: Read More text appearing on hover could go here */}
    </motion.div>
  );
}
