import { useForm } from "react-hook-form";
import * as z from "zod";
import imageCompression from "browser-image-compression";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/Buttons/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import TipTap from "@/components/ui/TextEditor/TipTap";
import type { Blog } from "@/Interfaces/blogsInterface";
import { createBlog } from "@/RTK/features/blogs/blogsSlice";
import { useAppDispatch } from "@/hooks/hooks";
import toast from "react-hot-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { options } from "@/data/blogsCategory";
// import { uploadToCloudinary } from "@/utils/uploadToCloudinary";
import { Plus, UploadCloud } from "lucide-react"; // Added X icon for clear functionality optional
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AddBlogsLoading from "@/components/ui/Loadings/AddBlogsLoading";
import CloudinaryImageUploader from "txb-cloudinary-image-uploader";

export default function AddBlogs() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    // Preview state ব্যবহার করা হয়েছে
    const [preview, setPreview] = useState<string | null>(null);
    const navigate = useNavigate();
    const currentDate = new Date().toDateString();

    const fromSchema = z.object({
        title: z.string().min(3, "Title must be at least 3 characters long"),
        category: z.string().min(1, "Please select a category"),
        date: z.string().min(3, "Date is required"),
        author: z.string().min(3, "Author must be at least 3 characters long"),
        image: z.instanceof(File).refine(
            (file) => file.size <= 3.1 * 1024 * 1024,
            "Image size must be less than 3.1MB"
        ),
        relatedVideoLink: z.string().optional(),
        content: z.string().min(10, "Content must be at least 10 characters long"),
    });

    const form = useForm<z.infer<typeof fromSchema>>({
        mode: "onChange",
        resolver: zodResolver(fromSchema),
        defaultValues: {
            date: currentDate,
            author: "অ্যাড. সামিউল ইসলাম প্রিন্স",
            content: "",
        }
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

            // ১. পরিবর্তন: শুরুতে এটি null বা undefined রাখুন, স্ট্রিং "" নয়
            let imagePayload = null;

            if (data.image) {
                const compressedImage = await imageCompression(data.image, compressedOption);

                // ২. পরিবর্তন: এখানে এখন { url, public_id } অবজেক্ট আসবে
                // (ধরে নিচ্ছি আপনি uploadToCloudinary ফাংশনটি আগের স্টেপ অনুযায়ী আপডেট করেছেন)
                // imagePayload = await uploadToCloudinary(compressedImage);
                imagePayload = await CloudinaryImageUploader(compressedImage, import.meta.env.VITE_CLOUDINARY_PRESET, import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);
            }

            const formData: Blog = {
                ...data,
                // ৩. পরিবর্তন: পুরো অবজেক্টটি পাস করছেন (ব্যাকএন্ড স্কিমা এটি এক্সপেক্ট করছে)
                image: imagePayload,
                relatedVideoLink: data.relatedVideoLink || ""
            };

            await dispatch(createBlog(formData)).unwrap();
            toast.success("Blog added successfully");
            setPreview(null);
            navigate("/dashboard/secure/admin-panel/manage-blogs");
        } catch (error) {
            toast.error("Something went wrong!");
            console.error("Submission Error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitting) return <AddBlogsLoading title="Blog Creating..." />;

    return (
        <section className="p-4 md:p-8 space-y-6 bg-white border border-black/10 rounded-lg max-w-5xl mx-auto">
            <header className="space-y-1">
                <h1 className="text-2xl md:text-3xl font-bold text-[#604B33]">Create a New Blog</h1>
                <p className="text-sm text-gray-500">Fill in the details below to publish a new post.</p>
            </header>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                    {/* Title & Category Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <FormField control={form.control} name="title" render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-semibold">Title</FormLabel>
                                <FormControl>
                                    <Input className="rounded-md py-5 md:py-6" placeholder="e.g. Legal rules for marriage..." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField control={form.control} name="category" render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-semibold">Category</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="py-5 md:py-6 rounded-md">
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
                        )} />
                    </div>

                    {/* Date & Author Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <FormField control={form.control} name="date" render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-semibold">Date</FormLabel>
                                <FormControl>
                                    <Input className="rounded-md py-5 md:py-6" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField control={form.control} name="author" render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-semibold">Author</FormLabel>
                                <FormControl>
                                    <Input className="rounded-md py-5 md:py-6" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    </div>

                    {/* Video Link & Image Upload Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start">
                        <FormField control={form.control} name="relatedVideoLink" render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-semibold">Video Link (Optional)</FormLabel>
                                <FormControl>
                                    <Input className="rounded-md py-5 md:py-6" placeholder="YouTube/Vimeo URL" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField control={form.control} name="image" render={({ field: { onChange, value, ...rest } }) => (
                            <FormItem>
                                <FormLabel className="font-semibold">Thumbnail Image</FormLabel>
                                <FormControl>
                                    <div className="relative group">
                                        <label
                                            htmlFor="image-upload"
                                            className={`flex flex-col items-center justify-center w-full h-32 md:h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-all overflow-hidden relative ${preview ? 'border-none p-0' : ''}`}
                                        >
                                            {preview ? (
                                                // Preview Image Logic
                                                <div className="w-full h-full relative group">
                                                    <img
                                                        src={preview}
                                                        alt="Preview"
                                                        className="w-full h-full object-cover rounded-lg"
                                                    />
                                                    {/* Hover Overlay to show user they can change it */}
                                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                                                        <p className="text-white text-sm font-semibold">Change Image</p>
                                                    </div>
                                                </div>
                                            ) : (
                                                // Default Upload UI
                                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                    <UploadCloud className="w-8 h-8 mb-2 text-gray-400 group-hover:text-[#604B33]" />
                                                    <p className="text-xs md:text-sm text-gray-500">
                                                        <span className="font-bold">Click to update image</span>
                                                    </p>
                                                    <p className="text-[10px] text-gray-400 mt-1">Leave blank to keep existing image</p>
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

                                        {/* Filename text below box (optional - keeping your original style logic) */}
                                        {!preview && form.watch("image") instanceof File && (
                                            <p className="text-xs text-[#604B33] mt-1 italic">
                                                New file selected: {form.watch("image").name}
                                            </p>
                                        )}
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    </div>

                    {/* Full Width Content Area */}
                    <FormField control={form.control} name="content" render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-semibold">Blog Content</FormLabel>
                            <FormControl>
                                <div className="min-h-[300px] border rounded-md overflow-hidden bg-white">
                                    <TipTap
                                        description={field.value}
                                        onChange={field.onChange}
                                    />
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />

                    <div className="pt-4">
                        <Button
                            type="submit"
                            className="w-full md:w-auto px-10 flex gap-2 items-center justify-center h-12 text-lg transition-transform active:scale-95"
                        >
                            Publish Blog <Plus size={20} />
                        </Button>
                    </div>
                </form>
            </Form>
        </section>
    );
}