// import { aboutVariants } from "@/motions/motions";
// import { motion } from "framer-motion";

// export default function AboutContent() {
//   return (
//     <section className="container px-5 py-16 mx-auto md:px-0">
//       <motion.p
//         className="text-lg md:text-xl"
//         variants={aboutVariants}
//         initial="contentInitial"
//         whileInView="contentWhileInView"
//       >
//         Established in 2014 by{" "}
//         <a
//           href="https://www.facebook.com/adv.prince.islam/"
//           target="_blank"
//           className="font-bold text-[#604B33]"
//         >
//           Advocate Md. Shamiul Islam
//         </a>
//         , This Law Chamber has swiftly emerged as one of the top law firms in
//         Dhaka, Bangladesh. Over the years, our chamber has garnered a strong
//         reputation as a premier full-service law firm for its exceptional legal
//         counselling, documentation and representation in and out of the
//         Courtroom. Our team of highly skilled and dedicated lawyers, including
//         company lawyers, corporate lawyers, civil lawyers, and criminal defence
//         lawyers, are renowned for their unwavering determination, hard work, and
//         consistent delivery of the best legal aid to businesses and individuals
//         within and beyond the borders of Bangladesh.
//       </motion.p>
//     </section>
//   );
// }

import { aboutVariants } from "@/motions/motions";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function AboutContent() {
  const { t, i18n } = useTranslation();

  return (
    <section
      className={`container px-5 py-16 mx-auto md:px-0 ${
        i18n.language === "bn" ? "font-bengali" : "font-english"
      }`}
    >
      <motion.p
        className="text-lg leading-relaxed md:text-xl"
        variants={aboutVariants}
        initial="contentInitial"
        whileInView="contentWhileInView"
      >
        {/* টেক্সটটি ডাইনামিক করা হলো, তবে লিঙ্কটি ফিক্সড রাখা হয়েছে আপনার ডিজাইন অনুযায়ী */}
        {i18n.language === "en" ? (
          <>
            Established in 2014 by{" "}
            <a
              href="https://www.facebook.com/adv.prince.islam/"
              target="_blank"
              className="font-bold text-[#604B33] hover:underline"
            >
              Advocate Md. Shamiul Islam
            </a>
            , This Law Chamber has swiftly emerged as one of the top law firms
            in Dhaka, Bangladesh. Over the years, our chamber has garnered a
            strong reputation as a premier full-service law firm for its
            exceptional legal counselling, documentation and representation in
            and out of the Courtroom. Our team of highly skilled and dedicated
            lawyers, including company lawyers, corporate lawyers, civil
            lawyers, and criminal defence lawyers, are renowned for their
            unwavering determination, hard work, and consistent delivery of the
            best legal aid to businesses and individuals within and beyond the
            borders of Bangladesh.
          </>
        ) : (
          <>
            ২০১৪ সালে{" "}
            <a
              href="https://www.facebook.com/adv.prince.islam/"
              target="_blank"
              className="font-bold text-[#604B33] hover:underline"
            >
              অ্যাডভোকেট মো. সামিউল ইসলাম
            </a>
            -এর হাত ধরে প্রতিষ্ঠিত এই ল চেম্বারটি দ্রুত বাংলাদেশের ঢাকার
            শীর্ষস্থানীয় ল ফার্মগুলোর মধ্যে একটি হিসেবে আত্মপ্রকাশ করেছে। বছরের
            পর বছর ধরে, আমাদের চেম্বার আদালতের ভেতরে এবং বাইরে ব্যতিক্রমী আইনি
            পরামর্শ, নথিপত্র এবং প্রতিনিধিত্বের জন্য একটি প্রধান পূর্ণ-পরিষেবা ল
            ফার্ম হিসেবে শক্তিশালী খ্যাতি অর্জন করেছে। আমাদের অত্যন্ত দক্ষ এবং
            নিবেদিত আইনজীবীদের দল, যার মধ্যে কোম্পানি আইনজীবী, কর্পোরেট আইনজীবী,
            দেওয়ানি আইনজীবী এবং ফৌজদারি প্রতিরক্ষা আইনজীবী রয়েছেন, তারা তাদের
            অটল সংকল্প, কঠোর পরিশ্রম এবং বাংলাদেশের সীমানার ভেতরে ও বাইরে ব্যবসা
            এবং ব্যক্তিদের সর্বোত্তম আইনি সহায়তা প্রদানের জন্য সুপরিচিত।
          </>
        )}
      </motion.p>
    </section>
  );
}
