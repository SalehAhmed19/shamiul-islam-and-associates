
import { Zoom } from "react-awesome-reveal";
import { StepsData } from "../../data/StepsData";

export default function Steps() {
    return (
        <section>
            {/* Added px-4 to prevent content touching edges on mobile */}
            {/* Adjusted py-16 to py-10 md:py-16 for better mobile vertical spacing */}
            <div className="container mx-auto py-10 md:py-16 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {StepsData.map((step, index) => (
                        // Adjusted padding: p-6 on mobile, p-10 on desktop
                        <Zoom cascade={true} delay={200}><div key={index} className="flex items-center gap-4 bg-white p-6 md:p-10 h-full">

                            {/* Added flex-1: Ensures text takes up available space but allows wrapping */}
                            <div className="flex-1">
                                {/* Responsive text size: text-2xl on mobile, text-[28px] on desktop */}
                                <h2 className="text-2xl md:text-[28px] font-bold text-[#604B33] mb-2">
                                    {step.title}
                                </h2>
                                <p className="text-sm md:text-base">
                                    {step.description}
                                </p>
                            </div>

                            {/* Added shrink-0: Prevents the icon box from getting squashed on small screens */}
                            <div className="flex items-center justify-center bg-[#604B33] p-4 md:p-5 shrink-0 rounded-sm">
                                <img
                                    src={step.icon}
                                    alt={step.title}
                                    className="w-8 h-8 md:w-auto md:h-auto object-contain"
                                />
                            </div>
                        </div></Zoom>
                    ))}
                </div>
            </div>
        </section>
    )
}