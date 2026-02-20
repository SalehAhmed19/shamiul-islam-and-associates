// import Heading from "@/components/ui/Headings/Heading";
// import { icons, images } from "../../assets/assets";
// import ContactForm from "../../components/ui/Forms/ContactForm";
// import Ask from "../HomePage/Ask";
// import { motion } from "framer-motion";
// import { contactVariants } from "@/motions/motions";
// import { useTranslation } from "react-i18next";

// export default function Contact() {
//   const { t, i18n } = useTranslation();

//   return (
//     <section
//       className={i18n.language === "bn" ? "font-bengali" : "font-english"}
//     >
//       {/* Background Image Container */}
//       <div
//         style={{
//           backgroundImage: `url(${images.contact})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         {/* Header Title Section */}
//         <div className="flex items-center justify-center h-[300px] md:h-[420px]">
//           <Heading className="text-white">{t("contact_heading")}</Heading>
//         </div>

//         {/* Main Content Grid */}
//         <div className="container grid grid-cols-1 gap-10 px-4 py-10 mx-auto text-white md:py-16 lg:grid-cols-2 md:gap-16">
//           {/* Left Column: Contact Info */}
//           <motion.div
//             variants={contactVariants}
//             initial="zoomInitial"
//             whileInView="zoomWhileInView"
//             className="space-y-8 md:space-y-10"
//           >
//             <div>
//               <h2 className="text-3xl md:text-[40px] font-bold leading-tight mb-4">
//                 <span
//                   dangerouslySetInnerHTML={{ __html: t("contact_sub_title") }}
//                 />
//               </h2>
//               <p className="text-base text-gray-200 md:text-lg">
//                 {t("contact_desc")}
//               </p>
//             </div>

//             {/* Info Grid */}
//             <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-10">
//               {/* Phone */}
//               <div className="flex gap-4 md:gap-5">
//                 <div className="shrink-0">
//                   <img
//                     src={icons.phoneBig}
//                     alt="phone"
//                     className="w-10 h-10 md:w-auto md:h-auto"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <h3 className="text-xl md:text-[24px] font-bold">
//                     {t("contact_phone_title")}
//                   </h3>
//                   <div className="text-sm text-gray-300 md:text-base">
//                     <p>+880 1711 602 369</p>
//                     <p>+880 1717 260 765</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Location */}
//               <div className="flex gap-4 md:gap-5">
//                 <div className="shrink-0">
//                   <img
//                     src={icons.location}
//                     alt="location"
//                     className="w-10 h-10 md:w-auto md:h-auto"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <h3 className="text-xl md:text-[24px] font-bold">
//                     {t("contact_address_title")}
//                   </h3>
//                   <div className="text-sm text-gray-300 md:text-base">
//                     <p>{t("footer_address")}</p>{" "}
//                     {/* Footer এ দেওয়া অ্যাড্রেসটি এখানে ব্যবহার করা হয়েছে */}
//                   </div>
//                 </div>
//               </div>

//               {/* Email */}
//               <div className="flex gap-4 md:gap-5">
//                 <div className="shrink-0">
//                   <img
//                     src={icons.email}
//                     alt="email"
//                     className="w-10 h-10 md:w-auto md:h-auto"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <h3 className="text-xl md:text-[24px] font-bold">
//                     {t("contact_email_title")}
//                   </h3>
//                   <div className="text-sm text-gray-300 break-all md:text-base">
//                     <p>adv.prince.islam@gmail.com</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Clock */}
//               <div className="flex gap-4 md:gap-5">
//                 <div className="shrink-0">
//                   <img
//                     src={icons.clock}
//                     alt="clock"
//                     className="w-10 h-10 md:w-auto md:h-auto"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <h3 className="text-xl md:text-[24px] font-bold">
//                     {t("contact_hours_title")}
//                   </h3>
//                   <div className="text-sm text-gray-300 md:text-base">
//                     <p>{t("contact_hours_week")}</p>
//                     <p>{t("contact_hours_off")}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Right Column: Form */}
//           <motion.div
//             variants={contactVariants}
//             initial="zoomInitial"
//             whileInView="zoomWhileInView"
//           >
//             <ContactForm />
//           </motion.div>
//         </div>
//       </div>

