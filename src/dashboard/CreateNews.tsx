// import { useForm } from "react-hook-form";
// import * as z from "zod";
// import imageCompression from "browser-image-compression";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { zodResolver } from "@hookform/resolvers/zod";
// import TipTap from "@/components/ui/TextEditor/TipTap";
// import type { Blog } from "@/Interfaces/blogsInterface";
// import { createBlog } from "@/RTK/features/blogs/blogsSlice";
// import { useAppDispatch } from "@/hooks/hooks";
// import toast from "react-hot-toast";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { options } from "@/data/blogsCategory";
// // import { uploadToCloudinary } from "@/utils/uploadToCloudinary";
// import { Plus, UploadCloud } from "lucide-react"; // Added X icon for clear functionality optional
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import AddBlogsLoading from "@/components/ui/Loadings/AddBlogsLoading";
// import CloudinaryImageUploader from "txb-cloudinary-image-uploader";

// export default function CreateNews() {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   // Preview state ব্যবহার করা হয়েছে
//   const [preview, setPreview] = useState<string | null>(null);
//   const navigate = useNavigate();
//   const currentDate = new Date().toDateString();

//   const fromSchema = z.object({
//     title: z.string().min(3, "Title must be at least 3 characters long"),
//     category: z.string().min(1, "Please select a category"),
//     date: z.string().min(3, "Date is required"),
//     author: z.string().min(3, "Author must be at least 3 characters long"),
//     image: z
//       .instanceof(File)
//       .refine(
//         (file) => file.size <= 3.1 * 1024 * 1024,
//         "Image size must be less than 3.1MB",
//       ),
//     relatedVideoLink: z.string().optional(),
//     content: z.string().min(10, "Content must be at least 10 characters long"),
//   });

//   const form = useForm<z.infer<typeof fromSchema>>({
//     mode: "onChange",
//     resolver: zodResolver(fromSchema),
//     defaultValues: {
//       date: currentDate,
//       author: "অ্যাড. সামিউল ইসলাম প্রিন্স",
//       content: "",
//     },
//   });

//   const dispatch = useAppDispatch();

//   const onSubmit = async (data: z.infer<typeof fromSchema>) => {
//     try {
//       setIsSubmitting(true);
//       const compressedOption = {
//         maxSizeMB: 1,
//         maxWidthOrHeight: 1920,
//         useWebWorker: true,
//       };

//       // ১. পরিবর্তন: শুরুতে এটি null বা undefined রাখুন, স্ট্রিং "" নয়
//       let imagePayload = null;

//       if (data.image) {
//         const compressedImage = await imageCompression(
//           data.image,
//           compressedOption,
//         );

//         // using txb-cloudinary-image-uploader
//         imagePayload = await CloudinaryImageUploader(
//           compressedImage,
//           import.meta.env.VITE_CLOUDINARY_PRESET,
//           import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
//         );
//       }

//       const formData: Blog = {
//         ...data,
//         // ৩. পরিবর্তন: পুরো অবজেক্টটি পাস করছেন (ব্যাকএন্ড স্কিমা এটি এক্সপেক্ট করছে)
//         image: imagePayload,
//         relatedVideoLink: data.relatedVideoLink || "",
//       };

//       await dispatch(createBlog(formData)).unwrap();
//       toast.success("Blog added successfully");
//       setPreview(null);
//       navigate("/dashboard/secure/admin-panel/manage-blogs");
//     } catch (error) {
//       toast.error("Something went wrong!");
//       console.error("Submission Error:", error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   if (isSubmitting) return <AddBlogsLoading title="Blog Creating..." />;

//   return (
//     <section className="max-w-5xl p-4 mx-auto space-y-6 bg-white border rounded-lg md:p-8 border-black/10">
//       <header className="space-y-1">
//         <h1 className="text-2xl md:text-3xl font-bold text-[#604B33]">
//           Create a News
//         </h1>
//         <p className="text-sm text-gray-500">
//           Fill in the details below to publish a new post.
//         </p>
//       </header>

//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//           {/* Title & Category Row */}
//           <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
//             <FormField
//               control={form.control}
//               name="title"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="font-semibold">Title</FormLabel>
//                   <FormControl>
//                     <Input
//                       className="py-5 rounded-md md:py-6"
//                       placeholder="e.g. Legal rules for marriage..."
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="category"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="font-semibold">Category</FormLabel>
//                   <Select
//                     onValueChange={field.onChange}
//                     defaultValue={field.value}
//                   >
//                     <FormControl>
//                       <SelectTrigger className="py-5 rounded-md md:py-6">
//                         <SelectValue placeholder="Select Category" />
//                       </SelectTrigger>
//                     </FormControl>
//                     <SelectContent>
//                       {options.map((option) => (
//                         <SelectItem key={option.value} value={option.value}>
//                           {option.title}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>

