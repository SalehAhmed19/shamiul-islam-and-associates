import Heading from "../../components/ui/Headings/Heading";
import { Fade } from "react-awesome-reveal";
import BlogCard from "../../components/ui/Cards/BlogCard";
import { useGetBlogs } from "../../hooks/useGetBlogs";
import BlogsLoading from "@/components/ui/Loadings/BlogsLoading";

export default function OurBlogs() {
    const { blogs, loading } = useGetBlogs()
    if (loading) return <section className="py-12 px-4 md:py-16 space-y-10">

        {/* Header Section */}
        <div className="container mx-auto space-y-2">
            <Fade cascade={true} delay={200} direction="up">
                <Heading className="text-center">Our Blogs</Heading>
                {/* constrained width for readability */}
                <p className="text-center max-w-2xl mx-auto text-gray-600">
                    Adipiscing nam neque hendrerit nec pellentesque diamarius quisque odio
                </p>
            </Fade>
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
                <Fade cascade={true} delay={200} direction="up">
                    <Heading className="text-center">Our Blogs</Heading>
                    {/* constrained width for readability */}
                    <p className="text-center max-w-2xl mx-auto text-gray-600">
                        Adipiscing nam neque hendrerit nec pellentesque diamarius quisque odio
                    </p>
                </Fade>
            </div>

            {/* Grid Section */}
            {/* Added container mx-auto here so the grid aligns with the header */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {blogs?.slice(0, 3).map((blog, index) => (
                    <BlogCard key={index} _id={blog._id ? blog._id : ""} image={blog.image as string} title={blog.title} date={blog.date} />
                ))}
            </div>
        </section>
    )
}