//       {/* Map Section */}
//       <motion.div
//         variants={contactVariants}
//         initial="initial"
//         whileInView="whileInView"
//       >
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4713.672920403525!2d90.4104194!3d23.712493900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9006ff7419b%3A0xf565c2cb52f9d3ab!2sAdvocate%20Shamiul%20Islam%20Prince%20%26%20Associates!5e1!3m2!1sen!2sbd!4v1765907450771!5m2!1sen!2sbd"
//           width="100%"
//           height="450"
//           className="h-[300px] md:h-[450px]"
//           style={{ border: "0" }}
//           allowFullScreen={true}
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         ></iframe>
//       </motion.div>

//       <Ask />
//     </section>
//   );
// }

// import Heading from "@/components/ui/Headings/Heading";
// import { icons, images } from "../../assets/assets";
// import ContactForm from "../../components/ui/Forms/ContactForm";
// import Ask from "../HomePage/Ask";
// import { motion } from "framer-motion";
// import { contactVariants } from "@/motions/motions";
// import { useTranslation } from "react-i18next";

// export default function Contact() {
//   const { t, i18n } = useTranslation();

//   return (
//     <section
//       className={`bg-[#faf9f8] ${
//         i18n.language === "bn" ? "font-bengali" : "font-english"
//       }`}
//     >
//       {/* =========================================
//           1. HERO HEADER WITH PARALLAX BACKGROUND
//           ========================================= */}
//       <div className="relative overflow-hidden h-[350px] sm:h-[400px] md:h-[450px]">
//         {/* Background Image with Parallax feel */}
//         <div
//           className="absolute inset-0 bg-center bg-no-repeat bg-cover md:bg-fixed"
//           style={{ backgroundImage: `url(${images.contact})` }}
//         ></div>
//         {/* Deep Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[#111827]"></div>

//         {/* Content */}
//         <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
//           <motion.div
//             initial={{ width: 0, opacity: 0 }}
//             animate={{ width: "60px", opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="h-1 mb-6 rounded-full bg-[#dbb671]"
//           />
//           <Heading className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-[0.1em] drop-shadow-2xl">
//             {t("contact_heading")}
//           </Heading>
//         </div>
//       </div>

//       {/* =========================================
//           2. MAIN CONTENT GRID (Overlapping Design)
//           ========================================= */}
//       {/* -mt-24 pulls the content up over the dark background */}
//       <div className="container relative z-20 px-4 mx-auto -mt-20 max-w-7xl sm:px-6 lg:px-8 md:-mt-24 lg:-mt-32">
//         <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
//           {/* --- LEFT COLUMN: CONTACT INFO CARDS --- */}
//           {/* lg:col-span-5 takes about 40% of the space on large screens */}
//           <motion.div
//             variants={contactVariants}
//             initial="zoomInitial"
//             whileInView="zoomWhileInView"
//             viewport={{ once: true, margin: "-50px" }}
//             className="space-y-6 lg:col-span-5 md:space-y-8"
//           >
//             {/* Intro Text */}
//             <div className="p-6 sm:p-8 bg-[#111827] rounded-3xl border border-white/10 shadow-2xl backdrop-blur-md">
//               <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
//                 <span
//                   dangerouslySetInnerHTML={{ __html: t("contact_sub_title") }}
//                 />
//               </h2>
//               <p className="text-base leading-relaxed text-gray-400 sm:text-lg">
//                 {t("contact_desc")}
//               </p>
//             </div>

//             {/* Information Grid (2x2 on mobile, stacked on desktop) */}
//             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
//               {/* Phone Card */}
//               <div className="flex items-start gap-5 p-6 transition-all duration-300 border bg-white/60 backdrop-blur-sm border-white/80 rounded-2xl hover:bg-white hover:shadow-xl hover:border-gray-200 group">
//                 <div className="flex items-center justify-center w-12 h-12 p-3 transition-colors duration-300 rounded-xl bg-[#dbb671]/10 group-hover:bg-[#dbb671] shrink-0">
//                   <img
//                     src={icons.phoneBig}
//                     alt="phone"
//                     className="object-contain w-full h-full filter brightness-0 group-hover:brightness-0 group-hover:invert"
//                   />
//                 </div>
//                 <div>
//                   <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1.5">
//                     {t("contact_phone_title")}
//                   </h3>
//                   <div className="text-sm font-medium text-gray-600 sm:text-base">
//                     <a
//                       href="tel:+8801711602369"
//                       className="block transition-colors hover:text-[#dbb671]"
//                     >
//                       +880 1711 602 369
//                     </a>
//                     <a
//                       href="tel:+8801717260765"
//                       className="block transition-colors hover:text-[#dbb671]"
//                     >
//                       +880 1717 260 765
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               {/* Email Card */}
//               <div className="flex items-start gap-5 p-6 transition-all duration-300 border bg-white/60 backdrop-blur-sm border-white/80 rounded-2xl hover:bg-white hover:shadow-xl hover:border-gray-200 group">
//                 <div className="flex items-center justify-center w-12 h-12 p-3 transition-colors duration-300 rounded-xl bg-[#dbb671]/10 group-hover:bg-[#dbb671] shrink-0">
//                   <img
//                     src={icons.email}
//                     alt="email"
//                     className="object-contain w-full h-full filter brightness-0 group-hover:brightness-0 group-hover:invert"
//                   />
//                 </div>
//                 <div>
//                   <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1.5">
//                     {t("contact_email_title")}
//                   </h3>
//                   <a
//                     href="mailto:adv.prince.islam@gmail.com"
//                     className="block text-sm font-medium text-gray-600 break-all transition-colors sm:text-base hover:text-[#dbb671]"
//                   >
//                     adv.prince.islam@gmail.com
//                   </a>
//                 </div>
//               </div>

