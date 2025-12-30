import { serviceCardVariants } from "@/motions/motions";
import type { ServiceInterface } from "../../../Interfaces/ServiceInterface";
import { motion } from "framer-motion";

export default function ServiceCard({ icon, title, description }: ServiceInterface) {
    return (
        <motion.div variants={serviceCardVariants} initial={"initial"} whileInView={"whileInView"} whileHover={"whileHover"}
            className="group cursor-pointer p-6 md:p-8 border border-transparent hover:border-[#604B33]/10 flex flex-col items-center text-center"
        >
            {/* --- Icon Wrapper --- */}
            <motion.div variants={serviceCardVariants} initial={"zoomInital"} whileInView={"zoomWhileInview"} className="mb-6 p-4 rounded-full cursor-pointer group-hover:bg-[#604B33]/10 transition-colors duration-300" >
                <img
                    src={icon}
                    alt={title + " icon"}
                    className="w-10 h-10 md:w-12 md:h-12 object-contain"
                />
            </motion.div>

            {/* --- Title --- */}
            <motion.h3 variants={serviceCardVariants} initial={"zoomInital"} whileInView={"zoomWhileInview"} className="text-lg md:text-xl text-[#604B33] font-bold mb-3" >
                {title}
            </motion.h3>

            {/* --- Description --- */}
            <motion.p variants={serviceCardVariants} initial={"paragraphInitial"} whileInView={"paragraphWhileInView"} className="text-sm md:text-base leading-relaxed" >
                {description.slice(0, 120)}...
            </motion.p>

            {/* Optional: Read More text appearing on hover could go here */}
        </motion.div >
    )
}