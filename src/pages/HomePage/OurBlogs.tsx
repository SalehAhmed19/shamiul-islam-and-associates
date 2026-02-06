import Heading from "../../components/ui/Headings/Heading";
import BlogCard from "../../components/ui/Cards/BlogCard";
import { useGetBlogs } from "../../hooks/useGetBlogs";
import BlogsLoading from "@/components/ui/Loadings/BlogsLoading";
import { motion } from "framer-motion"
import { OurBlogsVariants } from "@/motions/motions";

export default function OurBlogs() {
    const { blogs, loading } = useGetBlogs()
    if (loading) return <section className="py-12 px-4 md:py-16 space-y-10">

        {/* Header Section */}
        <div className="container mx-auto space-y-2">

            <Heading className="text-center">Our Latest Blogs</Heading>
            {/* constrained width for readability */}
            <p className="text-center max-w-2xl mx-auto text-gray-600">
                Stay informed with expert legal insights and the latest updates on your rights, tailored to help you navigate your journey with confidence.
            </p>

        </div>

        {/* Grid Section */}
        {/* Added container mx-auto here so the grid aligns with the header */}
        <BlogsLoading />
    </section>
    console.log(blogs)
    return (
        // Changed fixed p-16 to responsive padding
        <section className="py-12 px-4 md:py-16 space-y-10">

            {/* Header Section */}
            <div className="container mx-auto space-y-2">

                <Heading className="text-center">Our Latest Blogs</Heading>
                {/* constrained width for readability */}
                <motion.p
                    variants={OurBlogsVariants}
                    initial="paragraphInitial"
                    whileInView="paragraphWhileInView"
                    className="text-center max-w-2xl mx-auto text-gray-600">
                    Stay ahead of the curve with our expert articles and news.
                </motion.p>

            </div>

            {/* Grid Section */}
            {/* Added container mx-auto here so the grid aligns with the header */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {blogs
                    ?.slice()
                    .reverse()
                    .slice(0, 3)
                    .map((blog) => (
                        <BlogCard
                            key={blog._id}
                            slug={blog.slug || ""}
                            image={blog.image?.url || ""}
                            title={blog.title}
                            date={blog.date}
                        />
                    ))}
            </div>
        </section >
    )
}