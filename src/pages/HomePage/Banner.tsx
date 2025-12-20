import { Fade, Zoom } from "react-awesome-reveal";
import { images } from "../../assets/assets";
import Button from "../../components/ui/Buttons/Button";
import { Link } from "react-scroll";

export default function Banner() {
    return (
        <section
            style={{ backgroundImage: `url(${images.hero})` }}
            className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
        >
            {/* --- Overlay (Optional but recommended for text readability) --- */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* --- Content Container --- */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12 flex flex-col items-center text-center">

                <div className="space-y-6 md:space-y-8 max-w-4xl">

                    {/* Responsive Heading */}
                    <Fade cascade={true} delay={200}><h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight shadow-sm">
                        Solving Complex Legal
                        {/* Break line only on medium screens and up */}
                        <br className="hidden md:block" />
                        {" "}Challenges.
                    </h1></Fade>

                    {/* Responsive Paragraph */}
                    <Zoom cascade={true} delay={250}><p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold max-w-2xl mx-auto text-gray-100">
                        Expert representation focused on achieving clear, favorable, and <br className="hidden md:block" /> decisive results for you.
                    </p>
                    </Zoom>
                </div>

                {/* Button Container with margin top */}
                <div className="mt-8 md:mt-12">
                    <Fade cascade={true} direction="up" delay={200}>
                        <Link to="contact"><Button className="mx-auto block">Make enquiry</Button></Link>
                    </Fade>
                </div>
            </div>
        </section>
    )
}