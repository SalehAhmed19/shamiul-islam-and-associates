// import Header from "../../components/ui/Header/Header";
// import { images } from "../../assets/assets";
// import { blogPosts } from "../../data/blogData";
// import BlogCard from "../../components/ui/Cards/BlogCard";

// export default function Blogs() {
//     return (
//         <section>
//             <div>
//                 <Header image={images.blogs} title="Blogs" />
//                 <div className="container py-16 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
//                     {blogPosts.map((blog, index) => (
//                         <BlogCard key={index} image={blog.image} title={blog.title} date={blog.date} />
//                     ))}
//                 </div>
//             </div>
//         </section>
//     )
// }

import Header from "../../components/ui/Header/Header";
import { images } from "../../assets/assets";
import { blogPosts } from "../../data/blogData";
import BlogCard from "../../components/ui/Cards/BlogCard";

export default function Blogs() {
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
                    {blogPosts.map((blog, index) => (
                        <BlogCard
                            key={index}
                            image={blog.image}
                            title={blog.title}
                            date={blog.date}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}