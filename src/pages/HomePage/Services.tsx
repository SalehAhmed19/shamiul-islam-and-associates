// import ServiceCard from "../../components/ui/Cards/ServiceCard";
// import { servicesData } from "../../data/Services";
// import Message from "./Message";

// export default function Services() {
//   return (
//     <section className="relative bg-[#FAF9F4] pb-20">
//       <Message />
//       <div className="container grid grid-cols-1 gap-6 px-4 mx-auto mt-16 md:mt-24 sm:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-10">
//         {servicesData?.map((service, idx) => (
//           <ServiceCard key={idx} {...service} />
//         ))}
//       </div>
//     </section>
//   );
// }

import ServiceCard from "../../components/ui/Cards/ServiceCard";
import { servicesData } from "../../data/Services";
import Message from "./Message";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
// যদি আপনার Heading কম্পোনেন্ট থাকে তবে এটি আনকমেন্ট করে নিতে পারেন
// import Heading from "../../components/ui/Headings/Heading";

export default function Services() {
  const { t, i18n } = useTranslation();

  return (
    <section
      className={`relative bg-[#faf9f8] pb-20 md:pb-28 overflow-hidden ${
        i18n.language === "bn" ? "font-bengali" : "font-english"
      }`}
    >
      {/* --- Founder Message Section --- */}
      <Message />

      {/* --- Services / Practice Areas Container --- */}
      {/* mt-20 md:mt-28 দিয়ে Message এবং Services এর মাঝে পারফেক্ট গ্যাপ তৈরি করা হয়েছে */}
      <div className="container px-4 mx-auto mt-20 sm:px-6 lg:px-8 max-w-7xl md:mt-28">
        {/* =========================================
            SECTION HEADER (Classic & Premium)
            ========================================= */}
        <div className="flex flex-col items-center mb-12 text-center sm:mb-16">
          {/* Decorative Gold Accent Line */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "60px", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 mb-5 rounded-full bg-[#dbb671]"
          />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl drop-shadow-sm"
          >
            {/* JSON ফাইলে "services_heading" নামে ভ্যালু থাকলে t() ব্যবহার করুন, নাহলে হার্ডকোড করতে পারেন */}
            {t("services_heading") !== "services_heading"
              ? t("services_heading")
              : "Our Practice Areas"}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="max-w-2xl mt-4 text-base leading-relaxed text-gray-500 sm:text-lg"
          >
            {/* JSON ফাইলে সাবটাইটেল থাকলে সেটি ব্যবহার করুন */}
            {t("services_subtitle") !== "services_subtitle"
              ? t("services_subtitle")
              : "Comprehensive legal solutions tailored to protect your rights and achieve your goals."}
          </motion.p>
        </div>

        {/* =========================================
            SERVICES GRID (With Staggered Wave Animation)
            ========================================= */}
        {/* Grid gaps adjusted for perfect alignment on all devices */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-10 xl:gap-12">
          {servicesData?.map((service, idx) => (
            <motion.div
              key={idx}
              // Staggered Animation: প্রতিটি কার্ড একটু পর পর (delay: idx * 0.15) নিচ থেকে ভেসে উঠবে
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: idx * 0.15,
                ease: [0.04, 0.62, 0.23, 0.98],
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="h-full" // h-full নিশ্চিত করে যে সব কার্ড গ্রিডে সমান হাইট পাবে
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
