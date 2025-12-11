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
                        Tellus aliquet volutpat diam nulla consectetur. Sit at consectetur nam velit sollicitudin id aliquam fusce. In urna vestibulum ac eleifend quis turpis quisque arcu arcu. Ultrices varius sed quam lectus interdum. Viverra enim massa commodo in sed ipsum.
                    </p>
                    {/* Added a margin to the break to create actual visual separation */}
                    <br className="block content-[''] mt-4" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Nunc porttitor porttitor velit dictumst id morbi in aliquet velit.
                    </p>
                </div>
                </Fade>
            </div>
        </div>
    )
}