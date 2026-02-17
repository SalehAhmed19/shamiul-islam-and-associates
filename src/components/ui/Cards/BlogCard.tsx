import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { OurBlogsVariants } from "@/motions/motions";
import { motion } from "framer-motion";

export default function BlogCard({
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
  return (
    <motion.div
      variants={OurBlogsVariants}
      initial="zoomInitial"
      whileInView="zoomWhileInView"
    >
      <div className="space-y-4 cursor-pointer group">
        {/* Image Wrapper for scaling effect */}
        <div className="overflow-hidden rounded-lg">
          <motion.img
            variants={OurBlogsVariants}
            whileHover="imageHover"
            src={image}
            alt="blog"
            className="object-cover w-full h-64"
          />
        </div>

        <div className="space-y-2">
          <motion.p
            variants={OurBlogsVariants}
            initial="textInitial"
            whileInView="textWhileInView"
            className="text-sm text-black/60"
          >
            {date}
          </motion.p>

          <Link to={`/blogs/${slug}`}>
            <motion.h5
              variants={OurBlogsVariants}
              initial="titleInitial"
              whileInView="titleWhileInView"
              className="text-[20px] text-[#604B33] font-bold leading-tight group-hover:underline bangla"
            >
              {title}
            </motion.h5>
          </Link>

          <motion.p
            variants={OurBlogsVariants}
            initial="textInitial"
            whileInView="textWhileInView"
            className="font-bold uppercase text-[12px] flex items-center gap-2 mt-2 transition-colors hover:text-[#604B33]"
          >
            Read More
            {/* Arrow moves on hover */}
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
