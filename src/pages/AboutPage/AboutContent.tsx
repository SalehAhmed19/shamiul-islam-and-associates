import { aboutVariants } from "@/motions/motions";
import { motion } from "framer-motion";

export default function AboutContent() {
    return (
        <section className="container mx-auto py-16 px-5 md:px-0">
            <motion.p className="text-lg md:text-xl" variants={aboutVariants} initial="contentInitial" whileInView="contentWhileInView">Established in 2014 by <a href="https://www.facebook.com/adv.prince.islam/" target="_blank" className="font-bold text-[#604B33]">Advocate Md. Shamiul Islam</a>, This Law Chamber has swiftly emerged as one of the top law firms in Dhaka, Bangladesh. Over the years, our chamber has garnered a strong reputation as a premier full-service law firm for its exceptional legal counselling, documentation and representation in and out of the Courtroom. Our team of highly skilled and dedicated lawyers, including company lawyers, corporate lawyers, civil lawyers, and criminal defence lawyers, are renowned for their unwavering determination, hard work, and consistent delivery of the best legal aid to businesses and individuals within and beyond the borders of Bangladesh.</motion.p>
        </section>
    )
}