//               {/* Location Card */}
//               <div className="flex items-start gap-5 p-6 transition-all duration-300 border bg-white/60 backdrop-blur-sm border-white/80 rounded-2xl hover:bg-white hover:shadow-xl hover:border-gray-200 group">
//                 <div className="flex items-center justify-center w-12 h-12 p-3 transition-colors duration-300 rounded-xl bg-[#dbb671]/10 group-hover:bg-[#dbb671] shrink-0">
//                   <img
//                     src={icons.location}
//                     alt="location"
//                     className="object-contain w-full h-full filter brightness-0 group-hover:brightness-0 group-hover:invert"
//                   />
//                 </div>
//                 <div>
//                   <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1.5">
//                     {t("contact_address_title")}
//                   </h3>
//                   <p className="text-sm font-medium leading-relaxed text-gray-600 sm:text-base">
//                     {t("footer_address")}
//                   </p>
//                 </div>
//               </div>

//               {/* Office Hours Card */}
//               <div className="flex items-start gap-5 p-6 transition-all duration-300 border bg-white/60 backdrop-blur-sm border-white/80 rounded-2xl hover:bg-white hover:shadow-xl hover:border-gray-200 group">
//                 <div className="flex items-center justify-center w-12 h-12 p-3 transition-colors duration-300 rounded-xl bg-[#dbb671]/10 group-hover:bg-[#dbb671] shrink-0">
//                   <img
//                     src={icons.clock}
//                     alt="clock"
//                     className="object-contain w-full h-full filter brightness-0 group-hover:brightness-0 group-hover:invert"
//                   />
//                 </div>
//                 <div>
//                   <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1.5">
//                     {t("contact_hours_title")}
//                   </h3>
//                   <div className="text-sm font-medium text-gray-600 sm:text-base">
//                     <p>{t("contact_hours_week")}</p>
//                     <p className="text-red-500/80">{t("contact_hours_off")}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* --- RIGHT COLUMN: CONTACT FORM --- */}
//           {/* lg:col-span-7 takes about 60% of the space on large screens */}
//           <motion.div
//             variants={contactVariants}
//             initial="zoomInitial"
//             whileInView="zoomWhileInView"
//             viewport={{ once: true, margin: "-50px" }}
//             className="lg:col-span-7"
//           >
//             {/* Form is wrapped in a pristine white floating card */}
//             {/* <div className="h-full p-8 bg-white border border-gray-100 sm:p-10 lg:p-12 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]"> */}
//             {/* এখানে আপনার ContactForm কম্পোনেন্টটিকে সুন্দরভাবে রেন্ডার করা হবে */}
//             <ContactForm />
//             {/* </div> */}
//           </motion.div>
//         </div>
//       </div>

//       {/* =========================================
//           3. EMBEDDED MAP SECTION
//           ========================================= */}
//       <motion.div
//         variants={contactVariants}
//         initial="initial"
//         whileInView="whileInView"
//         viewport={{ once: true }}
//         className="w-full mt-20 md:mt-32"
//       >
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4713.672920403525!2d90.4104194!3d23.712493900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9006ff7419b%3A0xf565c2cb52f9d3ab!2sAdvocate%20Shamiul%20Islam%20Prince%20%26%20Associates!5e1!3m2!1sen!2sbd!4v1765907450771!5m2!1sen!2sbd"
//           width="100%"
//           height="100%"
//           className="h-[350px] sm:h-[450px] lg:h-[500px] w-full border-t border-gray-200 filter grayscale-[20%] contrast-125"
//           style={{ border: "0" }}
//           allowFullScreen={true}
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//           title="Office Location Map"
//         ></iframe>
//       </motion.div>

