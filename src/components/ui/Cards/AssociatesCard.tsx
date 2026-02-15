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

  return (
    <motion.div
      variants={ourAssociatesVariants}
      initial="associatesInitial"
      whileInView="associatesWhileInView"
      className={`space-y-5 ${
        i18n.language === "bn" ? "font-bengali" : "font-english"
      }`}
    >
      <img src={image} alt={name} className="object-cover w-full" />
      <div className="font-bold text-center">
        <motion.h3
          variants={ourAssociatesVariants}
          initial="nameInitial"
          whileInView="nameWhileInView"
          className="text-[24px]"
        >
          {/* নাম যদি বাংলা করতে চান তবে t(name) দিতে পারেন, নতুবা সরাসরি name */}
          {i18n.language === "bn" ? t(name) : name}
        </motion.h3>

        <motion.p
          variants={ourAssociatesVariants}
          initial="positionInitial"
          whileInView="positionWhileInView"
          className="text-[#94744E]"
        >
          {t(position)}
        </motion.p>

        <motion.p
          variants={ourAssociatesVariants}
          initial="courtInitial"
          whileInView="courtWhileInView"
        >
          {t("Advocate")}, {t(court)}
        </motion.p>
      </div>
    </motion.div>
  );
}
