import { ourAssociatesVariants } from "@/motions/motions"
import { motion } from "framer-motion"
// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";

export default function AssociatesCard({ image, name, position, court }: { image: string, name: string, position: string, court: string }) {
    return (
        <motion.div variants={ourAssociatesVariants} initial="associatesInitial" whileInView="associatesWhileInView" className="space-y-5">
            <img src={image} alt={name} className="w-full object-cover" />
            <div className="text-center font-bold">
                <motion.h3 variants={ourAssociatesVariants} initial="nameInitial" whileInView="nameWhileInView" className="text-[24px]">{name}</motion.h3>
                <motion.p variants={ourAssociatesVariants} initial="positionInitial" whileInView="positionWhileInView" className="text-[#94744E]">{position}</motion.p>
                <motion.p variants={ourAssociatesVariants} initial="courtInitial" whileInView="courtWhileInView">{court}</motion.p>
            </div>
        </motion.div>
    )
}