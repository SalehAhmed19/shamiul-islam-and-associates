import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { OurBlogsVariants } from "@/motions/motions";
import { motion } from "framer-motion";

export default function BlogCard({ image, title, date, slug }: { image: string, title: string, date: string, slug: string }) {
    return (
        <motion.div
            variants={OurBlogsVariants}
            initial="zoomInitial"
            whileInView="zoomWhileInView"
        ><div className="group space-y-4 cursor-pointer">

                {/* Image Wrapper for scaling effect */}
                <div className="overflow-hidden">
                    <motion.img
                        variants={OurBlogsVariants}
                        whileHover="imageHover"
                        src={image}
                        alt="blog"
                        className="w-full h-64 object-cover"
                    />
                </div>

                <div className="space-y-2">
                    <motion.p
                        variants={OurBlogsVariants}
                        initial="textInitial"
                        whileInView="textWhileInView"
                        className="text-black/60 text-sm">{date}</motion.p>

                    <Link to={`/blogs/${slug}`}>
                        <motion.h5
                            variants={OurBlogsVariants}
                            initial="titleInitial"
                            whileInView="titleWhileInView"
                            className="text-[20px] text-[#604B33] font-bold leading-tight group-hover:underline">
                            {title}
                        </motion.h5>
                    </Link>

                    <motion.p
                        variants={OurBlogsVariants}
                        initial="textInitial"
                        whileInView="textWhileInView"
                        className="font-bold uppercase text-[12px] flex items-center gap-2 mt-2 transition-colors hover:text-[#604B33]">
                        Read More
                        {/* Arrow moves on hover */}
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </motion.p>
                </div>
            </div></motion.div >
    )
}