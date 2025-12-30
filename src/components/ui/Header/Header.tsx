import { headerVariants } from "@/motions/motions";
import { motion } from "framer-motion";

export default function Header({ title, image }: { title: string, image: string }) {
    return (
        <motion.div variants={headerVariants} initial="initial" whileInView="whileInView" style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} className="h-[420px]">
            <div className="flex items-center justify-center h-full">
                <h1 className="text-[40px] font-bold text-white uppercase">{title}</h1>
            </div>
        </motion.div>
    )
}