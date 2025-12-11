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
                    <div
                        key={idx}
                        className="group cursor-pointer p-6 md:p-8 hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-[#604B33]/10 flex flex-col items-center text-center"
                    >
                        {/* --- Icon Wrapper --- */}
                        <div className="mb-6 p-4 rounded-full cursor-pointer group-hover:bg-[#604B33]/10 transition-colors duration-300">
                            <img
                                src={service.icon}
                                alt={service.title + " icon"}
                                className="w-10 h-10 md:w-12 md:h-12 object-contain"
                            />
                        </div>

                        {/* --- Title --- */}
                        <h3 className="text-lg md:text-xl text-[#604B33] font-bold mb-3">
                            {service.title}
                        </h3>

                        {/* --- Description --- */}
                        <p className="text-sm md:text-base leading-relaxed">
                            {service.description.slice(0, 120)}...
                        </p>

                        {/* Optional: Read More text appearing on hover could go here */}
                    </div>
                ))}
            </div>
        </div>
    )
}