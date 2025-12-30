import { icons, images } from "../../assets/assets";
import ContactForm from "@/components/ui/Forms/ContactForm";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { consultationVariants } from "@/motions/motions";

export default function FreeConsulForm() {
    return (
        <Element name="contact"><section
            style={{
                backgroundImage: `url(${images.freeConsultation})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
            // Changed p-16 to responsive padding: py-12 px-4 md:p-16
            className="text-white py-12 px-4 md:p-16"
        >
            <div className="container mx-auto">
                <motion.div variants={consultationVariants} initial="initial" whileInView="whileInView" className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">

                    {/* --- Left Side: Text --- */}
                    <div className="flex flex-col justify-center text-center space-y-6">
                        <div>
                            <motion.img variants={consultationVariants} whileInView="logoRotation" src={icons.logo2} alt="logo" className="w-20 md:w-24 rounded-full mx-auto" />
                        </div>

                        {/* Responsive Text Size */}
                        <motion.h2 variants={consultationVariants} initial="titleInitial" whileInView="titleWhileInView" className="text-3xl md:text-[40px] font-bold leading-tight">
                            Request A Free <br className="hidden md:block" />Consultation
                        </motion.h2>

                        {/* Responsive Paragraph Width: w-full on mobile, w-1/2 on large screens */}
                        <motion.p variants={consultationVariants} initial="contentInitial" whileInView="contentWhileInView" className="w-full md:w-3/4 lg:w-1/2 mx-auto leading-relaxed text-sm md:text-base">
                            Take the first step toward resolving your legal concerns with a complimentary, no-obligation session. Our expert team is ready to listen to your unique situation and provide professional guidance tailored to your needs. Contact us today to secure your free consultation and gain the clarity you deserve.
                        </motion.p>
                    </div>

                    {/* --- Right Side: Form --- */}
                    {/* Responsive Padding: p-6 on mobile, p-10 on desktop */}
                    <ContactForm />
                </motion.div>
            </div>
        </section ></Element>
    )
}