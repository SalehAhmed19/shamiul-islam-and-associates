// import { motion } from "framer-motion";
// import { StepsData } from "../../data/StepsData";
// import { serviceVariant } from "@/motions/motions";

// export default function Steps() {
//   return (
//     <section>
//       {/* Added px-4 to prevent content touching edges on mobile */}
//       {/* Adjusted py-16 to py-10 md:py-16 for better mobile vertical spacing */}
//       <div className="container px-4 py-10 mx-auto md:py-16">
//         <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
//           {StepsData?.map((step, index) => (
//             // Adjusted padding: p-6 on mobile, p-10 on desktop
//             <motion.div
//               variants={serviceVariant}
//               initial="stepsInitial"
//               whileInView="stepsWhileInView"
//             >
//               <div
//                 key={index}
//                 className="flex items-center h-full gap-4 p-6 bg-white md:p-10"
//               >
//                 {/* Added flex-1: Ensures text takes up available space but allows wrapping */}
//                 <div className="flex-1">
//                   {/* Responsive text size: text-2xl on mobile, text-[28px] on desktop */}
//                   <h2 className="text-2xl md:text-[28px] font-bold text-[#604B33] mb-2">
//                     {step.title}
//                   </h2>
//                   <p className="text-sm md:text-base">{step.description}</p>
//                 </div>

//                 {/* Added shrink-0: Prevents the icon box from getting squashed on small screens */}
//                 <div className="flex items-center justify-center bg-[#604B33] p-4 md:p-5 shrink-0 rounded-sm">
//                   <img
//                     src={step.icon}
//                     alt={step.title}
//                     className="object-contain w-8 h-8 md:w-auto md:h-auto"
//                   />
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import { motion } from "framer-motion";
import { StepsData } from "../../data/StepsData";
import { serviceVariant } from "@/motions/motions";
import { useTranslation } from "react-i18next"; // যুক্ত করা হয়েছে

export default function Steps() {
  const { t, i18n } = useTranslation(); // যুক্ত করা হয়েছে

  return (
    <section
      className={i18n.language === "bn" ? "font-bengali" : "font-english"}
    >
      {/* Added px-4 to prevent content touching edges on mobile */}
      {/* Adjusted py-16 to py-10 md:py-16 for better mobile vertical spacing */}
      <div className="container px-4 py-10 mx-auto md:py-16">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {StepsData?.map((step, index) => (
            // Adjusted padding: p-6 on mobile, p-10 on desktop
            <motion.div
              variants={serviceVariant}
              initial="stepsInitial"
              whileInView="stepsWhileInView"
              key={index} // key এখানে সরানো হয়েছে সঠিক রেন্ডারিংয়ের জন্য
            >
              <div className="flex items-center h-full gap-4 p-6 bg-white md:p-10">
                {/* Added flex-1: Ensures text takes up available space but allows wrapping */}
                <div className="flex-1">
                  {/* Responsive text size: text-2xl on mobile, text-[28px] on desktop */}
                  <h2 className="text-2xl md:text-[28px] font-bold text-[#604B33] mb-2">
                    {t(step.title)}
                  </h2>
                  <p className="text-sm text-gray-600 md:text-base">
                    {t(step.description)}
                  </p>
                </div>

                {/* Added shrink-0: Prevents the icon box from getting squashed on small screens */}
                <div className="flex items-center justify-center bg-[#604B33] p-4 md:p-5 shrink-0 rounded-sm">
                  <img
                    src={step.icon}
                    alt={t(step.title)}
                    className="object-contain w-8 h-8 md:w-auto md:h-auto"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
