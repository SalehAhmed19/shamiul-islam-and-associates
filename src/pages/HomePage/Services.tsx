import ServiceCard from "../../components/ui/Cards/ServiceCard";
import { servicesData } from "../../data/Services";
import Message from "./Message";

export default function Services() {
    return (
        <section className="relative bg-[#FAF9F4] pb-20">
            <Message />
            <div className="container mx-auto px-4 mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                {servicesData?.map((service, idx) => (
                    <ServiceCard key={idx} {...service} />
                ))}
            </div>
        </section>
    )
}