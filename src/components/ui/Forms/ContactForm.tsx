// import { Controller, useForm, type SubmitHandler } from "react-hook-form";
// import Button from "../Buttons/Button";
// import { Input } from "../input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "../select";
// import toast from "react-hot-toast";
// import { motion } from "framer-motion";
// import { consultationVariants } from "@/motions/motions";

// interface Inputs {
//   name: string;
//   phone: string;
//   email: string;
//   service: string;
//   subject: string;
//   message: string;
// }

// export default function ContactForm() {
//   const { register, handleSubmit, control, reset } = useForm<Inputs>();

//   const onSubmit: SubmitHandler<Inputs> = (data) => {
//     console.log(data);

//     toast.success("Message sent successfully");
//     reset();
//   };
//   return (
//     <div className="bg-[#F9F8F5] p-6 md:p-10 rounded-lg">
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="space-y-4 text-black md:space-y-6"
//       >
//         {/* Row 1: Name & Phone */}
//         {/* flex-col on mobile (stack), flex-row on desktop (side-by-side) */}
//         <div className="flex flex-col w-full gap-4 md:flex-row">
//           <div className="flex flex-col w-full gap-2">
//             <motion.label
//               variants={consultationVariants}
//               initial="formFieldInitial"
//               whileInView="formFieldWhileInView"
//               htmlFor="name"
//               className="font-bold"
//             >
//               Name
//             </motion.label>
//             <motion.span
//               variants={consultationVariants}
//               initial="formFieldInitial"
//               whileInView="formFieldWhileInView"
//             >
//               <Input
//                 type="text"
//                 id="name"
//                 placeholder="Your Name"
//                 className="border-0 bg-white shadow-none rounded-none p-[28px] w-full focus:border-gray-300 transition-colors"
//                 {...register("name")}
//               />
//             </motion.span>
//           </div>
//           <div className="flex flex-col w-full gap-2">
//             <motion.label
//               variants={consultationVariants}
//               initial="formFieldInitial"
//               whileInView="formFieldWhileInView"
//               htmlFor="phone"
//               className="font-bold"
//             >
//               Phone
//             </motion.label>
//             <motion.span
//               variants={consultationVariants}
//               initial="formFieldInitial"
//               whileInView="formFieldWhileInView"
//             >
//               <Input
//                 type="text"
//                 id="phone"
//                 placeholder="Your Phone"
//                 className="border-0 bg-white shadow-none rounded-none p-[28px] w-full focus:border-gray-300 transition-colors"
//                 {...register("phone")}
//               />
//             </motion.span>
//           </div>
//         </div>

//         {/* Row 2: Email & Service */}
//         <div className="flex flex-col w-full gap-4 md:flex-row">
//           <div className="flex flex-col w-full gap-2">
//             <motion.label
//               variants={consultationVariants}
//               initial="formFieldInitial"
//               whileInView="formFieldWhileInView"
//               htmlFor="email"
//               className="font-bold"
//             >
//               Email
//             </motion.label>
//             <motion.span
//               variants={consultationVariants}
//               initial="formFieldInitial"
//               whileInView="formFieldWhileInView"
//             >
//               <Input
//                 className="border-0 bg-white shadow-none rounded-none p-[28px] w-full focus:border-gray-300 transition-colors"
//                 type="email"
//                 id="email"
//                 placeholder="Your Email"
//                 {...register("email")}
//               />
//             </motion.span>
//           </div>
//           <div className="flex flex-col w-full gap-2">
//             <motion.label
//               variants={consultationVariants}
//               initial="formFieldInitial"
//               whileInView="formFieldWhileInView"
//               htmlFor="service"
//               className="font-bold"
//             >
//               Service
//             </motion.label>
//             <motion.span
//               variants={consultationVariants}
//               initial="formFieldInitial"
//               whileInView="formFieldWhileInView"
//             >
//               <Controller
//                 control={control}
//                 name="service"
//                 render={({ field }) => (
//                   <Select
//                     onValueChange={field.onChange}
//                     defaultValue={field.value}
//                   >
//                     <SelectTrigger className="w-full border-0 bg-white shadow-none rounded-none p-[28px]">
//                       <SelectValue placeholder="Select Service" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="Civil Law">Civil Law</SelectItem>
//                       <SelectItem value="Banking Law">Banking Law</SelectItem>
//                       <SelectItem value="Corporate Law">
//                         Corporate Law
//                       </SelectItem>
//                       <SelectItem value="Criminal Law">Criminal Law</SelectItem>
//                       <SelectItem value="Cyber Law">Cyber Law</SelectItem>
//                       <SelectItem value="Family Law">Family Law</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 )}
//               />
//             </motion.span>
//           </div>
//         </div>

