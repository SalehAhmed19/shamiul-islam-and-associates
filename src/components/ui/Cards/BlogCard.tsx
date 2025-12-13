import { Fade, Zoom } from "react-awesome-reveal";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function BlogCard({ image, title, date, _id }: { image: string, title: string, date: string, _id: string }) {
    return (
        <Zoom cascade={true} delay={200}><div className="group space-y-4 cursor-pointer">

            {/* Image Wrapper for scaling effect */}
            <div className="overflow-hidden">
                <img
                    src={image}
                    alt="blog"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            <Fade cascade={true} delay={200} direction="up"><div className="space-y-2">
                <p className="text-black/60 text-sm">{date}</p>

                <Link to={`/blogs/${_id}`}>
                    <h5 className="text-[20px] text-[#604B33] font-bold leading-tight group-hover:underline">
                        {title}
                    </h5>
                </Link>

                <p className="font-bold uppercase text-[12px] flex items-center gap-2 mt-2 transition-colors hover:text-[#604B33]">
                    Read More
                    {/* Arrow moves on hover */}
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </p>
            </div></Fade>
        </div></Zoom>
    )
}