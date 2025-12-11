import { icons, images } from "../../assets/assets";
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Button from "../../components/ui/Buttons/Button";
import { Zoom } from "react-awesome-reveal";

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
                    <div className="bg-[#F9F8F5] p-6 md:p-10">
                        <form className="text-black space-y-4 md:space-y-6">

                            {/* Row 1: Name & Phone */}
                            {/* flex-col on mobile (stack), flex-row on desktop (side-by-side) */}
                            <div className="flex flex-col md:flex-row gap-4 w-full">
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="name" className="font-bold">Name</label>
                                    <input type="text" name="name" id="name" placeholder="Your Name" className="outline-none bg-white p-[14px] w-full  border border-transparent focus:border-gray-300 transition-colors" />
                                </div>
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="phone" className="font-bold">Phone</label>
                                    <input type="text" name="phone" id="phone" placeholder="Your Phone" className="outline-none bg-white p-[14px] w-full  border border-transparent focus:border-gray-300 transition-colors" />
                                </div>
                            </div>

                            {/* Row 2: Email & Service */}
                            <div className="flex flex-col md:flex-row gap-4 w-full">
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="email" className="font-bold">Email</label>
                                    <input type="email" name="email" id="email" placeholder="Your Email" className="outline-none bg-white p-[14px] w-full  border border-transparent focus:border-gray-300 transition-colors" />
                                </div>
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="service" className="font-bold">Service</label>
                                    <Select
                                        placeholder="Choose one…"
                                        size="lg"
                                        sx={{
                                            border: "0",
                                            outline: "none",
                                            boxShadow: "none",
                                            "&:hover": { boxShadow: "none" },
                                            "&:focus": { boxShadow: "none" },
                                            "&:active": { boxShadow: "none" },
                                            "&:focus-visible": { boxShadow: "none" },
                                            padding: "14px",
                                            borderRadius: '2px',
                                            backgroundColor: 'white'
                                        }}
                                    >
                                        <Option value="Civil Law">Civil Law</Option>
                                        <Option value="Banking Law">Banking Law</Option>
                                        <Option value="Corporate Law">Corporate Law</Option>
                                        <Option value="Criminal Law">Criminal Law</Option>
                                        <Option value="Cyber Law">Cyber Law</Option>
                                        <Option value="Family Law">Family Law</Option>
                                    </Select>
                                </div>
                            </div>

                            {/* Row 3: Subject */}
                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="subject" className="font-bold">Subject</label>
                                <input type="text" name="subject" id="subject" placeholder="Write Subject" className="outline-none bg-white p-[14px] w-full  border border-transparent focus:border-gray-300 transition-colors" />
                            </div>

                            {/* Row 4: Message */}
                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="message" className="font-bold">Message</label>
                                <textarea rows={4} name="message" id="message" placeholder="Write Message" className="outline-none bg-white p-[14px] w-full  border border-transparent focus:border-gray-300 transition-colors" />
                            </div>

                            <Button className="w-full">Request A Free Consultation</Button>
                        </form>
                    </div>
                </div>
            </div></Zoom>
        </section >
    )
}