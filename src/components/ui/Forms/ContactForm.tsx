import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import Button from "../Buttons/Button";
import { Input } from "../input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../select";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { consultationVariants } from "@/motions/motions";

interface Inputs {
  name: string;
  phone: string;
  email: string;
  service: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const { register, handleSubmit, control, reset } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);

    toast.success("Message sent successfully");
    reset();
  };
  return (
    <div className="bg-[#F9F8F5] p-6 md:p-10 rounded-lg">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 text-black md:space-y-6"
      >
        {/* Row 1: Name & Phone */}
        {/* flex-col on mobile (stack), flex-row on desktop (side-by-side) */}
        <div className="flex flex-col w-full gap-4 md:flex-row">
          <div className="flex flex-col w-full gap-2">
            <motion.label
              variants={consultationVariants}
              initial="formFieldInitial"
              whileInView="formFieldWhileInView"
              htmlFor="name"
              className="font-bold"
            >
              Name
            </motion.label>
            <motion.span
              variants={consultationVariants}
              initial="formFieldInitial"
              whileInView="formFieldWhileInView"
            >
              <Input
                type="text"
                id="name"
                placeholder="Your Name"
                className="border-0 bg-white shadow-none rounded-none p-[28px] w-full focus:border-gray-300 transition-colors"
                {...register("name")}
              />
            </motion.span>
          </div>
          <div className="flex flex-col w-full gap-2">
            <motion.label
              variants={consultationVariants}
              initial="formFieldInitial"
              whileInView="formFieldWhileInView"
              htmlFor="phone"
              className="font-bold"
            >
              Phone
            </motion.label>
            <motion.span
              variants={consultationVariants}
              initial="formFieldInitial"
              whileInView="formFieldWhileInView"
            >
              <Input
                type="text"
                id="phone"
                placeholder="Your Phone"
                className="border-0 bg-white shadow-none rounded-none p-[28px] w-full focus:border-gray-300 transition-colors"
                {...register("phone")}
              />
            </motion.span>
          </div>
        </div>

        {/* Row 2: Email & Service */}
        <div className="flex flex-col w-full gap-4 md:flex-row">
          <div className="flex flex-col w-full gap-2">
            <motion.label
              variants={consultationVariants}
              initial="formFieldInitial"
              whileInView="formFieldWhileInView"
              htmlFor="email"
              className="font-bold"
            >
              Email
            </motion.label>
            <motion.span
              variants={consultationVariants}
              initial="formFieldInitial"
              whileInView="formFieldWhileInView"
            >
              <Input
                className="border-0 bg-white shadow-none rounded-none p-[28px] w-full focus:border-gray-300 transition-colors"
                type="email"
                id="email"
                placeholder="Your Email"
                {...register("email")}
              />
            </motion.span>
          </div>
          <div className="flex flex-col w-full gap-2">
            <motion.label
              variants={consultationVariants}
              initial="formFieldInitial"
              whileInView="formFieldWhileInView"
              htmlFor="service"
              className="font-bold"
            >
              Service
            </motion.label>
            <motion.span
              variants={consultationVariants}
              initial="formFieldInitial"
              whileInView="formFieldWhileInView"
            >
              <Controller
                control={control}
                name="service"
                render={({ field }) => (
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full border-0 bg-white shadow-none rounded-none p-[28px]">
                      <SelectValue placeholder="Select Service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Civil Law">Civil Law</SelectItem>
                      <SelectItem value="Banking Law">Banking Law</SelectItem>
                      <SelectItem value="Corporate Law">
                        Corporate Law
                      </SelectItem>
                      <SelectItem value="Criminal Law">Criminal Law</SelectItem>
                      <SelectItem value="Cyber Law">Cyber Law</SelectItem>
                      <SelectItem value="Family Law">Family Law</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </motion.span>
          </div>
        </div>

        {/* Row 3: Subject */}
        <div className="flex flex-col w-full gap-2">
          <motion.label
            variants={consultationVariants}
            initial="formFieldInitial"
            whileInView="formFieldWhileInView"
            htmlFor="subject"
            className="font-bold"
          >
            Subject
          </motion.label>
          <motion.span
            variants={consultationVariants}
            initial="formFieldInitial"
            whileInView="formFieldWhileInView"
          >
            <Input
              type="text"
              id="subject"
              placeholder="Write Subject"
              className="border-0 bg-white shadow-none rounded-none p-[28px] w-full focus:border-gray-300 transition-colors"
              {...register("subject")}
            />
          </motion.span>
        </div>

        {/* Row 4: Message */}
        <div className="flex flex-col w-full gap-2">
          <motion.label
            variants={consultationVariants}
            initial="formFieldInitial"
            whileInView="formFieldWhileInView"
            htmlFor="message"
            className="font-bold"
          >
            Message
          </motion.label>
          <motion.textarea
            variants={consultationVariants}
            initial="formFieldInitial"
            whileInView="formFieldWhileInView"
            rows={4}
            id="message"
            placeholder="Write Message"
            className="border-0 bg-white shadow-none rounded-none p-[28px] w-full focus:border-gray-300 transition-colors"
            {...register("message")}
          />
        </div>

        <Button className="w-full">Request A Free Consultation</Button>
      </form>
    </div>
  );
}