//         {/* Row 3: Subject */}
//         <div className="flex flex-col w-full gap-2">
//           <motion.label
//             variants={consultationVariants}
//             initial="formFieldInitial"
//             whileInView="formFieldWhileInView"
//             htmlFor="subject"
//             className="font-bold"
//           >
//             Subject
//           </motion.label>
//           <motion.span
//             variants={consultationVariants}
//             initial="formFieldInitial"
//             whileInView="formFieldWhileInView"
//           >
//             <Input
//               type="text"
//               id="subject"
//               placeholder="Write Subject"
//               className="border-0 bg-white shadow-none rounded-none p-[28px] w-full focus:border-gray-300 transition-colors"
//               {...register("subject")}
//             />
//           </motion.span>
//         </div>

//         {/* Row 4: Message */}
//         <div className="flex flex-col w-full gap-2">
//           <motion.label
//             variants={consultationVariants}
//             initial="formFieldInitial"
//             whileInView="formFieldWhileInView"
//             htmlFor="message"
//             className="font-bold"
//           >
//             Message
//           </motion.label>
//           <motion.textarea
//             variants={consultationVariants}
//             initial="formFieldInitial"
//             whileInView="formFieldWhileInView"
//             rows={4}
//             id="message"
//             placeholder="Write Message"
//             className="border-0 bg-white shadow-none rounded-none p-[28px] w-full focus:border-gray-300 transition-colors"
//             {...register("message")}
//           />
//         </div>

