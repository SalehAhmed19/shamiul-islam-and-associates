// import { images } from "../../assets/assets";
// import Button from "../../components/ui/Buttons/Button";
// import { Link } from "react-scroll";
// import { motion } from "framer-motion";
// import { bannerVariants } from "@/motions/motions";

// export default function Banner() {
//   return (
//     <section
//       style={{ backgroundImage: `url(${images.hero})` }}
//       className="relative flex items-center justify-center h-screen text-white bg-center bg-no-repeat bg-cover"
//     >
//       {/* --- Overlay (Optional but recommended for text readability) --- */}
//       <div className="absolute inset-0 bg-black/40"></div>

//       {/* --- Content Container --- */}
//       <div className="container relative z-10 flex flex-col items-center px-4 mx-auto text-center sm:px-6 md:px-12">
//         <div className="max-w-4xl space-y-6 md:space-y-8">
//           {/* Responsive Heading */}
//           <motion.h1
//             variants={bannerVariants}
//             initial="headingInitial"
//             whileInView="headingWhileInView"
//             className="text-3xl font-bold leading-tight uppercase sm:text-4xl md:text-5xl lg:text-6xl"
//           >
//             Solving Complex Legal <br className="hidden md:block" /> Challenges.
//           </motion.h1>

//           {/* Responsive Paragraph */}
//           <motion.p
//             variants={bannerVariants}
//             initial="paragraphInitial"
//             whileInView="paragraphWhileInView"
//             className="max-w-2xl mx-auto text-sm font-semibold text-gray-100 sm:text-base md:text-lg lg:text-xl"
//           >
//             Expert representation focused on achieving clear, favorable, and{" "}
//             <br className="hidden md:block" /> decisive results for you.
//           </motion.p>
//         </div>

//         {/* Button Container with margin top */}
//         <div className="mt-8 md:mt-12">
//           <Link to="contact">
//             <Button className="block mx-auto">Make enquiry</Button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

import { images } from "../../assets/assets";
import Button from "../../components/ui/Buttons/Button";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { bannerVariants } from "@/motions/motions";
import { useTranslation } from "react-i18next";

export default function Banner() {
  const { t, i18n } = useTranslation(); // i18n অবজেক্টটি নিয়ে আসা হলো

  return (
    <section
      style={{ backgroundImage: `url(${images.hero})` }}
      // ভাষা অনুযায়ী ফন্ট ক্লাস সেট করা হলো
      className={`relative flex items-center justify-center h-screen text-white bg-center bg-no-repeat bg-cover ${
        i18n.language === "bn" ? "font-bengali" : "font-english"
      }`}
    >
      {/* --- Overlay --- */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* --- Content Container --- */}
      <div className="container relative z-10 flex flex-col items-center px-4 mx-auto text-center sm:px-6 md:px-12">
        <div className="max-w-4xl space-y-6 md:space-y-8">
          {/* Responsive Heading */}
          <motion.h1
            variants={bannerVariants}
            initial="headingInitial"
            whileInView="headingWhileInView"
            className="text-3xl font-bold leading-tight uppercase sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {/* JSON থেকে ডাটা আনা হলো */}
            {t("banner_title")}
          </motion.h1>

          {/* Responsive Paragraph */}
          <motion.p
            variants={bannerVariants}
            initial="paragraphInitial"
            whileInView="paragraphWhileInView"
            className="max-w-2xl mx-auto text-sm font-semibold text-gray-100 sm:text-base md:text-lg lg:text-xl"
          >
            {/* JSON থেকে ডাটা আনা হলো */}
            {t("banner_description")}
          </motion.p>
        </div>

        {/* Button Container */}
        <div className="mt-8 md:mt-12">
          <Link to="contact">
            <Button className="block mx-auto">{t("banner_btn_text")}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
