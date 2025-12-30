import { messageSectionVariants } from "@/motions/motions";
import { images } from "../../assets/assets";
import Heading from "../../components/ui/Headings/Heading";
import { motion } from "framer-motion";

export default function Message() {
    return (
        <section className="relative z-20 px-4 md:px-8 flex justify-center">
            <motion.div viewport={{ amount: 0.5 }} variants={messageSectionVariants} initial={"initial"} whileInView={"whileInView"} className="bg-white w-full container -mt-16 md:-mt-24 lg:-mt-32 p-6 md:p-12 lg:p-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

                {/* --- Text Content --- */}

                <div className="space-y-4 md:space-y-6 order-2 md:order-1 text-center md:text-left">
                    <Heading>
                        Dedicated Expertise for <br className="hidden lg:block" /> Your Legal Needs
                    </Heading>

                    <motion.p variants={messageSectionVariants} initial={"paragraphInitial"} whileInView={"paragraphWhileInView"} className="text-gray-600 text-sm md:text-base leading-relaxed">
                        We provide clear, effective, and trustworthy legal services. We're here to
                        understand your unique situation and guide you with expert advice and strong
                        representation. Your legal clarity and peace of mind are our priority.
                    </motion.p>
                    <motion.img variants={messageSectionVariants} initial={"signatureInitial"} whileInView={"signatureWhileInView"} src={images.signature} alt="signature" className="w-40 md:w-65 mx-auto md:mx-0" />
                </div>

                {/* --- Image Content --- */}
                {/* order-1: On mobile, image is FIRST. 
                        md:order-2: On desktop, image is RIGHT. */}

                <div className="order-1 md:order-2 h-48 sm:h-64 md:h-full w-full rounded-lg overflow-hidden cursor-pointer">
                    <motion.img whileHover={{
                        scale: 1.05,
                        transition: {
                            duration: 0.3,
                            ease: "easeInOut",
                        }
                    }}
                        variants={messageSectionVariants}
                        initial={"imageInitial"}
                        whileInView={"imageWhileInView"}
                        src={images.prince}
                        alt="prince-01"
                        className="w-full object-cover object-top hover:scale-105 transition-transform duration-500 rounded-lg"
                    />
                </div>


            </motion.div>

        </section >
    );
}