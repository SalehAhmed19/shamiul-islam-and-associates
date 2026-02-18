// import imageCompression from "browser-image-compression";
// import { useNavigate, useParams } from "react-router-dom";
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
// import { updateAssociate } from "@/RTK/features/associates/associatesSlice";
// import toast from "react-hot-toast";
// import { useAppDispatch } from "@/hooks/hooks";
// import type { AssociatesInterface } from "@/Interfaces/AccociatesInterface";
// import { Edit, UploadCloud } from "lucide-react";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { useEffect, useState } from "react";
// import CloudinaryImageUploader from "txb-cloudinary-image-uploader";

// export default function EditAssociate() {
//   const { _id } = useParams();
//   const { associate, loading } = useGetAssociate(_id ? _id : "");
//   const [preview, setPreview] = useState<string | null>(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const designationOptions = [
//     { value: "Head of Legal", title: "Head of Legal" },
//     { value: "Senior Consultant", title: "Senior Consultant" },
//     { value: "Consultant", title: "Consultant" },
//     { value: "Associates", title: "Associates" },
//   ];

//   const courtOptions = [
//     { value: "Bangladesh Supreme Court", title: "Bangladesh Supreme Court" },
//     { value: "Dhaka Judge Court", title: "Dhaka Judge Court" },
//   ];

//   const fromSchema = z.object({
//     name: z.string().min(3, "Name must be at least 3 characters long"),
//     position: z
//       .string()
//       .min(3, "Designation must be at least 3 characters long"),
//     image: z.any().optional(),
//     court: z.string().min(3, "Court must be at least 3 characters long"),
//   });

//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();

//   const form = useForm<z.infer<typeof fromSchema>>({
//     mode: "onChange",
//     resolver: zodResolver(fromSchema),
//   });

//   // Reset form values when associate data is fetched
//   useEffect(() => {
//     if (associate) {
//       form.reset({
//         name: associate.name,
//         position: associate.position,
//         court: associate.court,
//         image: associate.image?.url,
//       });
//       setPreview(associate.image?.url as string);
//     }
//   }, [associate, form]);

//   const onSubmit = async (data: z.infer<typeof fromSchema>) => {
//     try {
//       setIsSubmitting(true);
//       const compressedOption = {
//         maxSizeMB: 1,
//         maxWidthOrHeight: 1920,
//         useWebWorker: true,
//       };

//       let imagePayload = null;
//       // Check if a new file was selected
//       if (data.image instanceof File) {
//         const compressedImage = await imageCompression(
//           data.image,
//           compressedOption,
//         );
//         imagePayload = await CloudinaryImageUploader(
//           compressedImage,
//           import.meta.env.VITE_CLOUDINARY_PRESET,
//           import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
//         );
//       }

//       const formData: AssociatesInterface = {
//         _id: associate?._id || "",
//         name: data.name ? data.name : associate?.name || "",
//         position: data.position ? data.position : associate?.position || "",
//         image: imagePayload ? imagePayload : associate?.image || null,
//         court: data.court ? data.court : associate?.court || "",
//       };

//       await dispatch(updateAssociate(formData)).unwrap();
//       toast.success("Associate updated successfully");
//       navigate("/dashboard/secure/admin-panel/manage-associates");
//     } catch (error) {
//       toast.error("Update failed. Please try again.");
//       console.error(error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   if (loading) return <BlogsLoading />;

//   return (
//     <section className="h-screen max-w-6xl px-4 py-6 mx-auto space-y-8 md:px-0">
//       <Heading>Edit Associate</Heading>

//       <div className="space-y-6">
//         <h3 className="text-xl md:text-2xl font-bold text-[#604B33]">
//           Associate Profile Info
//         </h3>

//         {/* Responsive Grid: Stacks on mobile, Side-by-side on desktop */}
//         <div className="grid items-start grid-cols-1 gap-8 lg:grid-cols-12">
//           {/* PHOTO UPLOAD SECTION (4 columns on desktop) */}
//           <div className="flex flex-col items-center p-6 bg-white border lg:col-span-4 border-black/10 rounded-xl">
//             <p className="self-start mb-6 text-xs font-bold tracking-wider text-gray-400 uppercase">
//               Profile Photo
//             </p>

