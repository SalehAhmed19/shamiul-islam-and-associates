import { Fade } from "react-awesome-reveal";
import { images } from "../../assets/assets";
import Button from "../../components/ui/Buttons/Button";
import Heading from "../../components/ui/Headings/Heading";

export default function LegalExcellence() {
    return (
        // Added px-4 md:px-8 so content doesn't touch screen edges on mobile
        <section className="bg-[#FAF9F4] py-12 md:py-16 px-4 md:px-8">

            {/* Added 'items-center' to vertically center the image and text relative to each other */}
            <Fade cascade={true} delay={200} direction="up"><div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

                {/* Image Wrapper: Ensures image scales correctly within the grid */}

                <div className="w-full h-full overflow-hidden cursor-pointer">
                    <img
                        src={images.legal1}
                        alt="legal"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                </div>


                {/* Text Content */}
                {/* 1. text-center md:text-left: Centers text on mobile, aligns left on desktop (next to image).
                    2. justify-center md:justify-start: Aligns the button correctly based on screen size.
                */}
                <div className="space-y-6 flex flex-col justify-center text-center">
                    <Heading>
                        Legal Excellence, <br />Personalized Care
                    </Heading>

                    <p className="text-sm md:text-base leading-relaxed">
                        At our firm, we combine world-class legal expertise with a deep commitment to understanding your individual story. We believe that achieving legal excellence is only half the battle; the other half is providing the compassionate, one-on-one attention you deserve. Trust our dedicated team to protect your interests with sophisticated strategies while treating your case with the personal care it requires.
                    </p>

                    <div className="flex justify-center">
                        <Fade cascade={true} delay={200} direction="up"><Button>Learn More</Button></Fade>
                    </div>
                </div>
            </div></Fade>
        </section>
    )
}