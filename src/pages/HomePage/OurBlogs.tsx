import Heading from "../../components/ui/Headings/Heading";
import { blogPosts } from "../../data/blogData";
import { Fade } from "react-awesome-reveal";
import BlogCard from "../../components/ui/Cards/BlogCard";

export default function OurBlogs() {
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
                {blogPosts.slice(0, 3).map((blog, index) => (
                    <BlogCard key={index} image={blog.image} title={blog.title} date={blog.date} />
                ))}
            </div>
        </section>
    )
}