import { images } from "../../assets/assets";
import Heading from "../../components/ui/Headings/Heading";

export default function Message() {
    return (
        // Wrapper:
        // 1. relative z-20: Ensures it sits ON TOP of the banner.
        // 2. px-4: Side padding for mobile screens so card doesn't touch edges.
        <section className="relative z-20 px-4 md:px-8 flex justify-center">

            {/* Card Container:
                1. -mt-XX: Pulls the card up over the banner.
                   - Mobile: -mt-16 (small overlap)
                   - Desktop: -mt-24 or -mt-32 (larger overlap)
                2. w-full max-w-7xl: Ensures it doesn't get too wide on huge screens.
                3. shadow-xl: Adds depth.
            */}
            <div className="bg-white w-full container -mt-16 md:-mt-24 lg:-mt-32 p-6 md:p-12 lg:p-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

                {/* --- Text Content --- */}
                {/* order-2: On mobile, text comes AFTER image. 
                    md:order-1: On desktop, text is on the LEFT. */}
                <div className="space-y-4 md:space-y-6 order-2 md:order-1 text-center md:text-left">
                    <Heading>
                        Dedicated Expertise for <br className="hidden lg:block" /> Your Legal Needs
                    </Heading>

                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        We provide clear, effective, and trustworthy legal services. We're here to
                        understand your unique situation and guide you with expert advice and strong
                        representation. Your legal clarity and peace of mind are our priority.
                    </p>
                </div>

                {/* --- Image Content --- */}
                {/* order-1: On mobile, image is FIRST. 
                    md:order-2: On desktop, image is RIGHT. */}
                <div className="order-1 md:order-2 h-48 sm:h-64 md:h-full w-full overflow-hidden cursor-pointer">
                    <img
                        src={images.prince1}
                        alt="prince-01"
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                </div>

            </div>
        </section>
    );
}