//           {/* Date & Author Row */}
//           <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
//             <FormField
//               control={form.control}
//               name="date"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="font-semibold">Date</FormLabel>
//                   <FormControl>
//                     <Input className="py-5 rounded-md md:py-6" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="author"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="font-semibold">Author</FormLabel>
//                   <FormControl>
//                     <Input className="py-5 rounded-md md:py-6" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>

//           {/* Video Link & Image Upload Row */}
//           <div className="grid items-start grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
//             <FormField
//               control={form.control}
//               name="relatedVideoLink"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="font-semibold">
//                     Video Link (Optional)
//                   </FormLabel>
//                   <FormControl>
//                     <Input
//                       className="py-5 rounded-md md:py-6"
//                       placeholder="YouTube/Vimeo URL"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               control={form.control}
//               name="image"
//               render={({ field: { onChange, value, ...rest } }) => (
//                 <FormItem>
//                   <FormLabel className="font-semibold">
//                     Thumbnail Image
//                   </FormLabel>
//                   <FormControl>
//                     <div className="relative group">
//                       <label
//                         htmlFor="image-upload"
//                         className={`flex flex-col items-center justify-center w-full h-32 md:h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-all overflow-hidden relative ${preview ? "border-none p-0" : ""}`}
//                       >
//                         {preview ? (
//                           // Preview Image Logic
//                           <div className="relative w-full h-full group">
//                             <img
//                               src={preview}
//                               alt="Preview"
//                               className="object-cover w-full h-full rounded-lg"
//                             />
//                             {/* Hover Overlay to show user they can change it */}
//                             <div className="absolute inset-0 flex items-center justify-center transition-opacity rounded-lg opacity-0 bg-black/40 group-hover:opacity-100">
//                               <p className="text-sm font-semibold text-white">
//                                 Change Image
//                               </p>
//                             </div>
//                           </div>
//                         ) : (
//                           // Default Upload UI
//                           <div className="flex flex-col items-center justify-center pt-5 pb-6">
//                             <UploadCloud className="w-8 h-8 mb-2 text-gray-400 group-hover:text-[#604B33]" />
//                             <p className="text-xs text-gray-500 md:text-sm">
//                               <span className="font-bold">
//                                 Click to update image
//                               </span>
//                             </p>
//                             <p className="text-[10px] text-gray-400 mt-1">
//                               Leave blank to keep existing image
//                             </p>
//                           </div>
//                         )}

//                         <Input
//                           id="image-upload"
//                           type="file"
//                           accept="image/*"
//                           className="hidden"
//                           onChange={(e) => {
//                             const file = e.target.files?.[0];
//                             if (file) {
//                               onChange(file);
//                               // Create Preview URL
//                               const objectUrl = URL.createObjectURL(file);
//                               setPreview(objectUrl);
//                             }
//                           }}
//                           {...rest}
//                         />
//                       </label>

//                       {/* Filename text below box (optional - keeping your original style logic) */}
//                       {!preview && form.watch("image") instanceof File && (
//                         <p className="text-xs text-[#604B33] mt-1 italic">
//                           New file selected: {form.watch("image").name}
//                         </p>
//                       )}
//                     </div>
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>

