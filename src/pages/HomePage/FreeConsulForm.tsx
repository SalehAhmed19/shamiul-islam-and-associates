import { icons, images } from "../../assets/assets";
import { Zoom } from "react-awesome-reveal";
import ContactForm from "@/components/ui/Forms/ContactForm";

export default function FreeConsulForm() {
    return (
        <section
            style={{
                backgroundImage: `url(${images.freeConsultation})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
            // Changed p-16 to responsive padding: py-12 px-4 md:p-16
            className="text-white py-12 px-4 md:p-16"
        >
            <Zoom cascade={true} delay={200}><div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">

                    {/* --- Left Side: Text --- */}
                    <div className="flex flex-col justify-center text-center space-y-6">
                        <div>
                            <img src={icons.logo2} alt="logo" className="w-20 md:w-24 rounded-full mx-auto" />
                        </div>

                        {/* Responsive Text Size */}
                        <h2 className="text-3xl md:text-[40px] font-bold leading-tight">
                            Request A Free <br className="hidden md:block" />Consultation
                        </h2>

                        {/* Responsive Paragraph Width: w-full on mobile, w-1/2 on large screens */}
                        <p className="w-full md:w-3/4 lg:w-1/2 mx-auto leading-relaxed text-sm md:text-base">
                            Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio mauris lectus consequat sed. Pretium purus feugiat volutpat pellentesque. Potenti porta mauris nec vulputate.
                        </p>
                    </div>

                    {/* --- Right Side: Form --- */}
                    {/* Responsive Padding: p-6 on mobile, p-10 on desktop */}
                    <ContactForm />
                </div>
            </div></Zoom>
        </section >
    )
}