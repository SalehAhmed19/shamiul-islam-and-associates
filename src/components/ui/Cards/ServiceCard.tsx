import { Zoom } from "react-awesome-reveal";
import type { ServiceInterface } from "../../../Interfaces/ServiceInterface";

export default function ServiceCard({ icon, title, description }: ServiceInterface) {
    return (
        <Zoom cascade={true} delay={200}><div
            className="group cursor-pointer p-6 md:p-8 hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-[#604B33]/10 flex flex-col items-center text-center"
        >
            {/* --- Icon Wrapper --- */}
            <div className="mb-6 p-4 rounded-full cursor-pointer group-hover:bg-[#604B33]/10 transition-colors duration-300">
                <img
                    src={icon}
                    alt={title + " icon"}
                    className="w-10 h-10 md:w-12 md:h-12 object-contain"
                />
            </div>

            {/* --- Title --- */}
            <h3 className="text-lg md:text-xl text-[#604B33] font-bold mb-3">
                {title}
            </h3>

            {/* --- Description --- */}
            <p className="text-sm md:text-base leading-relaxed">
                {description.slice(0, 120)}...
            </p>

            {/* Optional: Read More text appearing on hover could go here */}
        </div></Zoom>
    )
}