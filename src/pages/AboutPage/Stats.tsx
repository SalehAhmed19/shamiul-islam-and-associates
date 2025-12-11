import { videos } from "../../assets/assets";
import Heading from "../../components/ui/Headings/Heading";

export default function Stats() {
    return (
        <section className="container mx-auto px-4 py-10 md:py-16">
            {/* Video Container */}
            <div className="relative overflow-hidden">
                {/* Video: Added object-cover and height control */}
                <video
                    src={videos.legalVideo}
                    muted
                    autoPlay
                    loop
                    playsInline // Essential for iOS autoplay
                    className="w-full h-[500px] md:h-[600px] object-cover"
                ></video>

                {/* Dark Overlay */}
                <div className="bg-black/80 absolute top-0 left-0 w-full h-full"></div>

                {/* Text Content */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-full px-4">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                        We Provide Best Solutions
                    </h2>
                    <p className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        We provide clear, effective, and trustworthy legal services. We're here to understand your unique situation and guide you with expert advice and strong representation. Your legal clarity and peace of mind are our priority.
                    </p>
                </div>
            </div>

            {/* Stats Grid */}
            {/* Changed p-16 to p-6 for mobile, md:p-12 for desktop */}
            <div className="bg-white -mt-10 md:-mt-20 relative z-10 mx-4 md:mx-10 p-6 md:p-12 border border-gray-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                <div className="text-center">
                    <Heading className="font-extrabold text-4xl md:text-5xl text-primary">1200</Heading>
                    <p className="font-bold text-gray-600 mt-2">Satisfied Clients</p>
                </div>
                <div className="text-center">
                    <Heading className="font-extrabold text-4xl md:text-5xl text-primary">98%</Heading>
                    <p className="font-bold text-gray-600 mt-2">Success Rate</p>
                </div>
                <div className="text-center">
                    <Heading className="font-extrabold text-4xl md:text-5xl text-primary">15+</Heading>
                    <p className="font-bold text-gray-600 mt-2">Years of Experience</p>
                </div>
                <div className="text-center">
                    <Heading className="font-extrabold text-4xl md:text-5xl text-primary">1200</Heading>
                    <p className="font-bold text-gray-600 mt-2">Case Closed</p>
                </div>
            </div>
        </section>
    );
}