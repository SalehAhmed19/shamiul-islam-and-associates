import { Option, Select } from "@mui/joy";
import Button from "../Buttons/Button";

export default function ContactForm() {
    return (
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
    )
}