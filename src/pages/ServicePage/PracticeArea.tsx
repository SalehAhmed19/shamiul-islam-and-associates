import { serviceVariant } from "@/motions/motions";
import ServiceCard from "../../components/ui/Cards/ServiceCard";
import Heading from "../../components/ui/Headings/Heading";
import { servicesData } from "../../data/Services";
import { motion } from "framer-motion";

export default function PracticeArea() {
    return (
        <section className="py-16">
            <Heading className="text-center">Practice Area</Heading>
            <motion.p variants={serviceVariant} initial="paragraphInitial" whileInView="paragraphWhileInView" className="text-center">Providing specialized legal representation across a comprehensive range of disciplines to protect your rights and interests.</motion.p>
            <div className="container mx-auto px-4 mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                {servicesData?.map((service, idx) => (
                    <ServiceCard key={idx} {...service} />
                ))}
            </div>
        </section>
    )
}