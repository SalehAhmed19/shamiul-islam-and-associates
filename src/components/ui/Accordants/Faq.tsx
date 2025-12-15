import { useState } from "react";
import { images } from "../../../assets/assets";
import { FaqData } from "../../../data/FaqData";
import { Fade } from "react-awesome-reveal";


export default function Faq() {
    // State to track which item is open (null means all closed)
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section
            style={{
                backgroundImage: `url(${images.faq})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
            className="text-white py-16 relative"
        >
            {/* Dark Overlay (optional, for readability) */}
            <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <Fade cascade={true} delay={200} direction="up">
                    <h2 className="text-3xl md:text-[40px] font-bold text-center mb-10">
                        Frequently Asked Questions
                    </h2>
                </Fade>

                <Fade cascade={true} delay={200} direction="up">
                    <div className="mx-auto flex flex-col gap-4">
                        {FaqData?.map((item, index) => (
                            <div
                                key={index}
                                className="border-b border-white/20 last:border-none cursor-pointer"
                            >
                                {/* Accordion Header */}
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full flex justify-between items-center py-4 text-left focus:outline-none group cursor-pointer"
                                >
                                    <span className="text-lg font-semibold text-white">
                                        {index + 1}. {item.question}
                                    </span>

                                    {/* Arrow Icon with Rotation Animation */}
                                    <svg
                                        className={`w-5 h-5 text-white transition-transform duration-300 ${openIndex === index ? "rotate-180" : "rotate-0"
                                            }`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {/* Accordion Content (The Grid Trick for smooth height animation) */}
                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${openIndex === index
                                        ? "grid-rows-[1fr] opacity-100 mb-4"
                                        : "grid-rows-[0fr] opacity-0"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="text-gray-200 text-base leading-relaxed">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Fade>
            </div>
        </section>
    );
}