// import { useNavigate, useParams } from "react-router-dom";
// import imageCompression from "browser-image-compression";
// import { useGetAssociate } from "@/hooks/useGetAssociate";
// import BlogsLoading from "@/components/ui/Loadings/BlogsLoading";
// import Heading from "@/components/ui/Headings/Heading";
// import { Input } from "@/components/ui/input";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { useForm } from "react-hook-form";
// import * as z from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { createAssociate } from "@/RTK/features/associates/associatesSlice";
// import toast from "react-hot-toast";
// import { useAppDispatch } from "@/hooks/hooks";
// import type { AssociatesInterface } from "@/Interfaces/AccociatesInterface";
// import { Plus, UploadCloud } from "lucide-react";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { images } from "@/assets/assets";
// import { useState } from "react";
// import AddBlogsLoading from "@/components/ui/Loadings/AddBlogsLoading";
// import CloudinaryImageUploader from "txb-cloudinary-image-uploader";

// export default function AddAssociates() {
//   const { _id } = useParams();
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const { loading } = useGetAssociate(_id ? _id : "");
//   const [preview, setPreview] = useState<string | null>(null);

//   const designationOptions = [
//     { value: "Head of Legal", title: "Head of Legal" },
//     { value: "Senior Consultant", title: "Senior Consultant" },
//     { value: "Consultant", title: "Consultant" },
//     { value: "Associate", title: "Associate" },
//   ];

//   const courtOptions = [
//     { value: "Bangladesh Supreme Court", title: "Bangladesh Supreme Court" },
//     { value: "Dhaka Judge Court", title: "Dhaka Judge Court" },
//   ];

//   const fromSchema = z.object({
//     name: z.string().min(3, "Name must be at least 3 characters long"),
//     position: z.string().min(1, "Please select a designation"),
//     image: z
//       .instanceof(File)
//       .refine(
//         (file) => file.size <= 3.1 * 1024 * 1024,
//         "Image size must be less than 3.1MB",
//       ),
//     court: z.string().min(1, "Please select a court"),
//   });

//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();

//   const form = useForm<z.infer<typeof fromSchema>>({
//     mode: "onChange",
//     resolver: zodResolver(fromSchema),
//   });

//   const onSubmit = async (data: z.infer<typeof fromSchema>) => {
//     try {
//       console.log("Associate added successfully");
//       setIsSubmitting(true);

//       // ১. পরিবর্তন: শুরুতে এটি null বা undefined রাখুন
//       let imagePayload = null;

//       const compressedOption = {
//         maxSizeMB: 1,
//         maxWidthOrHeight: 1920,
//         useWebWorker: true,
//       };

//       if (data.image) {
//         const compressedImage = await imageCompression(
//           data.image,
//           compressedOption,
//         );
//         // ২. পরিবর্তন: এখানে এখন { url, public_id } অবজেক্ট আসবে
//         imagePayload = await CloudinaryImageUploader(
//           compressedImage,
//           import.meta.env.VITE_CLOUDINARY_PRESET,
//           import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
//         );
//       }

//       const formData: AssociatesInterface = {
//         name: data.name,
//         position: data.position,
//         // ৩. পরিবর্তন: পুরো অবজেক্টটি পাস করছেন
//         image: imagePayload,
//         court: data.court,
//       };

//       await dispatch(createAssociate(formData)).unwrap();
//       toast.success("Associate added successfully");
//       navigate("/dashboard/secure/admin-panel/manage-associates");
//       form.reset();
//       setPreview(null);
//     } catch (error) {
//       toast.error("Something went wrong!");
//       console.error(error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   if (loading) return <BlogsLoading />;
//   if (isSubmitting) return <AddBlogsLoading title="Adding Associate..." />;

//   return (
//     <section className="max-w-6xl px-4 py-6 mx-auto space-y-6 md:px-0">
//       <Heading>Add Associate</Heading>

//       <div className="space-y-6">
//         <h3 className="text-xl md:text-2xl font-bold text-[#604B33]">
//           Associate Information
//         </h3>

