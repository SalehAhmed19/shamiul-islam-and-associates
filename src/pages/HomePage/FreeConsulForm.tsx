import { icons, images } from "../../assets/assets";
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Button from "../../components/ui/Buttons/Button";

export default function FreeConsulForm() {
    return (
        <section style={{ backgroundImage: `url(${images.freeConsultation})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} className="text-white p-16">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="flex flex-col justify-center text-center space-y-6">
                        <div>
                            <img src={icons.logo2} alt="logo" className="w-24 rounded-full mx-auto" />
                        </div>

                        <h2 className="text-[40px] font-bold">Request A Free <br />Consultation</h2>
                        <p className="w-1/2 mx-auto">Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio mauris lectus consequat sed. Pretium purus feugiat volutpat pellentesque.Potenti porta mauris nec vulputate. </p>
                    </div>
                    <div className="bg-[#F9F8F5] p-10">
                        <form className="text-black space-y-6">
                            <div className="flex gap-4 w-full">
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="name" className="font-bold">Name</label>
                                    <input type="text" name="name" id="name" placeholder="Your Name" className="outline-none bg-white p-[14px] w-full" />
                                </div>
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="phone" className="font-bold">Phone</label>
                                    <input type="text" name="phone" id="phone" placeholder="Your Phone" className="outline-none bg-white p-[14px] w-full" />
                                </div>
                            </div>

                            <div className="flex gap-4 w-full">
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="name" className="font-bold">Email</label>
                                    <input type="email" name="email" id="email" placeholder="Your Email" className="outline-none bg-white p-[14px] w-full" />
                                </div>
                                <div className="flex flex-col gap-2 w-full">
                                    <label htmlFor="phone" className="font-bold">Service</label>
                                    <Select placeholder="Choose one…" size="lg" sx={{ border: "0", outline: "none", boxShadow: "none", "&:hover": { boxShadow: "none" }, "&:focus": { boxShadow: "none" }, "&:active": { boxShadow: "none" }, "&:focus-visible": { boxShadow: "none" }, padding: "14px", borderRadius: '0px' }}>
                                        <Option value="Civil Law">Civil Law</Option>
                                        <Option value="Banking Law">Banking Law</Option>
                                        <Option value="Corporate Law">Corporate Law</Option>
                                        <Option value="Criminal Law">Criminal Law</Option>
                                        <Option value="Cyber Law">Cyber Law</Option>
                                        <Option value="Family Law">Family Law</Option>
                                    </Select>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="subject" className="font-bold">Subject</label>
                                <input type="text" name="subject" id="subject" placeholder="Write Subject" className="outline-none bg-white p-[14px] w-full" />
                            </div>

                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="message" className="font-bold">Message</label>
                                <textarea rows={4} name="message" id="message" placeholder="Write Message" className="outline-none bg-white p-[14px] w-full" />
                            </div>

                            <Button className="w-full">Request A Free Consultation</Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}