//       {/* =========================================
//           4. ASK A QUESTION SECTION
//           ========================================= */}
//       <Ask />
//     </section>
//   );
// }

import Heading from "@/components/ui/Headings/Heading";
import { icons } from "../../assets/assets";
import ContactForm from "../../components/ui/Forms/ContactForm";
import Ask from "../HomePage/Ask";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t, i18n } = useTranslation();

  return (
    <section
      className={`bg-white ${i18n.language === "bn" ? "font-bengali" : "font-english"}`}
    >
      {/* =========================================
          1. MINIMALIST DARK HERO HEADER
          ========================================= */}
      <div className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-[#0A0F1A] overflow-hidden">
        {/* Decorative Light Effect */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#dbb671]/10 blur-[120px] rounded-full -mr-64 -mt-64"></div>

        <div className="container relative z-10 px-6 mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              className="h-1 mb-6 bg-[#dbb671]"
            />
            <Heading className="mb-6 text-5xl font-black leading-tight text-white md:text-7xl">
              {t("contact_heading")}
            </Heading>
            <p className="text-lg leading-relaxed text-gray-400 md:text-xl">
              {t("contact_desc")}
            </p>
          </div>
        </div>
      </div>

      {/* =========================================
          2. MAIN SPLIT CONTENT (INFO & FORM)
          ========================================= */}
      <div className="container px-6 mx-auto mt-16 max-w-7xl md:mt-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* --- LEFT: INFO SECTION --- */}
          <div className="space-y-12 lg:col-span-5">
            <h2 className="text-3xl font-extrabold leading-snug tracking-tight text-gray-900 md:text-4xl">
              <span
                dangerouslySetInnerHTML={{ __html: t("contact_sub_title") }}
              />
            </h2>

            <div className="space-y-10">
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
                <div key={idx} className="flex items-start gap-6 group">
                  <div className="flex items-center justify-center w-12 h-12 transition-all duration-300 border border-gray-100 rounded-xl bg-gray-50 group-hover:bg-[#dbb671] group-hover:border-[#dbb671]">
                    <img
                      src={item.icon}
                      alt="icon"
                      className="w-5 h-5 transition-all duration-300 group-hover:invert group-hover:brightness-0"
                    />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                      {item.title}
                    </h4>
                    {item.details.map((detail, dIdx) => (
                      <p key={dIdx} className="text-lg font-bold text-gray-800">
                        {item.type !== "text" ? (
                          <a
                            href={`${item.type}:${detail}`}
                            className="hover:text-[#dbb671] transition-colors"
                          >
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- RIGHT: THE FORM (Self-contained) --- */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* =========================================
          3. FULL WIDTH INTERACTIVE MAP
          ========================================= */}
      <div className="mt-24 md:mt-32 h-[450px] md:h-[550px] w-full border-y grayscale hover:grayscale-0 transition-all duration-700 contrast-125 border-b-2 border-[#DBB671]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4713.672920403525!2d90.4104194!3d23.712493900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9006ff7419b%3A0xf565c2cb52f9d3ab!2sAdvocate%20Shamiul%20Islam%20Prince%20%26%20Associates!5e1!3m2!1sen!2sbd!4v1765907450771!5m2!1sen!2sbd" // আপনার আসল ম্যাপ লিঙ্ক এখানে বসবে
          width="100%"
          height="100%"
          style={{ border: "0" }}
          allowFullScreen={true}
          loading="lazy"
          title="Office Location"
        ></iframe>
      </div>

      {/* =========================================
          4. ASK EXPERT SECTION (Single Column centered)
          ========================================= */}
      {/* <div className="py-20 bg-[#faf9f8] md:py-28">
        <div className="container px-6 mx-auto text-center">
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-[#604B33] uppercase bg-[#dbb671]/10 rounded-full">
            {t("home_ask_expert_label") || "Have Any Question?"}
          </div>
          <h2 className="mb-12 text-4xl font-black text-gray-900 md:text-5xl">
            {t("contact_faq_title") || "Ask Our Expert"}
          </h2> */}

      {/* FAQ Component in a single column layout */}
      {/* <div className="text-left bg-white p-6 md:p-10 rounded-[2rem] shadow-sm border border-gray-100"> */}
      <Ask />
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
    </section>
  );
}