//             <label
//               htmlFor="image-input"
//               className="relative block mx-auto cursor-pointer group w-fit"
//             >
//               {/* This container has rounded-full AND overflow-hidden to clip everything inside it */}
//               <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-gray-50 shadow-md group-hover:border-[#604B33] transition-all">
//                 <img
//                   src={preview || "/placeholder-avatar.png"}
//                   alt="Associate Preview"
//                   className="object-cover w-full h-full"
//                 />

//                 {/* Moving the overlay inside the overflow-hidden div ensures it is perfectly round */}
//                 <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 bg-black/40 group-hover:opacity-100">
//                   <UploadCloud className="text-white" size={32} />
//                 </div>
//               </div>

//               <p className="mt-4 text-center text-sm font-semibold text-[#604B33] group-hover:underline">
//                 Update Image
//               </p>
//             </label>

//             <p className="text-center text-[10px] text-gray-400 mt-4 leading-relaxed">
//               Allowed formats: *.jpeg, *.jpg, *.png <br /> Max size: 3.1 MB
//             </p>
//           </div>

//           {/* FORM SECTION (8 columns on desktop) */}
//           <div className="p-6 bg-white border lg:col-span-8 md:p-8 border-black/10 rounded-xl ">
//             <Form {...form}>
//               <form
//                 onSubmit={form.handleSubmit(onSubmit)}
//                 className="space-y-6"
//               >
//                 <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//                   <FormField
//                     control={form.control}
//                     name="name"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel className="font-semibold text-gray-700">
//                           Full Name
//                         </FormLabel>
//                         <FormControl>
//                           <Input
//                             className="rounded-md py-6 border-gray-300 focus:ring-1 focus:ring-[#604B33]"
//                             placeholder="Enter name"
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
//                         <FormLabel className="font-semibold text-gray-700">
//                           Designation
//                         </FormLabel>
//                         <Select
//                           onValueChange={field.onChange}
//                           value={field.value}
//                         >
//                           <FormControl>
//                             <SelectTrigger className="w-full py-6 border-gray-300 rounded-md">
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
//                         <FormLabel className="font-semibold text-gray-700">
//                           Practicing Court
//                         </FormLabel>
//                         <Select
//                           onValueChange={field.onChange}
//                           value={field.value}
//                         >
//                           <FormControl>
//                             <SelectTrigger className="w-full py-6 border-gray-300 rounded-md">
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

//                   {/* Invisible File Input handled via Label */}
//                   <FormField
//                     control={form.control}
//                     name="image"
//                     render={({ field: { onChange, value, ...rest } }) => (
//                       <FormItem className="hidden">
//                         <FormControl>
//                           <Input
//                             id="image-input"
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

