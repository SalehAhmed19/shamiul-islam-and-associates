// import Heading from "../../components/ui/Headings/Heading";
// import BlogCard from "../../components/ui/Cards/BlogCard";
// import { useGetBlogs } from "../../hooks/useGetBlogs";
// import BlogsLoading from "@/components/ui/Loadings/BlogsLoading";
// import { motion } from "framer-motion";
// import { OurBlogsVariants } from "@/motions/motions";

// export default function OurBlogs() {
//   const { blogs, loading } = useGetBlogs();
//   if (loading)
//     return (
//       <section className="px-4 py-12 space-y-10 md:py-16">
//         {/* Header Section */}
//         <div className="container mx-auto space-y-2">
//           <Heading className="text-center">Our Latest Blogs</Heading>
//           {/* constrained width for readability */}
//           <p className="max-w-2xl mx-auto text-center text-gray-600">
//             Stay informed with expert legal insights and the latest updates on
//             your rights, tailored to help you navigate your journey with
//             confidence.
//           </p>
//         </div>

//         {/* Grid Section */}
//         {/* Added container mx-auto here so the grid aligns with the header */}
//         <BlogsLoading />
//       </section>
//     );
//   console.log(blogs);
//   return (
//     // Changed fixed p-16 to responsive padding
//     <section className="px-4 py-12 space-y-10 md:py-16">
//       {/* Header Section */}
//       <div className="container mx-auto space-y-2">
//         <Heading className="text-center">Our Latest Blogs</Heading>
//         {/* constrained width for readability */}
//         <motion.p
//           variants={OurBlogsVariants}
//           initial="paragraphInitial"
//           whileInView="paragraphWhileInView"
//           className="max-w-2xl mx-auto text-center text-gray-600"
//         >
//           Stay ahead of the curve with our expert articles and news.
//         </motion.p>
//       </div>

//       {/* Grid Section */}
//       {/* Added container mx-auto here so the grid aligns with the header */}
//       <div className="container grid grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3 md:gap-10">
//         {blogs?.slice(0, 3).map((blog) => (
//           <BlogCard
//             key={blog._id}
//             slug={blog.slug || ""}
//             image={blog.image?.url || ""}
//             title={blog.title}
//             date={blog.date}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }
// import Heading from "../../components/ui/Headings/Heading";
// import BlogCard from "../../components/ui/Cards/BlogCard";
// import { useGetBlogs } from "../../hooks/useGetBlogs";
// import BlogsLoading from "@/components/ui/Loadings/BlogsLoading";
// import { motion } from "framer-motion";
// import { OurBlogsVariants } from "@/motions/motions";
// import { useTranslation } from "react-i18next"; // যুক্ত করা হয়েছে

// export default function OurBlogs() {
//   const { t, i18n } = useTranslation(); // যুক্ত করা হয়েছে
//   const { blogs, loading } = useGetBlogs();

//   if (loading)
//     return (
//       <section
//         className={`px-4 py-12 space-y-10 md:py-16 ${
//           i18n.language === "bn" ? "font-bengali" : "font-english"
//         }`}
//       >
//         {/* Header Section */}
//         <div className="container mx-auto space-y-2">
//           <Heading className="text-center">{t("blogs_heading")}</Heading>
//           <p className="max-w-2xl mx-auto text-center text-gray-600">
//             {t("blogs_loading_subtitle")}
//           </p>
//         </div>

//         {/* Grid Section */}
//         <BlogsLoading />
//       </section>
//     );

//   return (
//     <section
//       className={`px-4 py-12 space-y-10 md:py-16 ${
//         i18n.language === "bn" ? "font-bengali" : "font-english"
//       }`}
//     >
//       {/* Header Section */}
//       <div className="container mx-auto space-y-2">
//         <Heading className="text-center">{t("blogs_heading")}</Heading>
//         <motion.p
//           variants={OurBlogsVariants}
//           initial="paragraphInitial"
//           whileInView="paragraphWhileInView"
//           className="max-w-2xl mx-auto text-center text-gray-600"
//         >
//           {t("blogs_subtitle")}
//         </motion.p>
//       </div>

//       {/* Grid Section */}
//       <div className="container grid grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3 md:gap-10">
//         {blogs?.slice(0, 3).map((blog) => (
//           <BlogCard
//             key={blog._id}
//             slug={blog.slug || ""}
//             image={blog.image?.url || ""}
//             title={blog.title}
//             date={blog.date}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

import Heading from "../../components/ui/Headings/Heading";
import BlogCard from "../../components/ui/Cards/BlogCard";
import { useGetBlogs } from "../../hooks/useGetBlogs";
import BlogsLoading from "@/components/ui/Loadings/BlogsLoading";
import { motion } from "framer-motion";
import { OurBlogsVariants } from "@/motions/motions";
import { useTranslation } from "react-i18next";

export default function OurBlogs() {
  const { t, i18n } = useTranslation();
  const { blogs, loading } = useGetBlogs();

  // ==========================================
  // LOADING STATE (Matched with the main layout)
  // ==========================================
  if (loading)
    return (
      <section
        className={`py-16 sm:py-24 bg-[#fcfbf9] border-t border-gray-100 ${
          i18n.language === "bn" ? "font-bengali" : "font-english"
        }`}
      >
        <div className="container px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col items-center mb-12 space-y-4 text-center sm:mb-16">
            <div className="h-1 w-16 rounded-full bg-[#dbb671]/40 animate-pulse" />
            <Heading>{t("blogs_heading")}</Heading>
            <p className="max-w-2xl text-base text-gray-400 animate-pulse sm:text-lg">
              {t("blogs_loading_subtitle")}
            </p>
          </div>
          {/* Grid Loading Component */}
          <BlogsLoading />
        </div>
      </section>
    );

  // ==========================================
  // LOADED STATE (Modern & Classic Premium Look)
  // ==========================================
  return (
    <section
      className={`py-16 sm:py-20 lg:py-28 bg-[#fcfbf9] border-t border-gray-100 overflow-hidden ${
        i18n.language === "bn" ? "font-bengali" : "font-english"
      }`}
    >
      <div className="container px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        {/* --- Header Section --- */}
        <div className="flex flex-col items-center text-center">
          {/* Classic Gold Accent Line */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "60px", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 mb-5 rounded-full bg-[#dbb671]"
          />

          <Heading>
            <span className="text-gray-900 drop-shadow-sm">
              {t("blogs_heading")}
            </span>
          </Heading>

          <motion.p
            variants={OurBlogsVariants}
            initial="paragraphInitial"
            whileInView="paragraphWhileInView"
            viewport={{ once: true }}
            className="max-w-2xl mt-4 text-base leading-relaxed text-gray-600 sm:text-lg lg:text-xl"
          >
            {t("blogs_subtitle")}
          </motion.p>
        </div>

        {/* --- Grid Section --- */}
        {/* Added top margin to separate grid from the header nicely */}
        <div className="grid grid-cols-1 gap-8 mt-12 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 xl:gap-12">
          {blogs?.slice(0, 3).map((blog, index) => (
            <motion.div
              key={blog._id}
              // Staggered fade-up animation for each card based on its index
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="h-full"
            >
              <BlogCard
                slug={blog.slug || ""}
                image={blog.image?.url || ""}
                title={blog.title}
                date={blog.date}
              />
            </motion.div>
          ))}
        </div>

        {/* Optional: No Blogs Fallback */}
        {blogs?.length === 0 && (
          <div className="flex justify-center py-10 mt-10 border border-dashed rounded-xl border-gray-300/50">
            <p className="italic text-gray-500">
              No articles published yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
