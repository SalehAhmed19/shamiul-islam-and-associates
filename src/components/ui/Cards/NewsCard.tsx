// import { FaArrowRight } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// import { OurBlogsVariants } from "@/motions/motions";
// import { motion } from "framer-motion";

// export default function NewsCard({
//   image,
//   title,
//   date,
//   slug,
// }: {
//   image: string;
//   title: string;
//   date: string;
//   slug: string;
// }) {
//   return (
//     <motion.div
//       variants={OurBlogsVariants}
//       initial="zoomInitial"
//       whileInView="zoomWhileInView"
//     >
//       <div className="space-y-4 cursor-pointer group">
//         {/* Image Wrapper for scaling effect */}
//         <div className="overflow-hidden rounded-lg">
//           <motion.img
//             variants={OurBlogsVariants}
//             whileHover="imageHover"
//             src={image}
//             alt="blog"
//             className="object-cover w-full h-64"
//           />
//         </div>

//         <div className="space-y-2">
//           <motion.p
//             variants={OurBlogsVariants}
//             initial="textInitial"
//             whileInView="textWhileInView"
//             className="text-sm text-black/60"
//           >
//             {date}
//           </motion.p>

//           <Link to={`/news/${slug}`}>
//             <motion.h5
//               variants={OurBlogsVariants}
//               initial="titleInitial"
//               whileInView="titleWhileInView"
//               className="text-[20px] text-[#604B33] font-bold leading-tight group-hover:underline bangla"
//             >
//               {title}
//             </motion.h5>
//           </Link>

//           <motion.p
//             variants={OurBlogsVariants}
//             initial="textInitial"
//             whileInView="textWhileInView"
//             className="font-bold uppercase text-[12px] flex items-center gap-2 mt-2 transition-colors hover:text-[#604B33]"
//           >
//             Read More
//             {/* Arrow moves on hover */}
//             <FaArrowRight className="transition-transform group-hover:translate-x-1" />
//           </motion.p>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { OurBlogsVariants } from "@/motions/motions";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function NewsCard({
  image,
  title,
  date,
  slug,
}: {
  image: string;
  title: string;
  date: string;
  slug: string;
}) {
  const { i18n } = useTranslation();
  // পুরো নিউজ কার্ডের হোভার ট্র্যাক করার জন্য
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={OurBlogsVariants}
      initial="zoomInitial"
      whileInView="zoomWhileInView"
      viewport={{ once: true, margin: "-50px" }}
      // Motion Hover Events
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative w-full ${
        i18n.language === "bn" ? "font-bengali" : "font-english"
      }`}
    >
      {/* পুরো এরিয়াটিকে ক্লিকেবল করার জন্য Link ব্যবহার করা হয়েছে */}
      <Link to={`/news/${slug}`} className="block cursor-pointer">
        {/* =========================================
            IMAGE WRAPPER (h-64 সাইজ ফিক্সড)
            ========================================= */}
        <div className="relative overflow-hidden shadow-md rounded-xl">
          <motion.img
            // হোভার করলে খুব স্মুথলি জুম হবে
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            src={image}
            alt={title}
            className="object-cover w-full h-64"
          />

          {/* ইমেজের ওপর হালকা একটি ব্ল্যাক ওভারলে, যা হোভার করলে সরে যাবে */}
          <motion.div
            animate={{ opacity: isHovered ? 0 : 1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 pointer-events-none bg-black/10"
          />
        </div>

        {/* =========================================
            TEXT CONTENT (News Editorial Style)
            ========================================= */}
        <div className="pt-5 pb-2 pr-2">
          {/* Classic News Date Style with Gold Accent */}
          <div className="flex items-center gap-2 mb-3">
            <motion.span
              animate={{ width: isHovered ? "24px" : "12px" }}
              transition={{ duration: 0.4 }}
              className="h-[3px] rounded-full bg-[#dbb671]"
            />
            <p className="text-xs font-bold tracking-widest text-gray-500 uppercase">
              {date}
            </p>
          </div>

          {/* News Title - Line clamp applied to keep grid uniform */}
          <motion.h3
            animate={{ color: isHovered ? "#604B33" : "#111827" }}
            transition={{ duration: 0.3 }}
            className="mb-4 text-xl font-bold leading-snug tracking-tight bangla sm:text-2xl line-clamp-2"
          >
            {title.slice(0, 100)} {/* টাইটেল খুব লম্বা হলে কাটছাঁট করা হবে */}
          </motion.h3>

          {/* Read Full Story Action */}
          <div className="flex items-center gap-2 pt-1 mt-4 border-t border-gray-200/60">
            <p
              className={`text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-300 mt-3 ${
                isHovered ? "text-[#dbb671]" : "text-[#604B33]"
              }`}
            >
              Read Full Story
            </p>
            {/* Arrow smoothly slides right on hover */}
            <motion.div
              animate={{ x: isHovered ? 6 : 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="mt-3"
            >
              <FaArrowRight
                className={`text-sm ${isHovered ? "text-[#dbb671]" : "text-[#604B33]"}`}
              />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
