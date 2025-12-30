import { buttonVariants } from "@/motions/motions";
import { motion } from "framer-motion";

export default function Button({ children, className, type, onClick }: { children: React.ReactNode, className?: string, type?: "button" | "submit" | "reset", onClick?: () => void }) {
    return (
        <motion.button variants={buttonVariants} whileHover="hover" initial="initial" whileInView="whileInView" onClick={onClick} type={type} className={`bg-[#604B33] text-white px-8 py-3 font-bold cursor-pointer ${className}`}>{children}</motion.button>
    )
}