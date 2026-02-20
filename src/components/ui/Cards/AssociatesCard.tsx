// import { ourAssociatesVariants } from "@/motions/motions";
// import { motion } from "framer-motion";
// // import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";

// export default function AssociatesCard({
//   image,
//   name,
//   position,
//   court,
// }: {
//   image: string;
//   name: string;
//   position: string;
//   court: string;
// }) {
//   return (
//     <motion.div
//       variants={ourAssociatesVariants}
//       initial="associatesInitial"
//       whileInView="associatesWhileInView"
//       className="space-y-5"
//     >
//       <img src={image} alt={name} className="object-cover w-full" />
//       <div className="font-bold text-center">
//         <motion.h3
//           variants={ourAssociatesVariants}
//           initial="nameInitial"
//           whileInView="nameWhileInView"
//           className="text-[24px]"
//         >
//           {name}
//         </motion.h3>
//         <motion.p
//           variants={ourAssociatesVariants}
//           initial="positionInitial"
//           whileInView="positionWhileInView"
//           className="text-[#94744E]"
//         >
//           {position}
//         </motion.p>
//         <motion.p
//           variants={ourAssociatesVariants}
//           initial="courtInitial"
//           whileInView="courtWhileInView"
//         >
//           Advocate, {court}
//         </motion.p>
//       </div>
//     </motion.div>
//   );
// }

// import { ourAssociatesVariants } from "@/motions/motions";
// import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";

// export default function AssociatesCard({
//   image,
//   name,
//   position,
//   court,
// }: {
//   image: string;
//   name: string;
//   position: string;
//   court: string;
// }) {
//   const { t, i18n } = useTranslation();

//   return (
//     <motion.div
//       variants={ourAssociatesVariants}
//       initial="associatesInitial"
//       whileInView="associatesWhileInView"
//       className={`space-y-5 ${
//         i18n.language === "bn" ? "font-bengali" : "font-english"
//       }`}
//     >
//       <img
//         src={image}
//         alt={name}
//         className="object-cover w-full rounded-lg shadow-lg aspect-square"
//       />
//       <div className="font-bold text-center">
//         <motion.h3
//           variants={ourAssociatesVariants}
//           initial="nameInitial"
//           whileInView="nameWhileInView"
//           className="text-[24px]"
//         >
//           {/* নাম যদি বাংলা করতে চান তবে t(name) দিতে পারেন, নতুবা সরাসরি name */}
//           {i18n.language === "bn" ? t(name) : name}
//         </motion.h3>

//         <motion.p
//           variants={ourAssociatesVariants}
//           initial="positionInitial"
//           whileInView="positionWhileInView"
//           className="text-[#94744E]"
//         >
//           {t(position)}
//         </motion.p>

//         <motion.p
//           variants={ourAssociatesVariants}
//           initial="courtInitial"
//           whileInView="courtWhileInView"
//         >
//           {t("Advocate")}, {t(court)}
//         </motion.p>
//       </div>
//     </motion.div>
//   );
// }

import { useState } from "react";
import { ourAssociatesVariants } from "@/motions/motions";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function AssociatesCard({
  image,
  name,
  position,
  court,
}: {
  image: string;
  name: string;
  position: string;
  court: string;
}) {
  const { t, i18n } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={ourAssociatesVariants}
      initial="associatesInitial"
      whileInView="associatesWhileInView"
      viewport={{ once: true, margin: "-50px" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`flex flex-col items-center text-center group cursor-pointer ${
        i18n.language === "bn" ? "font-bengali" : "font-english"
      }`}
    >
      {/* --- Image Container (Classic Portrait Ratio) --- */}
      <div className="relative w-full overflow-hidden transition-shadow duration-500 bg-gray-100 rounded-xl aspect-[3/4] sm:aspect-[4/5] mb-5 sm:mb-6 shadow-md group-hover:shadow-2xl">
        {/* Hover Gradient Overlay for a premium touch */}
        <div
          className={`absolute inset-0 z-10 bg-gradient-to-t from-black/40 via-black/5 to-transparent transition-opacity duration-500 ease-in-out ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Smooth Zoom Effect on Image */}
        <motion.img
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          src={image}
          alt={name}
          className="block object-cover object-top w-full h-full"
        />
      </div>

      {/* --- Text Content (Modern Hierarchy) --- */}
      <div className="flex flex-col items-center w-full px-2">
        {/* Name */}
        <motion.h3
          variants={ourAssociatesVariants}
          initial="nameInitial"
          whileInView="nameWhileInView"
          animate={{ color: isHovered ? "#94744E" : "#111827" }} // Text turns gold on hover
          transition={{ duration: 0.4 }}
          className="text-xl font-bold tracking-tight sm:text-2xl"
        >
          {i18n.language === "bn" ? t(name) : name}
        </motion.h3>

        {/* Small Classic Separator Line */}
        <motion.div
          animate={{
            width: isHovered ? "40px" : "24px",
            backgroundColor: isHovered ? "#94744E" : "#D1D5DB",
          }}
          transition={{ duration: 0.4 }}
          className="h-[2px] mt-3 mb-3 rounded-full"
        />

        {/* Position */}
        <motion.p
          variants={ourAssociatesVariants}
          initial="positionInitial"
          whileInView="positionWhileInView"
          className="text-xs font-bold tracking-widest text-[#94744E] uppercase sm:text-sm"
        >
          {t(position)}
        </motion.p>

        {/* Court / Description */}
        <motion.p
          variants={ourAssociatesVariants}
          initial="courtInitial"
          whileInView="courtWhileInView"
          className="mt-1 text-sm font-medium text-gray-500 sm:text-base"
        >
          {t("Advocate")}, {t(court)}
        </motion.p>
      </div>
    </motion.div>
  );
}
