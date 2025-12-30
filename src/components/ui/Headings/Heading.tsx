import { headingVariants } from "@/motions/motions";
import { motion } from "framer-motion";
export default function Heading({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        // text-3xl on mobile -> text-[40px] on desktop
        <motion.h2 viewport={{ once: false, amount: 0.3 }} variants={headingVariants} whileInView="whileInView" initial="initial" animate="animate" className={`text-3xl md:text-[40px] font-bold text-[#604B33] ${className}`}>
            {children}
        </motion.h2>
    )
}