//                 <div className="flex flex-col gap-4 pt-4 sm:flex-row">
//                   <button
//                     type="submit"
//                     className="flex items-center justify-center w-full gap-2 transition-transform md:w-auto active:scale-95 bg-[#604B33] text-white font-semibold px-6 py-3 rounded-md cursor-pointer"
//                   >
//                     {isSubmitting ? "Updating..." : "Update Associate"}{" "}
//                     <Edit size={18} />
//                   </button>
//                   <button
//                     type="button"
//                     // variant="outline"
//                     onClick={() => navigate(-1)}
//                     className="w-full h-12 px-6 py-3 font-semibold text-white transition-colors duration-300 bg-red-700 border-gray-300 rounded-md cursor-pointer sm:w-auto hover:bg-red-800"
//                   >
//                     Cancel
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
import { updateAssociate } from "@/RTK/features/associates/associatesSlice";
import toast from "react-hot-toast";
import { useAppDispatch } from "@/hooks/hooks";
import type { AssociatesInterface } from "@/Interfaces/AccociatesInterface";
import {
  UserCog,
  UploadCloud,
  User,
  Briefcase,
  Gavel,
  Loader2,
  Camera,
  Save,
  X,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import CloudinaryImageUploader from "txb-cloudinary-image-uploader";
import AddBlogsLoading from "@/components/ui/Loadings/AddBlogsLoading"; // Ensure this import exists
import { images } from "@/assets/assets"; // Assuming you have a default avatar here

export default function EditAssociate() {
  const { _id } = useParams();
  const { associate, loading } = useGetAssociate(_id ? _id : "");
  const [preview, setPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    position: z
      .string()
      .min(3, "Designation must be at least 3 characters long"),
    image: z.any().optional(),
    court: z.string().min(3, "Court must be at least 3 characters long"),
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof fromSchema>>({
    mode: "onChange",
    resolver: zodResolver(fromSchema),
  });

  // Reset form values when associate data is fetched
  useEffect(() => {
    if (associate) {
      form.reset({
        name: associate.name,
        position: associate.position,
        court: associate.court,
        // We don't set the image field here directly to avoid validation issues with existing URLs
      });
      // Set preview to existing image URL
      if (associate.image?.url) {
        setPreview(associate.image.url);
      }
    }
  }, [associate, form]);

  const onSubmit = async (data: z.infer<typeof fromSchema>) => {
    try {
      setIsSubmitting(true);
      const compressedOption = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      };

      let imagePayload = null;
      // Check if a new file was selected
      if (data.image instanceof File) {
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
        _id: associate?._id || "",
        name: data.name,
        position: data.position,
        // Logic: New Image ? New Payload : Existing Data
        image: imagePayload ? imagePayload : associate?.image || null,
        court: data.court,
      };

      await dispatch(updateAssociate(formData)).unwrap();
      toast.success("Associate updated successfully");
      navigate("/dashboard/secure/admin-panel/manage-associates");
    } catch (error) {
      toast.error("Update failed. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) return <BlogsLoading />;
  if (isSubmitting) return <AddBlogsLoading title="Updating Associate..." />;

  return (
    <div className="min-h-screen p-4 font-sans bg-gray-50/50 md:p-8">
      <section className="max-w-5xl mx-auto overflow-hidden bg-white border border-gray-200 shadow-sm rounded-xl">
        {/* Header Section */}
        <div className="bg-[#604B33]/5 px-6 py-8 border-b border-[#604B33]/10">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl md:text-3xl font-bold text-[#604B33] flex items-center gap-2">
              <UserCog className="w-8 h-8 opacity-80" />
              Edit Associate Profile
            </h1>
            <p className="ml-1 text-sm text-gray-500 md:text-base">
              Update details for{" "}
              <span className="font-semibold">{associate?.name}</span>.
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
                                htmlFor="image-input"
                                className="relative block cursor-pointer"
                              >
                                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg ring-1 ring-gray-200 relative group-hover:ring-[#604B33]/50 transition-all">
                                  <img
                                    src={
                                      preview ||
                                      images.avatar ||
                                      "/placeholder.png"
                                    }
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
                                id="image-input"
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

                          {/* New file indicator */}
                          {form.watch("image") instanceof File && (
                            <p className="text-xs text-[#604B33] mt-2 italic text-center">
                              New file selected
                            </p>
                          )}
                          <FormMessage className="mt-2 text-center" />
                        </FormItem>
                      )}
                    />

                    <div className="mt-4 space-y-1 text-center">
                      <p className="text-xs text-gray-400">
                        Allowed formats: JPG, PNG
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
                            placeholder="Enter full name"
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
                            value={field.value}
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
                            <Gavel size={16} /> Practicing Court
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
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

                  {/* Action Buttons */}
                  <div className="flex flex-col justify-end gap-4 pt-6 md:flex-row">
                    <button
                      type="button"
                      onClick={() =>
                        navigate(
                          "/dashboard/secure/admin-panel/manage-associates",
                        )
                      }
                      className="px-6 py-3.5 rounded-lg text-gray-700 font-medium bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 active:scale-95"
                    >
                      <X size={18} /> Cancel
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`
                        flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-white font-medium text-lg shadow-lg
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
                          Updating...
                        </>
                      ) : (
                        <>
                          Save Changes <Save size={20} />
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
