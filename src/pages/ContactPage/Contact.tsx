import Heading from "@/components/ui/Headings/Heading";
import { icons } from "../../assets/assets";
import ContactForm from "../../components/ui/Forms/ContactForm";
import Ask from "../HomePage/Ask";
import { motion, type Variants } from "framer-motion"; // <-- Variants ইমপোর্ট করা হয়েছে
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t, i18n } = useTranslation();

  // Framer motion variants for staggered animations
  const containerVariants: Variants = {
    // <-- টাইপ যুক্ত করা হয়েছে
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    // <-- টাইপ যুক্ত করা হয়েছে
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      className={`bg-[#FAFAFA] ${
        i18n.language === "bn" ? "font-bengali" : "font-english"
      }`}
    >
      {/* =========================================
          1. PREMIUM HERO SECTION
          ========================================= */}
      <div className="relative pt-32 pb-48 md:pt-40 md:pb-56 bg-[#0A0F1A] overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#dbb671]/10 blur-[150px] rounded-full -mr-40 -mt-40 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/10 blur-[120px] rounded-full -ml-20 -mb-20 pointer-events-none"></div>

        <div className="container relative z-10 px-6 mx-auto text-center max-w-7xl md:text-left">
          <div className="max-w-3xl">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "80px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-1.5 mb-8 bg-[#dbb671] mx-auto md:mx-0 rounded-full"
            />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Heading className="mb-6 text-4xl font-black leading-tight text-white md:text-6xl lg:text-7xl">
                {t("contact_heading")}
              </Heading>
              <p className="text-lg leading-relaxed text-gray-400 md:text-xl md:pr-12">
                {t("contact_desc")}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* =========================================
          2. OVERLAPPING MAIN CONTENT
          ========================================= */}
      <div className="container relative z-20 px-4 mx-auto mb-24 -mt-32 max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* --- LEFT: DARK INFO CARD --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 lg:p-12 bg-[#111827] text-white rounded-[2rem] shadow-2xl shadow-black/20 border border-white/10"
          >
            <div>
              <motion.h2
                variants={itemVariants}
                className="mb-10 text-3xl font-bold leading-snug tracking-tight"
              >
                <span
                  dangerouslySetInnerHTML={{ __html: t("contact_sub_title") }}
                />
              </motion.h2>

              <div className="space-y-8">
                {[
                  {
                    icon: icons.phoneBig,
                    title: t("contact_phone_title"),
                    details: ["+880 1711 602 369", "+880 1717 260 765"],
                    type: "tel",
                  },
                  {
                    icon: icons.email,
                    title: t("contact_email_title"),
                    details: ["adv.prince.islam@gmail.com"],
                    type: "mailto",
                  },
                  {
                    icon: icons.location,
                    title: t("contact_address_title"),
                    details: [t("footer_address")],
                    type: "text",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="flex items-start gap-6 group"
                  >
                    <div className="flex items-center justify-center w-14 h-14 shrink-0 transition-all duration-300 border border-white/10 rounded-2xl bg-white/5 group-hover:bg-[#dbb671] group-hover:border-[#dbb671] shadow-inner">
                      <img
                        src={item.icon}
                        alt="icon"
                        className="w-6 h-6 transition-all duration-300 filter brightness-0 invert group-hover:brightness-0"
                      />
                    </div>
                    <div className="space-y-1.5 mt-1">
                      <h4 className="text-xs font-bold tracking-widest text-[#dbb671] uppercase">
                        {item.title}
                      </h4>
                      {item.details.map((detail, dIdx) => (
                        <p
                          key={dIdx}
                          className="text-base font-medium text-gray-200 md:text-lg"
                        >
                          {item.type !== "text" ? (
                            <a
                              href={`${item.type}:${detail}`}
                              className="transition-colors hover:text-white"
                            >
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Decorative bottom element inside the card */}
            <motion.div
              variants={itemVariants}
              className="hidden pt-12 mt-12 border-t border-white/10 md:block"
            >
              <p className="text-sm text-gray-400">
                {t("contact_hours_title")} — {t("contact_hours_week")}
              </p>
            </motion.div>
          </motion.div>

          {/* --- RIGHT: THE FORM (No Background Container) --- */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col justify-center lg:col-span-7"
          >
            {/* যেহেতু ContactForm এর নিজস্ব স্টাইল আছে, তাই এটিকে সরাসরি রেন্ডার করা হলো */}
            <ContactForm />
          </motion.div>
        </div>
      </div>

      {/* =========================================
          3. UNIQUE & COMPACT MAP SECTION
          ========================================= */}
      <div className="container max-w-5xl px-4 mx-auto mb-20 md:mb-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative h-[280px] sm:h-[320px] md:h-[380px] w-full rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border-[8px] border-white group"
        >
          {/* Floating Location Badge (Disappears on hover for better map interaction) */}
          <div className="absolute top-6 left-6 z-20 flex items-center gap-3 px-5 py-2.5 transition-opacity duration-500 pointer-events-none bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg group-hover:opacity-0">
            <div className="relative flex items-center justify-center w-3 h-3">
              <span className="absolute inline-flex w-full h-full rounded-full opacity-75 bg-[#dbb671] animate-ping"></span>
              <span className="relative inline-flex w-2 h-2 rounded-full bg-[#dbb671]"></span>
            </div>
            <span className="text-sm font-bold tracking-wide text-gray-800 uppercase">
              {t("footer_address") || "Our Office"}
            </span>
          </div>

          {/* Interactive Overlay & Iframe */}
          <div className="absolute inset-0 z-10 transition-opacity duration-500 pointer-events-none bg-gradient-to-t from-[#111827]/30 to-transparent group-hover:opacity-0" />

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4713.672920403525!2d90.4104194!3d23.712493900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9006ff7419b%3A0xf565c2cb52f9d3ab!2sAdvocate%20Shamiul%20Islam%20Prince%20%26%20Associates!5e1!3m2!1sen!2sbd!4v1765907450771!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            className="transition-all duration-700 ease-in-out filter grayscale-[50%] sepia-[15%] contrast-110 group-hover:grayscale-0 group-hover:sepia-0 group-hover:contrast-100"
            style={{ border: "0" }}
            allowFullScreen={true}
            loading="lazy"
            title="Office Location"
          ></iframe>
        </motion.div>
      </div>

      {/* =========================================
          4. ASK EXPERT SECTION
          ========================================= */}
      <div className="pt-16 bg-white">
        <Ask />
      </div>
    </section>
  );
}
