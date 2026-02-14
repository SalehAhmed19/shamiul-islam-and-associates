// import { images } from "../../assets/assets";
// import Button from "../../components/ui/Buttons/Button";
// import { Link } from "react-scroll";
// import { motion } from "framer-motion";
// import { askVariants } from "@/motions/motions";

// export default function Ask() {
//   return (
//     <motion.section
//       variants={askVariants}
//       initial={"initial"}
//       whileInView={"whileInView"}
//       style={{
//         backgroundImage: `url(${images.ask})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//       // Added 'px-4' (side padding for mobile) and responsive vertical padding 'md:py-24'
//       className="px-4 py-16 space-y-6 text-center md:space-y-10 md:py-24"
//     >
//       {/* Changed fixed 'text-4xl' to responsive 'text-2xl md:text-4xl lg:text-5xl' */}
//       <motion.h2
//         variants={askVariants}
//         initial={"headingInitial"}
//         whileInView={"headingWhileInView"}
//         className="mb-4 text-2xl font-bold leading-tight text-white md:text-4xl lg:text-5xl"
//       >
//         Have Legal Questions? Ask Our Experts!
//       </motion.h2>

//       <Link to="contact">
//         <Button className="mx-auto">Ask an expert</Button>
//       </Link>
//     </motion.section>
//   );
// }
import { images } from "../../assets/assets";
import Button from "../../components/ui/Buttons/Button";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { askVariants } from "@/motions/motions";
import { useTranslation } from "react-i18next";

export default function Ask() {
  const { t, i18n } = useTranslation();

  return (
    <motion.section
      variants={askVariants}
      initial={"initial"}
      whileInView={"whileInView"}
      style={{
        backgroundImage: `url(${images.ask})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      // i18n.language অনুযায়ী ফন্ট ক্লাস সুইচ হবে
      className={`px-4 py-16 space-y-6 text-center md:space-y-10 md:py-24 ${
        i18n.language === "bn" ? "font-bengali" : "font-english"
      }`}
    >
      <motion.h2
        variants={askVariants}
        initial={"headingInitial"}
        whileInView={"headingWhileInView"}
        className="mb-4 text-2xl font-bold leading-tight text-white md:text-4xl lg:text-5xl"
      >
        {t("ask_title")}
      </motion.h2>

      <Link to="contact">
        <Button className="mx-auto">{t("ask_btn")}</Button>
      </Link>
    </motion.section>
  );
}