//           {/* Full Width Content Area */}
//           <FormField
//             control={form.control}
//             name="content"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel className="font-semibold">Blog Content</FormLabel>
//                 <FormControl>
//                   <div className="min-h-[300px] border rounded-md overflow-hidden bg-white">
//                     <TipTap
//                       description={field.value}
//                       onChange={field.onChange}
//                     />
//                   </div>
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <div className="pt-4">
//             <button
//               type="submit"
//               className="flex items-center justify-center w-full gap-2 transition-transform md:w-auto active:scale-95 bg-[#604B33] text-white font-semibold px-6 py-3 rounded-md cursor-pointer"
//             >
//               Publish Blog <Plus size={20} />
//             </button>
//           </div>
//         </form>
//       </Form>
//     </section>
//   );
// }
import { useForm } from "react-hook-form";
import * as z from "zod";
import imageCompression from "browser-image-compression";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import TipTap from "@/components/ui/TextEditor/TipTap";
import { useAppDispatch } from "@/hooks/hooks";
import toast from "react-hot-toast";
import {
  Plus,
  UploadCloud,
  Type,
  Calendar,
  User,
  FileText,
  ImageIcon,
  Loader2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AddBlogsLoading from "@/components/ui/Loadings/AddBlogsLoading";
import CloudinaryImageUploader from "txb-cloudinary-image-uploader";
import { createNews } from "@/RTK/features/news/newsSlice";
import type { News } from "@/Interfaces/NewsInterface";

export default function CreateNews() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const navigate = useNavigate();
  const currentDate = new Date().toDateString();

  const fromSchema = z.object({
    title: z.string().min(3, "Title must be at least 3 characters long"),
    date: z.string().min(3, "Date is required"),
    author: z.string().min(3, "Author must be at least 3 characters long"),
    image: z
      .instanceof(File)
      .refine(
        (file) => file.size <= 3.1 * 1024 * 1024,
        "Image size must be less than 3.1MB",
      ),
    content: z.string().min(10, "Content must be at least 10 characters long"),
  });

  const form = useForm<z.infer<typeof fromSchema>>({
    mode: "onChange",
    resolver: zodResolver(fromSchema),
    defaultValues: {
      date: currentDate,
      author: "অ্যাড. সামিউল ইসলাম প্রিন্স",
      content: "",
    },
  });

  const dispatch = useAppDispatch();

  const onSubmit = async (data: z.infer<typeof fromSchema>) => {
    try {
      setIsSubmitting(true);
      const compressedOption = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      };

      let imagePayload = null;

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

      const formData: News = {
        ...data,
        image: imagePayload,
      };

      await dispatch(createNews(formData)).unwrap();
      toast.success("News published successfully!");
      setPreview(null);
      navigate("/dashboard/secure/admin-panel/manage-news");
    } catch (error) {
      toast.error("Failed to publish news.");
      console.error("Submission Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitting) return <AddBlogsLoading title="Publishing News..." />;

  return (
    <div className="min-h-screen p-4 font-sans bg-gray-50/50 md:p-8">
      <section className="max-w-4xl mx-auto overflow-hidden bg-white border border-gray-200 shadow-sm rounded-xl">
        {/* Header Section */}
        <div className="bg-[#604B33]/5 px-6 py-8 border-b border-[#604B33]/10">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl md:text-3xl font-bold text-[#604B33] flex items-center gap-2">
              <FileText className="w-8 h-8 opacity-80" />
              Create News
            </h1>
            <p className="ml-1 text-sm text-gray-500 md:text-base">
              Share the latest updates with your audience.
            </p>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Title Section */}
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 font-semibold text-gray-700">
                        <Type size={16} /> Headline
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            className="py-6 px-4 text-lg font-medium border-gray-200 focus:border-[#604B33] focus:ring-[#604B33]/20 transition-all rounded-lg"
                            placeholder="Enter a catchy headline..."
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Meta Info Row */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 font-semibold text-gray-700">
                        <Calendar size={16} /> Date
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="py-5 border-gray-200 bg-gray-50/50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="author"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 font-semibold text-gray-700">
                        <User size={16} /> Author
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="py-5 border-gray-200 bg-gray-50/50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Image Upload Section */}
              <FormField
                control={form.control}
                name="image"
                render={({ field: { onChange, value, ...rest } }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 font-semibold text-gray-700">
                      <ImageIcon size={16} /> Featured Image
                    </FormLabel>
                    <FormControl>
                      <div className="relative group">
                        <label
                          htmlFor="image-upload"
                          className={`
                            relative flex flex-col items-center justify-center w-full h-56 md:h-64 
                            border-2 border-dashed rounded-xl cursor-pointer transition-all duration-300
                            ${
                              preview
                                ? "border-transparent shadow-md"
                                : "border-gray-300 bg-gray-50 hover:bg-[#604B33]/5 hover:border-[#604B33]/40"
                            }
                          `}
                        >
                          {preview ? (
                            <div className="relative w-full h-full overflow-hidden transition-shadow rounded-xl group-hover:shadow-lg">
                              <img
                                src={preview}
                                alt="Preview"
                                className="object-cover w-full h-full transition-transform duration-500 transform group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                <div className="flex items-center gap-2 px-4 py-2 text-white border rounded-full bg-white/20 border-white/30 backdrop-blur-md">
                                  <UploadCloud size={18} /> Change Image
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="p-6 space-y-3 text-center">
                              <div className="w-16 h-16 bg-[#604B33]/10 text-[#604B33] rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                                <UploadCloud size={28} />
                              </div>
                              <div className="space-y-1">
                                <p className="text-sm font-semibold text-gray-700">
                                  Click to upload or drag and drop
                                </p>
                                <p className="text-xs text-gray-500">
                                  SVG, PNG, JPG or GIF (max. 3MB)
                                </p>
                              </div>
                            </div>
                          )}

                          <Input
                            id="image-upload"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                onChange(file);
                                const objectUrl = URL.createObjectURL(file);
                                setPreview(objectUrl);
                              }
                            }}
                            {...rest}
                          />
                        </label>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Editor Section */}
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 font-semibold text-gray-700">
                      <FileText size={16} /> Content
                    </FormLabel>
                    <FormControl>
                      <div className="min-h-[350px] border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white focus-within:border-[#604B33] focus-within:ring-1 focus-within:ring-[#604B33] transition-all">
                        <TipTap
                          description={field.value}
                          onChange={field.onChange}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <div className="flex justify-end pt-4">
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
                      Publishing...
                    </>
                  ) : (
                    <>
                      Publish News <Plus size={20} className="stroke-[3px]" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </Form>
        </div>
      </section>
    </div>
  );
}
