// import { FaArrowRight } from "react-icons/fa6";
// import Heading from "../../components/ui/Headings/Heading";
// import { blogPosts } from "../../data/blogData";

// export default function OurBlogs() {
//     return (
//         <section className="p-16 space-y-10">
//             <div className="container mx-auto">
//                 <Heading className="text-center">Our Blogs</Heading>
//                 <p className="text-center">Adipiscing nam neque hendrerit nec pellentesque diamarius quisque odio </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//                 {blogPosts.slice(0, 3).map((blog, index) => <div key={index} className="space-y-2">
//                     <img src={blog.image} alt="blog" />
//                     <div className="space-y-2">
//                         <p className="text-black/80">{blog.date}</p>
//                         <h5 className="text-[20px] text-[#604B33] font-bold">{blog.title}</h5>
//                         <p className="font-bold uppercase cursor-pointer text-[12px] flex items-center gap-2">Read More <FaArrowRight /></p>
//                     </div>
//                 </div>)}
//             </div>
//         </section>
//     )
// }

import { FaArrowRight } from "react-icons/fa6";
import Heading from "../../components/ui/Headings/Heading";
import { blogPosts } from "../../data/blogData";

export default function OurBlogs() {
    return (
        // Changed fixed p-16 to responsive padding
        <section className="py-12 px-4 md:py-16 space-y-10">

            {/* Header Section */}
            <div className="container mx-auto space-y-2">
                <Heading className="text-center">Our Blogs</Heading>
                {/* constrained width for readability */}
                <p className="text-center max-w-2xl mx-auto text-gray-600">
                    Adipiscing nam neque hendrerit nec pellentesque diamarius quisque odio
                </p>
            </div>

            {/* Grid Section */}
            {/* Added container mx-auto here so the grid aligns with the header */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {blogPosts.slice(0, 3).map((blog, index) => (
                    <div key={index} className="group space-y-4 cursor-pointer">

                        {/* Image Wrapper for scaling effect */}
                        <div className="overflow-hidden">
                            <img
                                src={blog.image}
                                alt="blog"
                                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        <div className="space-y-2">
                            <p className="text-black/60 text-sm">{blog.date}</p>

                            <h5 className="text-[20px] text-[#604B33] font-bold leading-tight group-hover:underline">
                                {blog.title}
                            </h5>

                            <p className="font-bold uppercase text-[12px] flex items-center gap-2 mt-2 transition-colors hover:text-[#604B33]">
                                Read More
                                {/* Arrow moves on hover */}
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}