import { useForm } from "react-hook-form";
import * as z from "zod";
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
import type { Blog } from "@/Interfaces/blogsInterface";
import { updateBlog } from "@/RTK/features/blogs/blogsSlice";
import { useAppDispatch } from "@/hooks/hooks";
import toast from "react-hot-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { options } from "@/data/blogsCategory";
import { Edit, UploadCloud } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import AddBlogsLoading from "@/components/ui/Loadings/AddBlogsLoading";
import { useGetBlog } from "@/hooks/useGetBlog";
import imageCompression from "browser-image-compression";
import CloudinaryImageUploader from "txb-cloudinary-image-uploader";

export default function EditForm() {
  const { id } = useParams();
  const [preview, setPreview] = useState<string | null>(null);

  // id না থাকলে খালি স্ট্রিং পাঠানো হচ্ছে যাতে useGetBlog ক্রাশ না করে
  const { blog } = useGetBlog(id || "");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // স্কিমার নাম ঠিক করা হয়েছে: fromSchema -> formSchema
  const formSchema = z.object({
    title: z
      .string()
      .min(3, "Title must be at least 3 characters long")
      .optional()
      .or(z.literal("")),
    category: z
      .string()
      .min(1, "Category is required")
      .optional()
      .or(z.literal("")),
    date: z.string().min(1, "Date is required").optional().or(z.literal("")),
    author: z
      .string()
      .min(1, "Author is required")
      .optional()
      .or(z.literal("")),
    image: z.any().optional(),
    relatedVideoLink: z.string().optional().or(z.literal("")),
    content: z
      .string()
      .min(10, "Content needs to be more descriptive")
      .optional()
      .or(z.literal("")),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    mode: "onChange",
    resolver: zodResolver(formSchema),
  });

  // Update form values AND Preview when blog data arrives
  useEffect(() => {
    if (blog) {
      // ১. ক্যাটাগরি ম্যাচিং লজিক (Title বা Value দুটোর সাথেই চেক করবে)
      const matchedOption = options.find(
        (opt) => opt.title === blog.category || opt.value === blog.category,
      );
      const categoryValue = matchedOption ? matchedOption.value : blog.category;

      form.reset({
        title: blog.title,
        category: categoryValue, // ফিক্সড ক্যাটাগরি ভ্যালু
        date: blog.date,
        author: blog.author || "অ্যাড. সামিউল ইসলাম প্রিন্স",
        relatedVideoLink: blog.relatedVideoLink,
        content: blog.content,
      });

      // ২. প্রিভিউ ইমেজ ফিক্স: আগের ছবি থাকলে সেটা দেখাবে
      if (blog.image && blog.image.url) {
        setPreview(blog.image.url);
      }
    }
  }, [blog, form]);

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      setIsSubmitting(true);
      const compressedOption = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      };

      let imagePayload = null;

      // যদি নতুন ফাইল সিলেক্ট করা হয়, তবেই আপলোড হবে
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

      const formData: Blog = {
        _id: blog?._id || "",
        title: data.title || "",
        category: data.category || "",
        date: data.date || "",
        author: data.author || "অ্যাড. সামিউল ইসলাম প্রিন্স",
        // লজিক: নতুন ছবি ? নতুন ছবি : (আগের ছবি ? আগের ছবি : null)
        image: imagePayload ? imagePayload : blog?.image || null,
        relatedVideoLink: data.relatedVideoLink || "",
        content: data.content || "",
        // slug পাঠানো হচ্ছে না, যাতে সার্ভারে ডুপ্লিকেট এরর না দেয়
      };

      await dispatch(updateBlog(formData)).unwrap();
      toast.success("Blog updated successfully");
      navigate("/dashboard/secure/admin-panel/manage-blogs");
    } catch (error) {
      toast.error("Something went wrong!");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitting) return <AddBlogsLoading title="Blog Updating..." />;

  return (
    <section className="max-w-5xl p-4 mx-auto space-y-8 bg-white border rounded-lg shadow-sm md:p-8 border-black/10">
      <header className="space-y-1">
        <h1 className="text-2xl md:text-3xl font-bold text-[#604B33]">
          Update Blog Post
        </h1>
        <p className="text-sm text-gray-500">
          Fill in the details below to update a blog post.
        </p>
      </header>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Grid for Title and Category */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Title</FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-md py-6 border-gray-300 focus:ring-2 focus:ring-[#604B33]"
                      placeholder="Enter title"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Category</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="py-6 border-gray-300 rounded-md">
                        <SelectValue placeholder="Select Category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
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

          {/* Grid for Date and Author */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Date</FormLabel>
                  <FormControl>
                    <Input
                      className="py-6 border-gray-300 rounded-md"
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
                  <FormLabel className="font-semibold">Author</FormLabel>
                  <FormControl>
                    <Input
                      className="py-6 border-gray-300 rounded-md"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Video Link & Image Upload Section */}
          <div className="grid items-start grid-cols-1 gap-6 md:grid-cols-2">
            <FormField
              control={form.control}
              name="relatedVideoLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">
                    Related Video Link
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="py-6 border-gray-300 rounded-md"
                      placeholder="Paste video URL"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="image"
              render={({ field: { onChange, value, ...rest } }) => (
                <FormItem>
                  <FormLabel className="font-semibold">
                    Thumbnail Image
                  </FormLabel>
                  <FormControl>
                    <div className="relative group">
                      <label
                        htmlFor="image-upload"
                        className={`flex flex-col items-center justify-center w-full h-32 md:h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-all overflow-hidden relative ${preview ? "border-none p-0" : ""}`}
                      >
                        {preview ? (
                          <div className="relative w-full h-full group">
                            <img
                              src={preview}
                              alt="Preview"
                              className="object-cover w-full h-full rounded-lg"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center transition-opacity rounded-lg opacity-0 bg-black/40 group-hover:opacity-100">
                              <p className="text-sm font-semibold text-white">
                                Change Image
                              </p>
                            </div>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <UploadCloud className="w-8 h-8 mb-2 text-gray-400 group-hover:text-[#604B33]" />
                            <p className="text-xs text-gray-500 md:text-sm">
                              <span className="font-bold">
                                Click to update image
                              </span>
                            </p>
                            <p className="text-[10px] text-gray-400 mt-1">
                              Leave blank to keep existing image
                            </p>
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
                              // Create Preview URL
                              const objectUrl = URL.createObjectURL(file);
                              setPreview(objectUrl);
                            }
                          }}
                          {...rest}
                        />
                      </label>

                      {/* Show filename only if it's a NEW file */}
                      {!preview && form.watch("image") instanceof File && (
                        <p className="text-xs text-[#604B33] mt-1 italic">
                          New file selected: {form.watch("image").name}
                        </p>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Rich Text Content */}
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Blog Content</FormLabel>
                <FormControl>
                  <div className="border rounded-md overflow-hidden min-h-[300px] bg-white">
                    <TipTap
                      description={field.value || ""}
                      onChange={field.onChange}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col gap-4 pt-4 md:flex-row">
            <button
              type="submit"
              className="flex items-center justify-center w-full gap-2 transition-transform md:w-auto active:scale-95 bg-[#604B33] text-white font-semibold px-6 py-3 rounded-md cursor-pointer"
            >
              Update Blog <Edit size={18} />
            </button>
            <button
              type="submit"
              className="flex items-center justify-center w-full gap-2 px-6 text-white transition-transform duration-300 bg-red-700 border-gray-300 rounded-md cursor-pointer md:w-auto active:scale-95 sm:w-auto hover:bg-red-800"
            >
              Cancel
            </button>
          </div>
        </form>
      </Form>
    </section>
  );
}
