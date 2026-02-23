import { images } from "../../assets/assets";
import Button from "../../components/ui/Buttons/Button";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { bannerVariants } from "@/motions/motions";
import { useTranslation } from "react-i18next";

export default function Banner() {
  const { t, i18n } = useTranslation();

  return (
    <section
      className={`relative flex items-center justify-center min-h-[100svh] overflow-hidden text-white bg-center bg-no-repeat bg-cover bg-local lg:bg-fixed ${
        i18n.language === "bn" ? "font-bengali" : "font-english"
      }`}
      style={{
        backgroundImage: `url(${images.hero})`,
      }}
    >
      {/* --- Sophisticated Overlays --- */}
      {/* Base dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      {/* Gradient from bottom to top to make text pop more while keeping top slightly lighter */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      {/* --- Content Container --- */}
      {/* Adjusted padding to prevent overlap with navbar on top and scroll indicator on bottom */}
      <div className="container relative z-10 flex flex-col items-center justify-center h-full px-4 pt-24 pb-16 mx-auto text-center sm:px-6 md:px-12 md:pt-32 lg:pt-0 lg:pb-0">
        {/* Responsive gaps: tighter on mobile, looser on desktop */}
        <div className="flex flex-col items-center w-full max-w-6xl gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {/* Animated Logo */}
          <motion.img
            variants={bannerVariants}
            initial="logoInitial"
            whileInView="logoWhileInView"
            viewport={{ once: true }}
            src={images.logoLight}
            alt={`${t("nav_logo")} Logo`}
            className="object-contain w-16 h-16 drop-shadow-2xl sm:w-20 sm:h-20 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40"
          />

          {/* Heading with progressive scaling */}
          <motion.h1
            variants={bannerVariants}
            initial="headingInitial"
            whileInView="headingWhileInView"
            viewport={{ once: true }}
            className="text-3xl font-extrabold leading-[1.15] tracking-tight uppercase sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl drop-shadow-lg"
          >
            <span className="block max-w-xs mx-auto text-transparent sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300">
              {t("banner_title")}
            </span>
          </motion.h1>

          {/* Decorative Divider Line */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "80px", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="h-[3px] sm:h-1 rounded-full bg-[#dbb671]"
          />

          {/* Description Paragraph with progressive scaling */}
          <motion.p
            variants={bannerVariants}
            initial="paragraphInitial"
            whileInView="paragraphWhileInView"
            viewport={{ once: true }}
            className="max-w-xs mx-auto text-sm font-medium leading-relaxed text-gray-200 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl sm:text-base md:text-lg lg:text-xl xl:text-2xl drop-shadow-md"
          >
            {t("banner_description")}
          </motion.p>

          {/* Call to Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-2 sm:mt-4 md:mt-6 lg:mt-8"
          >
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="inline-block cursor-pointer"
            >
              <Button className="px-6 py-3 text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:scale-105 sm:px-8 sm:py-4 sm:text-base md:px-10 md:text-lg">
                {t("banner_btn_text")}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator - Hidden on very short screens (like landscape mobile) to save space */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 hidden min-[500px]:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/70">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-0.5 h-8 sm:h-12 bg-linear-to-b from-white/70 to-transparent"
        />
      </motion.div>
    </section>
  );
}
