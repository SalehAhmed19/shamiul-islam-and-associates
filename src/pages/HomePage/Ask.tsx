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
// import { images } from "../../assets/assets";
// import Button from "../../components/ui/Buttons/Button";
// import { Link } from "react-scroll";
// import { motion } from "framer-motion";
// import { askVariants } from "@/motions/motions";
// import { useTranslation } from "react-i18next";

// export default function Ask() {
//   const { t, i18n } = useTranslation();

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
//       // i18n.language অনুযায়ী ফন্ট ক্লাস সুইচ হবে
//       className={`px-4 py-16 space-y-6 text-center md:space-y-10 md:py-24 ${
//         i18n.language === "bn" ? "font-bengali" : "font-english"
//       }`}
//     >
//       <motion.h2
//         variants={askVariants}
//         initial={"headingInitial"}
//         whileInView={"headingWhileInView"}
//         className="mb-4 text-2xl font-bold leading-tight text-white md:text-4xl lg:text-5xl"
//       >
//         {t("ask_title")}
//       </motion.h2>

//       <Link to="contact">
//         <Button className="mx-auto">{t("ask_btn")}</Button>
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
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, margin: "-50px" }}
      // Added bg-cover, bg-center and lg:bg-fixed for Parallax effect directly in Tailwind classes
      className={`relative py-20 sm:py-24 lg:py-32 bg-center bg-no-repeat bg-cover lg:bg-fixed flex flex-col items-center justify-center overflow-hidden ${
        i18n.language === "bn" ? "font-bengali" : "font-english"
      }`}
      style={{ backgroundImage: `url(${images.ask})` }}
    >
      {/* --- Premium Dark Overlay with slight blur --- */}
      {/* Ensures the white text is always readable regardless of the background image */}
      <div className="absolute inset-0 bg-[#111827]/70 sm:bg-[#111827]/60 backdrop-blur-[2px]"></div>

      {/* --- Content Wrapper --- */}
      <div className="container relative z-10 max-w-4xl px-4 mx-auto text-center">
        {/* Decorative Classic Gold Accent Line */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "80px", opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1 mx-auto mb-6 rounded-full sm:mb-8 bg-[#dbb671]"
        />

        {/* Heading Typography Upgrade */}
        <motion.h2
          variants={askVariants}
          initial="headingInitial"
          whileInView="headingWhileInView"
          className="mb-8 text-3xl font-extrabold leading-[1.2] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-xl"
        >
          {t("ask_title")}
        </motion.h2>

        {/* Button Wrapper with smooth intro animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex justify-center"
        >
          {/* Link component upgraded with smooth scrolling offsets */}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="inline-block cursor-pointer"
          >
            <Button className="px-8 py-3.5 sm:px-10 sm:py-4 text-sm sm:text-base font-bold tracking-wider uppercase transition-all duration-300 rounded-lg shadow-2xl hover:-translate-y-1">
              {t("ask_btn")}
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