//         <Button className="w-full">Request A Free Consultation</Button>
//       </form>
//     </div>
//   );
// }

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
    // Classic off-white background with a subtle shadow and sophisticated border
    <div className="bg-[#fcfbf9] border border-gray-100 shadow-xl p-6 sm:p-8 md:p-12 rounded-2xl relative overflow-hidden">
      {/* Decorative top accent line */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#dbb671] via-[#eecd8a] to-[#dbb671]"></div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 text-gray-800 md:space-y-8"
      >
        {/* Row 1: Name & Phone */}
        <div className="flex flex-col w-full gap-6 sm:flex-row md:gap-8">
          <div className="flex flex-col w-full gap-2 group">
            <motion.label
              variants={consultationVariants}
              initial="formFieldInitial"
              whileInView="formFieldWhileInView"
              htmlFor="name"
              className="text-sm font-bold tracking-wide text-gray-700 uppercase"
            >
              Full Name
            </motion.label>
            <motion.div
              variants={consultationVariants}
              initial="formFieldInitial"
              whileInView="formFieldWhileInView"
            >
              <Input
                type="text"
                id="name"
                placeholder="John Doe"
                className="w-full px-5 py-4 text-base transition-all bg-white border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-[#dbb671]/50 focus:border-[#dbb671] placeholder:text-gray-400"
                {...register("name", { required: true })}
              />
            </motion.div>
          </div>

          <div className="flex flex-col w-full gap-2 group">
            <motion.label
              variants={consultationVariants}
              initial="formFieldInitial"
              whileInView="formFieldWhileInView"
              htmlFor="phone"
              className="text-sm font-bold tracking-wide text-gray-700 uppercase"
            >
              Phone Number
            </motion.label>
            <motion.div
              variants={consultationVariants}
              initial="formFieldInitial"
              whileInView="formFieldWhileInView"
            >
              <Input
                type="tel"
                id="phone"
                placeholder="+880 1700-000000"
                className="w-full px-5 py-4 text-base transition-all bg-white border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-[#dbb671]/50 focus:border-[#dbb671] placeholder:text-gray-400"
                {...register("phone", { required: true })}
              />
            </motion.div>
          </div>
        </div>

        {/* Row 2: Email & Service */}
        <div className="flex flex-col w-full gap-6 sm:flex-row md:gap-8">
          <div className="flex flex-col w-full gap-2 group">
            <motion.label
              variants={consultationVariants}
              initial="formFieldInitial"
              whileInView="formFieldWhileInView"
              htmlFor="email"
              className="text-sm font-bold tracking-wide text-gray-700 uppercase"
            >
              Email Address
            </motion.label>
            <motion.div
              variants={consultationVariants}
              initial="formFieldInitial"
              whileInView="formFieldWhileInView"
            >
              <Input
                className="w-full px-5 py-4 text-base transition-all bg-white border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-[#dbb671]/50 focus:border-[#dbb671] placeholder:text-gray-400"
                type="email"
                id="email"
                placeholder="john@example.com"
                {...register("email", { required: true })}
              />
            </motion.div>
          </div>

          <div className="flex flex-col w-full gap-2 group">
            <motion.label
              variants={consultationVariants}
              initial="formFieldInitial"
              whileInView="formFieldWhileInView"
              htmlFor="service"
              className="text-sm font-bold tracking-wide text-gray-700 uppercase"
            >
              Area of Practice
            </motion.label>
            <motion.div
              variants={consultationVariants}
              initial="formFieldInitial"
              whileInView="formFieldWhileInView"
            >
              <Controller
                control={control}
                name="service"
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full px-5 text-base transition-all bg-white border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-[#dbb671]/50 focus:border-[#dbb671]">
                      <SelectValue placeholder="Select Service Area" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-gray-200 shadow-xl rounded-xl">
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
            </motion.div>
          </div>
        </div>

        {/* Row 3: Subject */}
        <div className="flex flex-col w-full gap-2 group">
          <motion.label
            variants={consultationVariants}
            initial="formFieldInitial"
            whileInView="formFieldWhileInView"
            htmlFor="subject"
            className="text-sm font-bold tracking-wide text-gray-700 uppercase"
          >
            Subject
          </motion.label>
          <motion.div
            variants={consultationVariants}
            initial="formFieldInitial"
            whileInView="formFieldWhileInView"
          >
            <Input
              type="text"
              id="subject"
              placeholder="Briefly describe your legal issue"
              className="w-full px-5 py-4 text-base transition-all bg-white border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-[#dbb671]/50 focus:border-[#dbb671] placeholder:text-gray-400"
              {...register("subject", { required: true })}
            />
          </motion.div>
        </div>

        {/* Row 4: Message */}
        <div className="flex flex-col w-full gap-2 group">
          <motion.label
            variants={consultationVariants}
            initial="formFieldInitial"
            whileInView="formFieldWhileInView"
            htmlFor="message"
            className="text-sm font-bold tracking-wide text-gray-700 uppercase"
          >
            Message
          </motion.label>
          <motion.div
            variants={consultationVariants}
            initial="formFieldInitial"
            whileInView="formFieldWhileInView"
          >
            <textarea
              id="message"
              rows={5}
              placeholder="Provide details about your case or consultation request..."
              className="w-full px-5 py-4 text-base transition-all bg-white border border-gray-200 rounded-lg shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#dbb671]/50 focus:border-[#dbb671] placeholder:text-gray-400"
              {...register("message", { required: true })}
            />
          </motion.div>
        </div>

        {/* Submit Button */}
        <motion.div
          variants={consultationVariants}
          initial="formFieldInitial"
          whileInView="formFieldWhileInView"
          className="pt-2"
        >
          <Button
            type="submit"
            className="w-full text-lg font-bold tracking-widest transition-transform duration-300 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Request A Free Consultation
          </Button>
        </motion.div>
      </form>
    </div>
  );
}
