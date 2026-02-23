// import AssociatesCard from "../../components/ui/Cards/AssociatesCard";
// import Heading from "../../components/ui/Headings/Heading";
// import { useGetAssociates } from "@/hooks/useGetAssociates";
// import { motion } from "framer-motion";
// import { ourAssociatesVariants } from "@/motions/motions";
// import { useEffect, useState } from "react";

// export default function OurAssociates({ sliceNumber }: { sliceNumber?: number }) {
//     const { associates, loading } = useGetAssociates()
//     const [staticAssociate, setStaticAssociate] = useState([]);

//     useEffect(() => {
//         fetch("/shamiul-islam-and-associates.associates.json")
//             .then((res) => res.json())
//             .then((data) => setStaticAssociate(data))
//     }, [])

//     if (loading) return <section className="py-12 md:py-16 px-4 md:px-8 bg-[#FAF9F4] space-y-8 md:space-y-10">
//         <div className="space-y-2">
//             <Heading className="text-center">Our Associates</Heading>
//             <motion.p variants={ourAssociatesVariants} initial="paragraphInitial" whileInView="paragraphWhileInView" className="px-2 text-sm text-center md:text-base">
//                 Experienced Legal Counsel Dedicated to Your Success
//             </motion.p>

//         </div>

//         <div className="flex justify-center">
//             {staticAssociate?.slice(0, 1).map((associate: any, index: number) => (
//                 <AssociatesCard
//                     key={index}
//                     image={associate.image?.url as string}
//                     name={associate.name}
//                     court={associate.court}
//                     position={associate.position}
//                 // socialLinks={associate.socialLinks}
//                 />
//             ))}
//         </div>
//         <div className="container grid grid-cols-1 gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
//             {staticAssociate?.slice(1, sliceNumber ? sliceNumber : associates.length).map((associate: any, index: number) => (
//                 <AssociatesCard
//                     key={index}
//                     image={associate.image?.url as string}
//                     name={associate.name}
//                     court={associate.court}
//                     position={associate.position}
//                 // socialLinks={associate.socialLinks}
//                 />
//             ))}
//         </div>
//     </section >
//     console.log({ staticAssociate })

//     return (
//         <section className="py-12 md:py-16 px-4 md:px-8 bg-[#FAF9F4] space-y-8 md:space-y-10">
//             <div className="space-y-2">
//                 <Heading className="text-center">Our Associates</Heading>
//                 <motion.p variants={ourAssociatesVariants} initial="paragraphInitial" whileInView="paragraphWhileInView" className="px-2 text-sm text-center md:text-base">
//                     Experienced Legal Counsel Dedicated to Your Success
//                 </motion.p>

//             </div>

//             {/* Grid is already good, just added 'max-w-7xl' to prevent stretching on huge screens */}
//             <div className="flex justify-center">
//                 {associates.slice(0, 1).map((associate, index) => (
//                     <AssociatesCard
//                         key={index}
//                         image={associate.image?.url as string}
//                         name={associate.name}
//                         court={associate.court}
//                         position={associate.position}
//                     // socialLinks={associate.socialLinks}
//                     />
//                 ))}
//             </div>
//             <div className="container grid grid-cols-1 gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
//                 {associates.slice(1, sliceNumber ? sliceNumber : associates.length).map((associate, index) => (
//                     <AssociatesCard
//                         key={index}
//                         image={associate.image?.url as string}
//                         name={associate.name}
//                         court={associate.court}
//                         position={associate.position}
//                     // socialLinks={associate.socialLinks}
//                     />
//                 ))}
//             </div>
//         </section >
//     )
// }

// import AssociatesCard from "../../components/ui/Cards/AssociatesCard";
// import Heading from "../../components/ui/Headings/Heading";
// import { useGetAssociates } from "@/hooks/useGetAssociates";
// import { motion } from "framer-motion";
// import { ourAssociatesVariants } from "@/motions/motions";
// import { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next"; // যুক্ত করা হয়েছে

// export default function OurAssociates({
//   sliceNumber,
// }: {
//   sliceNumber?: number;
// }) {
//   const { t, i18n } = useTranslation(); // যুক্ত করা হয়েছে
//   const { associates, loading } = useGetAssociates();
//   const [staticAssociate, setStaticAssociate] = useState([]);

//   useEffect(() => {
//     fetch("/shamiul-islam-and-associates.associates.json")
//       .then((res) => res.json())
//       .then((data) => setStaticAssociate(data));
//   }, []);

//   // Loading State-এর ডিজাইনও ইনটেক্ট রাখা হয়েছে
//   if (loading)
//     return (
//       <section
//         className={`py-12 md:py-16 px-4 md:px-8 bg-[#FAF9F4] space-y-8 md:space-y-10 ${
//           i18n.language === "bn" ? "font-bengali" : "font-english"
//         }`}
//       >
//         <div className="space-y-2">
//           <Heading className="text-center">{t("associates_heading")}</Heading>
//           <motion.p
//             variants={ourAssociatesVariants}
//             initial="paragraphInitial"
//             whileInView="paragraphWhileInView"
//             className="px-2 text-sm text-center md:text-base"
//           >
//             {t("associates_subtitle")}
//           </motion.p>
//         </div>

//         <div className="flex justify-center">
//           {staticAssociate?.slice(0, 1).map((associate: any, index: number) => (
//             <AssociatesCard
//               key={index}
//               image={associate.image?.url as string}
//               name={associate.name}
//               court={associate.court}
//               position={associate.position}
//             />
//           ))}
//         </div>
//         <div className="container grid grid-cols-1 gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
//           {staticAssociate
//             ?.slice(1, sliceNumber ? sliceNumber : 10)
//             .map((associate: any, index: number) => (
//               <AssociatesCard
//                 key={index}
//                 image={associate.image?.url as string}
//                 name={associate.name}
//                 court={associate.court}
//                 position={associate.position}
//               />
//             ))}
//         </div>
//       </section>
//     );

