
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import Button from "../Buttons/Button";
import { Input } from "../input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../select";
import toast from "react-hot-toast";

interface Inputs {
    name: string
    phone: string
    email: string
    service: string
    subject: string
    message: string
}

export default function ContactForm() {
    const { register, handleSubmit, control, reset } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)

        toast.success("Message sent successfully")
        reset()
    }
    return (
        <div className="bg-[#F9F8F5] p-6 md:p-10">
            <form onSubmit={handleSubmit(onSubmit)} className="text-black space-y-4 md:space-y-6">

                {/* Row 1: Name & Phone */}
                {/* flex-col on mobile (stack), flex-row on desktop (side-by-side) */}
                <div className="flex flex-col md:flex-row gap-4 w-full">
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="name" className="font-bold">Name</label>
                        <Input type="text" id="name" placeholder="Your Name" className="border-0 bg-white shadow-none rounded-none p-[28px] w-full focus:border-gray-300 transition-colors" {...register("name")} />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="phone" className="font-bold">Phone</label>
                        <Input type="text" id="phone" placeholder="Your Phone" className="border-0 bg-white shadow-none rounded-none p-[28px] w-full focus:border-gray-300 transition-colors" {...register("phone")} />
                    </div>
                </div>

                {/* Row 2: Email & Service */}
                <div className="flex flex-col md:flex-row gap-4 w-full">
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="email" className="font-bold">Email</label>
                        <Input className="border-0 bg-white shadow-none rounded-none p-[28px] w-full focus:border-gray-300 transition-colors" type="email" id="email" placeholder="Your Email" {...register("email")} />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="service" className="font-bold">Service</label>
                        <Controller
                            control={control}
                            name="service"
                            render={({ field }) => (
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                            )}
                        />
                    </div>
                </div>

                {/* Row 3: Subject */}
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="subject" className="font-bold">Subject</label>
                    <Input type="text" id="subject" placeholder="Write Subject" className="border-0 bg-white shadow-none rounded-none p-[28px] w-full focus:border-gray-300 transition-colors" {...register("subject")} />
                </div>

                {/* Row 4: Message */}
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="message" className="font-bold">Message</label>
                    <textarea rows={4} id="message" placeholder="Write Message" className="border-0 bg-white shadow-none rounded-none p-[28px] w-full focus:border-gray-300 transition-colors" {...register("message")} />
                </div>

                <Button className="w-full">Request A Free Consultation</Button>
            </form>
        </div>
    )
}