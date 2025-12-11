import ServiceCard from "../../components/ui/Cards/ServiceCard";
import { servicesData } from "../../data/Services";
import Message from "./Message";

export default function Services() {
    return (
        // bg-[#FAF9F4]: The background color for this section.
        // pb-20: Adds space at the bottom so the content doesn't end abruptly.
        <div className="relative bg-[#FAF9F4] pb-20">

            {/* The Message component pulls itself UP (-mt) 
                to overlap the component before this one */}
            <Message />

            {/* Content for the Services section starts here */}
            {/* <div className="container mx-auto px-4 mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {servicesData.map((service, idx) => <div key={idx} className="space-y-4 px-5 py-10">
                    <img src={service.icon} alt={service.title + " icon"} className="mx-auto" />
                    <h3 className="text-[20px] text-[#604B33] font-bold text-center">{service.title}</h3>
                    <p>{service.description.slice(0, 120)}...</p>
                </div>)}
            </div> */}

            <div className="container mx-auto px-4 mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                {servicesData.map((service, idx) => (
                    <ServiceCard key={idx} {...service} />
                ))}
            </div>
        </div>
    )
}