//   return (
//     <section
//       className={`py-12 md:py-16 px-4 md:px-8 bg-[#FAF9F4] space-y-8 md:space-y-10 ${
//         i18n.language === "bn" ? "font-bengali" : "font-english"
//       }`}
//     >
//       <div className="space-y-2">
//         <Heading className="text-center">{t("associates_heading")}</Heading>
//         <motion.p
//           variants={ourAssociatesVariants}
//           initial="paragraphInitial"
//           whileInView="paragraphWhileInView"
//           className="px-2 text-sm text-center md:text-base"
//         >
//           {t("associates_subtitle")}
//         </motion.p>
//       </div>

//       <div className="flex justify-center">
//         {associates.slice(0, 1).map((associate, index) => (
//           <AssociatesCard
//             key={index}
//             image={associate.image?.url as string}
//             name={associate.name}
//             court={associate.court}
//             position={associate.position}
//           />
//         ))}
//       </div>
//       <div className="container grid grid-cols-1 gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
//         {associates
//           .slice(1, sliceNumber ? sliceNumber : associates.length)
//           .map((associate, index) => (
//             <AssociatesCard
//               key={index}
//               image={associate.image?.url as string}
//               name={associate.name}
//               court={associate.court}
//               position={associate.position}
//             />
//           ))}
//       </div>
//     </section>
//   );
// }
import AssociatesCard from "../../components/ui/Cards/AssociatesCard";
import Heading from "../../components/ui/Headings/Heading";
import { useGetAssociates } from "@/hooks/useGetAssociates";
import { motion } from "framer-motion";
import { ourAssociatesVariants } from "@/motions/motions";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function OurAssociates({
  sliceNumber,
}: {
  sliceNumber?: number;
}) {
  const { t, i18n } = useTranslation();
  const { associates, loading } = useGetAssociates();
  const [staticAssociate, setStaticAssociate] = useState<any[]>([]);

  useEffect(() => {
    fetch("/shamiul-islam-and-associates.associates.json")
      .then((res) => res.json())
      .then((data) => setStaticAssociate(data));
  }, []);

  // ==========================================
  // SHARED HEADER COMPONENT (To avoid code duplication)
  // ==========================================
  const SectionHeader = () => (
    <div className="flex flex-col items-center mb-12 space-y-4 text-center sm:mb-16">
      {/* Classic Gold Accent Line */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "60px", opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="h-1 rounded-full bg-[#dbb671]"
      />

      <Heading>
        <span className="text-gray-900 drop-shadow-sm">
          {t("associates_heading")}
        </span>
      </Heading>

      <motion.p
        variants={ourAssociatesVariants}
        initial="paragraphInitial"
        whileInView="paragraphWhileInView"
        viewport={{ once: true }}
        className="max-w-2xl px-4 text-base leading-relaxed text-gray-600 sm:text-lg"
      >
        {t("associates_subtitle")}
      </motion.p>
    </div>
  );

  // ==========================================
  // LOADING STATE (Using Static JSON Fallback)
  // ==========================================
  if (loading)
    return (
      <section
        className={`py-16 sm:py-20 lg:py-28 bg-[#faf9f8] ${
          i18n.language === "bn" ? "font-bengali" : "font-english"
        }`}
      >
        <div className="container px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <SectionHeader />

          {/* Principal Associate (Centered & Width Constrained) */}
          <div className="w-full max-w-sm mx-auto mb-12 sm:max-w-md lg:max-w-sm sm:mb-16 lg:mb-20">
            {staticAssociate
              ?.slice(0, 1)
              .map((associate: any, index: number) => (
                <AssociatesCard
                  key={index}
                  image={associate.image?.url as string}
                  name={associate.name}
                  court={associate.court}
                  position={associate.position}
                />
              ))}
          </div>

          {/* Other Associates Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-12">
            {staticAssociate
              ?.slice(1, sliceNumber ? sliceNumber : 10)
              .map((associate: any, index: number) => (
                <AssociatesCard
                  key={index}
                  image={associate.image?.url as string}
                  name={associate.name}
                  court={associate.court}
                  position={associate.position}
                />
              ))}
          </div>
        </div>
      </section>
    );

  // ==========================================
  // LOADED STATE
  // ==========================================
  return (
    <section
      className={`py-16 sm:py-20 lg:py-28 bg-[#faf9f8] overflow-hidden ${
        i18n.language === "bn" ? "font-bengali" : "font-english"
      }`}
    >
      <div className="container px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <SectionHeader />

        {/* Principal Associate (Centered & Width Constrained) */}
        {/* max-w-sm ensures the image doesn't get ridiculously large on desktop */}
        <div className="w-full max-w-sm mx-auto mb-12 sm:max-w-md lg:max-w-sm sm:mb-16 lg:mb-20">
          {associates.slice(0, 1).map((associate, index) => (
            <motion.div
              key={`principal-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <AssociatesCard
                image={associate.image?.url as string}
                name={associate.name}
                court={associate.court}
                position={associate.position}
              />
            </motion.div>
          ))}
        </div>

        {/* Other Associates Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-12">
          {associates
            .slice(1, sliceNumber ? sliceNumber : associates.length)
            .map((associate, index) => (
              <motion.div
                key={`associate-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <AssociatesCard
                  image={associate.image?.url as string}
                  name={associate.name}
                  court={associate.court}
                  position={associate.position}
                />
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
