// import { headerVariants } from "@/motions/motions";
// import { motion } from "framer-motion";

// export default function Header({
//   title,
//   image,
// }: {
//   title: string;
//   image: string;
// }) {
//   return (
//     <motion.div
//       variants={headerVariants}
//       initial="initial"
//       whileInView="whileInView"
//       style={{
//         backgroundImage: `url(${image})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//       className="h-[420px]"
//     >
//       <div className="flex items-center justify-center h-full">
//         <h1 className="text-[40px] font-bold text-white uppercase">{title}</h1>
//       </div>
//     </motion.div>
//   );
// }
import { headerVariants } from "@/motions/motions";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Header({
  title, // এখানে এখন ট্রান্সলেশন কী (যেমন: "page_title_about") পাস হবে
  image,
}: {
  title: string;
  image: string;
}) {
  const { t, i18n } = useTranslation();

  return (
    <motion.div
      variants={headerVariants}
      initial="initial"
      whileInView="whileInView"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      // ভাষা অনুযায়ী ফন্ট সেট করা হলো এবং হাইট অপরিবর্তিত রাখা হয়েছে
      className={`h-[420px] ${
        i18n.language === "bn" ? "font-bengali" : "font-english"
      }`}
    >
      <div className="flex items-center justify-center h-full bg-black/40">
        {" "}
        {/* সামান্য ওভারলে যোগ করা যেতে পারে রিডিবিলিটির জন্য */}
        <motion.h1
          variants={headerVariants}
          className="text-[40px] font-bold text-white uppercase text-center px-4"
        >
          {t(title)}
        </motion.h1>
      </div>
    </motion.div>
  );
}
