
import { Fade } from "react-awesome-reveal";
import { icons, images } from "../../assets/assets";
import ContactForm from "../../components/ui/Forms/ContactForm";
import Ask from "../HomePage/Ask";

export default function Contact() {
    return (
        <section>
            {/* Background Image Container */}
            <div
                style={{
                    backgroundImage: `url(${images.contact})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            >
                {/* Header Title Section - Adjusted height for mobile */}
                <div className="flex items-center justify-center h-[300px] md:h-[420px]">
                    <Fade cascade={true} delay={200} direction="up">
                        <h1 className="text-4xl md:text-[40px] font-bold text-white uppercase text-center px-4">
                            Contact Us
                        </h1>
                    </Fade>
                </div>

                {/* Main Content Grid */}
                <div className="container mx-auto px-4 py-10 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 text-white">

                    {/* Left Column: Contact Info */}
                    <div className="space-y-8 md:space-y-10">
                        <div>
                            <h2 className="text-3xl md:text-[40px] font-bold leading-tight mb-4">
                                Have any questions?<br className="hidden md:block" /> Feel free to contact us!
                            </h2>
                            <p className="text-base md:text-lg text-gray-200">
                                Our dedicated legal team is here to provide the support and clarity you need—reach out today for a personalized consultation tailored to your situation.
                            </p>
                        </div>

                        {/* Info Grid - Stacks on small mobile, 2 cols on tablet/desktop */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">

                            {/* Phone */}
                            <div className="flex gap-4 md:gap-5">
                                <div className="shrink-0"><img src={icons.phoneBig} alt="phone" className="w-10 h-10 md:w-auto md:h-auto" /></div>
                                <div className="space-y-2">
                                    <h3 className="text-xl md:text-[24px] font-bold">Phone Numbers</h3>
                                    <div className="text-sm md:text-base text-gray-300">
                                        <p>+880 1712 345 678</p>
                                        <p>+880 1717 260 765</p>
                                    </div>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex gap-4 md:gap-5">
                                <div className="shrink-0"><img src={icons.location} alt="location" className="w-10 h-10 md:w-auto md:h-auto" /></div>
                                <div className="space-y-2">
                                    <h3 className="text-xl md:text-[24px] font-bold">Physical Address</h3>
                                    <div className="text-sm md:text-base text-gray-300">
                                        <p>25/1 Court House Street, <br />Dhaka, Bangladesh</p>
                                    </div>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex gap-4 md:gap-5">
                                <div className="shrink-0"><img src={icons.email} alt="email" className="w-10 h-10 md:w-auto md:h-auto" /></div>
                                <div className="space-y-2">
                                    <h3 className="text-xl md:text-[24px] font-bold">Email</h3>
                                    <div className="text-sm md:text-base text-gray-300 break-all">
                                        <p>contact@shamiulislamandassociates.com</p>
                                    </div>
                                </div>
                            </div>

                            {/* Clock */}
                            <div className="flex gap-4 md:gap-5">
                                <div className="shrink-0"><img src={icons.clock} alt="clock" className="w-10 h-10 md:w-auto md:h-auto" /></div>
                                <div className="space-y-2">
                                    <h3 className="text-xl md:text-[24px] font-bold">Opening Hours</h3>
                                    <div className="text-sm md:text-base text-gray-300">
                                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                        <p>Saturday - Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4713.672920403525!2d90.4104194!3d23.712493900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9006ff7419b%3A0xf565c2cb52f9d3ab!2sAdvocate%20Shamiul%20Islam%20Prince%20%26%20Associates!5e1!3m2!1sen!2sbd!4v1765907450771!5m2!1sen!2sbd"
                    width="100%"
                    height="450"
                    className="h-[300px] md:h-[450px]"
                    style={{ border: "0" }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            <Ask />
        </section>
    )
}