//         {/* Main Responsive Container */}
//         <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
//           {/* Left Side: Photo Upload (Spans 4 columns on large screens) */}
//           <div className="flex flex-col items-center justify-center p-6 space-y-4 bg-white border rounded-lg lg:col-span-4 border-black/10">
//             <p className="w-full font-bold text-left text-gray-500">
//               Profile Photo
//             </p>

//             <div className="relative group">
//               <label className="block cursor-pointer" htmlFor="image">
//                 <div className="flex items-center justify-center w-40 h-40 overflow-hidden border-4 border-gray-100 rounded-full shadow-inner md:w-48 md:h-48 bg-gray-50">
//                   <img
//                     src={preview || images.avatar}
//                     alt="avatar"
//                     className="object-cover w-full h-full transition-opacity group-hover:opacity-80"
//                   />
//                   {!preview && (
//                     <UploadCloud
//                       className="absolute text-gray-300 transition-opacity opacity-0 group-hover:opacity-100"
//                       size={40}
//                     />
//                   )}
//                 </div>
//                 <div className="mt-4 text-center">
//                   <p className="text-sm font-semibold text-[#604B33] hover:underline">
//                     Change Photo
//                   </p>
//                   <p className="text-[10px] md:text-xs text-gray-400 mt-2">
//                     Allowed *.jpeg, *.jpg, *.png, *.gif <br />
//                     Max size: 3.1 MB
//                   </p>
//                 </div>
//               </label>
//             </div>
//           </div>

//           {/* Right Side: Form Inputs (Spans 8 columns on large screens) */}
//           <div className="p-6 bg-white border rounded-lg lg:col-span-8 border-black/10">
//             <Form {...form}>
//               <form
//                 onSubmit={form.handleSubmit(onSubmit, (errors) =>
//                   console.log(errors),
//                 )}
//                 className="space-y-6"
//               >
//                 <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//                   <FormField
//                     control={form.control}
//                     name="name"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel className="font-semibold">
//                           Full Name
//                         </FormLabel>
//                         <FormControl>
//                           <Input
//                             className="rounded-md py-6 border-gray-300 focus:ring-[#604B33]"
//                             placeholder="e.g. John Doe"
//                             {...field}
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />

//                   <FormField
//                     control={form.control}
//                     name="position"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel className="font-semibold">
//                           Designation
//                         </FormLabel>
//                         <Select
//                           onValueChange={field.onChange}
//                           defaultValue={field.value}
//                         >
//                           <FormControl>
//                             <SelectTrigger className="py-6 border-gray-300 rounded-md">
//                               <SelectValue placeholder="Select Designation" />
//                             </SelectTrigger>
//                           </FormControl>
//                           <SelectContent>
//                             {designationOptions.map((option) => (
//                               <SelectItem
//                                 key={option.value}
//                                 value={option.value}
//                               >
//                                 {option.title}
//                               </SelectItem>
//                             ))}
//                           </SelectContent>
//                         </Select>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                 </div>

//                 <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//                   <FormField
//                     control={form.control}
//                     name="court"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel className="font-semibold">
//                           Associated Court
//                         </FormLabel>
//                         <Select
//                           onValueChange={field.onChange}
//                           defaultValue={field.value}
//                         >
//                           <FormControl>
//                             <SelectTrigger className="py-6 border-gray-300 rounded-md">
//                               <SelectValue placeholder="Select Court" />
//                             </SelectTrigger>
//                           </FormControl>
//                           <SelectContent>
//                             {courtOptions.map((option) => (
//                               <SelectItem
//                                 key={option.value}
//                                 value={option.value}
//                               >
//                                 {option.title}
//                               </SelectItem>
//                             ))}
//                           </SelectContent>
//                         </Select>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />

