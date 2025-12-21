import { Fade } from "react-awesome-reveal";
import Heading from "../../components/ui/Headings/Heading";

export default function ServiceContent() {
    return (
        <div className="container mx-auto px-4 py-10 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
                {/* Heading Section */}
                <Fade cascade={true} delay={200} direction="left"><div>
                    <Heading>
                        Tailored Legal Solutions,
                        {/* Hide the line break on mobile for better flow, show on desktop */}
                        <br className="hidden md:block" />
                        Exceptional Results
                    </Heading>
                </div>
                </Fade>

                {/* Paragraph Section */}
                <Fade cascade={true} delay={200} direction="right"><div className="text-gray-700 leading-relaxed text-sm md:text-base">
                    <p>
                        We believe that every client deserves a strategy as unique as their case, which is why we meticulously craft our legal approach to align with your specific goals. By combining in-depth industry knowledge with unwavering dedication, we navigate the complexities of the law to protect your interests at every turn.
                    </p>
                    {/* Added a margin to the break to create actual visual separation */}
                    <br className="block content-[''] mt-4" />
                    <p>
                        Experience the peace of mind that comes from having a partner driven to deliver the exceptional results you deserve.
                    </p>
                </div>
                </Fade>
            </div>
        </div>
    )
}