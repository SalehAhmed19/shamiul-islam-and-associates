// import Heading from "@/components/ui/Headings/Heading";
// import { icons, images } from "../../assets/assets";
// import ContactForm from "../../components/ui/Forms/ContactForm";
// import Ask from "../HomePage/Ask";
// import { motion } from "framer-motion";
// import { contactVariants } from "@/motions/motions";

// export default function Contact() {
//   return (
//     <section>
//       {/* Background Image Container */}
//       <div
//         style={{
//           backgroundImage: `url(${images.contact})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         {/* Header Title Section - Adjusted height for mobile */}
//         <div className="flex items-center justify-center h-[300px] md:h-[420px]">
//           <Heading className="text-white">Contact Us</Heading>
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
//                 Have any questions?
//                 <br className="hidden md:block" /> Feel free to contact us!
//               </h2>
//               <p className="text-base text-gray-200 md:text-lg">
//                 Our dedicated legal team is here to provide the support and
//                 clarity you need—reach out today for a personalized consultation
//                 tailored to your situation.
//               </p>
//             </div>

//             {/* Info Grid - Stacks on small mobile, 2 cols on tablet/desktop */}
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
//                     Phone Numbers
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
//                     Physical Address
//                   </h3>
//                   <div className="text-sm text-gray-300 md:text-base">
//                     <p>
//                       Room No- B15,(3rd Floor), Nahar Complex, 25/1, Court House
//                       Street, Dhaka-1100, Bangladesh.
//                     </p>
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
//                   <h3 className="text-xl md:text-[24px] font-bold">Email</h3>
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
//                     Opening Hours
//                   </h3>
//                   <div className="text-sm text-gray-300 md:text-base">
//                     <p>Sunday - Thursday: 9:00 AM - 6:00 PM</p>
//                     <p>Friday - Saturday: Closed</p>
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
import Heading from "@/components/ui/Headings/Heading";
import { icons, images } from "../../assets/assets";
import ContactForm from "../../components/ui/Forms/ContactForm";
import Ask from "../HomePage/Ask";
import { motion } from "framer-motion";
import { contactVariants } from "@/motions/motions";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t, i18n } = useTranslation();

  return (
    <section
      className={i18n.language === "bn" ? "font-bengali" : "font-english"}
    >
      {/* Background Image Container */}
      <div
        style={{
          backgroundImage: `url(${images.contact})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Header Title Section */}
        <div className="flex items-center justify-center h-[300px] md:h-[420px]">
          <Heading className="text-white">{t("contact_heading")}</Heading>
        </div>

        {/* Main Content Grid */}
        <div className="container grid grid-cols-1 gap-10 px-4 py-10 mx-auto text-white md:py-16 lg:grid-cols-2 md:gap-16">
          {/* Left Column: Contact Info */}
          <motion.div
            variants={contactVariants}
            initial="zoomInitial"
            whileInView="zoomWhileInView"
            className="space-y-8 md:space-y-10"
          >
            <div>
              <h2 className="text-3xl md:text-[40px] font-bold leading-tight mb-4">
                <span
                  dangerouslySetInnerHTML={{ __html: t("contact_sub_title") }}
                />
              </h2>
              <p className="text-base text-gray-200 md:text-lg">
                {t("contact_desc")}
              </p>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-10">
              {/* Phone */}
              <div className="flex gap-4 md:gap-5">
                <div className="shrink-0">
                  <img
                    src={icons.phoneBig}
                    alt="phone"
                    className="w-10 h-10 md:w-auto md:h-auto"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl md:text-[24px] font-bold">
                    {t("contact_phone_title")}
                  </h3>
                  <div className="text-sm text-gray-300 md:text-base">
                    <p>+880 1711 602 369</p>
                    <p>+880 1717 260 765</p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4 md:gap-5">
                <div className="shrink-0">
                  <img
                    src={icons.location}
                    alt="location"
                    className="w-10 h-10 md:w-auto md:h-auto"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl md:text-[24px] font-bold">
                    {t("contact_address_title")}
                  </h3>
                  <div className="text-sm text-gray-300 md:text-base">
                    <p>{t("footer_address")}</p>{" "}
                    {/* Footer এ দেওয়া অ্যাড্রেসটি এখানে ব্যবহার করা হয়েছে */}
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 md:gap-5">
                <div className="shrink-0">
                  <img
                    src={icons.email}
                    alt="email"
                    className="w-10 h-10 md:w-auto md:h-auto"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl md:text-[24px] font-bold">
                    {t("contact_email_title")}
                  </h3>
                  <div className="text-sm text-gray-300 break-all md:text-base">
                    <p>adv.prince.islam@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Clock */}
              <div className="flex gap-4 md:gap-5">
                <div className="shrink-0">
                  <img
                    src={icons.clock}
                    alt="clock"
                    className="w-10 h-10 md:w-auto md:h-auto"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl md:text-[24px] font-bold">
                    {t("contact_hours_title")}
                  </h3>
                  <div className="text-sm text-gray-300 md:text-base">
                    <p>{t("contact_hours_week")}</p>
                    <p>{t("contact_hours_off")}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            variants={contactVariants}
            initial="zoomInitial"
            whileInView="zoomWhileInView"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>

      {/* Map Section */}
      <motion.div
        variants={contactVariants}
        initial="initial"
        whileInView="whileInView"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4713.672920403525!2d90.4104194!3d23.712493900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9006ff7419b%3A0xf565c2cb52f9d3ab!2sAdvocate%20Shamiul%20Islam%20Prince%20%26%20Associates!5e1!3m2!1sen!2sbd!4v1765907450771!5m2!1sen!2sbd"
          width="100%"
          height="450"
          className="h-[300px] md:h-[450px]"
          style={{ border: "0" }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>

      <Ask />
    </section>
  );
}