//                   {/* Hidden File Input Logic */}
//                   <FormField
//                     control={form.control}
//                     name="image"
//                     render={({ field: { onChange, value, ...rest } }) => (
//                       <FormItem className="hidden">
//                         <FormControl>
//                           <Input
//                             id="image"
//                             type="file"
//                             accept="image/*"
//                             onChange={(e) => {
//                               const file = e.target.files?.[0];
//                               if (file) {
//                                 onChange(file);
//                                 const reader = new FileReader();
//                                 reader.onloadend = () =>
//                                   setPreview(reader.result as string);
//                                 reader.readAsDataURL(file);
//                               }
//                             }}
//                             {...rest}
//                           />
//                         </FormControl>
//                       </FormItem>
//                     )}
//                   />
//                 </div>

//                 <div className="pt-4">
//                   <button
//                     type="submit"
//                     className="flex items-center justify-center w-full gap-2 transition-transform md:w-auto active:scale-95 bg-[#604B33] text-white font-semibold px-6 py-3 rounded-md cursor-pointer"
//                   >
//                     Add Associate <Plus size={18} />
//                   </button>
//                 </div>
//               </form>
//             </Form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { useNavigate, useParams } from "react-router-dom";
import imageCompression from "browser-image-compression";
import { useGetAssociate } from "@/hooks/useGetAssociate";
import BlogsLoading from "@/components/ui/Loadings/BlogsLoading";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createAssociate } from "@/RTK/features/associates/associatesSlice";
import toast from "react-hot-toast";
import { useAppDispatch } from "@/hooks/hooks";
import type { AssociatesInterface } from "@/Interfaces/AccociatesInterface";
import {
  Plus,
  UploadCloud,
  UserPlus,
  User,
  Briefcase,
  Gavel,
  Loader2,
  Camera,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { images } from "@/assets/assets";
import { useState } from "react";
import AddBlogsLoading from "@/components/ui/Loadings/AddBlogsLoading";
import CloudinaryImageUploader from "txb-cloudinary-image-uploader";

export default function AddAssociates() {
  const { _id } = useParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Assuming this hook handles fetching if _id exists, though this is an "Add" page.
  const { loading } = useGetAssociate(_id ? _id : "");
  const [preview, setPreview] = useState<string | null>(null);

  const designationOptions = [
    { value: "Head of Legal", title: "Head of Legal" },
    { value: "Senior Consultant", title: "Senior Consultant" },
    { value: "Consultant", title: "Consultant" },
    { value: "Associate", title: "Associate" },
  ];

  const courtOptions = [
    { value: "Bangladesh Supreme Court", title: "Bangladesh Supreme Court" },
    { value: "Dhaka Judge Court", title: "Dhaka Judge Court" },
  ];

  const fromSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters long"),
    position: z.string().min(1, "Please select a designation"),
    image: z
      .instanceof(File)
      .refine(
        (file) => file.size <= 3.1 * 1024 * 1024,
        "Image size must be less than 3.1MB",
      ),
    court: z.string().min(1, "Please select a court"),
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof fromSchema>>({
    mode: "onChange",
    resolver: zodResolver(fromSchema),
  });

  const onSubmit = async (data: z.infer<typeof fromSchema>) => {
    try {
      setIsSubmitting(true);

      let imagePayload = null;

      const compressedOption = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      };

      if (data.image) {
        const compressedImage = await imageCompression(
          data.image,
          compressedOption,
        );

        imagePayload = await CloudinaryImageUploader(
          compressedImage,
          import.meta.env.VITE_CLOUDINARY_PRESET,
          import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
        );
      }

      const formData: AssociatesInterface = {
        name: data.name,
        position: data.position,
        image: imagePayload,
        court: data.court,
      };

      await dispatch(createAssociate(formData)).unwrap();
      toast.success("Associate added successfully");
      navigate("/dashboard/secure/admin-panel/manage-associates");
      form.reset();
      setPreview(null);
    } catch (error) {
      toast.error("Something went wrong!");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) return <BlogsLoading />;
  if (isSubmitting) return <AddBlogsLoading title="Adding Associate..." />;

  return (
    <div className="min-h-screen p-4 font-sans bg-gray-50/50 md:p-8">
      <section className="max-w-5xl mx-auto overflow-hidden bg-white border border-gray-200 shadow-sm rounded-xl">
        {/* Header Section */}
        <div className="bg-[#604B33]/5 px-6 py-8 border-b border-[#604B33]/10">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl md:text-3xl font-bold text-[#604B33] flex items-center gap-2">
              <UserPlus className="w-8 h-8 opacity-80" />
              Add Associate
            </h1>
            <p className="ml-1 text-sm text-gray-500 md:text-base">
              Add a new legal expert to your team.
            </p>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                {/* Left Column: Image Upload (4 cols) */}
                <div className="flex flex-col items-center space-y-4 lg:col-span-4">
                  <div className="flex flex-col items-center justify-center w-full p-6 border border-gray-200 rounded-xl bg-gray-50/50">
                    <FormLabel className="flex items-center gap-2 mb-4 font-semibold text-gray-700">
                      <Camera size={16} /> Profile Photo
                    </FormLabel>

                    <FormField
                      control={form.control}
                      name="image"
                      render={({ field: { onChange, value, ...rest } }) => (
                        <FormItem>
                          <FormControl>
                            <div className="relative cursor-pointer group">
                              <label
                                htmlFor="image"
                                className="relative block cursor-pointer"
                              >
                                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg ring-1 ring-gray-200 relative group-hover:ring-[#604B33]/50 transition-all">
                                  <img
                                    src={preview || images.avatar}
                                    alt="avatar"
                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                  />
                                  {/* Overlay */}
                                  <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 opacity-0 bg-black/40 group-hover:opacity-100">
                                    <UploadCloud className="w-8 h-8 mb-1 text-white" />
                                    <span className="text-xs font-medium text-white">
                                      Change Photo
                                    </span>
                                  </div>
                                </div>
                              </label>

                              <Input
                                id="image"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (file) {
                                    onChange(file);
                                    const reader = new FileReader();
                                    reader.onloadend = () =>
                                      setPreview(reader.result as string);
                                    reader.readAsDataURL(file);
                                  }
                                }}
                                {...rest}
                              />
                            </div>
                          </FormControl>
                          <FormMessage className="mt-2 text-center" />
                        </FormItem>
                      )}
                    />

                    <div className="mt-4 space-y-1 text-center">
                      <p className="text-xs text-gray-400">
                        Allowed formats: JPG, PNG, GIF
                      </p>
                      <p className="text-xs text-gray-400">Max size: 3.1 MB</p>
                    </div>
                  </div>
                </div>

                {/* Right Column: Form Fields (8 cols) */}
                <div className="space-y-6 lg:col-span-8">
                  {/* Name Input */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 font-semibold text-gray-700">
                          <User size={16} /> Full Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="px-4 py-6 transition-all border-gray-200 rounded-lg bg-gray-50/50 focus:bg-white"
                            placeholder="e.g. Adv. John Doe"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Designation Select */}
                    <FormField
                      control={form.control}
                      name="position"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2 font-semibold text-gray-700">
                            <Briefcase size={16} /> Designation
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="py-6 border-gray-200 bg-gray-50/50 focus:bg-white">
                                <SelectValue placeholder="Select Designation" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {designationOptions.map((option) => (
                                <SelectItem
                                  key={option.value}
                                  value={option.value}
                                >
                                  {option.title}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Court Select */}
                    <FormField
                      control={form.control}
                      name="court"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2 font-semibold text-gray-700">
                            <Gavel size={16} /> Associated Court
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="py-6 border-gray-200 bg-gray-50/50 focus:bg-white">
                                <SelectValue placeholder="Select Court" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {courtOptions.map((option) => (
                                <SelectItem
                                  key={option.value}
                                  value={option.value}
                                >
                                  {option.title}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`
                        flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-white font-medium text-lg shadow-lg w-full md:w-auto
                        transform active:scale-95 transition-all duration-200
                        ${
                          isSubmitting
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-[#604B33] hover:bg-[#4a3a28] hover:shadow-xl"
                        }
                      `}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="animate-spin" size={20} />{" "}
                          Adding...
                        </>
                      ) : (
                        <>
                          Add Associate{" "}
                          <Plus size={20} className="stroke-[3px]" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </section>
    </div>
  );
}
