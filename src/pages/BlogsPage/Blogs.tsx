

import Header from "../../components/ui/Header/Header";
import { images } from "../../assets/assets";
import BlogCard from "../../components/ui/Cards/BlogCard";
import { useGetBlogs } from "../../hooks/useGetBlogs";

export default function Blogs() {
    const { blogs } = useGetBlogs()
    console.log(blogs)

    return (
        <section>
            <Header image={images.blogs} title="Blogs" />

            {/* Changes made:
                1. Added 'px-4': Prevents cards from touching screen edges on mobile.
                2. Changed 'py-16' to 'py-10 md:py-16': Reduces vertical space on mobile.
            */}
            <div className="container mx-auto px-4 py-10 md:py-16">

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                    {blogs.map((blog, index) => (
                        <BlogCard
                            key={index}
                            image={blog.image}
                            title={blog.title}
                            date={blog.date}
                            _id={blog._id ? blog._id : ""}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}