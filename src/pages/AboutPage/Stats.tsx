import { AnimatedNumber } from "@/components/ui/AnimatedNumber/AnimatedNumber";
import { videos } from "../../assets/assets";
import { motion } from "framer-motion";
import { statsVariants } from "@/motions/motions";

export default function Stats() {
    return (
        <section className="container mx-auto px-4 py-10 md:py-16">
            {/* Video Container */}
            <motion.div className="relative overflow-hidden" variants={statsVariants} initial="initial" whileInView="whileInView">
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
                    <motion.h2 variants={statsVariants} initial="headingInitial" whileInView="headingWhileInView" className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                        We Provide Best Solutions
                    </motion.h2>
                    <motion.p variants={statsVariants} initial="paragraphInitial" whileInView="paragraphWhileInView" className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        We provide clear, effective, and trustworthy legal services. We're here to understand your unique situation and guide you with expert advice and strong representation. Your legal clarity and peace of mind are our priority.
                    </motion.p>
                </div>
            </motion.div>

            {/* Stats Grid */}
            {/* Changed p-16 to p-6 for mobile, md:p-12 for desktop */}
            <div className="bg-white -mt-10 md:-mt-20 relative z-10 mx-4 md:mx-10 p-6 md:p-12 border border-gray-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                <div className="text-center">
                    <div className="text-3xl md:text-[40px] font-bold flex justify-center items-center gap-2"><AnimatedNumber value={1200} />+</div>
                    <motion.p variants={statsVariants} initial="labelInitial" whileInView="labelWhileInView" className="font-bold text-gray-600 mt-2">Satisfied Clients</motion.p>
                </div>
                <div className="text-center">
                    <div className="text-3xl md:text-[40px] font-bold flex justify-center items-center gap-2"><AnimatedNumber value={98} />+</div>
                    <motion.p variants={statsVariants} initial="labelInitial" whileInView="labelWhileInView" className="font-bold text-gray-600 mt-2">Success Rate</motion.p>
                </div>
                <div className="text-center">
                    <div className="text-3xl md:text-[40px] font-bold flex justify-center items-center gap-2"><AnimatedNumber value={15} />+</div>
                    <motion.p variants={statsVariants} initial="labelInitial" whileInView="labelWhileInView" className="font-bold text-gray-600 mt-2">Years of Experience</motion.p>
                </div>
                <div className="text-center">
                    <div className="text-3xl md:text-[40px] font-bold flex justify-center items-center gap-2"><AnimatedNumber value={1200} />+</div>
                    <motion.p variants={statsVariants} initial="labelInitial" whileInView="labelWhileInView" className="font-bold text-gray-600 mt-2">Case Closed</motion.p>
                </div>
            </div>
        </section>
    );
}