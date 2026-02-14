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
import Heading from "../../components/ui/Headings/Heading";
import BlogCard from "../../components/ui/Cards/BlogCard";
import { useGetBlogs } from "../../hooks/useGetBlogs";
import BlogsLoading from "@/components/ui/Loadings/BlogsLoading";
import { motion } from "framer-motion";
import { OurBlogsVariants } from "@/motions/motions";
import { useTranslation } from "react-i18next"; // যুক্ত করা হয়েছে

export default function OurBlogs() {
  const { t, i18n } = useTranslation(); // যুক্ত করা হয়েছে
  const { blogs, loading } = useGetBlogs();

  if (loading)
    return (
      <section
        className={`px-4 py-12 space-y-10 md:py-16 ${
          i18n.language === "bn" ? "font-bengali" : "font-english"
        }`}
      >
        {/* Header Section */}
        <div className="container mx-auto space-y-2">
          <Heading className="text-center">{t("blogs_heading")}</Heading>
          <p className="max-w-2xl mx-auto text-center text-gray-600">
            {t("blogs_loading_subtitle")}
          </p>
        </div>

        {/* Grid Section */}
        <BlogsLoading />
      </section>
    );

  return (
    <section
      className={`px-4 py-12 space-y-10 md:py-16 ${
        i18n.language === "bn" ? "font-bengali" : "font-english"
      }`}
    >
      {/* Header Section */}
      <div className="container mx-auto space-y-2">
        <Heading className="text-center">{t("blogs_heading")}</Heading>
        <motion.p
          variants={OurBlogsVariants}
          initial="paragraphInitial"
          whileInView="paragraphWhileInView"
          className="max-w-2xl mx-auto text-center text-gray-600"
        >
          {t("blogs_subtitle")}
        </motion.p>
      </div>

      {/* Grid Section */}
      <div className="container grid grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3 md:gap-10">
        {blogs?.slice(0, 3).map((blog) => (
          <BlogCard
            key={blog._id}
            slug={blog.slug || ""}
            image={blog.image?.url || ""}
            title={blog.title}
            date={blog.date}
          />
        ))}
      </div>
    </section>
  );
}
