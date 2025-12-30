
import { images } from "../../assets/assets";
import Button from "../../components/ui/Buttons/Button";
import { Link } from 'react-scroll';
import { motion } from "framer-motion";
import { askVariants } from "@/motions/motions";

export default function Ask() {
    return (
        <motion.section variants={askVariants} initial={"initial"} whileInView={"whileInView"}
            style={{
                backgroundImage: `url(${images.ask})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
            // Added 'px-4' (side padding for mobile) and responsive vertical padding 'md:py-24'
            className="space-y-6 md:space-y-10 text-center py-16 md:py-24 px-4"
        >
            {/* Changed fixed 'text-4xl' to responsive 'text-2xl md:text-4xl lg:text-5xl' */}
            <motion.h2 variants={askVariants} initial={"headingInitial"} whileInView={"headingWhileInView"} className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Have Legal Questions? Ask Our Experts!
            </motion.h2>

            <Link to="contact"><Button className="mx-auto">Ask an expert</Button></Link>
        </motion.section >
    )
}