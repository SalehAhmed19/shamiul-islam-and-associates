
import Button from "../Buttons/Button";
import { Input } from "../input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../select";

export default function ContactForm() {
    return (
        <div className="bg-[#F9F8F5] p-6 md:p-10">
            <form className="text-black space-y-4 md:space-y-6">

                {/* Row 1: Name & Phone */}
                {/* flex-col on mobile (stack), flex-row on desktop (side-by-side) */}
                <div className="flex flex-col md:flex-row gap-4 w-full">
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="name" className="font-bold">Name</label>
                        <Input type="text" name="name" id="name" placeholder="Your Name" className="border-0 bg-white shadow-none rounded-none p-[28px] w-full focus:border-gray-300 transition-colors" />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="phone" className="font-bold">Phone</label>
                        <Input type="text" name="phone" id="phone" placeholder="Your Phone" className="border-0 bg-white shadow-none rounded-none p-[28px] w-full focus:border-gray-300 transition-colors" />
                    </div>
                </div>

                {/* Row 2: Email & Service */}
                <div className="flex flex-col md:flex-row gap-4 w-full">
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="email" className="font-bold">Email</label>
                        <Input className="border-0 bg-white shadow-none rounded-none p-[28px] w-full focus:border-gray-300 transition-colors" type="email" name="email" id="email" placeholder="Your Email" />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="service" className="font-bold">Service</label>
                        <Select>
                            <SelectTrigger className="w-full border-0 bg-white shadow-none rounded-none p-[28px]">
                                <SelectValue placeholder="Select Service" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Civil Law">Civil Law</SelectItem>
                                <SelectItem value="Banking Law">Banking Law</SelectItem>
                                <SelectItem value="Corporate Law">Corporate Law</SelectItem>
                                <SelectItem value="Criminal Law">Criminal Law</SelectItem>
                                <SelectItem value="Cyber Law">Cyber Law</SelectItem>
                                <SelectItem value="Family Law">Family Law</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* Row 3: Subject */}
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="subject" className="font-bold">Subject</label>
                    <Input type="text" name="subject" id="subject" placeholder="Write Subject" className="border-0 bg-white shadow-none rounded-none p-[28px] w-full focus:border-gray-300 transition-colors" />
                </div>

                {/* Row 4: Message */}
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="message" className="font-bold">Message</label>
                    <textarea rows={4} name="message" id="message" placeholder="Write Message" className="border-0 bg-white shadow-none rounded-none p-[28px] w-full focus:border-gray-300 transition-colors" />
                </div>

                <Button className="w-full">Request A Free Consultation</Button>
            </form>
        </div>
    )
}